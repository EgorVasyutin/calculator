// constants
const screen = document.querySelector('.calc__screen')

const historyElement = document.querySelector('.calc-history')
const historyCloseButton = document.querySelector('.calc-history__close')
const historyBody = document.querySelector('.calc-history__body')

// buttons
const clearButton = document.querySelector('.calc__button--clear')
const modeButton = document.querySelector('.calc__button--mode')
const historyButton = document.querySelector('.calc__button--history')

// event listeners
document.addEventListener('click', onCalcButtonClick)

clearButton.onclick = clearExpression
modeButton.onclick = calcMore
historyButton.onclick = openHistory
historyCloseButton.onclick = closeHistory

// state
let expression = ''
const history = ['2+1=3', '2+1=3', '2+1=3']

// logic
function calculateResult(expression, action) {
  switch (action) {
    case '2nd':
      return expression * Math.pow(10, 0)
    case 'x2':
      return Math.pow(expression, 2)
    case 'x3':
      return Math.pow(expression, 3)
    case 'xy':
    case 'ex':
      return Math.pow(Math.E, expression)
    case '10x':
      return Math.pow(10, expression)
    case '1/x':
      return 1 / expression
    case '2x':
      return Math.sqrt(expression) * 2
    case '3x':
      return Math.sqrt(expression) * 3
    case 'yx':
      return Math.sqrt(expression)
    case 'log':
      return Math.log10(expression)
    case 'in':
    case 'x!':
    case 'sin':
      return Math.sin(expression)
    case 'cos':
      return Math.cos(expression)
    case 'tan':
      return Math.tan(expression)
    case 'e':
      return Math.E * expression
    case 'EE':
    case 'rad':
    case 'sinh':
      return Math.sinh(expression)
    case 'cosh':
      return Math.cosh(expression)
    case 'tanh':
      return Math.tanh(expression)
    case 'p':
      return expression * Math.PI
    case 'rand':
    default:
      try {
        return eval(expression.slice(0, expression.length - 1))
      } catch {
        return 'Некорректный ввод'
      }
  }
}

function getHistoryExpressionHTML(expression) {
  return `<div class="calc__history-expression">${expression}</div>`
}

function clearExpression() {
  expression = screen.innerText = ''
}

function openHistory() {
  history.forEach((expression) => {
    historyBody.innerHTML += getHistoryExpressionHTML(expression)
  })
  historyElement.style.display = 'block'
}

function closeHistory() {
  historyBody.innerHTML = ''
  historyElement.style.display = 'none'
}

function onCalcButtonClick(event) {
  if (!event.target.classList.contains('calc__button')) return

  if (expression.includes('=')) {
    expression = screen.innerText = ''

    if (event.target.innerText === '=') {
      return
    }
  }

  expression += event.target.innerText
  if (!/^[0-9]$/.test(event.target.innerText)) {
    const action = event.target.innerText

    if (event.target.innerText === '=') {
      const result = calculateResult(expression, action)
      console.log(result)
      expression += result
      history.push(expression)
      console.log(history)
    }
  }

  screen.innerText = expression
}

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
