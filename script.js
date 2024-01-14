let btnNum = document.querySelectorAll('.calc-number')
let btnOperator = document.querySelectorAll('calc-operator')
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
        // firstNum = firstNum + button.innerText.toString()
        // display.value = firstNum
        displayUpdate(button)
    }) 
})

point.addEventListener('click', () => {
    if (firstNum.includes(".")) {
        return ""
    } else {
        // firstNum = firstNum + point.innerText.toString()
        // display.value = firstNum
        displayUpdate(point)
    }
})

let displayUpdate = (btn) =>  {
    firstNum = firstNum + btn.innerText.toString()
    display.value = firstNum
}
