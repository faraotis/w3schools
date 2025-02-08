// Login Hover
let loginHover = document.querySelector('#login')
let logarHover = document.querySelector('#logar')
loginHover.addEventListener("mouseover", function() {
    loginHover.style.backgroundColor = '#059862'
    logarHover.style.backgroundColor = '#059862'
})
loginHover.addEventListener("mouseout", function() {
    loginHover.style.backgroundColor = '#D9EEE1'
    logarHover.style.backgroundColor = '#D9EEE1'
})

//=============  MENU  =============
let menubox = document.querySelector('#menu')
let menuitens = document.querySelector('#SectionMenuItens')
let menucont = 1

function openMenu() {
    menucont += 1
    if(menucont % 2 == 0) {
        menuitens.style.display = 'block'
    } if(menucont % 2 != 0) {
        menuitens.style.display = 'none'
    }
}

function closeMenu() {
    menucont = 1
    menuitens.style.display = 'none'
}

//=============  TEMA  =============
//Cores TemaEscuro
var LaranjaTags = '#f99990'
var VerdeTags = '#88CC9B'
var AzulHeadNight = '#1D2A35'
var AzulDivCode = '#38444D'
var AzulCodeBack = '#15202B'
var VioletCode = '#C5A5C5'
var borderGray = '#282C34'
var AzulTemaEscuro = '#0D1721'

//Cores TemaClaro
var AzulFundo = '#282A35'
var AzulFundoHover = '#22242d'
var azulClaro = '#96D4D4'
var Yellow = '#FFF4A3'
var YellowHover = '#e6dc94'
var verdeEscuro = '#04AA6D'
var verdeHover = '#059862'
var verdeClaro = '#D9EEE1'
var Rosa = '#ffc8cf'
var RosaHover = '#FFC0C7'
var gray = '#444444'
var brancoCinza = '#F3ECEA'
var brancoHover = '#d7d7d7'
var cinzaFundoCode = '#E7E9EB'
var bordaMonitor = '#E3E6E8'
var azulCode = 'mediumblue'
var vermelhoCode = 'red'
var marromCode = 'brown'

// Itens DOM
var tema = document.querySelector('#mudar-tema')
var backgroundHeader = document.getElementsByTagName('header')[0]
var headerLogo = document.querySelector('#logoHeader')
var headerSearch = document.querySelector('#headerSearch')
var divLingCode = document.querySelectorAll('.divLingCode')
var divLingCodeBack = document.querySelectorAll('.divLingCode > div')
var spanMarrom = document.querySelectorAll('.spanMarrom')
var spanVermelho = document.querySelectorAll('.spanVermelho')
var spanAzul = document.querySelectorAll('.spanAzul')
var WebTemplatesColor = document.querySelector('#secModelos')
var comoFazer = document.querySelector('#secComoFazer')
var aMonitor = document.querySelector('#baseMonitor a')
//var footer = document.getElementsByTagName('footer')

//escFundo
var EscFundo0 = document.querySelector('#SecTwo-SecThree')
var EscFundo1 = document.querySelector('#divJs')
var EscFundo2 = document.querySelector('#TwoSecLing')
var EscFundo3 = document.querySelector('#ThreeSecLing')
var EscFundo4 = document.querySelector('#SecTwo-SecThree')
var EscFundo5 = document.querySelector('#secEditor')
var EscFundo6 = document.querySelector('#SectionPRO')
var EscFundo7 = document.querySelector('#secExercicios')
var EscFundo8 = document.querySelector('#secPontape')
var EscFundoAll = [EscFundo0, EscFundo1, EscFundo2, EscFundo3, EscFundo4, EscFundo5, EscFundo6, EscFundo7, EscFundo8]

function temaEscuro() {
    // header
    tema.style.border = '2px solid white'
    tema.style.backgroundImage = 'linear-gradient(to right, #1D2A35 0%, #1D2A35 50%, white 50%, white 100%)'
    backgroundHeader.style.backgroundColor = AzulHeadNight
    backgroundHeader.style.color = 'white'
    headerLogo.setAttribute('src', 'arquivos/imagens/logo-header-escuro.png')
    headerSearch.style.color = 'black'
    // divLing
    var contDiv = 0
    while (contDiv < divLingCode.length) {
        divLingCodeBack[contDiv].style.backgroundColor = AzulCodeBack
        divLingCodeBack[contDiv].style.borderLeft = '4px solid ' + AzulFundo
        divLingCode[contDiv].style.color = cinzaFundoCode
        divLingCode[contDiv].style.backgroundColor = AzulDivCode
        contDiv++
    }
    //span
    var contSpanAzul = 0
    while (contSpanAzul < spanAzul.length) {
        spanAzul[contSpanAzul].style.color = verdeEscuro
        contSpanAzul++
    }
    var contSpanMarrom = 0
    while (contSpanMarrom < spanMarrom.length) {
        spanMarrom[contSpanMarrom].style.color = LaranjaTags
        contSpanMarrom++
    }
    var contSpanVermelho = 0
    while (contSpanVermelho < spanVermelho.length) {
        spanVermelho[contSpanVermelho].style.color = VioletCode
        contSpanVermelho++
    }
    for(contEsc = 0; contEsc < EscFundoAll.length; contEsc++) {
        EscFundoAll[contEsc].style.backgroundColor = AzulTemaEscuro
    }
    WebTemplatesColor.style.backgroundColor = AzulDivCode
    WebTemplatesColor.style.color = cinzaFundoCode
    comoFazer.style.backgroundColor = AzulHeadNight
    comoFazer.style.color = cinzaFundoCode
    aMonitor.style.backgroundColor = AzulTemaEscuro
    //footer.style.backgroundImage = 'imagens/bg_sky_darker.gif'
}

function temaClaro() {
    //header
    tema.style.border = '2px solid black'
    tema.style.backgroundImage = 'linear-gradient(to right, white 0%, white 50%, black 50%, black 100%)'
    backgroundHeader.style.backgroundColor = 'white'
    backgroundHeader.style.color = 'black'
    headerLogo.setAttribute('src', 'arquivos/imagens/logo-header-claro.png')
    // divLing
    var contDiv = 0
    while (contDiv < divLingCode.length) {
        divLingCodeBack[contDiv].style.backgroundColor = brancoCinza
        divLingCodeBack[contDiv].style.borderLeft = '4px solid ' + verdeEscuro
        divLingCode[contDiv].style.backgroundColor = cinzaFundoCode
        divLingCode[contDiv].style.color = 'black'
        contDiv++
    }
    //span
    var contSpanAzul = 0
    while (contSpanAzul < spanAzul.length) {
        spanAzul[contSpanAzul].style.color = azulCode
        contSpanAzul++
    }
    var contSpanMarrom = 0
    while (contSpanMarrom < spanMarrom.length) {
        spanMarrom[contSpanMarrom].style.color = marromCode
        contSpanMarrom++
    }
    var contSpanVermelho = 0
    while (contSpanVermelho < spanVermelho.length) {
        spanVermelho[contSpanVermelho].style.color = vermelhoCode
        contSpanVermelho++
    }
    for(contEsc = 0; contEsc < EscFundoAll.length; contEsc++) {
        EscFundoAll[contEsc].style.backgroundColor = AzulFundo
    }
    WebTemplatesColor.style.backgroundColor = 'white'
    WebTemplatesColor.style.color = 'black'
    comoFazer.style.backgroundColor = 'white'
    comoFazer.style.color = 'black'
    aMonitor.style.backgroundColor = AzulFundo
    //footer.style.backgroundImage = 'imagens/background_in_space.gif'
}

var cont = 1
function mudarTema() {
    cont++
    if((cont%2) == 0) {
        temaEscuro()
    } else {
        temaClaro()
    }
}

//========== MONITOR ===========
var Button1 = document.getElementById('btn1')
var Button2 = document.getElementById('btn2')
var Button3 = document.getElementById('btn3')
var firstImg = document.querySelector('.primeiro')

// Ainda estou fazendo essa parte...

// var cont = 0
// function setaL() {
//     cont ++
//     if(cont > 2) {
//         firstImg.style.marginLeft = '0%'
//     } else {
//         cont = 0
//         firstImg.style.marginLeft = '-200%'
//     }
// }
// function setaR() {
//     cont ++
//     if(cont > 2) {
//         firstImg.style.marginRight = '0%'
//     } else {
//         cont = 0
//         firstImg.style.marginRight = '-200%'
//     }
// }

function btn1() {
    firstImg.style.marginLeft = '0%'
    Button1.style.backgroundColor = '#595959'
    Button2.style.backgroundColor = '#aeaeae'
    Button3.style.backgroundColor = '#aeaeae'
}
function btn2() {
    firstImg.style.marginLeft = '-100%'
    Button1.style.backgroundColor = '#aeaeae'
    Button2.style.backgroundColor = '#595959'
    Button3.style.backgroundColor = '#aeaeae'
}
function btn3() {
    firstImg.style.marginLeft = '-200%'
    Button1.style.backgroundColor = '#aeaeae'
    Button2.style.backgroundColor = '#aeaeae'
    Button3.style.backgroundColor = '#595959'
}
