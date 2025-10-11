function calcularMedia(nome, nota1, nota2, nota3, resultadoId) {
    const media = (nota1 + nota2 + nota3) / 3
    const mensagem = media >= 7
    ? "Parabéns " + nome + ", você foi aprovado(a) com média " + media.toFixed(2)
    : "Que pena " + nome + ", você foi reprovado(a) com média " + media.toFixed(2)
    document.getElementById(resultadoId).innerText = mensagem
}

const nome_aluno_A = prompt("Digite o nome do aluno A: ")
const nota1_A = Number(prompt("Por favor, digite a nota do aluno " + nome_aluno_A + " na primeira prova: "))
const nota2_A = Number(prompt("Por favor, digite a nota do aluno " + nome_aluno_A + " na segunda prova: "))
const nota3_A = Number(prompt("Por favor, digite a nota do aluno " + nome_aluno_A + " na terceira prova: "))
calcularMedia(nome_aluno_A, nota1_A, nota2_A, nota3_A, "resultadoA")

const nome_aluno_B = prompt("Digite o nome do aluno B: ")
const nota1_B = Number(prompt("Por favor, digite a nota do aluno " + nome_aluno_B + " na primeira prova: "))
const nota2_B = Number(prompt("Por favor, digite a nota do aluno " + nome_aluno_B + " na segunda prova: "))
const nota3_B = Number(prompt("Por favor, digite a nota do aluno " + nome_aluno_B + " na terceira prova: "))
calcularMedia(nome_aluno_B, nota1_B, nota2_B, nota3_B, "resultadoB")