//Torna o js mais rígido com seu código
'use strict'

    //Criação de variável
    const botaoTrocarCor = document.getElementById('botao-trocar-cor')
    const botaoVerde = document.getElementById('botao-verde')
    const botaoVermelho = document.getElementById('botao-vermelho')
    const botaoCorAleatoria = document.getElementById('botao-cor-aleatoria')
    const urlDaImagem = './img/dragon-ball.jpg'

    //Função para trocar a cor de fundo
    function trocarCor() {
        //Pega a cor informada pelo usuário
        const corUsuario = document.getElementById('cor-usuario').value

        //Trocar cores em português
        if (corUsuario == 'marrom') {
            document.body.style.backgroundImage = 'none'
            document.documentElement.style.setProperty('--color-bg', 'brown')
        } else if (corUsuario == 'lilas' || corUsuario == 'lilás') {
            document.body.style.backgroundImage = 'none'
            document.documentElement.style.setProperty('--color-bg', '#A47DAB')
        } else if (corUsuario == 'rosa-choque') {
            document.body.style.backgroundImage = 'none'
            document.documentElement.style.setProperty('--color-bg', 'hotpink')
        } else if (corUsuario == 'azul') {
            document.body.style.backgroundImage = 'none'
            document.documentElement.style.setProperty('--color-bg', 'blue')
        } else if(corUsuario == 'goku') {
            document.body.style.backgroundImage = `url('${urlDaImagem}')`
            document.documentElement.style.setProperty('--color-bg', 'transparent')
        } else {
            document.body.style.backgroundImage = 'none'
            document.documentElement.style.setProperty('--color-bg', corUsuario)
        }

    }

    function trocarCorVerde() {
        document.body.style.backgroundImage = 'none'
        document.documentElement.style.setProperty('--color-bg', 'green')
    }

    function trocarCorVermelho() {
        document.body.style.backgroundImage = 'none'
        document.documentElement.style.setProperty('--color-bg', 'red')
    }

    function trocarCorAleatoria(){
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)

        const corFinal = `rgb(${r}, ${g}, ${b})`
        document.body.style.backgroundImage = 'none'
        document.documentElement.style.setProperty('--color-bg', corFinal)
    }

    botaoTrocarCor.addEventListener('click', trocarCor)
    botaoVerde.addEventListener('click', trocarCorVerde)
    botaoVermelho.addEventListener('click', trocarCorVermelho)
    botaoCorAleatoria.addEventListener('click', trocarCorAleatoria)
    