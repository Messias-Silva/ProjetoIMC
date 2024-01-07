// ------------------ SELECIONANDO OS ELEMENTOS ---------------

let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')


// let avisos = document.querySelector('#avisos')
let aluno = document.querySelector('#situacao')
let btnMedia = document.querySelector('.btnMedia')
let cxMedia = document.querySelector('#resultado2')
let btnLimpa = document.querySelector('#btn_2')

function calculoMedia(n1,n2){
    return (n1 + n2) / 2
}

function sitMediaFinal(mediafinal){
    let sitMediaFinal = ''
    if(mediafinal >= 7){
        sitMediaFinal = 'Aprovado(a)!'
    }else if(mediafinal <= 3){
        sitMediaFinal = 'Reprovado(a)!'
    }else{
        sitMediaFinal = 'Recuperação'
    }

    return sitMediaFinal
}

function formatarSitucao(sitMediaFinal){
    console.log('Situação Final' + sitMediaFinal)
    switch (sitMediaFinal) {
        case 'Aprovado(a)!':
            aluno.classList.remove('reprovado')
            aluno.classList.remove('recuperacao')
            aluno.classList.add('aprovado')
            console.log('adicionar class aprovado')
            break;
        
        case 'Reprovado(a)!':
            aluno.classList.remove('aprovado')
            aluno.classList.remove('recuperacao')
            aluno.classList.add('reprovado')
            console.log('adicionar class reprovado')
            break;

        case 'Recuperação':
            aluno.classList.remove('aprovado')
            aluno.classList.remove('reprovado')
            aluno.classList.add('recuperacao')
            console.log('adicionar class recuperacao')
            break;

        default:
            console.log('Situação Final')
    }
}
let avisos = document.querySelector('#avisos')
function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        formulario.reset()
        avisos.textContent = "Digite uma nota entre 0.0 e 10.0"
        avisos.classList.add('alerta')
        setTimeout(function() {
            avisos.textContent = ''
            avisos.classList.remove('alerta')
        },3000);
    }
}


btnMedia.addEventListener('click', function (e){
    console.log('Calcular Média')
    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let media = calculoMedia(nota1 , nota2)
    

    console.log(nota1)
    console.log(nota2)
    console.log(media)

    if (isNaN (media) || media < 0) {
        console.log("Não é uma nota valido")
        aluno.value = ''
    }else{
        cxMedia.value = parseFloat(media)
        aluno.value = sitMediaFinal(media)
        formatarSitucao(sitMediaFinal(media))
        
    }
    e.preventDefault()

})

btnLimpa.addEventListener('click', function(){
    aluno.classList.remove('aprovado')
    aluno.classList.remove('reprovado')
    aluno.classList.remove('recuperacao')
})