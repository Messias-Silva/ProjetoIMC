// SELECIONAR OS ELEMENTOS QUE VAMOS UTILIZAR

let formulario = document.querySelector('form')
let alerta = document.querySelector('#avisos') //<p id="avisos">ooo</p>
let media3 = document.querySelector('#resultado3') //input id Média
let alunoSit = document.querySelector('.aluno')

let cxN1 = document.querySelector('#n1')
let cxN2 = document.querySelector('#n2')
let cxN3 = document.querySelector('#n3')

let btnCalcular = document.querySelector('.btnMedia')
let btnClear = document.querySelector('.botao2')
let logo = document.querySelector('h1')

logo.textContent = 'Mádia por três'

// let nu1 = 2
// let nu2 = 3
// let nu3 = 5
// let somar = (nu1 + nu2 + nu3)/2
// console.log(somar)

// COMEÇANDO A REGRA DE NEGOCIO

function calcularMedia3(n1, n2, n3){
    return (n1 + n2 + n3)/3
}
function situacaoFinal3(mediaFinal3){
    let situacaoFinal3 = ''
    if (mediaFinal3 >= 7) {
        situacaoFinal3 = 'Você foi aprovado(a)!'
    }else if(mediaFinal3 <= 5){
        situacaoFinal3 = 'Você foi reprovado(a)!'
    }else{
        situacaoFinal3 = 'Você está de recuperação'
    }
    return situacaoFinal3
}

function formatarSituacao3(situacaoFinal3){
    console.log('Situação Final' + situacaoFinal3)
    switch (situacaoFinal3) {
        case 'Você foi aprovado(a)!':
            alunoSit.classList.remove('reprovado')
            alunoSit.classList.remove('recuperacao')
            alunoSit.classList.add('aprovado')
            // console.log("Aprovado")
            break;
        case 'Você foi reprovado(a)!':
            alunoSit.classList.remove('aprovado')
            alunoSit.classList.remove('recuperacao')
            alunoSit.classList.add('reprovado')
            console.log("Reprovado")
            break;
        case 'Você está de recuperação':
            alunoSit.classList.remove('aprovado')
            alunoSit.classList.remove('reprovado')
            alunoSit.classList.add('recuperacao')
            console.log("Recuperação")
            break;
        default:
            console.log('Situação indefinoda!')
    }
}
function validarNumero(numero){
    let n1 = cxN1.value
    let n2 = cxN2.value
    let n3 = cxN3.value
    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
        formulario.reset()
        alerta.textContent = 'Digite uma nota entre 0 e 10 por favor'
        alerta.classList.add('alerta')
        setTimeout(function(){
            alerta.textContent = ''
            alerta.classList.remove('alerta')
        }, 3000);
    }
}
btnCalcular.addEventListener('click',function (e){
    console.log('Calcular Média')
    let nota1 = parseFloat(cxN1.value)
    let nota2 = parseFloat(cxN2.value)
    let nota3 = parseFloat(cxN3.value)
    let media = calcularMedia3(nota1, nota2, nota3)

    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    console.log(media)

    if (isNaN (media) || media < 0) {
        console.log('Não é um número')
        alunoSit.value = ''
    }else{
        media3.value = parseFloat(media)
        alunoSit.value = situacaoFinal3(media)
        formatarSituacao3 (situacaoFinal3 (media))
    }
    
    e.preventDefault()
})

btnClear.addEventListener('click', function(){
    alunoSit.classList.remove('aprovado')
    alunoSit.classList.remove('reprovado')
    alunoSit.classList.remove('recuperacao')
})


