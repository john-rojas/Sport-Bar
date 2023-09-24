let myEmbed = document.getElementById("embed");
let body = document.getElementsByTagName("body")[0];
let nav = document.getElementsByTagName("nav")[0];
let menu = 1

function picar() {
    myEmbed.src = "../assets/pdfs/Despli.pdf"
}

function clasicos(){
    myEmbed.src = "../assets/pdfs/Menu.pdf"
}

function sport(){
    console.log("sport");
}

function noalcohol(){
    console.log("no alcohol");
}

function cervezas(){
    console.log("cervezas");
}

function cambiarhamburg(){
    nav = document.getElementsByTagName("nav")[0];
    if (menu == 1){
        nav.style.width = "0%"
        menu = 0
    }
    else{
        nav.style.width = "100%"
        menu = 1
    }
}