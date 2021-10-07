let myNumbers = document.getElementsByClassName("nums")
function numbersInput() {
    for (let i = 0; i < myNumbers.length; i++) {
        myNumbers[i].onclick = () => {
            numbersDisplay.innerText += myNumbers[i].value
        }
    }
}
numbersInput()

let input = 0;
let input2 = 0;
let sum = 0;
function operators(operator) {
    input = Number(numbersDisplay.innerText);
    switch (operator) {
        case "+":
            current.innerText=`${input}+`
            numbersDisplay.innerText = " "
            calculate.onclick = () => {
                current.innerText=" "
                input2 = Number(numbersDisplay.innerText)
                current.innerText=`${input}+${input2}`
                sum = input + input2
                numbersDisplay.innerText = sum
            }
            break
        case "-":
            current.innerText=`${input}-`
            numbersDisplay.innerText = " "
            calculate.onclick = () => {
                input2 = Number(numbersDisplay.innerText)
                current.innerText=`${input}-${input2}`
                sum = input - input2
                numbersDisplay.innerText = sum
            }
            break
        case "*":
            current.innerText=`${input}*`
            numbersDisplay.innerText = " "
            calculate.onclick = () => {
                input2 = Number(numbersDisplay.innerText)
                current.innerText=`${input}*${input2}`

                sum = input * input2
                numbersDisplay.innerText = sum
            }
            break
        case "/":
            current.innerText=`${input}/`
            numbersDisplay.innerText = " "
            current
            calculate.onclick = () => {
                input2 = Number(numbersDisplay.innerText)
                current.innerText=`${input}/${input2}`
                sum = input / input2
                numbersDisplay.innerText = sum
            }
            break
        default:
            numbersDisplay.innerText = " "
            current.innerText=" "
            input = 0;
            input2 = 0;
            sum = 0;
            break;
    }
}

let myOperators = document.getElementsByClassName("operators")
for (let i = 0; i < myOperators.length; i++) {
    myOperators[i].onclick = () => {
        operators(myOperators[i].value)
    }
}

