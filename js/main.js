

/* Consumiendo API REST

const APIURL = 'https://randomuser.me/api/'

const xhr= new XMLHttpRequest()

function onRequestHandler(){

if (this.readyState == 4 && this.status ==200){

    const data= JSON.parse(this.response);
    const HTMLResponse= document.querySelector("#sectionNosotros");
    const tpl = data.map((user) => <li>$[user.name]$[user.picture] </li>);
HTMLResponse.innerHTML= <ul> ${tpl}</ul>;

}
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", APIURL);
xhr.send();

*/

/* consumienDO API */

function obtenerDatos() {
    const URLGET = 'https://randomuser.me/api/' ;
    $.get (URLGET).done(function(resultado, estado) {
        console.log("el estado que retorna al api es: " + estado);
        if (estado== "success") {
            let usuarios= resultado.users;
            usuarios.forEach(user => {
                $("#usuarios").append("<tr><td>" + user.name + "</td> <td><img src" + user.picture +"></td></tr>");
            });
        }
    });
}

//Animaciones con jquery para nav 

$("#animar2").click(function() {
    console.log("Click en nosotros");
    $('html').animate({
        scrollTop: $("#sectionNosotros").offset().top
    }, 2000);

});

$("#animar3").click(function() {
    console.log("Click en hoteles");
    $('html').animate({
        scrollTop: $("#sectionHoteles").offset().top
    }, 2000);

});

$("#animar4").click(function() {
    console.log("Click en paquetes");
    $('html').animate({
        scrollTop: $("#sectionPaquetes").offset().top
    }, 2000);

});


$("#animar6").click(function() {
    console.log("Click en contacto");
    $('html').animate({
        scrollTop: $("#sectionContacto").offset().top
    }, 2000);

});
