const Hablar = (callback) => {
    console.log('Bienvenido')
    callback() // ejecuta despedirse 
}

const saludar =() =>{
    console.log('Hola, como esatas?')
}

const despedirse = () =>{
    console.log('Adios, cuidate.')
}

const sumar = () => {
    console.log(5+5)
}

Hablar(sumar)

 // Imprime la definicion de la funcion 
//console.log(despedirse())


/*document.addEventListener("click", function(){
    alert(1)
})*/
