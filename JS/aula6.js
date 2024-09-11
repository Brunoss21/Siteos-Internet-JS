function obterObjeto(){
    let obj = { disciplinas : [{nome: "Programacao p/ Sitios", ch :80, sigla: "ISW006", curso: "SI"}
                              ,{nome: "Banco de dados 1", ch :80, sigla: "IDS001", curso: "SI"}
                              ,{nome: "Desenvolvimento p/ Servidores 1", ch :80, sigla: "IWS001", curso: "SI"}
                              ,{nome: "Desenvolvimento p/ Servidores 2", ch :80, sigla: "IWS002", curso: "SI"}
                              ,{nome: "Topicos Especiais 1", ch :80, sigla: "TESI001", curso: "SI"}
                              ], 
                nome : "EU"            
             };
    return obj;
}

function montarTabela(){
    let objDisciplina = obterObjeto();
    let table = document.createElement("table");
    let tHead = document.createElement("thead");
    let tBody = document.createElement("tbody");
    let trHead = document.createElement("tr");
    let thNome = document.createElement("th");
    let thCh = document.createElement("th");
    let thSigla = document.createElement("th");
    let thCurso = document.createElement("th");
    thNome.innerHTML = "Nome";
    thCh.innerHTML = "CH";
    thSigla.innerHTML = "Sigla";
    thCurso.innerHTML = "Curso";
    for(let i=0; i < objDisciplina.disciplinas.length; i++){
        let trdisc = document.createElement("tr");
        let tdNome = document.createElement("td");
        let tdCH = document.createElement("td");
        let tdSigla = document.createElement("td");
        let tdCurso = document.createElement("td");
        tdNome.innerHTML = objDisciplina.disciplinas[i].nome;
        tdCH.innerHTML = objDisciplina.disciplinas[i].ch;
        tdSigla.innerHTML = objDisciplina.disciplinas[i].sigla;
        tdCurso.innerHTML = objDisciplina.disciplinas[i].curso;
        trdisc.appendChild(tdNome);
        trdisc.appendChild(tdCH);
        trdisc.appendChild(tdSigla);
        trdisc.appendChild(tdCurso);
        tBody.appendChild(trdisc);    
    }
    trHead.appendChild(thNome);
    trHead.appendChild(thCh);
    trHead.appendChild(thSigla);
    trHead.appendChild(thCurso);
    tHead.appendChild(trHead);
    table.appendChild(tHead);
    table.appendChild(tBody);
    document.body.appendChild(table);

}


function cadastrar(){
    let ul = document.querySelector("#resposta");
    // vamos criar uma li em memória e inserir na estrutura da página
    // como filho da ul buscada na linha anterior
    let li = document.createElement("li");
    li.innerHTML = produto;
    ul.appendChild(li);

}{

}