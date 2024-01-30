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

//slide
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
