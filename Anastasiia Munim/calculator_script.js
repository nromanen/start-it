document.getElementById("addBtn").addEventListener("click", add);
document.getElementById("subBtn").addEventListener("click", subtract);
document.getElementById("mulBtn").addEventListener("click", multiply);
document.getElementById("calculateBtn").addEventListener("click", calculate);

function add() {
  const num1 = parseInt(document.getElementById("a").value);
  const num2 = parseInt(document.getElementById("b").value);
  const userSum = parseInt(document.getElementById("sum").value);

  const actualSum = num1 + num2;
  const resultElement = document.getElementById("addResult");

  if (userSum === actualSum) {
    resultElement.textContent = "Correct!";
    resultElement.style.backgroundColor = "lightgreen";
  } else {
    resultElement.textContent = `Wrong! The correct answer is ${actualSum}`;
    resultElement.style.backgroundColor = "red";
  }

  clearInputs("a", "b", "sum");
}

function subtract() {
  const num1 = parseInt(document.getElementById("a1").value);
  const num2 = parseInt(document.getElementById("b1").value);
  const userSum = parseInt(document.getElementById("sum1").value);

  const actualSum = num1 - num2;
  const resultElement = document.getElementById("subResult");

  if (userSum === actualSum) {
    resultElement.textContent = "Correct!";
    resultElement.style.backgroundColor = "lightgreen";
  } else {
    resultElement.textContent = `Wrong! The correct answer is ${actualSum}`;
    resultElement.style.backgroundColor = "red";
  }

  clearInputs("a1", "b1", "sum1");
}

function multiply() {
  const num1 = parseInt(document.getElementById("a2").value);
  const num2 = parseInt(document.getElementById("b2").value);
  const userSum = parseInt(document.getElementById("sum2").value);

  const actualSum = num1 * num2;
  const resultElement = document.getElementById("mulResult");

  if (userSum === actualSum) {
    resultElement.textContent = "Correct!";
    resultElement.style.backgroundColor = "lightgreen";
  } else {
    resultElement.textContent = `Wrong! The correct answer is ${actualSum}`;
    resultElement.style.backgroundColor = "red";
  }

  clearInputs("a2", "b2", "sum2");
}

function calculate() {
  const num1 = parseInt(document.getElementById("a3").value);
  const num2 = parseInt(document.getElementById("b3").value);
  const userResult = parseInt(document.getElementById("result").value);
  const operation = document.getElementById("operation").value;

  let actualResult;
  if (operation === "add") {
    actualResult = num1 + num2;
  } else if (operation === "subtract") {
    actualResult = num1 - num2;
  } else if (operation === "multiply") {
    actualResult = num1 * num2;
  }

  const resultElement = document.getElementById("calcResult");

  if (userResult === actualResult) {
    resultElement.textContent = "Correct!";
    resultElement.style.backgroundColor = "lightgreen";
  } else {
    resultElement.textContent = `Wrong! The correct answer is ${actualResult}`;
    resultElement.style.backgroundColor = "red";
  }

  clearInputs("a3", "b3", "result");
}

function clearInputs(...ids) {
  ids.forEach(id => {
    document.getElementById(id).value = "";
  });
}

