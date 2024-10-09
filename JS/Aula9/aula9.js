// Programação Funcional
//Toda funçao reclusiva tem que ter uma condição de parada = 0 

// Metodo 1
//function mapf(lista, f){
   // if(lista.length == 0){
       // return [];
    //}
    //[cabeca, ...rabo] = lista;
    //return [f(cabeca)].concat(mapf(rabo, f));
//}

// Metodo 2
function mapf(f){
    if(this.length == 0){
        return [];
    }
    [cabeca, ...rabo] = this;
    return [f(cabeca)].concat(rabo.mapf(f));
    
}



function mapi(lista, f){
    for(let i=0; i < lista.length; i++){
        lista[i] = f(lista[i]);
    }
    return lista;
}


function teste(){

    let div = document.createElement("div");
    div.innerHTML = mapf([1,2,3,4], x => 3*x);
    // Sera que posso chamar mpf igual ao mpa
    //[1,2,3,4]

    // Atribuiçao de funcao e nao atribuiçaõ
    Array.prototype.mapf = mapf;
    // let l = [1,2,3,4].mapf(x => 3*x);
    // div.innerHTML = l;

    div.innerHTML = [1,2,3,4].mapf(x => 3*x);

    document.body.appendChild(div);

}


// ForEach
function teste2(){
    let lis = document.querySelectorAll("li");
    lis.forEach(li => {
        li.style.backgroundColor = "pink"
        li.innerHTML = "Visitado"
    })
}

// Filter
