function verObjeto(obj){
    let texto = "";
     for(let indice in obj){
        texto = texto + indice + " -> " + obj[indice] + "<br>";
    }
    document.writeln(texto);
}

function teste(){
    let lis = document.querySelectorAll("li");
    for(let i=0; i < lis.length; i++){
        lis[i].style.backgroundColor = "pink"; // tem que acompanhar o indice, não pode deixar só lis.style.
                                               // Para selecionar Todos tem que ter o selectorALL e ter o FOR
    }
}

function someDiv(){
    let divs = document.querySelectorAll("div");
    for(let i=0; i < divs.length; i++){
        divs[i].style.display = "none";
    }
}

function mudar(){
    let eles = document.getElementsByClassName("classe1");
    for(let i=0; i < eles.length; i++){
        eles[i].innerHTML = "OK";
    }
}