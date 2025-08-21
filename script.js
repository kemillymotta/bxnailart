function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/bxnailart-light.png")
  } else {
    img.setAttribute("src", "./assets/bxnailart.png")
  }

  const alt = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    alt.setAttribute("alt", "imagem com fundo rosa claro com a logo de um gato preto mostrando as unhas pintadas, com a língua para fora e embaixo escrito bxnailart")
  } else {
    alt.setAttribute("alt", "imagem com fundo rosa escuro com a logo de um gato preto mostrando as unhas pintadas, com a língua para fora e embaixo escrito bxnailart")
  }
}