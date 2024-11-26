//f para as chaves, g para os valores.
function bimap(f,g){
    chaves = Object.keys(this);
    aux = {}; 
    chaves.forEach(k => {
        aux[f(k)] = g(this[k]);         
    });
    return aux;
}

function teste(){
    Object.prototype.bimap = bimap;
    let obj = {1:2, 2:3, 3:4};
    let obj2 = obj.bimap(x => parseInt(x)+1, x => x+2);
    let obj3 = obj.bimap(x => 12, x => x+2);
    console.log(obj2);
    console.log(obj3);
}

function eventos(){
    document.querySelector("#btn1").addEventListener("click",teste)
}

window.onload = eventos;