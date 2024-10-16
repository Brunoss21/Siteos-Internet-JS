function popularEventos(){
    let btn = document.querySelector("button");
    btn.addEventListener("click", evt => {
        teste();
        evt.target.innerHTML = "Clicado";

    });
}

    Array.from(document.querySelector("li"))
        .filter(li => li.innerHTML !== "ITEM2")
        .forEach(li => {
        li.addEventListener("click",evt => {
           evt.target.style.backgroundColor = "pink";
           evt.target.innerHTML = "Clicado";
        })
    });



function teste(){
    alert("Olá Mundo");

}

window.onload = popularEventos;