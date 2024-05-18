const img = document.getElementsByClassName("img");
const dotBox = document.querySelector(".puntitos")
let indice = 0;

function puntitos(){
  for(i =0 ; i < 3 ; i++){
    let puntito = document.createRange().createContextualFragment(`
    <label class="label" for="${img[i]}">
    <input id="${"dot"+[i]}" type="radio" name="grupoBanner">
    <div class="button">
    <span class="shadow"></span>
    `)
    dotBox.append(puntito);
  }
  let check = document.getElementById(`dot${indice}`)
// Lo dejo aca pero la idea es que tome el indice actual para ubicar el punto activo y darle color
 // check.check
  
}

function mostrarImg() {
  
  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";  
  }
  indice++;

  if (indice >= img.length) {
    indice = 0;
  } else if (indice <= 0) {
    indice = img.length - 1;
  }
  
  img[indice].style.display = "block";
}

document.getElementById("prevBtn").addEventListener("click", () => {
  mostrarImg();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  indice++;
  mostrarImg();
});



puntitos();
mostrarImg();