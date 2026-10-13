async function enviarGif() {
    try {
        const input = document.getElementById("mensaje-gif");
        const chat = document.getElementById("chat-gif");

        const texto = input.value.trim();

        if (!texto) return;

        chat.innerHTML = `<p><b>Tú:</b> ${texto}</p>`;
        input.value = "";

        const API_KEY = "6EWWQWpWA6MsO4FXWiEcBDtTkRhvmEuk";
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(texto)}&limit=6&rating=g&lang=es`;

        const res = await fetch(url);
        const data = await res.json();

        if (!data.data || data.data.length === 0) {
            chat.innerHTML += `<p><b>GIF:</b> No se encontraron resultados para "${texto}"</p>`;
            return;
        }

        let html = `<p><b>GIFs:</b></p><div class="gif-container">`;

        data.data.forEach(gif => {
            html += `<img src="${gif.images.fixed_height.url}" alt="${texto}" class="gif-item">`;
        });

        html += `</div>`;

        chat.innerHTML += html;

        chat.scrollTop = chat.scrollHeight;

    } catch (error) {
        console.error("Error:", error);
        const chat = document.getElementById("chat-gif");
        chat.innerHTML += `<p class="text-danger">Error al buscar el GIF: ${error.message}</p>`;
    }
}