let btnNum = document.querySelectorAll('.calc-number')
let btnOperator = document.querySelectorAll('.calc-operator')
let display = document.querySelector('input')
let btnSum = document.querySelector('.calc-equals')
let btnGoBack = document.querySelector(".clear-calc")
let btnDel = document.querySelector(".delete-calc")
let currentNum = []
let storedNum = []
let  operator 
let opSymbol = ""
   

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
let updateDisplay = (button) => {
    currentNum.push(Number(button.innerText))
    display.value = display.value + button.innerText
}

let calculate = () => {
    if(!currentNum.length) {
        return
    }
    let firstNum = Number(storedNum);
    let secondNum = Number(currentNum.join("").replace(/\D/g,''))
        console.log(operator(firstNum, secondNum))
        currentNum = []
        storedNum.push(operator(firstNum, secondNum))
        display.value = operator(firstNum, secondNum)
        storedNum.shift()
        operator = ""
}

// NUMBER BUTTONS

btnNum.forEach(button => {
    button.addEventListener('click', () => {
        if(!currentNum.length 
            && button.innerText ==="0"
            && !storedNum.length) {
                return
            }
        else if(operator && !storedNum.length) {
            let joinedArr = (currentNum.join(""))
            storedNum.push(Number(joinedArr))
            currentNum = []
            updateDisplay(button)
        } else if(!operator && storedNum.length) {
            display.value = ""
            storedNum = []
            updateDisplay(button)
        } 
        else if(storedNum.includes(Infinity)) {
            updateDisplay(button)
            return
        }
        else {
            updateDisplay(button)
        }
    }) 
})

// OPERATOR BUTONS

btnOperator.forEach(button => {
    button.addEventListener('click', () => {
        let i = display.value.length
        let dupeSymbol = display.value.charAt(i-1)
            if(operator
            && currentNum.length
            && storedNum.length) {
                calculate()
                display.value = display.value + `${button.innerText}`
        }

         else if(display.value == "") {
            console.log("empty")
            return ""
        } 

        else if(!operator){
            display.value = display.value + `${button.innerText}`
        } 
        else if(!storedNum.length) {
            display.value = display.value.replace(dupeSymbol, button.innerText)

            console.log("replaced")
        }
        else if (!currentNum.length && storedNum.length){
            display.value = display.value.replace(dupeSymbol, button.innerText)

        } 

    })
})





btnOperator.forEach(button => {
    button.addEventListener('click', () => {
        switch(button.innerText) {
            case "+": 
            operator = add
            opSymbol = button.innerText
            break

            case "-":
            operator = subtract
            opSymbol = button.innerText
            break

            case "x": 
            operator = multiply
            opSymbol = button.innerText
            break

            case "/":
            operator = divide
            opSymbol = button.innerText
            break
        }

    })
})

// Equals button, own func for readability

btnSum.addEventListener('click', () => {
    calculate()
    
})

// delete and clear buttons

btnGoBack.addEventListener('click',  () => {
    let i = display.value.length
    let dupeSymbol = display.value.charAt(i-1)
    console.log(i)
    console.log(dupeSymbol)
    if(!currentNum.length) {
        return
    } else {
        currentNum.pop()
        display.value = display.value.slice(0, display.value.length - 1)
    }
})

btnDel.addEventListener('click', () => {
    currentNum = []
    storedNum = []
    operator = ""
    display.value = ""
})
// test





