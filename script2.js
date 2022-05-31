let screen = document.querySelector('.calc__screen')
function event(event) {
    if(!event.target.classList.contains('calc__button')) return;

    const result = event.target.innerText

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




