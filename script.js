/*
* Выровнять верстку - перенести часть кнопок на первый ряд
* Пофиксить переключение в инженерный режим
* Добавить обработку скобочек
* Сверстать блок с историей
* Добавить переключение в просмотр истории и обратно в калькулятор
* Убрать цифры в css классах и названиях
* Избавиться от повторений
*
* */


let a = '';
let b = '';
let sing = '';
let finish = false;
let result = 0
let history = []

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['+','-','X','/','(',')','2nd','x2','x3','xy','ex','10x','1/x','2x','3x','yx','in','log','x!','sin','cos','tan','e','EE','rad','sinh','cosh','tanh','p','rand']

const out = document.querySelector('.calc__screen')

function clearAll () {
    a = '';
    b = '';
    sing = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector(".button__signs--ac").onclick = clearAll;

document.querySelector('.screen__button').onclick = (event) => {
    if(event.target.classList.contains('button__signs--ac'))  return;
    out.textContent = '';
    const key = event.target.textContent;
    if (digit.includes(key)) {
        if (b === '' && sing === ''){
            a += key;
            out.textContent = a
        }
        else if(a !== '' && b !== '' && finish){
            b = key
            finish = false
            out.textContent = b
        }else{
            b += key
            out.textContent = b
        }
        return;
    }

    if (action.includes(key)) {
        sing = key
        out.textContent = sing
        console.log(sing)
        return;
    }
    if(key === '=') {
        switch (sing){
            case '+':  result = (+a) + (+b)
                break
            case '-': result = a - b
                break
            case 'X': result = a * b
                break
            case '/': result = a / b
                if (b === '0'){
                    out.textContent = 'Ошибка'
                    a = ''
                    b = ''
                    sing = ''
                    return;
                }
                break
            case '2nd': result = a * Math.pow(10, 0)
                break
            case 'x2': result = Math.pow(a, 2)
                break
            case 'x3': result = Math.pow(a, 3)
                break
            case 'xy': result = Math.pow(a, b)
                break
            case 'ex': result = Math.pow(2.7182818284590452, b)
                break
            case '10x': result = Math.pow(10, b)
                break
            case '1/x': result = 1 / b
                break
            case '2x': result = Math.sqrt(a) * 2
                break
            case '3x': result = Math.sqrt(a) * 3
                break
            case 'yx': result = Math.sqrt(a) * b
                break
            case 'log': result = Math.log10(a)
                break
            case 'in':
                break
            case 'x!':
                break
            case 'sin': result = Math.sin(a)
                break
            case 'cos': result = Math.cos(a)
                break
            case 'tan': result = Math.tan(a)
                break
            case 'e': result = Math.E * a
                break
            case 'EE':
                break
            case 'rad':
                break
            case 'sinh': result = Math.sinh(a)
                break
            case 'cosh': result = Math.cosh(a)
                break
            case 'tanh': result = Math.tanh(a)
                break
            case 'p': result = a * 3.14
                break
            case 'rand':
                break
        }
        finish = true
        out.textContent = result
        geyHistory(a, b, sing)
    }
}
document.querySelector('.screen__button-2').onclick = (event2) => {
    const key = event2.target.textContent;
    if (digit.includes(key)) {
        if (b === '' && sing === ''){
            a += key;
            out.textContent = a
        }
        else if(a !== '' && b !== '' && finish){
            b = key
            finish = false
            out.textContent = b
        }else{
            b += key
            out.textContent = b
        }
        return;
    }

    if (action.includes(key)) {
        sing = key
        out.textContent = sing
        console.log(sing)
        return;
    }
    if(key === '=') {
        switch (sing){
            case '+':  result = (+a) + (+b)
                break
            case '-': result = a - b
                break
            case 'X': result = a * b
                break
            case '/': result = a / b
                if (b === '0'){
                    out.textContent = 'Ошибка'
                    a = ''
                    b = ''
                    sing = ''
                    return;
                }
                break
            case '2nd': result = a * Math.pow(10, 0)
                break
            case 'x2': result = Math.pow(a, 2)
                break
            case 'x3': result = Math.pow(a, 3)
                break
            case 'xy': result = Math.pow(a, b)
                break
            case 'ex': result = Math.pow(2.7182818284590452, b)
                break
            case '10x': result = Math.pow(10, b)
                break
            case '1/x': result = 1 / b
                break
            case '2x': result = Math.sqrt(a) * 2
                break
            case '3x': result = Math.sqrt(a) * 3
                break
            case 'yx': result = Math.sqrt(a) * b
                break
            case 'log': result = Math.log10(a)
                break
            case 'in':
                break
            case 'x!':
                break
            case 'sin': result = Math.sin(a)
                break
            case 'cos': result = Math.cos(a)
                break
            case 'tan': result = Math.tan(a)
                break
            case 'e': result = Math.E * a
                break
            case 'EE':
                break
            case 'rad':
                break
            case 'sinh': result = Math.sinh(a)
                break
            case 'cosh': result = Math.cosh(a)
                break
            case 'tanh': result = Math.tanh(a)
                break
            case 'p': result = a * 3.14
                break
            case 'rand':
                break
        }
        finish = true
        out.textContent = result
        geyHistory(a, b, sing)
    }
}
function calcMore() {
    const more = document.querySelector('.screen__button-2')
    const btm = document.querySelector('.button__signs--switch')
    const disp = document.querySelector('.calc')
    const nol = document.querySelector('.button__nul--o')

    if (more.style.display === 'none') {
        more.style.display = 'block'
        btm.innerHTML =  'Обычный'
        disp.style.width = '800px'
    } else {
        more.style.display = 'none'
        btm.innerHTML = 'Инженерный'
        disp.style.width = '400px'
    }
}
document.querySelector(".button__signs--switch").onclick = calcMore;


function geyHistory(a, b, sing) {
    eval('a'+'sing'+'b')
}

document.querySelector(".button__signs--history").onclick = geyHistory;
