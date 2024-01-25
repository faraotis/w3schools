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
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    cont ++

    if(cont > 3) {
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}