/**
 * @author Matheus Jade Esseyah
 */

const prompt = require("prompt-sync")()
const colors = require("colors")

let dia = 1
let vidas = 3
let chaves = 0
let passo = 0
let rosto = "😰"



//narrativa
console.clear()

console.log("====================================".red)
console.log("        APOCALIPSE TERMINAL         ".red)
console.log("====================================".red)

console.log("\nAno 2049...\n".yellow)

console.log("O mundo não existe mais como antes.")
console.log("As cidades estão destruídas.")
console.log("A eletricidade é rara.")
console.log("E quase ninguém sobreviveu.\n")

console.log("Você acorda sozinho em uma estação abandonada.")
console.log("Sem respostas.")
console.log("Sem comida.")
console.log("Sem saber quanto tempo ainda vai sobreviver.\n")

console.log("Seu objetivo é sobreviver por 5 dias.\n".cyan)

prompt("Pressione ENTER para começar...")
console.clear()

console.log("====================================".red)
console.log("        APOCALIPSE TERMINAL         ".red)
console.log("====================================".red)
console.log("")

console.log("Durante cada dia, você deverá:")
console.log("• explorar caminhos")
console.log("• encontrar chaves 🔑")
console.log("• evitar armadilhas 💀")
console.log("• procurar suprimentos 🍎\n")

console.log("A cada turno, escolha um caminho:")
console.log("1 - Esquerda")
console.log("2 - Meio")
console.log("3 - Direita\n")

console.log("Cada escolha pode gerar eventos aleatórios.\n")

console.log("🍎 Alimento → recupera vida")
console.log("💀 Armadilha → perde vida")
console.log("🔑 Chave → aproxima você da sobrevivência\n")

prompt("Pressione ENTER para começar...")
console.clear()

console.log("====================================".red)
console.log("        APOCALIPSE TERMINAL         ".red)
console.log("====================================".red)
console.log("")

console.log("Para sobreviver ao dia,")
console.log("você precisa encontrar 5 chaves antes")
console.log("de acabar seus passos ou suas vidas.\n")

console.log("Mas existe um problema...\n".red)

console.log("No final de cada dia,")
console.log("um antigo sistema de segurança será ativado.\n")

console.log('"SOBREVIVENTE IDENTIFICADO..."'.bold)
console.log('"INICIANDO TESTE DE SOBREVIVÊNCIA..."'.bold)
console.log("")

prompt("Pressione ENTER para começar...")
console.clear()

console.log("====================================".red)
console.log("        APOCALIPSE TERMINAL         ".red)
console.log("====================================".red)
console.log("")

console.log("Você deverá responder perguntas")
console.log("sobre decisões de sobrevivência.\n")

console.log("Se errar:")
console.log("• você perde uma vida ❤️")
console.log("• e outra pergunta aparecerá\n")

console.log("Se suas vidas chegarem a 0...")
console.log("o dia será reiniciado.\n".red)

console.log("Cada decisão importa.")
console.log("Cada passo pode ser o último.\n")

console.log("Boa sorte, sobrevivente.\n".green)

prompt("Pressione ENTER para começar...")





const perguntas = [
    {
        pergunta: "Você encontrou água desconhecida no meio das ruínas.",
        opcoes: [
            "1 - Bebe imediatamente",
            "2 - Ferve ou filtra antes",
            "3 - Ignora e corre"
        ],
        correta: "2"
    },

    {
        pergunta: "Anoiteceu e criaturas estão próximas.",
        opcoes: [
            "1 - Dorme na rua",
            "2 - Procura abrigo seguro",
            "3 - Faz barulho para assustar"
        ],
        correta: "2"
    },

    {
        pergunta: "Você encontra comida estranha abandonada.",
        opcoes: [
            "1 - Verifica se está estragada",
            "2 - Come tudo rapidamente",
            "3 - Joga fora sem olhar"
        ],
        correta: "1"
    },

    {
        pergunta: "Seu rádio está sem bateria.",
        opcoes: [
            "1 - Quebra o rádio",
            "2 - Grita por ajuda",
            "3 - Procura fonte de energia"
        ],
        correta: "3"
    },

    {
        pergunta: "Você ouve passos em um corredor escuro.",
        opcoes: [
            "1 - Corre sem olhar",
            "2 - Observa antes de agir",
            "3 - Grita 'tem alguém aí?'"
        ],
        correta: "2"
    },

    {
        pergunta: "Você encontra um computador funcionando.",
        opcoes: [
            "1 - Procura comida",
            "2 - Tenta jogar Minecraft",
            "3 - Procura informações úteis"
        ],
        correta: "3"
    }


]

function mostrarStatus(dia, vidas, chaves, passo) {

    let coracoes = ""
    let chavesVisual = ""

    for (let i = 0; i < vidas; i++) {
        coracoes += "❤️ "
    }

    for (let i = 0; i < chaves; i++) {
        chavesVisual += "🔑 "
    }

    console.log("====== STATUS ======".red)
    console.log("Dia:", dia)
    console.log("Vidas:", coracoes)
    console.log("Chaves:", chavesVisual)
    console.log("Passo:", passo, "/ 10")
    console.log("====================".red)
}

function desafioFinal() {

    while (vidas > 0) {

        console.clear()

        let indice = Math.floor(Math.random() * perguntas.length)

        let perguntaAtual = perguntas[indice]

        console.log("===== DESAFIO FINAL =====".yellow)
        console.log("Você precisa responder corretamente para sobreviver!\n")

        console.log(perguntaAtual.pergunta)

        for (let i = 0; i < perguntaAtual.opcoes.length; i++) {
            console.log(perguntaAtual.opcoes[i])
        }

        console.log("")

        let resposta = prompt("Resposta: ")

        if (resposta == perguntaAtual.correta) {

            console.log("\nResposta correta!".green)
            prompt("Pressione ENTER para continuar...")
            return true

        } else {

            vidas--

            console.log("\nResposta errada! Você perdeu 1 vida!".red)
            console.log("Vidas restantes:", vidas)

            if (vidas <= 0) {
                console.log("\nVocê falhou no desafio final...".red)
                prompt("Pressione ENTER para continuar...")
                return false
            }

            prompt("Pressione ENTER para tentar outra pergunta...")
        }
    }
}

while (dia <= 5) {

    chaves = 0
    passo = 0

    console.clear()

    console.log(("=== DIA " + dia + " ===").blue)

    while (passo < 10 && vidas > 0 && chaves < 5) {

        console.clear()

        mostrarStatus(dia, vidas, chaves, passo)

        console.log("| ? | ? | ? |")
        console.log("|___|___|___|")
        console.log("")
        console.log("     " + rosto + "    ")
        console.log("")

        console.log("1 - Esquerda")
        console.log("2 - Meio")
        console.log("3 - Direita")

        console.log("====================")

        let escolha = prompt("Escolha um caminho: ")

        switch (escolha) {

            case "1":
                rosto = "😟"
                console.log("Você foi pela esquerda...")
                break

            case "2":
                rosto = "😐"
                console.log("Você foi pelo meio...")
                break

            case "3":
                rosto = "😨"
                console.log("Você foi pela direita...")
                break

            default:
                console.log("Escolha inválida...".red)
                prompt("Pressione ENTER para continuar...")
                continue
        }

        let evento = Math.floor(Math.random() * 4) + 1

        switch (evento) {

            case 1:

                console.log("Você encontrou alimento! +1 vida 🍎".green)

                vidas ++

                break

            case 2:

                console.log("Você caiu em uma armadilha! -1 vida 💀".red)

                vidas--

                if (vidas < 0) {
                    vidas = 0
                }

                break

            case 3:

                console.log("Você encontrou uma chave! 🔑".yellow)

                chaves++

                break
            
            case 4:

                console.log("Você encontrou uma chave! 🔑".yellow)

                chaves++

                break

        }

        passo++

        prompt("Pressione ENTER para continuar...")
    }

    if (chaves == 5) {

        let passouQuiz = desafioFinal()

        if (passouQuiz) {

            console.log("====================".green)
            console.log("Você sobreviveu ao dia!".green)

            dia++

        } else {

            console.log("====================".red)
            console.log("Você morreu! Reiniciando o dia...".red)

            vidas = 3
        }

    } else if (vidas == 0) {

        console.log("====================".red)
        console.log("Você morreu durante a exploração...".red)

        vidas = 3

    } else {

        console.log("====================".red)
        console.log("Você não conseguiu chaves suficientes.".red)
        console.log("Reiniciando o dia...".red)

        vidas = 3
    }

    prompt("Pressione ENTER para continuar...")
}

console.clear()

console.log("🏆 Você sobreviveu ao apocalipse!".green)
console.log("Parabéns sobrevivente!".green)