function obterNumero(){
    let num = { numeros : [1,3,7,9,-1,0,4
                          ],
                qt : 7
            };
    return num;
}

function mostrarNumeros(){
    let objNumeros = obterNumero();
    let body = document.body;
    let div = document.createElement("div");
    let divNum = document.createElement("div");
    let divQT = document.createElement("div");
    let divSUM = document.createElement("div");
    for(let i=0; i < objNumeros.numeros.length; i++){
        let divNum = document.createElement("div");
        let divQT = document.createElement("div");
        let divSUM = document.createElement("div");
        div.appendChild(body);
        divNum.appendChild(div);
        divQT.appendChild(body);
        divSUM.appendChild(body);
    }



}

<button onclick="mostrarNumeros()">
            Gere
</button>
