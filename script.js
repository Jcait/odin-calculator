let btnNum = document.querySelectorAll('.calc-number')
let btnOperator = document.querySelectorAll('.calc-operator')
let display = document.querySelector('input')
let point = document.querySelector('.point')
let btnDel = document.querySelector('.delete-calc')
let btnClear =  document.querySelector('.clear-calc')
let btnSum = document.querySelector('.calc-equals')
let currentNum = ""


let checkZero = () => {
        alert("You'll doom us dividing by 0")
        delete calculate.current
        throw error("Do NOT divide by zero")
}

let add = (num1, num2) =>  {
    return num1 + num2
}

let subtract = (num1, num2) =>  {
    return  num1 - num2
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
        calculate.current = parseInt(currentNum)
    }) 
})

point.addEventListener('click', () => {
    if (currentNum.includes(".") || currentNum == "") {
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
    button.addEventListener('click', () => { {
        if(!calculate.store) {
            console.log("click")
            calculate.store = calculate.current
            delete calculate.current
        } else if(calculate.current && calculate.store) {
            console.log("else click")
            calculate.store = calculate.sum()
            display.value = calculate.store.toString()
            delete calculate.current
        }   else if(!Number.isFinite(calculate.calculate)) {
            checkZero()
        }
    } 

    })
})

btnOperator.forEach(button => {
    button.addEventListener('click', () => {
     
        switch(button.innerText) {
            case "+": 
            calculate.operator = add
            console.log("add")
            
            break

            case "-":
            calculate.operator= subtract
            console.log("subtract")
            break

            case "x": 
            calculate.operator = multiply
            console.log("multiply")
            break

            case "/":
            calculate.operator = divide
            console.log("divide")
            break
        }

        currentNum = ""

    })
})
btnSum.addEventListener('click', () => {
    if(!currentNum && calculate.current){
        return ""
    } else if(!Number.isFinite(calculate.calculate)) {
        checkZero()
    }
    calculate.current = calculate.sum()
    display.value = calculate.current
    currentNum = ""
    delete calculate.store
})
// default holder for the numbers
let calculate = {

    sum() {
        return operate(this.current, this.operator, this.store)
    }
}

