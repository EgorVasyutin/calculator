// constants
const screen = document.querySelector('.calc__screen')

const historyElement = document.querySelector('.calc-history')
const historyCloseButton = document.querySelector('.calc-history__close')
const historyBody = document.querySelector('.calc-history__body')

// buttons
const clearButton = document.querySelector('.calc__button--clear')
const modeButton = document.querySelector('.calc__button--mode')
const historyButton = document.querySelector('.calc__button--history')

const numberButtons = document.querySelectorAll('.calc__button--number')
const mainOperationButtons = document.querySelectorAll('.calc__button--main-operation')
const bracketButtons = document.querySelectorAll('.calc__button--bracket')
const displayButtons = [...numberButtons, ...mainOperationButtons, ...bracketButtons]

// event listeners
displayButtons.forEach((displayButton) => {
  displayButton.addEventListener('click', onDisplayButtonClick)
})
mainOperationButtons.forEach((mainOperationButton) => {
  mainOperationButton.addEventListener('click', onMainOperationButtonClick)
})

clearButton.onclick = clearExpression
modeButton.onclick = calcMore
historyButton.onclick = openHistory
historyCloseButton.onclick = closeHistory

// state
let expression = ''
const history = []

// HTML
function getHistoryExpressionHTML(expression) {
  return `<div class="calc__history-expression">${expression}</div>`
}

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
        if (expression.includes('=')) {
          expression = expression.slice(0, expression.length - 1)
        }
        return eval(expression)
      } catch {
        return 'Некорректный ввод'
      }
  }
}
function clearExpression() {
  expression = screen.innerText = ''
}

function openHistory() {
  if (history.length === 0) {
    historyBody.innerHTML = 'Нет истории вычислений'
  } else {
    history.forEach((expression) => {
      historyBody.innerHTML += getHistoryExpressionHTML(expression)
    })
  }

  historyElement.style.display = 'block'
}

function closeHistory() {
  historyBody.innerHTML = ''
  historyElement.style.display = 'none'
}

function updateExpression(str) {
  expression += str
  screen.innerText = expression
}

function onDisplayButtonClick(event) {
  if (expression.includes('=')) {
    clearExpression()
  }

  updateExpression(event.target.innerText)
}

function onMainOperationButtonClick(event) {
  const action = event.target.innerText

  if (event.target.innerText === '=') {
    const result = calculateResult(expression, action)
    console.log(result)
    updateExpression(result)

    history.push(expression)
  }
}

function calcMore() {
  const more = document.querySelector('.calc__buttons-grid')
  const btm_mode = document.querySelector('.calc__button--mode')
  const disp = document.querySelector('.calc')
  const btms = document.querySelector('.calc__buttons')

  if (disp.style.width === '800px') {
    more.style.display = 'none'
    btm_mode.innerHTML = 'Engineering'
    disp.style.width = '410px'
    btms.style.display = 'block'
  } else {
    more.style.display = 'grid'
    btm_mode.innerHTML = 'Ordinary'
    disp.style.width = '800px'
    btms.style.display = 'grid'
  }
}
