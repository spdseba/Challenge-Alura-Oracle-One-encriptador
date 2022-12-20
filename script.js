let botonEncriptar = document.querySelector("#boton-encriptar");
let botonDesencriptar = document.querySelector("#boton-desencriptar");
let resultado = document.querySelector(".resultado");

botonEncriptar.addEventListener('click', encriptarTexto);
botonDesencriptar.addEventListener('click', desencriptarTexto);


function encriptarTexto(e){
    let texto = document.querySelector("#texto").value;
    let textoEncriptado = cifrar(texto);
    resultado.innerHTML = "";
    let parrafo = document.createElement("p");
    parrafo.textContent = textoEncriptado;
    resultado.appendChild(parrafo);
}
function desencriptarTexto(e){
    let texto = document.querySelector("#texto").value;
    let textoDesencriptado = descifrar(texto);
    resultado.innerHTML = "";
    let parrafo = document.createElement("p");
    parrafo.textContent = textoDesencriptado;
    resultado.appendChild(parrafo);
}


function cifrar(texto){
    /*
        Funcion que cifra un texto que recibe por parametros y retorna su valor
    */
    /*
    let textoEncriptado = texto.replace(/e/gi, "esser");
    textoEncriptado = texto.replace(/i/gi, "itrs");
    textoEncriptado = texto.replace(/a/gi, "aplt");
    textoEncriptado = texto.replace(/o/gi, "orwqa");
    textoEncriptado = texto.replace(/u/gi, "uinxb");

    */
    /* 
    Reemplazo por medio del metodo replace una letra obtenida en la expresion regular por un conjunto de caracteres
    */
    let textoEncriptado = texto.replace(/e/gi, "esser").replace(/i/gi, "itrs").replace(/a/gi, "aplt").replace(/o/gi, "orwqa").replace(/u/gi, "uinxb");
    return textoEncriptado;
}
function descifrar(textoEncriptado){
    let textoDesencriptado = textoEncriptado.replace(/esser/gi, "e").replace(/itrs/gi, "i").replace(/aplt/gi, "a").replace(/orwqa/gi, "o").replace(/uinxb/gi, "u");
    return textoDesencriptado;
} 