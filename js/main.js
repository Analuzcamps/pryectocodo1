//Animaciones con jquery para nav 

$("#animar1").click(function() {
    console.log("Click en home");
    $('html').animate({
        scrollTop: $("#sectionHome").offset().top
    }, 2000);

});

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
