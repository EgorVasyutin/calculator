let screen = document.querySelector(".calc__screen");

/*State*/
let expression = "";
const history = [];

function calculateResult(expression, action) {
  switch (action) {
    case "2nd":
      return expression * Math.pow(10, 0);
    case "x2":
      return Math.pow(expression, 2);
    case "x3":
      return Math.pow(expression, 3);
    case "xy":
    case "ex":
      return Math.pow(Math.E, expression);
    case "10x":
      return Math.pow(10, expression);
    case "1/x":
      return 1 / expression;
    case "2x":
      return Math.sqrt(expression) * 2;
    case "3x":
      return Math.sqrt(expression) * 3;
    case "yx":
      return Math.sqrt(expression) * b;
    case "log":
      return Math.log10(expression);
    case "in":
    case "x!":
    case "sin":
      return Math.sin(expression);
    case "cos":
      return Math.cos(expression);
    case "tan":
      return Math.tan(expression);
    case "e":
      return Math.E * expression;
    case "EE":
    case "rad":
    case "sinh":
      return Math.sinh(expression);
    case "cosh":
      return Math.cosh(expression);
    case "tanh":
      return Math.tanh(expression);
    case "p":
      return expression * Math.PI;
    case "rand":
    default:
      return eval(expression.slice(0, expression.length - 1));
  }
}

function onCalcButtonClick(event) {
  if (!event.target.classList.contains("calc__button")) return;
  switch (event.target.innerText) {
    case "AC":
      expression = screen.innerText = "";
      return;
    case "Engineering":
      return;
    case "ordinary":
      return;
  }

  expression += event.target.innerText;
  if (!/^[0-9]$/.test(event.target.innerText)) {
    const action = event.target.innerText;

    if (event.target.innerText === "=") {
      expression += calculateResult(expression, action);
      history.push(expression);
    }
  }

  screen.innerText = expression;
}
document.addEventListener("click", onCalcButtonClick);

function calcMore() {
  const more = document.querySelector(".calc__buttons-grid");
  const btm_mode = document.querySelector(".calc__button--mode");
  const disp = document.querySelector(".calc");
  const btms = document.querySelector(".calc__buttons");

  if (more.style.display === "none") {
    more.style.display = "grid";
    btm_mode.innerHTML = "ordinary";
    disp.style.width = "800px";
    btms.style.display = "grid";
  } else {
    more.style.display = "none";
    btm_mode.innerHTML = "Engineering";
    disp.style.width = "400px";
    btms.style.display = "block";
  }
}
document.querySelector(".calc__button--mode").onclick = calcMore;
