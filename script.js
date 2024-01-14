let btnNum = document.querySelectorAll('calc-num')
let mOperator = documt.querySelectorAll('calc-operator')
let display = document.querySelector('input')
let point = document.querySelector('.point')
let firstNum = ""
let secondNum = ""
let operator

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
        firstNum = firstNum+ button.innerText.toString()
        display.value = firstNum
    }) 
})

point.addEventListener('click', () => {
    point.disabled = true
})
