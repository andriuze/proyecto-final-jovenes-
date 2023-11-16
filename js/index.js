let botonSubmit=document.getElementById("registro")
let botonLogin=document.getElementById("iniciar")
var usernameElement=null;
var logOutElement=null;

usernameElement=document.getElementById("username");
logOutElement=document.getElementById("cerrar_sesion");


if(localStorage.getItem("userExists")==="true" && usernameElement!==null){
    usernameElement.removeAttribute("hidden");
    logOutElement.removeAttribute("hidden");
    usernameElement.innerHTML=localStorage.getItem("activeUsername");
}

function eventListeners(){

    try {
        botonSubmit.addEventListener("click",function(event){
            localStorage.setItem("nombres"+document.getElementById("nombres").value,document.getElementById("nombres").value)
            localStorage.setItem("apellidos"+document.getElementById("apellidos").value,document.getElementById("apellidos").value)
            localStorage.setItem("correo"+document.getElementById("correo").value,document.getElementById("correo").value)
            localStorage.setItem("contrasena"+document.getElementById("contrasena").value,document.getElementById("contrasena").value)
            localStorage.setItem("genero"+document.getElementById("genero").value,document.getElementById("genero").value)
            event.preventDefault();
            window.location.href = "iniciar.html";
        })
    } catch (error) {
        
    }
   

    try {
        botonLogin.addEventListener("click",function(event){
            let correo=document.getElementById("correo").value;
            let contrasena=document.getElementById("contrasena").value;
            event.preventDefault();
            if(isValueInLocalStorage(correo) && isValueInLocalStorage(contrasena)){ 
                window.location.href = "index.html";      
                console.log("exitoso");
                localStorage.setItem("userExists","true");
                localStorage.setItem("activeUsername",correo);
                global=!global;
            }
            else{
                alert("logueo fallido, registrate")
                localStorage.setItem("userExists","false");
            }
            }
            )
    } catch (error) {
        
    }

    try {
       logOutElement.addEventListener("click",function(){
        usernameElement=document.getElementById("username");
        logOutElement=document.getElementById("cerrar_sesion");

        usernameElement.setAttribute("hidden",true);
        logOutElement.setAttribute("hidden",true);

       })
    } catch (error) {
        
    }



}


function redirectToAnotherPage() {
    // Cambiar la URL a la página que deseas redirigir
    window.location.href = "registrarme.html";
}


function isValueInLocalStorage(value) {

    for (let i = 0; i < localStorage.length; i++) {
        const storedValue = localStorage.getItem(localStorage.key(i));

        if (storedValue === value) {
            return true;
        }
    }

    return false;
}




eventListeners();

