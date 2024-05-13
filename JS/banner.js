let indice = 0;

function mostrarImg() {
  const img = document.getElementsByClassName("img");
  
  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  
  indice++;
  
  if (indice > img.length) {indice = 1}
  
  img[indice - 1].style.display = "block";
}

document.getElementById("prevBtn").addEventListener("click", () => {
  indice--;
  mostrarImg();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  indice++;
  mostrarImg();
});

mostrarImg();