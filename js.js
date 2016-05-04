// JavaScript File

//MAIN class = classm


//recursiv function

$(document).ready(function($) {
    $('#idnet').fadeOut("fast");
    $('#idplus').fadeOut("fast");
    $('#idsql').fadeOut("fast");
    $('#idhtmlcssjs').fadeOut("fast");
})

var a = true;
var b = true;
var c = true;
var d = true;

$('#btn-net').click(function() {
    if (a) {
        $('#idnet').fadeIn("slow");
        a = false;
    }
    else {
        $('#idnet').fadeOut("slow");
        a = true;
    }

});
$('#btn-plus').click(function() {
    if (b) {
        $('#idplus').fadeIn("slow");
        b = false;
    }
    else {
        $('#idplus').fadeOut("slow");
        b = true;
    }

});


$('#btn-sql').click(function() {
    if (c) {
        $('#idsql').fadeIn("slow");
        c = false;
    }
    else {
        $('#idsql').fadeOut("slow");
        c = true;
    }

});


$('#btn-html').click(function() {
    if (d) {
        $('#idhtmlcssjs').fadeIn("slow");
        d = false;
    }
    else {
        $('#idhtmlcssjs').fadeOut("slow");
        d = true;
    }

});