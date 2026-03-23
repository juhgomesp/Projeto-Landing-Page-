function toggleMode() {
    const html = document.documentElement

    //if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    //} else {
      //  html.classList.add('light')
    //}
    // pra fazer o botão funcionar no passo a passo
    // porém a função toggle que não sei mto bem como é construída
    // faz esse código automaticamente

    html.classList.toggle('light')
}

// pra fazer a troca do avatar também quando muda de modo
// claro ou escuro
//substituir a imagem
//se tiver com light mode, adicionar a image light 
// se tiver sem light mode, manter a imagem normal 

const img = document.querySelector("#profile img")
if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')

} else { 
    img.setAttribute("src", "./assets/avatar.png")

}
 // pra funcionar 








