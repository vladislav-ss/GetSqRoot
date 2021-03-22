let number;
let decimalNumber;
const getRootButton = document.querySelector("button.get-value");
const outputText = document.querySelector("div.output");


getRootButton.addEventListener('click', () => {
    number = document.getElementById("input").value;
    decimalNumber = document.getElementById("decimals").value;
    if (decimalNumber < 1) {
        giveOutput(number)
    } else {
        giveOutput(number, decimalNumber)
    }
    })

function giveOutput(num, dec = 2) {
    result = Math.sqrt(num).toFixed(dec);
    outputText.textContent = `The square root of ${num} is ${result}`;
}