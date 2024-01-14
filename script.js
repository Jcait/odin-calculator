let btnNum = document.querySelectorAll('.calc-number')
let btnOperator = document.querySelectorAll('.calc-operator')
let display = document.querySelector('input')
let point = document.querySelector('.point')
let btnDel = document.querySelector('.delete-calc')
let btnClear =  document.querySelector('.clear-calc')
let currentNum = ""
let storedNum = ""



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


let operate = (currentNum, operator, storedNum) => {
    if(operator == divide && currentNum === 0){
        alert("Dividing by zero will doom us all!")
    } else {
        return operator(currentNum, storedNum)
    }
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
        // Checks if theres no number
        if(!currentNum){
            return ""
        } 
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
            calculate.operator = add
            break

            case "-":
            calculate.operator= subtract
            break

            case "x": 
            calculate.operator = multiply
            break

            case "/":
            calculate.operator = divide
            break
        }
        if (calculate.store && calculate.current) {
            calculate.store = calculate.sum()
            display.value = calculate.store
        }
        calculate.sum()

    })
})

// default holder for the numbers
let calculate = {

    sum() {
        return operate(this.current, this.operator, this.store)
    }
}