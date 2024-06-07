let min = document.getElementById("input1");
let max = document.getElementById("input2");

let resultInput = document.getElementById("result");
resultInput.addEventListener("change", () => {
  if (document.getElementById("result").value != null) {
    document.getElementById("check").disabled = false;
  }
});

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function generate() {
//   document.getElementById("a").value = getRandomInt(min.value, max.value);
//   document.getElementById("b").value = getRandomInt(min.value, max.value);
// }

first.value = a;
second.value = b;

function check() {
  let action = document.getElementById("action").value;
  let a = first.value;
  let b = second.value;

  let rightAnswer = undefined;
  switch (action) {
    case "sum":
      rightAnswer = Number(a) + Number(b);
      break;
    case "subtract":
      rightAnswer = Number(a) - Number(b);
      break;
    case "multiply":
      rightAnswer = Number(a) * Number(b);
      break;
    case "divide":
      rightAnswer = Number(a) / Number(b);
      break;
    default:
      rightAnswer = "select an action";
  }

  let userAnswer = document.getElementById("result").value;
  let successMessage = document.getElementById("ok");
  let failedMessage = document.getElementById("nok");

  if (userAnswer == rightAnswer) {
    successMessage.style.display = "block";
    failedMessage.style.display = "none";
  } else {
    failedMessage.style.display = "block";
    successMessage.style.display = "none";
  }

  // document.getElementById("result").value
}
