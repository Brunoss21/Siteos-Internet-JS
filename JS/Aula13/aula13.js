//map, reduce, filter só funcionam em listas
//Bimap
//É uma função que recebe duas funções F e G que serão aplicadas nas chaves e nos valores de um objeto
//OBS: obj.bimap(x => x,f) é como se fosse Vm map p/ objeto.
//OBS2: O JS enxega chaves como strings.
//OBS3: No bimap(f,g) f deverá ser injetora(1 para 1)

//f para as chaves, g para os valores.

//Desafio fazer o bifold para objetos.
function bimap(f,g){
    chaves = Object.keys(this);
    aux = {};
    chaves.forEach(k => {
        aux[f(k)] = g(this[k]);     
    });
    return aux;

}

//teste de mesa
// k = 1 aux[f(1)] = g(this[1])
//       aux[2] = 2+2 = 4

// k = 2 aux[f(2)] = g(this[2])
//       aux[3] = g(3) = 3+2 = 5

//k = 3  aux[f(3)] = g(this[3])
//       aux[4] = g(4) = 4+2 = 6

function teste(){
    Object.prototype.bimap = bimap;
    let obj = {1:2, 2:3, 3:4};
    let obj2 = obj.bimap(x => parseInt(x)+1, x => x+2);
    let obj3 = obj.bimap(x => 12, x => x+2);
    console.log(obj2);
    console.log(obj3);


}

function eventos(){
    document.querySelector("#btn1").addEventListener("click");
}

window.onload  