// Logo: clicar da refresh na pagina
const logoBotao = document.querySelector(".logo")
logoBotao.onclick = () => {
    window.location.reload(true);
}

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

        if(link.classList.contains("projetos")) {
             
            async function carregue() {
                
                await fetch(link.href) // fazendo requisição ajax
                    .then(resp => resp.text()) // transformando a resposta em texto
                    .then(html => conteudo.innerHTML = html)
                
                document.querySelectorAll(".projeto__link").forEach(projetoLink => {
                    projetoLink.onclick = async function(e) {
                        e.preventDefault()

                        await fetch(projetoLink.href) 
                        .then(projetoLinkResp => projetoLinkResp.text())
                        .then(function (html) {
                            document.getElementById('content').innerHTML = html;
                            var scripts = document.getElementById("content").querySelectorAll("script");
                            for (var i = 0; i < scripts.length; i++) {
                              if (scripts[i].innerText) {
                                eval(scripts[i].innerText);
                              } else {
                                fetch(scripts[i].src).then(function (data) {
                                  data.text().then(function (r) {
                                    eval(r);
                                  })
                                });
                          
                              }
                              // To not repeat the element
                              scripts[i].parentNode.removeChild(scripts[i]);
                            }
                          })
                    }
                })
    
            }
            carregue()

        } else {

            fetch(link.href) // fazendo requisição ajax
            .then(resp => resp.text()) // transformando a resposta em texto
            .then(html => conteudo.innerHTML = html)
    }
        }

})

// BOTAO SABERMAIS DESKTOP: ao ser clicado fazer animacao nos links do menu
// BOTAO SABERMAIS  MOBILE: ao ser clicado faz aparecer menu lateral

const botaoSaberMais = document.querySelector(".apresentacao-a-esquerda__saber-mais")
const linksMenu = document.querySelectorAll(".menu-lista__link")
const paragrafoLinkMenu = document.querySelectorAll(".menu-lista__link--texto")
const nav = document.querySelector(".menu")

if (window.screen.width >= 710) { // menu desktop


    botaoSaberMais.addEventListener("click", () => {

        paragrafoLinkMenu.forEach(p => {
            
            p.classList.toggle("menu-lista__link-animacao")
        })
    })

} else if (window.screen.width < 710){ // menu mobile


    botaoSaberMais.addEventListener("click", () => {

        menu.classList.toggle("menu-lista-mobile--ativo")

    })

    linksMenu.forEach(link => {
        link.classList.remove("menu-lista__link-animacao")

        let elementoPai = link
        let elementoAlvo = link.childNodes[0]
        let novoElemento = document.createElement("i")

        if (link.classList.contains("inicio")) {

            novoElemento.classList.add("fa-solid")
            novoElemento.classList.add("fa-house")

            elementoPai.insertBefore(novoElemento, elementoAlvo)
            
        } else if (link.classList.contains("habilidades")) {

            novoElemento.classList.add("fa-solid")
            novoElemento.classList.add("fa-pen-ruler")

            elementoPai.insertBefore(novoElemento, elementoAlvo)

        } else if (link.classList.contains("projetos")) {

            novoElemento.classList.add("fa-solid")
            novoElemento.classList.add("fa-laptop-code")

            elementoPai.insertBefore(novoElemento, elementoAlvo)

        } else if (link.classList.contains("sobre")) {

            novoElemento.classList.add("fa-solid")
            novoElemento.classList.add("fa-user")

            elementoPai.insertBefore(novoElemento, elementoAlvo)
            
        }      
    })
}










