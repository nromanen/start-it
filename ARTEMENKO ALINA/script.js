function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Default open tab
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tablink').click();
});

function checkSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = parseFloat(document.getElementById('sum').value);

    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || isNaN(sum)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    const isCorrect = num1 + num2 === sum;

    if (isCorrect) {
        resultElement.textContent = "The sum is correct!";
    } else {
        resultElement.textContent = "The sum is incorrect!";
    }
}

function checkSubtraction() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = parseFloat(document.getElementById('sum').value);

    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || isNaN(sum)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    const isCorrect = num1 - num2 === sum;

    if (isCorrect) {
        resultElement.textContent = "The subtraction is correct!";
    } else {
        resultElement.textContent = "The subtraction is incorrect!";
    }
}

function checkMultiplication() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = parseFloat(document.getElementById('sum').value);

    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || isNaN(sum)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    const isCorrect = num1 * num2 === sum;

    if (isCorrect) {
        resultElement.textContent = "The multiplication is correct!";
    } else {
        resultElement.textContent = "The multiplication is incorrect!";
    }
}

function checkDivision() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = parseFloat(document.getElementById('sum').value);

    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || isNaN(sum)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    const isCorrect = num1 / num2 === sum;

    if (isCorrect) {
        resultElement.textContent = "The division is correct!";
    } else {
        resultElement.textContent = "The division is incorrect!";
    }
}

// Display greeting based on the time of day
const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Good day!";
} else {
    greeting = "Good evening!";
}

document.getElementById("demo1").innerHTML = greeting;
