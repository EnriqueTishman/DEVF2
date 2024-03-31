 /*const mensajeConNmbre = (callback, nombre) =>{
    callback(nombre)
 }

 const mensaje = (nombre) =>{
    console.log(`Hola ${nombre}`)
 }

 mensajeConNmbre(mensaje, 'Juan')*/



// Ejercicio 2
 /*const variable = 8
 
 //Contenido.
 console.log(variable)

 //Tipo de variable.
 console.log(typeof variable)

 if( typeof variable == 'object'){
    console.log(`Eres un objeto`)
 }

 if(typeof variable == "number"){
    console.log("eres un numero")
 } 
 */

 // Ejercicio 3
/*const variable = 7

const defineTipo = (callback, variable) => {
   callback(variable)
}

const mensaje = (contenido) => {
   console.log(`La variable es de tipo ${typeof contenido} y su contenido es ${contenido}`)
}

defineTipo(mensaje, variable)
*/

const sumar = (x,y) =>{
   return x + y
}

const restar = (x,y) => {
   return x - y
}

const multiplicar = (x,y) =>{
   return x* y
}

const division = (x,y) => {
   return x / y
}

const operacion = (callback, x, y) => {
   console.log("El resultado es"+ callback(x,y))

}

const n = 1
const m = 2

operacion(sumar, n, m)
operacion(restar, n, m)
operacion(multiplicar, n, m)
operacion(division, n, m)
