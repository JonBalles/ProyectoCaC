let divAnimado = document.querySelector('.test');

console.log(divAnimado)
divAnimado.addEventListener("mouseenter", () => {
    console.log("Estoy in");
    divAnimado.classList.add("active");
});

divAnimado.addEventListener("mouseleave", () => {
    console.log("Estoy out");
    divAnimado.classList.remove("active");
});