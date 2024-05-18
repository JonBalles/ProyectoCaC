let personas = [
{
    nombre: "Juan",
    edad: 30,
    genero: "Masculino",
    ocupacion: "Ingeniero"
},
{
    nombre: "María",
    edad: 22,
    genero: "Femenino",
    ocupacion: "Estudiante de Medicina"
},
{
    nombre: "Pedro",
    edad: 25,
    genero: "Masculino",
    ocupacion: "Programador"
},
{
    nombre: "Ana",
    edad: 28,
    genero: "Femenino",
    ocupacion: "Diseñadora Gráfica"
}
];;

let btn = document.getElementById("testbtn");

function creandoCards (cards){
    const fotos = fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    fotos
        .then(response => {
        if(!response.ok){
            throw new Error("Falló la conexión")
        }

           return response.json();
        })
        .then(data => cards(data))
        .catch(error => console.error("Algo salío mal: " + error))
}

creandoCards(data => 
    data.forEach(datos =>{
        let fragmento = document.createRange().createContextualFragment(`
        <div>
        <h1>${datos.title}</h1>
        </div>
        `)
    
        let main = document.querySelector("main");
    
        main.append(fragmento)
        console.log("Holis. Soy " + datos.title)
    })
)



