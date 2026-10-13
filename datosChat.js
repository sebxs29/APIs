
const urlGroq = "/.netlify/functions/chat";

const sendIA = async () => {
    const input = document.getElementById("mensaje");
    const chat = document.getElementById("chat");

    const texto = input.value.trim();

    if (!texto || input.disabled) return;

    const agregarMensaje = (autor, contenido) => {
        const mensaje = document.createElement("div");
        const etiqueta = document.createElement("strong");
        const contenidoMensaje = document.createElement("div");

        mensaje.className = `chat-message ${
            autor === "Tú" ? "user-message" : "ai-message"
        }`;

        etiqueta.className = "message-author";
        etiqueta.textContent = autor;

        contenidoMensaje.className = "message-content";
        contenidoMensaje.textContent = contenido;

        mensaje.append(etiqueta, contenidoMensaje);
        chat.appendChild(mensaje);
        chat.scrollTop = chat.scrollHeight;

        return mensaje;
    };

    const mostrarMarkdown = (elemento, contenido) => {
        if (
            typeof marked === "undefined" ||
            typeof DOMPurify === "undefined"
        ) {
            // Mostrar la respuesta como texto si falla el formato.
            elemento.textContent = contenido;
            console.warn(
                "Marked o DOMPurify no están disponibles. Se muestra texto plano."
            );
            return;
        }

        elemento.innerHTML = DOMPurify.sanitize(
            marked.parse(contenido)
        );

        elemento.querySelectorAll("table").forEach((tabla) => {
            const contenedor = document.createElement("div");
            contenedor.className = "table-wrapper";

            tabla.parentNode.insertBefore(contenedor, tabla);
            contenedor.appendChild(tabla);
        });
    };

    agregarMensaje("Tú", texto);

    input.value = "";
    input.disabled = true;

    const cargando = agregarMensaje("IA", "Pensando...");
    const contenidoRespuesta = cargando.querySelector(".message-content");

    try {
        const response = await fetch(urlGroq, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: "system",
                        content:
                            "Eres un asistente amigable. Responde en español y explica de forma sencilla."
                    },
                    {
                        role: "user",
                        content: texto
                    }
                ]
            })
        });

        const data = await response.json();

        console.log("Estado HTTP:", response.status);
        console.log("Es correcto:", response.ok);

        if (!response.ok) {
            throw new Error(
                data.error?.message ||
                `Error HTTP: ${response.status}`
            );
        }

        const respuesta = data.choices?.[0]?.message?.content;

        if (typeof respuesta !== "string") {
            throw new Error("La API no devolvió una respuesta válida");
        }

        mostrarMarkdown(contenidoRespuesta, respuesta);

    } catch (error) {
        contenidoRespuesta.textContent =
            `No se pudo obtener la respuesta: ${error.message}`;

        cargando.classList.add("error-message");

        console.error("Error al consultar la IA:", error);

    } finally {
        input.disabled = false;
        input.focus();
    }
};
