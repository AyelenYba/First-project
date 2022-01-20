
function validation(){
    var name = document.getElementById("name").value; //con value obtengo el valor de lo que se ingrese
    var apellido = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("number").value;
    
    if (name == null || name.length == 0 || /^\s+$/.test(name)) {
        document.getElementById("msgname").innerHTML = "Ingresa un nombre válido";
        elementname = document.getElementById("name"); //guardo lo ingresado en una variable
        elementname.focus(); 
        return false;
    }
    
    if (apellido = null || apellido.length == 0 || /^\s+$/.test(apellido)){
        document.getElementById("msglastname").innerHTML = "Ingresa un apellido válido";
        elementlastname = document.getElementById("lastname");
        elementlastname.focus();
        return false;
    }

    if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(email))){
        document.getElementById("msgemail").innerHTML = "El correo ingresado no es correcto";
        elementemail = document.getElementById("email");
        elementemail.focus();
        return false;
    }

    if (isNaN(tel)){
        document.getElementById("msgtel").innerHTML =  "El número ingresado no es válido";
        elementtel = document.getElementById("tel"); 
        elementtel.focus();
        return false;
    }

    return alert("Has completado el formulario exitosamente.");
}