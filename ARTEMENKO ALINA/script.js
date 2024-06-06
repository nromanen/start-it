function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Click on the default tabb
document.getElementById("defaultOpen").click();

function myFunction() {
    document.getElementById("demo").innerHTML = new Date().toLocaleString();
}

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
}
    const isCorrect = num1 / num2 === sum;

    if (isCorrect) {
        resultElement.textContent = "The division is correct!";
    } else {
        resultElement.textContent = "The division is incorrect!";
    }
