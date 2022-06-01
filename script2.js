let screen = document.querySelector('.calc__screen')
function event(event) {
    if(!event.target.classList.contains('calc__button')) return;

    const   result = event.target.innerText

    switch (result){
        case 'AC': screen.innerText = ''
            break
        case '=': screen.innerText = eval(screen.innerText)
            break
        case 'Engineering': screen.innerText = ''
            break
        case 'ordinary': screen.innerText = ''
            break
        case 'History': screen.innerText = ''
            break
        case '2nd':
            screen.innerText = screen.innerText * Math.pow(10, 0)
            break
        case 'x2':
            screen.innerText = Math.pow(screen.innerText, 2)
            break
        case 'x3':
            screen.innerText = Math.pow(screen.innerText, 3)
            break
        case 'xy':
            break
        case 'ex':
            screen.innerText = Math.pow(2.7182818284590452, screen.innerText)
            break
        case '10x':
            screen.innerText = Math.pow(10, screen.innerText)
            break
        case '1/x':
            screen.innerText = 1 / screen.innerText
            break
        case '2x':
            screen.innerText = Math.sqrt(screen.innerText) * 2
            break
        case '3x':
            screen.innerText = Math.sqrt(screen.innerText) * 3
            break
        case 'yx':
            screen.innerText = Math.sqrt(screen.innerText) * b
            break
        case 'log':
            screen.innerText = Math.log10(screen.innerText)
            break
        case 'in':
            break
        case 'x!':
            break
        case 'sin':
            screen.innerText = Math.sin(screen.innerText)
            break
        case 'cos':
            screen.innerText = Math.cos(screen.innerText)
            break
        case 'tan':
            screen.innerText = Math.tan(screen.innerText)
            break
        case 'e':
            screen.innerText = Math.E * screen.innerText
            break
        case 'EE':
            break
        case 'rad':
            break
        case 'sinh':
            screen.innerText = Math.sinh(screen.innerText)
            break
        case 'cosh':
            screen.innerText = Math.cosh(screen.innerText)
            break
        case 'tanh':
            screen.innerText = Math.tanh(screen.innerText)
            break
        case 'p':
            screen.innerText = screen.innerText * 3.14
            break
        case 'rand':
            break
        default: screen.innerText += result
    }
}
document.addEventListener('click', event)

function calcMore() {
    const more = document.querySelector('.calc__buttons-grid')
    const btm_mode = document.querySelector('.calc__button--mode')
    const disp = document.querySelector('.calc')
    const btms = document.querySelector('.calc__buttons')

    if (more.style.display === 'none') {
        more.style.display = 'grid'
        btm_mode.innerHTML = 'ordinary'
        disp.style.width = '800px'
        btms.style.display = 'grid'
    } else {
        more.style.display = 'none'
        btm_mode.innerHTML = 'Engineering'
        disp.style.width = '400px'
        btms.style.display = 'block'
    }
}
document.querySelector(".calc__button--mode").onclick = calcMore;

function calcHistory() {
    const btm = document.querySelector('.calc__buttons-grid--ordinary .calc__button--history')
    const screen = document.querySelector('.calc__history')
    const calcScreen = document.querySelector('.calc__screen')
    if (screen.style.display === 'none') {
        screen.style.display = 'flex'
        btm.textContent = 'Calculator'
        calcScreen.style.display = 'none'
    } else {
        screen.style.display = 'none'
        btm.textContent = 'History'
        calcScreen.style.display = 'flex'
    }
}
document.querySelector('.calc__buttons-grid--ordinary .calc__button--history').onclick = calcHistory




