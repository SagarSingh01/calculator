// Calculator

// 1. Display 

function display(e) {

    if (e.target.innerHTML == "x") {
        document.querySelector("#input").value += "*";
    }

    else if (e.target.innerHTML == "÷") {
        document.querySelector("#input").value += "/";
    }

    else {
        document.querySelector("#input").value += e.target.innerHTML;
    }
}

// 2. Clear Screen

function clearDisplay() {
    document.querySelector("#input").value = "";
}

// 3. Evaluate

function calculate(e) {

    if (document.querySelector("#input").value === "") return;

    let input = document.querySelector("#input").value;

    try {
        input = input
            .replace(/x/g, "*")
            .replace(/÷/g, "/")
            .replace(/sin\((.*?)\)/g, "Math.sin(($1) * Math.PI / 180)")
            .replace(/cos\((.*?)\)/g, "Math.cos(($1) * Math.PI / 180)")
            .replace(/tan\((.*?)\)/g, "Math.tan(($1) * Math.PI / 180)")
            .replace(/log\((.*?)\)/g, "Math.log10($1)");

        let result = eval(input);

        document.querySelector("#input").value = parseFloat(result.toFixed(2));
    }
    catch {
        document.querySelector("#input").value = "Error";
    }
}

// Percentage

function percent() {
    let p = document.querySelector("#input");
    if(p.value === "") return;
    p.value = parseFloat(p.value) / 100;
}

// 4. Delete

function del() {
    let str = document.querySelector("#input").value;
    document.querySelector("#input").value = str.slice(0, -1);
}

// Trigonometric Functions

function trigFunc(value) {
    document.querySelector("#input").value += value;
}

// Square 

function power() {
    let square = document.querySelector("#input");
    if (square.value === "") return;
    square.value = square.value ** 2;
}

// Square Root

function sqrt() {
    let sqRoot = document.querySelector("#input");
    if (sqRoot.value === "") return;
    sqRoot.value = Math.sqrt(eval(sqRoot.value));
}