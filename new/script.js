function showAssignment(num) {
    // Hide all assignments
    for (let i = 1; i <= 4; i++) {
        document.getElementById('assignment' + i).style.display = 'none';
    }
    // Show the selected one
    document.getElementById('assignment' + num).style.display = 'block';
}

// Assignment 1: Conversions
function convert() {
    console.log('Convert function called'); // For debugging
    const value = parseFloat(document.getElementById('inputValue').value);
    const fromElements = document.getElementsByName('fromUnit');
    const toElements = document.getElementsByName('toUnit');
    
    let from = '';
    let to = '';
    
    // Get selected "from" unit
    for (let elem of fromElements) {
        if (elem.checked) {
            from = elem.value;
            break;
        }
    }
    
    // Get selected "to" unit
    for (let elem of toElements) {
        if (elem.checked) {
            to = elem.value;
            break;
        }
    }
    
    // Input validation
    if (isNaN(value)) {
        document.getElementById('result1').innerText = 'Error: Please enter a valid number.';
        return;
    }
    
    let result;
    if (from === to) {
        result = value;
        document.getElementById('result1').innerText = `No conversion needed. Result: ${result.toFixed(2)} ${to}`;
        return;
    }
    
    if (from === 'celsius' && to === 'fahrenheit') {
        result = (value * 9/5) + 32;
    } else if (from === 'fahrenheit' && to === 'celsius') {
        result = (value - 32) * 5/9;
    } else if (from === 'meters' && to === 'feet') {
        result = value * 3.28084;
    } else if (from === 'feet' && to === 'meters') {
        result = value / 3.28084;
    } else {
        document.getElementById('result1').innerText = 'Error: Invalid conversion pair.';
        return;
    }
    
    document.getElementById('result1').innerText = `Result: ${result.toFixed(2)} ${to}`;
}

// Assignment 2: Income Tax Calculator (Simple US-like brackets)
function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    let tax = 0;
    if (income <= 10000) {
        tax = income * 0.1;
    } else if (income <= 50000) {
        tax = 1000 + (income - 10000) * 0.2;
    } else {
        tax = 9000 + (income - 50000) * 0.3;
    }
    document.getElementById('result2').innerText = `Tax: $${tax.toFixed(2)}`;
}

// Assignment 3: Factorial (while), Sum (do-while), Average (for)
function calculateN() {
    const n = parseInt(document.getElementById('n').value);
    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    let sum = 0;
    i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    let average = 0;
    for (let j = 1; j <= n; j++) {
        average += j;
    }
    average /= n;
    document.getElementById('result3').innerText = `Factorial: ${factorial}, Sum: ${sum}, Average: ${average.toFixed(2)}`;
}

// Assignment 4: Simple Payroll
function calculatePayroll() {
    const hours = parseFloat(document.getElementById('hours').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const gross = hours * rate;
    const tax = gross * 0.2; // Assume 20% tax
    const net = gross - tax;
    document.getElementById('result4').innerText = `Gross Pay: $${gross.toFixed(2)}, Tax: $${tax.toFixed(2)}, Net Pay: $${net.toFixed(2)}`;
}