let btnNum = document.querySelectorAll('.calc-number')
let btnOperator = document.querySelectorAll('.calc-operator')
let display = document.querySelector('input')
let point = document.querySelector('.point')
let btnDel = document.querySelector('.delete-calc')
let btnClear =  document.querySelector('.clear-calc')
let currentNum = ""
let storedNum = ""
let operator



let add = (num1, num2) =>  {
    return num1 + num2
}

let calculate = {

    sum() {
        return this.current + this.store
    }
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


let operate = (operator, currentNum, storedNum) => {
    return operator(currentNum, storedNum)
}

btnNum.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button)
    }) 
})

point.addEventListener('click', () => {
    if (currentNum.includes(".")) {
        return ""
    } else {
        updateDisplay(point)
    }
})

let updateDisplay = (btn) =>  {
    currentNum = currentNum + btn.innerText.toString()
    display.value = currentNum
}

btnDel.addEventListener('click', () => {
    calculate = {
        sum() {
            return this.current + this.store

        }
    }
})

btnClear.addEventListener('click', () => {
    currentNum = ""
    display.value = ""
})

btnOperator.forEach(button => {
    button.addEventListener('click', () => {
        display.value = ""
        if(calculate.store) {
            calculate.current = parseInt(currentNum)
            currentNum = ""
        } else {
           calculate.store = parseInt(currentNum) 
           currentNum = ""
        }
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
