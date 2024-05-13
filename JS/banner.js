let indice = 0;

function mostrarImg() {
  const img = document.getElementsByClassName("img");
  
  //Iterar sobre las imagenes cargadas para que no se vean
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

mostrarImg();