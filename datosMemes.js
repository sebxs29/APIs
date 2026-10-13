const obtenerMemes = async() =>{


    try{        
        
        const contenedor=document.getElementById('list-memes') 
        const plantilla=document.getElementById('meme')

        const req = await fetch("https://api.imgflip.com/get_memes")
        const res = await req.json()

        console. log(res.data.memes[0].url)
        
        
        res.data.memes.slice(0,8).forEach(meme => {
            const tarjeta=plantilla.cloneNode(true)
            tarjeta.querySelector('img').src=meme.url
            contenedor.appendChild(tarjeta)
        })
        plantilla.remove()
    }catch(error){
        console.error("Error:",error)
    }
}

obtenerMemes()

