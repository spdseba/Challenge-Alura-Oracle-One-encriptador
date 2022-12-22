let botonEncriptar = document.querySelector("#boton-encriptar");
let botonDesencriptar = document.querySelector("#boton-desencriptar");
let resultado = document.querySelector(".resultado");
let resultadoImagen = document.querySelector(".resultado img");
let resultadoTitulo = document.querySelector(".resultado h2");
let resultadoTexto = document.querySelector(".resultado p");
let botonCopiar = document.querySelector("#boton-copiar");
let alerta = document.querySelector(".alerta");
console.log(resultado);

botonEncriptar.addEventListener('click', encriptarTexto);
botonDesencriptar.addEventListener('click', desencriptarTexto);
botonCopiar.addEventListener('click', copiarTexto);


function encriptarTexto(e){
    let texto = document.querySelector("#texto").value;
    if(texto == ""){
        mensajeTextoVacio();
    }else{
        let textoEncriptado = cifrar(texto);
        resultadoImagen.classList = "ocultar";
        resultadoTitulo.classList =  "ocultar";
        let parrafo = resultadoTexto;
        parrafo.classList = "encriptado";
        resultadoTexto.textContent = textoEncriptado;
        botonCopiar.classList =  "mostrar";
        botonDesencriptar.removeAttribute("disabled");
    }

}
function desencriptarTexto(e){
    let texto = document.querySelector("#texto").value;
    if(texto == ""){
        mensajeTextoVacio();
    }else{
        let textoDesencriptado = descifrar(texto);
        resultadoImagen.classList = "ocultar";
        resultadoTitulo.classList =  "ocultar";
        let parrafo = resultadoTexto;
        parrafo.textContent = textoDesencriptado;
    }

}
function copiarTexto(e){
    alerta.classList.add("exito");
    navigator.clipboard.writeText(resultadoTexto.textContent)
    .then(() => {
        console.log('Texto copiado en el Portapapeles');
    })
    .catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
    alerta.textContent = "Texto copiado correctamente";
    setTimeout(() => {
        alerta.classList.remove("exito");
    }, 2000);
    return resultadoTexto.textContent;
}
function mensajeTextoVacio(){
    alerta.classList.remove("exito");
    alerta.classList.add("error");
    alerta.textContent = "Por favor ingrese un texto valido";
    setTimeout(() => {
        alerta.classList.remove("error");
    }, 2000);
}
function cifrar(texto){
    /*
        Función que cifra un texto que recibe por parámetros y retorna su valor
    */
    /*
    let textoEncriptado = texto.replace(/e/gi, "esser");
    textoEncriptado = texto.replace(/i/gi, "itrs");
    textoEncriptado = texto.replace(/a/gi, "aplt");
    textoEncriptado = texto.replace(/o/gi, "orwqa");
    textoEncriptado = texto.replace(/u/gi, "uinxb");

    */
    /* 
    Reemplazo por medio del método replace una letra obtenida en la expresión regular, por un conjunto de caracteres
    */
    let textoEncriptado = texto.replace(/e/gi, "esser").replace(/i/gi, "itrs").replace(/a/gi, "aplt").replace(/o/gi, "orwqa").replace(/u/gi, "uinxb");
    return textoEncriptado;
}
function descifrar(textoEncriptado){
    let textoDesencriptado = textoEncriptado.replace(/esser/gi, "e").replace(/itrs/gi, "i").replace(/aplt/gi, "a").replace(/orwqa/gi, "o").replace(/uinxb/gi, "u");
    return textoDesencriptado;
} 