// Calculator

// 1. Display 

function display(e) {

    if(e.target.innerHTML == "x") {
        document.querySelector("#input").value +=  "*";
    }

    else if(e.target.innerHTML == "÷") {
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

function calculate() {
   let eva = document.querySelector("#input").value;
   document.querySelector("#input").value = eval(eva);

   if(document.querySelector("#input").value == "undefined") {
    document.querySelector("#input").value = "";
   }
}

// Percentage

function percent() {
    let p = document.querySelector("#input");
    p.value = parseFloat(p.value) / 100;
}

// 4. Delete

function del() {
    let str = document.querySelector("#input").value;
    document.querySelector("#input").value = str.slice(0,-1);
}