const promise = new Promise((resolve, reject) =>{
    const number =1
    setTimeout(() =>{
        if(number == 1){
            resolve("Elnumero es uno")
        }else{
            reject("El numero no es uno. EROOR!")
        }
    }, 1500)
})

        console.log("comienza la ejecucion")
        
        promise
        .then((mensje) => {
            console.log(mensje)
            return 'Otro mensaje'
        }).then((mensaje2) => {
            console.log(mensaje2)
        })

        .catch((error) => {
            console.log(error)
        })

        console.log("'Termina' la ejecucion")


// Funcion simplificada 
// .then(mensaje => console.log(mensaje))

//Funcion clasica
/*.then(function(mensaje){
    console.log(mensaje)
})

El catch se puede ejecutar igual.
.catch((error)=>{
    console.log(error)
}) */

