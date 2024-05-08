let rfc=document.getElementById("rfc");
let button= document.getElementById("button");

function verficarFisicas(){
    let valido = true;
    if(rfc.value.length !== 13){
        console.log("RFC invalido ingrese uno valido")
        valido=false;
    }
    let regex1= /^[A-Z]{4}/;// tienen que ser letras las 4 primeras
    if(!regex1.test(rfc.value.substring(0,4))){
        console.log("los primeros cuatro caracteres deben ser letras Mayusculas");
       valido = false; 
    }
    let regex2=/^[0-9]{6}$/;//los 6 caracteres tienen que ser numeros
    if(!regex2.test(rfc.value.substring(4,10))){
        console.log(" los segundos 6 caracterees deben ser numeros del 0-9");
        valido = false;
    }
    let regex3=  /^[a-zA-Z0-9]{3}$/;//acepta 3 caracteres no importa si sean numeros o letras.
    if(!regex3.test(rfc.value.substring(10,13))){
        valido = false;
    }

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "RFC de una persona fisica",
        
    });
    
};

function verficarMorales(){
    let valido = true;
    if(rfc.value.length !== 12){
        console.log("RFC inválido, ingrese uno válido");
        valido = false;
    }
    let regex4= /^[A-Z]{3}/;// tienen que ser letras las 3 primeras
    if(!regex4.test(rfc.value.substring(0,3))){
        console.log("los primeros tres caracteres deben ser letras Mayusculas");
       valido = false; 
    }

    let regex2=/^[0-9]{6}$/;//los 6 caracteres tienen que ser numeros
    if(!regex2.test(rfc.value.substring(3,9))){
        console.log(" los segundos 6 caracteres deben ser numeros del 0-9");
        valido = false;
    }
    let regex3=  /^[a-zA-Z0-9]{3}$/;//acepta 3 caracteres no importa si sean numeros o letras.
    if(!regex3.test(rfc.value.substring(9,11))){
        valido = false;
    }
    /*console.log("RFC Moral valido");*/
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "RFC de una persona Moral",
        
    });
}

/***
 * verifica a las personas morales y personas fisicas en base a la longitud que tiene la cadena de caracteres en otro caso.
 */


button.addEventListener("click", function (event) {
    event.preventDefault();
    let longitud = rfc.value.length;

    if(longitud ==13){
        verficarFisicas();
        console.log("13");
        
    }else if (longitud==12){
        verficarMorales();
        console.log("12")

    }else{
        Swal.fire({
            icon: "error",
            title: "RFC Incorrecto",
            text: "Has ingresado un RFC incorrecto, intentalo nuevamente, recuerda que no debe tener espacios, y deben ser entre 12 y 13 caracteres respectivamente",
        });
    }
    rfc.value="";
    
});

/**/