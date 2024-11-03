class Cachorro {
    //nome é só um parametro, ao passo que this.nome é o atributo
    constructor(nome, raca) {
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

class Ok {
    constructor(x){
        this.x = x;
    }

    //O then recebe uma arrow function f que representa uma ação.
    //Tal f deve ter 1 parametro apenas. O then vai aplicar a acao f 
    //no atributo x do Ok. O programador deve se certificar que f retorne ações do mesmo tipo. Ou seja, um Ok.

    then(f){
        return f(this.x);
    }

    getX(){
        return this.x;
    }

}

function pure(x) {
    return new Ok(x);
}
function teste2() {
    let res = pure(5).then(x => pure(x + 1))
                     .then(y => pure(y + 2))
                     .then(z => pure(z + 1))

    alert(res.getX());
}

//[{userid:1, id:1, title:"algo", completed: false}]
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
        tbody.appendChild(trBody)
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
    c1 = new Cachorro("Bidu","SRD");
    c1.latir();
    c1.mostrarRaca();

    c2 = new Cachorro("MONSTRO","CHIHUAHUA");
    c2.latir();
    c2.mostrarRaca();
}

function eventos() {
    document.querySelector("#btn1").addEventListener("click", teste)
}

window.onload = eventos;