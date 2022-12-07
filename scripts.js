// MOBILE: clicar no logo faz aparecer menu lateral
const menuBotao = document.querySelector(".cabecalho__menu")
const menu = document.querySelector(".menu-lista-mobile")

menuBotao.addEventListener("click", () => {
    menu.classList.toggle("menu-lista-mobile--ativo")
})


// MOBILE e DESKTOP: faz alteracao do conteudo em main de acordo com o link clicado
document.querySelectorAll('.outro-html').forEach(link => {
    const conteudo = document.querySelector('.conteudo')

    link.onclick = function(e){
    e.preventDefault() // previnindo acao default ---> abrir outra pagina

    fetch(link.href) // fazendo requisição ajax
        .then(resp => resp.text()) // transformando a resposta em texto
        .then(html => conteudo.innerHTML = html)
}
})


// AINDA NAO RESOLVIDO

// BOTAO SABERMAIS DESKTOP: ao ser clicado fazer animacao nos links do menu

const botaoSaberMais = document.querySelector(".saber-mais")
const linksMenu = document.querySelectorAll(".menu-lista__link")
const nav = document.querySelector(".menu")

console.log(nav)
console.log(getComputedStyle(nav).height)
console.log(getComputedStyle(nav).height == "33px")
if (getComputedStyle(nav).height != "33px") { // menu desktop

    botaoSaberMais.addEventListener("click", () => {
        linksMenu.forEach(link => {
            link.classList.toggle("menu-lista__link-animacao")
        })
    })
} else { // menu mobile

    botaoSaberMais.addEventListener("click", () => {

        menu.classList.toggle("menu-lista-mobile--ativo")

    })

}