// SELEIONANDO OS ELEMENTOS DO FORMULARIO
let formulario = document.querySelector('form')

let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultado1')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

// dados.textContent = "Modou"

let btnCalc = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')


// PEGAR OS DADOS DOS CAMPOS INPUTS ATRAVES DOS VALUES

btnCalc.addEventListener('click', function (e){
    let nome =   cxNome.value
    let idade =  cxIdade.value
    let peso =   cxPeso.value
    let altura = cxAltura.value
    let imc = (peso / (altura * altura)).toFixed(1)

    // console.log(nome)
    // console.log(idade)
    // console.log(peso)
    // console.log(altura)
    // console.log(imc)

    cxImc.value = imc
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit

    let pessoa = {
        nome    :   nome,
        idade   :   idade,
        peso    :   peso,
        altura  :   altura,
        imc     :   imc,
        sit     :   sit,
    }
    // console.log(dados[1])
    // alert(dados[1])
    dados[1].textContent = "NOME: " + pessoa.nome
    dados[2].textContent = "IDADE: " + pessoa.idade + " anos"
    dados[3].textContent = "PESO: " + pessoa.peso + " Kg"
    dados[4].textContent = "ALTURA: " + pessoa.altura + "m"
    dados[5].textContent = "IMC "+pessoa.imc + " : " + pessoa.sit

    e.preventDefault()
})

function situacaoDoPeso(imc){
    let situacao = ''
    if(imc < 18.5){
        situacao = 'Baixo peso'
    }else if(imc >= 18.5 && imc <= 24.9){
        situacao = 'Peso normal'
    }else if (imc >= 25 && imc <= 29.9){
        situacao = 'Sobrepeso.' +'\n' + 'Precisa perder peso!'
    }else if (imc >= 30 && imc <= 34.9){
        situacao = 'Obesidade I'
    }else if (imc >= 35 && imc <= 39.9){
        situacao = 'Obesidade II'
    }else if(imc >= 40){
        situacao = 'Obesidade III'
    }else{
        situacao = 'Inform seu peso corretamente'
    }
    return situacao
}



let btnMrdia2 = document.querySelector('#media2')
let testeBox = document.querySelector('.media')

let logo = document.querySelector('h1')

let btnIMc = document.querySelector('#imc')
let formBox = document.querySelector('.form')






// MUUDAR AS DIVs

btnMrdia2.addEventListener('click',function (e){
    testeBox.classList.add('media2')
    formBox.classList.add('form2')
    boxMedia3.classList.remove('media_por_3_ativo')
    logo.textContent = 'Média de duas notas'

    
    e.preventDefault()
})

btnIMc.addEventListener('click', function (e){
    formBox.classList.add('form')
    formBox.classListr.remove('form2')
    testeBox.classList.remove('media2')
    

    e.preventDefault()
})

let btnMedia3 = document.querySelector('#media3')
let boxMedia3 = document.querySelector('.media_por_3')

btnMedia3.addEventListener('click', function (e){
    boxMedia3.classList.add('media_por_3_ativo')
    formBox.classList.add('form2')
    testeBox.classList.remove('media2')
    logo.textContent = 'Média de três notas'

    e.preventDefault()

})