const  axios =require('axios')
const url ='https://datausa.io/api/data?drilldowns=Nation&measures=Population'

const response =axios.get(url)
const personajes = async()=>{
    const response =await axios.get(url)
    let arreglo =response.data.data
    arreglo.forEach((personaje)=>{
            console.log(personaje.Year)
            console.log("-----")
            console.log(personaje.Population)
           
    })


}
personajes()