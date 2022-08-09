
//importamos los elemntos html para intercatura con ellos en Javascript
const mensajeEntrante = document.querySelector('.textoArea');
const botonEncriptar = document.querySelector('.btnEncriptar');
const botonDesencriptar = document.querySelector('.btnDesencriptar');
const botonCopiar = document.querySelector('.btnCopiar');
const labelEncriptado = document.querySelector('.texto-encriptar');
const labelDesencriptado = document.querySelector('.texto-desencriptar');
const labelTitulo = document.querySelector('.txt-ladoD');


//funcion para encriptar
function encriptar (texto){

    //var donde se guarda el mensaje encriptado
    var texto = mensajeEntrante.value;
    var mensajeEn;

    //validamos que sea un string
    if(typeof texto === "number"){
        alert("Por favor solo ingresa texto");
        mensajeEntrante.value = "";
        
    }else {
        //validamos que ingrese datos
        if(texto.length > 0){

            //recorremos el texto ingresado
            for(var i=0; i<texto.length; i++) {

                //validamos si hay alguna vocal en el texto
                if(texto[i] === "a" || texto[i] === "e"  || texto[i] === "i" || texto[i] === "o" ||
                texto[i] === "u"){

                    //remplazamos las vocales que hayan y guardamos en la var mensajeEn
                    //toca darle un orden especifico para que funcione
                    mensajeEn = texto.replaceAll("e", "enter").replaceAll("i", "imes")
                    .replaceAll("o","ober").replaceAll("a","ai").replaceAll("u", "utaf");

                    //remplazamos la etiqueta por el texto encriptado y remplazmos el titulo
                    labelTitulo.innerText = "El Texto Se encripto con Exito";
                    labelTitulo.style.color = "red";
                    labelEncriptado.innerText = mensajeEn;
                    mensajeEntrante.value = "";
                    
                }
            }

            //imprimimos mensajeEn
            console.log(mensajeEn);
        }else{
            alert("no has ingresado texto")
        }
    }
    
    texto.replaceAll(mensajeEn,"ok");
}


//funcion desencriptar
function desencriptar (text){

     //creamos var donde guardamos menjase a desncriptar
    var text = labelEncriptado.textContent;
    var mensajeDes;

     //como ya validamos que era un string, solo inetrcambiamos las palabras por las vocales
    
    mensajeDes = text.replaceAll("enter", "e").replaceAll("imes","i")
     .replaceAll("ober","o").replaceAll("ai", "a").replaceAll("utaf","u");
    labelDesencriptado.innerText = mensajeDes;
    mensajeEntrante.value = "";

     //imprimos esa varible
    console.log(mensajeDes);
}

//funcion boton copiar
function copiar(){
    labelEncriptado.select();
    document.execCommand('copy');
    labelTitulo.innerHTML = "Se copio con EXITO";
    labelTitulo.style.color = 'darkgreen';
}

//llamdo de funciones con los botones
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

