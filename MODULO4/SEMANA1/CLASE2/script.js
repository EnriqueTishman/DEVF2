const primera = (callback1, callback2) => {
    setTimeout (() =>   {
      //callback<- saludar / despedirse / sumar 
        console.log("soy la primera funcion 1")
        callback1(callback2) //<- despedirse() o saludar() o sumar()
    }, 1000)
    }



const segunda = (callback) =>{
    setTimeout(() => {

        console.log("soy la segunda funcion  2")
        callback(()=>{})
    }, 2000)
}

const tercera = (callback) => {
    setTimeout(() => {
        console.log("Soy la tercera funcion 3")
        callback(function(){})
    }, 3000)
}

// Imprimimos la definicion de la funcion
// console.log(despedirse)

primera(segunda, tercera)
// Asincronismos: sucesi que no tienen lugar en total correspondencia temporal con otros sucesos.

// Sincronismo: Las tareas se ejecutan de forma secuencial, se debe esperar a que se completen pa continuar con la siguiente tarea. 

// Paralelistmo: Multiples tareas de forma simultanea.

// Concurrencia: Se hace una tarea despues de la otra

// Bloqueante: Una tarea que no devuelve el control jasta que se ha completado.

//No Bloqueante: Una tarea que devuelve inmediatamente cin independencia del resultado.
