
export default async (request) => {
  if (request.method !== "POST") {
    return Response.json(
      { error: { message: "Método no permitido" } },
      { status: 405 }
    );
  }

  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages)) {
      return Response.json(
        { error: { message: "Mensajes inválidos" } },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      console.error("Falta la variable GROQ_API_KEY");
      return Response.json(
        { error: { message: "La IA no está configurada" } },
        { status: 500 }
      );
    }

    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          messages
        })
      }
    );

    const data = await groqResponse.json();

    return Response.json(data, {
      status: groqResponse.status
    });
  } catch (error) {
    console.error("Error en la función de chat:", error.message);

    return Response.json(
      { error: { message: "No se pudo consultar la IA" } },
      { status: 500 }
    );
  }
};
