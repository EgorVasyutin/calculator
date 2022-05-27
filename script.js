let a = '';
let b = '';
let sing = '';
let finish = false;

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
            case '+':  a = (+a) + (+b)
                break
            case '-': a = a - b
                break
            case 'X': a = a * b
                break
            case '/': a = a / b
                if (b === '0'){
                    out.textContent = 'Ошибка'
                    a = ''
                    b = ''
                    sing = ''
                    return;
                }
                break
            case '2nd': a = a * Math.pow(10, 0)
                break
            case 'x2': a = Math.pow(a, 2)
                break
            case 'x3': a = Math.pow(a, 3)
                break
            case 'xy': a = Math.pow(a, b)
                break
            case 'ex': a = Math.pow(2.7182818284590452, b)
                break
            case '10x': a = Math.pow(10, b)
                break
            case '1/x': a = 1 / b
                break
            case '2x': a = Math.sqrt(a) * 2
                break
            case '3x': a = Math.sqrt(a) * 3
                break
            case 'yx': a = Math.sqrt(a) * b
                break
            case 'log': a = a * 0.1505149978319906
                break
            case 'in': a = a * 0.34657359027997265
                break
            case 'x!':
                break
            case 'sin': a = Math.sin(a)
                break
            case 'cos': a = Math.cos(a)
                break
            case 'tan': a = Math.tan(a)
                break
            case 'e': a = a * 2.7182818284590452
                break
            case 'EE':
                break
            case 'rad':
                break
            case 'sinh': a = Math.sinh(a)
                break
            case 'cosh': a = Math.cosh(a)
                break
            case 'tanh': a = Math.tanh(a)
                break
            case 'p': a = a * 3.14
                break
            case 'rand':
                break
        }
        finish = true
        out.textContent = a
    }
}

//'x!','sin','cos','tan','e','EE','rad','sinh','cosh','tanh','p','rand']