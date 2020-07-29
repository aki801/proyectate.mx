/***********************************************************************
                    Vailadcion para loginreg.html
/***********************************************************************/
function validarPass() {
    /* Función para validar que la contraseña sea segura */
    var contrasenia = document.getElementById("contrasenia").value;
    var expReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    var comparacion = expReg.test(contrasenia);
    var error1 = document.getElementById("msjPassError1");
    
    if(comparacion == false){
        error1.style.display= "block";
    }
    else if(comparacion == true){
        error1.style.display= "none";
    }  
}

function validarPass2() {
    /* Función validar que las contraseñas sean iguales */
    var contrasenia = document.getElementById("contrasenia").value;
    var contrasenia2 = document.getElementById("contrasenia2").value;
    var error2 = document.getElementById("msjPassError2");
    
    if (contrasenia != contrasenia2) {
        error2.style.display="block";
    }
    else if(contrasenia == contrasenia2){
        error2.style.display="none";
    }
}
      
function recuperacontrasenia() {
    /* Función que acciona la opción de recuperar contraseña en el miosmo formulario */
    var email = document.getElementsByName("loginemail");
    
    console.log(email[0].value);
    
    if(email[0].value) {
        var pass = document.getElementsByName("loginpass");
        pass[0].required = false;
        
        var form = document.getElementById("comenzar");    
        form.action = "loginreg.html"
        
        return true;
    } else {
        return false;
    }
}

/***********************************************************************
                    Vailadcion para actividadtexto.html
/***********************************************************************/
function cambiarColor() {
    /*Funcion que cambia el color del borde de class="atexto brojo" --> class="atexto bverde" */
    var colorBorde = document.getElementById("borde");
    var texto = document.getElementById("textoRespuesta").value;
    
    if (texto.length != 0){
        colorBorde.className = colorBorde.className.replace("brojo", "bverde");//para reemplazar el color de rojo a verde
    } else {
        colorBorde.className = colorBorde.className.replace("bverde", "brojo");
    }
}


/***********************************************************************
                    Vailadcion para actividadopcion.html  #e2e2e2
/***********************************************************************/
function escogerOpcion(){
    var radioBien = document.getElementById("radioBien");
    var radioMal = document.getElementById("radioMal");
    var recuadroBien = document.getElementById("cuadroCorrecto");
    var recuadroMal = document.getElementById("cuadroMal");
    var mnjCorrecto = document.getElementById("msn-correcto");
    var mnjIncorrecto = document.getElementById("msn-incorrecto");
    
    if(radioBien.checked){
        mnjCorrecto.style.display= "block";
        mnjIncorrecto.style.display= "none";
        recuadroBien.style.backgroundColor = "#b8e3a6";
        recuadroMal.style.backgroundColor = "#e2e2e2";
    }else {
        mnjIncorrecto.style.display= "block";
        mnjCorrecto.style.display= "none";
        recuadroMal.style.backgroundColor = "#e37474";
        recuadroBien.style.backgroundColor = "#e2e2e2";
    }
}

/***********************************************************************
                  Vailadcion para perfil.html
/***********************************************************************/