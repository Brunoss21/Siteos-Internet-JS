// Arrow Function - Programação Funcional

// let x = 5;
// let y = "oi";

let f = x => 2 * x; // função

const g = () => console.log("Oi")

g()

const h = (x,y) => x + y
console.log(h(2,3))

const f = (x,y,z) => {
    let aux = y+z;
    return aux+x+1;
}

f(1,2,3)

// HIGH-ORDER Functions:

const f = h => 1+h(5)
f(x=>3*x)

// Raciocinio p/ equações: "Equationl Reasoning"

f(x=> 3*x) = 1 + (x=>3*x)(5)
           = 1 + 3*5 = 1+15 = 16

f(x=>3)= 1 + (x=>3)(5)
       = 1 + 3 = 4

const f = h => 3+h(1,2)
f((x,y)=> x*y ) = 5
f((x,y)=> x*y) = 3 + ((x,y)=> x*y)(1,2)
               = 3 + 1*2 = 3 + 2 = 5


const f = x => (y => x+y)
    function f (x){
        return y => x+y
    }

f(3)(2)