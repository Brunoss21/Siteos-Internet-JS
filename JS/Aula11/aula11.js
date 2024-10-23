class cachorro{
    // nome eh so um parametro, ao passo que this.nome eh o atributo.
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }

    latir(){
        alert(this.nome + ": AU AU!");
    }

    mostrarRaca(){
        alert(this.raca);
    }
}

s
class Ok{

    constructor(x){
        this.x = x;
    }

    //O then recebe um arrow function f que representa uma acao.
    //Tal f deve ter um parametro apenas. O then vai aplicar a acao f
    //no atributo x do OK. O programador deve ser certificar que f retorne
    // acoes do mesmo tipo, ou seja, um Ok.
    then(f){
        return f(this.x);
    }

    getX(){
        return this.x;
    }

}

//Deixar na classe coisas que apenas usem o this.
function pure(x){
    return new Ok(x);
}




function teste2(){
    let res = pure(5).then(x => pure(x+1))
                     .then(y => pure(y+2))
                     .then(z => pure(z+3));

    alert(res.getX());

}

//[{userid:1, id:1, title:"algo", completed:false}]
function montarPagina(obj){
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let trHead = document.createElement("tr");
    let thTitulo = document.createElement("th");
    thTitulo.innerHTML = "Titulo";
    let thComp = document.createElement("th");
    thComp.innerHTML = "Completed";
    trHead.appendChild(thTitulo);
    trHead.appendChild(thComp);
    thead.appendChild(trHead);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    obj.forEach(todo => {
        let trBody = document.createElement("tr");
        let tdTitulo = document.createElement("td");
        let tdComp = document.createElement("td");
        tdTitulo.innerHTML = todo.title;
        tdComp.innerHTML = todo.completed;
        trBody.appendChild(tdTitulo);
        trBody.appendChild(tdComp);
        tbody.appendChild(trBody);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
}

function teste3(){
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(resp => resp.json())
        .then(obj => montarPagina(obj))
}



function teste(){
    c1 = new cachorro("Bidu","SRD");
    c1.latir();
    c1.mostrarRaca();

    c2 = new cachorro("MONSTRO","CHIHUAHUA");
    c2.mostrarRaca();
    c2.latir();

}

function eventos(){
    document.querySelector("#btn1").addEventListener("click", teste3)
}

window.onload = eventos;