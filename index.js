/**
 * @author Matheus Jade Esseyah
 */


const prompt = require("prompt-sync")()
const colors = require('colors');

let dia = 1
let vidas = 3
let chaves = 0
let passo = 0
let rosto = "😰"


function mostrarStatus(dia, vidas, chaves, passo) {
    let coracoes = ""
    let chavesVisual = ""

    for (let i = 0; i < vidas; i++) {
        coracoes += "❤️ "
    }

    for (let i = 0; i < chaves; i++) {
        chavesVisual += "🔑 "
    }

    console.log("====== STATUS ======")
    console.log("Dia:", dia)
    console.log("Vidas:", coracoes)
    console.log("Chaves:", chavesVisual)
    console.log("Passo:", passo, "/ 10")
    console.log("====================")
}



while (dia <= 5) {

    chaves = 0
    passo = 0

    console.log("=== DIA", dia, "===")

    while (passo < 10 && vidas > 0 && chaves < 5) {

        console.clear()
        mostrarStatus(dia, vidas, chaves, passo)
        
        console.log("| ? | ? | ? |")
        console.log("|___|___|___|")
        console.log("     " + rosto + "    ")
        console.log("")

        console.log("1 - Esquerda")
        console.log("2 - Meio")
        console.log("3 - Direita")

        console.log("====================")

        let escolha = prompt("Escolha um caminho: ")

        switch (escolha) {
    case "1":
        console.log("Você foi pela esquerda...")
        rosto = "😟"
        console.log("|"+rosto+"|   |   |")
        break
    case "2":
        console.log("Você foi pelo meio...")
        rosto = "😐"
        console.log("|   |" + rosto + "|   |")
        break
    case "3":
        console.log("Você foi pela direita...")
        rosto = "😨"
        console.log("|   |   |"+ rosto + "|")
        
        break
    default:
        console.log("Escolha inválida...")
        continue
}

        let evento = Math.floor(Math.random() * 3) + 1

        switch (evento) {
            case 1:
                console.log("Você encontrou alimento! +1 vida 🍎".green)
                vidas++
                break
            case 2:
                console.log("Você caiu em uma armadilha! -1 vida 💀".red)
                vidas--
                if (vidas < 0) vidas = 0
                break
            case 3:
                console.log("Você encontrou uma chave! 🔑".yellow)
                chaves++
                break
        }

        passo++

        prompt("Pressione ENTER para continuar...")
    }

    if (chaves == 5) {
        console.log("====================")
        console.log("Você sobreviveu ao dia!".green)
        dia++
    } else if (vidas == 0) {
        console.log("====================")
        console.log("Você morreu! Reiniciando o dia...".red)
        vidas = 3
    } else {
        console.log("====================")
        console.log("Você não conseguiu chaves suficientes. Reiniciando o dia...".red)
        vidas = 3
    }

    prompt("Pressione ENTER para continuar...")
}

console.log("🏆 Você sobreviveu ao apocalipse!")