const url = "https://jsonplaceholder.typicode.com/users"

const getUsers = async () => {

    try {
        
        const response = await fetch(url)

        const data = await response.json()

        const rows = data.map(user =>
            `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            `
        ).join("")

        document.getElementById("data").innerHTML = rows
    } catch (error) {
        console.error("Error al obtener usuarios", error.message)
    }

}

getUsers()