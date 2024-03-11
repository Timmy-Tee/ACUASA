function opennav(){
    document.getElementById("nav_slide").style.display="flex";
}
function closenav(){
    document.getElementById("nav_slide").style.display="none";
}

setTimeout(function(){
    $('.main').fadeToggle();
}, 600);

