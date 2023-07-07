
let bgcolor_red= document.querySelector("#red");
let bgcolor_blue= document.querySelector("#blue");
let bgcolor_yellow= document.querySelector("#yellow");
let bgcolor_green= document.querySelector("#green");
let bgcolor_pink= document.querySelector("#pink");
let bgcolor_orange= document.querySelector("#orange");
let bgcolor_reset= document.querySelector("#reset");

let my_body = document.querySelector("#my_body");

bgcolor_red.addEventListener('click', function(){
    my_body.style.background = "#D21312";
});

bgcolor_blue.addEventListener('click', function(){
    my_body.style.background = "#068FFF";
});

bgcolor_yellow.addEventListener('click', function(){
    my_body.style.background = "#FBD85D";
});

bgcolor_green.addEventListener('click', function(){
    my_body.style.background = "#C3EDC0";
});

bgcolor_pink.addEventListener('click', function(){
    my_body.style.background = "#FF8989";
});

bgcolor_orange.addEventListener('click', function(){
    my_body.style.background = "#F29727";
});

bgcolor_reset.addEventListener('click', function(){
    my_body.style.background = "white";
});