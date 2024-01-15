let btnNum = document.querySelectorAll('.calc-number')
let btnOperator = document.querySelectorAll('.calc-operator')
let display = document.querySelector('input')
let point = document.querySelector('.point')
let btnDel = document.querySelector('.delete-calc')
let btnClear =  document.querySelector('.clear-calc')
let btnSum = document.querySelector('.calc-equals')
let currentNum = ""





let add = (num1, num2) =>  {
    return num1 + num2
}

let subtract = (num1, num2) =>  {
    return   num1 - num2
}

let multiply = (num1, num2) =>  {
    return num1 * num2
}

let divide = (num1, num2) => {
    return num1 / num2  
}


let operate = (storedNum, operator, currentNum) => {
        return operator(currentNum, storedNum)
    }


let updateDisplay = (btn) =>  {
    currentNum = currentNum + btn.innerText.toString()
    display.value = currentNum
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



btnDel.addEventListener('click', () => {
    calculate = {
        sum() {
            return operate(this.current, this.operator, this.store)
        }
    }
})

btnClear.addEventListener('click', () => {
    delete calculate.current
    currentNum = ""
    display.value = ""
})

btnOperator.forEach(button => {
    button.addEventListener('click', () => { {
        if(calculate.current == 0 && calculate.operator == divide) {
            alert("Don't divide by zero")
            delete calculate.store
            delete calculate.operator 
            delete calculate.current      
        }
         else if(!calculate.store && calculate.current) {
            // console.log("click")
            calculate.store = calculate.current
            delete calculate.current
        } else if(calculate.current && calculate.store) {
            // console.log("else click")
            calculate.store = calculate.sum()
            display.value = calculate.store
            delete calculate.current
        }    
    } 

    })
})


btnOperator.forEach(button => {
    button.addEventListener('click', () => {
        switch(button.innerText) {
            case "+": 
            calculate.operator = add
            // console.log("add")
            
            break

            case "-":
            calculate.operator= subtract
            // console.log("subtract")
            break

            case "x": 
            calculate.operator = multiply
            // console.log("multiply")
            break

            case "/":
            calculate.operator = divide
            // console.log("divide")
            break
        }

        currentNum = ""

    })
})

btnSum.addEventListener('click', () => {
    console.log("click!")
    if(!calculate.store) {
        return ""
    }
    calculate.current = calculate.sum()
    display.value = calculate.current
    currentNum = ""
    delete calculate.store
    if(!currentNum && calculate.current){
        return ""
    } else if (calculate.store == 0) {
        alert("Don't divide by Zero!")
        delete calculate.store
        delete calculate.operator
    } 
})
// default holder for the numbers


let calculate = {

    sum() {
        return operate(this.current, this.operator, this.store)
    }
}

