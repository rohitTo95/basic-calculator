
// Function for calculation of numbers 
let calculation = (string) => {
    return new Function('return ' + string);
}

// Function for validation of user input 
let inputChecker = (array, str) => {
    for (let i = 0; i < array.length; i++) {
        if (str.includes(array[i])) {
            return 0;
        }
    }
    return 1;
}

let inputs = "", errorCase = ["++", "+*", "+-", "+/", "+%", "--", "-*", "-/", "-+", "-%", "**", "*+", "*-", "*/", "*%", "//", "/+", "/-", "/*", "/%", "%%", "%+", "%-", "%*", "%/"];
let buttons = document.querySelectorAll("button")
Array.from(buttons).forEach(button => {
    button.addEventListener("click", (e) => {

        // This is for changing CSS of inputs tags 
        if (e.target.innerHTML == "AC" || e.target.innerHTML != "=") {
            document.getElementById("calculate").classList.add("bigFont");
            document.getElementById("result").classList.remove("bigFont");
        }

        // For equal to button 
        if (e.target.innerHTML == "=") {

            // Cheking the input enterd by the user 
            let status = inputChecker(errorCase, inputs);
            if (status == 1) {
                inputs = calculation(inputs)();
                document.getElementById("result").value = inputs;
                document.getElementById("calculate").classList.remove("bigFont");
                document.getElementById("result").classList.add("bigFont");
            }
            else {
                document.getElementById("calculate").value = "Error";
            }
        }

        // For delete all button 
        else if (e.target.innerHTML == "AC") {
            inputs = "";
            document.getElementById("result").value = inputs;
            document.getElementById("calculate").value = inputs;
            document.getElementById("calculate").classList.toggle("bigFont");
        }
        else {
            inputs += e.target.innerHTML;
            document.getElementById("calculate").value = inputs;
        }
    })
});

// Real time claculation
setInterval(() => {
    if (inputs.length > 0) {
        document.getElementById("result").value = calculation(inputs)();
    }
}, 10)

//For delete button
document.getElementById("delete").addEventListener("click", () => {
    inputs = inputs.replace(/.$/, '');
    document.getElementById("calculate").value = inputs;
    document.getElementById("result").value = inputs;
})