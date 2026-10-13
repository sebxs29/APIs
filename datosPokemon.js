const btnSeleccionar = async () => {
    try {
        const pokemon = Math.floor(Math.random() * 151) + 1;

        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const response = await request.json();

        console.log(response);

        console.warn(response.name);
        console.warn(response.sprites.front_default);

        const lista = document.getElementById("listarpokemon");
        const item = lista.querySelector("#pok-1");

        item.querySelector("img").src = response.sprites.front_default;
        item.querySelector("p").textContent = response.name;

        const habilidades = response.abilities
            .map(hab => `<li>${hab.ability.name}</li>`)
            .join("");

        item.querySelector("ol").innerHTML = habilidades;

    } catch (error) {
        console.error("Error:", error);
    }
};

btnSeleccionar();