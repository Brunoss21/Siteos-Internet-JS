// Programação funcional (revisitado)
/* - REDUCE (Fold) : A partir de uma lista, uma função f que poussi dois parâmetros, e um valor inicial
opcional, conseguimos o obter um valor final A
A partir de sucessivas aplicações P com os acumuladores e com cada elemento da Lista

[e1,e2,...,en], f , e0

[e1,e2,...,en].reduce(f,e0) = f(f(f(f(e0,e1),e3),..,en)

[2,3,4,5], (x,y)=> x*y, 1

[2,3,4,5].reduce((x,y)=> x*y,1)= f(f(f(f1,2),3),4),5)
                               =    f(f((2,3),4),5)
                               =    f(f(6,4),5)
                               =    f(24,5)
                               =    120

                                Arrow Function
Soma = [1,3,5,7,9,11,13,15].reduce((x,y) => x+y) = 64


Equivalente a 
let acc = 1
let ls = [2,3,4,5]
for (let i=0, i<ls.length;i++)
        acc = acc x ls[i];
alet(acc)

Listas
let soma = ls => ls.reduce((x,y) => x+y)
soma([1,3,4,5,7,9,11,13,15])
soma(["EU","AMO","O","JAVA"])

let t = ls => ls.reduce.((x,y) => x+1)

Tamanhho lista 
let tamanho = ls => ls.reduce((acumulator) => acumulator + 1,0)
tamanho([1,3,4,5,7,9,11,13,15]) = 9 

Teste de mesa
tamanho([1,2,3,4]) = f(f(f(f(0,1),2),3),4)
                   =       f(1,2),3),4)
                   =        f(f(f(1,2),3),4)
                            f(f(2,3),4)
                            f(3,4)
                             4



*/

//reduce = fold
function fold(f,acc){
    for(let i=0; i < this.length; i++){
        //Se f = x (x,y) => x+y
        //acc = acc + this[i]
        acc = f(acc,this[i])
    }
    return acc;

}

//fold destroe a lista dobrando
//unfold construoe a lista


//f deve retornar ou um booleano falso, ou uma lista
//de dois elementos
function unfold(f,seed,ls){
    if(!f(seed)){
        return [];
    }
    // a eha saida da lista, b eh o controle para parar a lista
    let [a,b] = f(seed);
    return [a].concat(unfold(f,b));

}

function teste(){
    //Array.prototype.fold = fold;
    //alert([1,2,3,4].fold((x,y) => x+y, 0));
    let f = n => {
        if (n >= 10){
            return false;
        }else{
            return[n, n+1];
        }
    } 
    //Lista com 10 numeros pares
    let g = n => (n >= 10)? false :[2*n, n+1];

    //tabuada do 5
    let h = n => (n >= 11)? false: [5*n, n+1];

    console.log(unfold(f,0));
    let soma = unfold(f,0).reduce((x,y) => x+y)
    console.log(soma);
    console.log(unfold(g,2));
    console.log(unfold(h,0));
}

/* Teste de MESA Lista
reduce: lista -> valor
unfold: valor -> lista
f = n => (n>=3) ? false: [n,m+1]

unfold(f,0) = [0].concat(unfold(f,1)) 
                    f(o)=[0,1]
unfold(f,1) [!].concat(unfold(f,2)) =       f(1)= [1,2]
unfold(f,2) [2].concat(unfold(f,3)) = [2].concat(3) f(2)= [2,3]
unfold(f,3) = 3                        = [2,3]       f(3) = false  

Teste de MESA Tabuada
h = n => (n>=3)? false: [5*n, n+1]
h(0)=[0,1]  unfold(h,0)=[0].concat(unfold(f,1))
                        = [0].concat[5,10])=[0,5,10]
h(1)=[5,2]  unfold(h,1) = [5].concat(unfold(h,2))
                        = [5].concat[10]=[5,10]
h(2)=[10,3] unfold(h,2) = [10].concat(unfold(h,3))
                        = [10].concat([])=[10]
h(3)=false unfold(h,3) = []
*/
function eventos(){
    document.querySelector("#btn1").addEventListener("click",teste3)
}

window.onload = eventos;

