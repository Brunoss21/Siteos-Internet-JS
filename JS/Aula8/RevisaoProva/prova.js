function ex2(n){
    let seq = [2,2,2];
    for(let i = 3; i <= n; i++){
        seq.push(seq[i-1] + seq[i-2] + seq[i-3])

    }
    return seq[n];
}

function ex1(){
    let lis = document.querySelectorAll("li");
    for(let i=0; i < lis.length; i++){
        let cls = i % 2 == 0 ? "Aqui" : "Clique";
        lis[i].setAttribute("class",cls);
    }
} 

function ex3(pals){
    let ul = document.createElement("ul");
    for(let i=0; i < pals.length; i++){
        let li = document.createElement("li");
        li.innerHTML = pals[i];
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

function ex4(){
    let alvo = document.querySelectorAll(".alvo");
    for(let i=0; i < alvo.length; i++){
        alvo[i].innerHTML = "mudado";
    }
}