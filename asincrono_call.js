//request   
const request=require('request') 
//  definir la url de la api 
const url='https://datausa.io/api/data?drilldowns=Nation&measures=Nation'

//utilizando request
let r = request (url,{json:true},(err,res,body) =>{
    let arreglo=data.data
    arreglo.forEach((personaje)=>{
        console.log(personaje.Nation) 
        console.log("--------")
    })
    r
})