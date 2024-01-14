let btnNum = document.querySelectorAll('.calc-number')
let btnOperator = document.querySelectorAll('.calc-operator')
let display = document.querySelector('input')
let point = document.querySelector('.point')
let firstNum = ""
let secondNum = ""
let operator

let calculate = {


}

display.value = `${firstNum}`

let add = (num1, num2) =>  {
    return num1 + num2
}

let subtract = (num1, num2) =>  {
    return num1 - num2
}

let multiply = (num1, num2) =>  {
    return num1 * num2
}

let divide = (num1, num2) =>  {
    return num1 / num2
}


let operate = (operator, firstNum, secondNUm) => {
    return operator(firstNum, secondNUm)
}

btnNum.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button)
    }) 
})

point.addEventListener('click', () => {
    if (firstNum.includes(".")) {
        return ""
    } else {
        updateDisplay(point)
    }
})

let updateDisplay = (btn) =>  {
    firstNum = firstNum + btn.innerText.toString()
    display.value = firstNum
}

btnOperator.forEach(button => {
    button.addEventListener('click', () => {
        display.value = ""
        calculate.num1 = parseInt(firstNum)
        firstNum = ""
        switch(button.innerText) {
            case "+": 
            console.log("ow!")
            break

            case "-":
            calculate.oper= subtract
            break

            case "x": 
            calculate.oper = multiply
            break

            case "/":
            calculate.oper = divide
            break
        }
    })
})
