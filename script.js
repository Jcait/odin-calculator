let btnNum = document.querySelectorAll('.calc-number')
let btnOperator = document.querySelectorAll('.calc-operator')
let display = document.querySelector('input')
let point = document.querySelector('.point')
let btnDel = document.querySelector('.delete-calc')
let btnClear =  document.querySelector('.clear-calc')
let btnSum = document.querySelector('.calc-equals')
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


let operate = (storedNum, operator, currentNum) => {
    if(operator == divide && currentNum === 0){
        alert("Dividing by zero will doom us all!")
    } else {
        return operator(currentNum, storedNum)
    }
}

btnNum.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button)
        if(calculate.store) {
            calculate.store = parseInt(currentNum)
        } else {
           calculate.current = parseInt(currentNum) 
        }
        
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
            return operate(this.store, this.operator, this.current)
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
        currentNum = ""
        calculate.sum()

    })
})
btnSum.addEventListener('click', () => {
    if(!currentNum){
        return ""
    } 
    calculate.sum()
    display.value = calculate.sum()
    calculate.store = calculate.sum()
    delete calculate.current
    delete calculate.operator
})
// default holder for the numbers
let calculate = {

    sum() {
        return operate(this.current, this.operator, this.store)
    }
}

