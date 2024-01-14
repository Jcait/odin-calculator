let btn = document.querySelectorAll('button')
let display = document.querySelector('input')
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

btn.forEach(button => {
    button.addEventListener('click', () => {
        firstNum = firstNum+ button.innerText.toString()
        display.value = firstNum
    }) 
})
