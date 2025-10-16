let contador =  1
let qtd = Number(prompt("Quantas notas esse aluno possui?"))
let soma =  0
let nota =  0  
while (contador<= qtd) {
    do {
        nota =  Number(prompt("Digite a nota " + contador))
    } while (nota < 0 || nota > 10);
    soma =  soma + nota 
    contador =  contador + 1 
}

calcularMedia()

function calcularMedia() {
    const media =  soma/qtd
    const mensagem =  media >=6
    ?`Você foi aprovado(a) com média ${media.toFixed(2)}`
    : `Você NÃO foi aprovado pois obteve média ${media.toFixed(2)}`
    document.getElementById("resultado").innerText = mensagem
}