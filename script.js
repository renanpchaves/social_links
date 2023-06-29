function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  //pegar a tag montada da img do profile direto do CSS e substituir a imagem pela light caso o light mode esteja on

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  const alt = document.querySelector("img alt")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "renã com fundo amarelo, bonito e elegante sem medo de ser feliz"
    )
  } else {
    img.setAttribute("alt", "renã posturado, fundo roxo na escuridão perplexa")
  }
}
