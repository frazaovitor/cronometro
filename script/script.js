let display = document.querySelector('#display')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')
let comecar = document.querySelector('.comecar')
let parar = document.querySelector('.parar')
let cronometroSeg
let minutoAtual
let interval

for (let i = 0; i <= 60; i++) {
    if (i < 10) {
        minutos.innerHTML += `<option value="${i}">0${i}</option>`
        segundos.innerHTML += `<option value="${i}">0${i}</option>`
    } else {
        minutos.innerHTML += `<option value="${i}">${i}</option>`
        segundos.innerHTML += `<option value="${i}">${i}</option>`
    }
}

comecar.addEventListener('click', function () {
    minutoAtual = minutos.value
    segundoAtual = segundos.value

    display.childNodes[1].innerHTML = `${minutoAtual} : ${segundoAtual}`

    interval = setInterval(() => {
        segundoAtual--
        if (segundoAtual <= 0) {
            if (minutoAtual > 0) {
                minutoAtual--
                segundoAtual = 59
            } else {
                document.querySelector('#sound').play()
                clearInterval(interval)
            }
        }
        if(minutoAtual < 10){
            display.childNodes[1].innerHTML = `0${minutoAtual} : ${segundoAtual}`
        }
        if( segundoAtual < 10){
            display.childNodes[1].innerHTML = `${minutoAtual} : 0${segundoAtual}`
        }
       
    }, 1000)
})

parar.addEventListener('click', () => {
    if (document.querySelector('#sound').play()) {
        document.querySelector('#sound').pause()
    } else {
        return false
    }
})