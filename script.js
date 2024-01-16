let btnNum = document.querySelectorAll('.calc-number')
let btnOperator = document.querySelectorAll('.calc-operator')
let display = document.querySelector('input')
let point = document.querySelector('.point')
let btnDel = document.querySelector('.delete-calc')
let btnClear =  document.querySelector('.clear-calc')
let btnSum = document.querySelector('.calc-equals')
let btn = document.querySelectorAll('button')
let currentNum = ""
let btnText = ""





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

    let calculate = {
        sum() { 
            return operate(this.current, this.operator, this.store)
        }   
    }
    


let updateDisplay = (btn) =>  {
    currentNum = currentNum + btn.innerText.toString()
    display.value = display.value + `${btn.innerText}`
}


btnNum.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button)
        calculate.current = Number(currentNum)
        if(calculate.summed) {
            display.value = currentNum
            calculate.summed = false
        }
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
    currentNum = ""
    display.value = ""
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
            if(!calculate.store 
                && calculate.current ) {
            // console.log("click")
            calculate.store = Number(calculate.current)
            delete calculate.current
        } 
        else if (calculate.current === 0) {
            calculate.store = Number(calculate.sum())
            delete calculate.current
        }
        else if(calculate.current 
            && (calculate.store || calculate.store === 0)) {
            calculate.store = calculate.sum()
            display.value = `${calculate.store} ${btnText} `
            delete calculate.current
        }    
    } 

            currentNum = ""  

    })
})

btnOperator.forEach(button => {
    button.addEventListener('click', () => {
        if(btnText === button.innerText ) {
            console.log("woof")
            return ""            
        } 
        else if (btnText && button.innerText !== btnText) {
            console.log(btnText)
            console.log(button.innerText)
            console.log("meow")
            display.value = display.value.replace(btnText, button.innerText)
        } 
        else {
            display.value = display.value + ` ${button.innerText} `
            btnText = ""
        }
    })
})


btnOperator.forEach(button => {
    button.addEventListener('click', () => {
        switch(button.innerText) {
            case "+": 
            calculate.operator = add
            calculate.sum()
            btnText = "+"
            
            break

            case "-":
            calculate.operator= subtract
            calculate.sum()
            btnText = "-"
            break

            case "x": 
            calculate.operator = multiply
            calculate.sum()
            btnText = "x"
            break

            case "/":
            calculate.operator = divide
            calculate.sum()
            btnText = "/"

            break
        }

    })
})






btnSum.addEventListener('click', () => {
    console.log("click!")
    calculate.summed = true
  
    if(!calculate.store) {
        return ""
    }
    calculate.current = calculate.sum()
    display.value = calculate.current
    currentNum = ""
    delete calculate.store
    if(!currentNum && calculate.current){
        return ""
    }  

})

btnSum.addEventListener('click', () => {
        if(!Number(calculate.current)) {
            display.value = "Infinity"
        }
        btnText = ""
    })


