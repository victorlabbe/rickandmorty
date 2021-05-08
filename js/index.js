const cargaPersonaje = async function(){
    //llamar a la  API
   let res = await axios.get("https://rickandmortyapi.com/api/character");
   let personajes = res.data.results;
   personajes.forEach(p=>{
       console.log(p.name);
   })
   
};


document.addEventListener("DOMContentLoaded",()=>{
    //todo lo que ponga a qui se va a ejecutar cuando se carge la pagina
    cargaPersonaje();
});