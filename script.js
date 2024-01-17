let btnNum = document.querySelectorAll('.calc-number')
let btnOperator = document.querySelectorAll('.calc-operator')
let display = document.querySelector('input')
// let point = document.querySelector('.point')
// let btnDel = document.querySelector('.delete-calc')
// let btnClear =  document.querySelector('.clear-calc')
let btnSum = document.querySelector('.calc-equals')
// let btn = document.querySelectorAll('button')
// let currentNum = ""
// let btnText = ""
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
    currentNum.push(button.innerText)
    display.value = display.value + button.innerText
}

// NUMBER BUTTONS

btnNum.forEach(button => {
    button.addEventListener('click', () => {
        if(operator && !storedNum.length) {
            storedNum = currentNum.concat()
            currentNum = []
            updateDisplay(button)
        } else if(!operator && storedNum.length) {
            display.value = ""
            storedNum = []
            updateDisplay(button)
        }
        else {
            updateDisplay(button)
        }
    }) 
})

// OPERATOR BUTONS

btnOperator.forEach(button => {
    button.addEventListener('click', () => {
        if(!operator){
            updateDisplay(button)
        } else if(currentNum.includes(button.innerText)
        || !currentNum.length) {
            return ""
        } else if(!currentNum.includes(button.innerText)){
            console.log("test")
            currentNum.pop()
            currentNum.push(button.innerText)
            display.value = currentNum.join("")
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
    let firstNum = Number(storedNum.join("").replace(/\D/g,''));
    let secondNum = Number(currentNum.join("").replace(/\D/g,''))
    // console.log(currentNum)
    // console.log(firstNum)
    // console.log(storedNum)
    // console.log(secondNum)
    console.log(operator(firstNum, secondNum))
    currentNum = []
    storedNum = operator(firstNum, secondNum).toString().split("")
    display.value = storedNum.join("")
    operator = ""
    
})



// let operate = (storedNum, operator, currentNum) => {
//         return operator(currentNum, storedNum)
//     }

//     let calculate = {
//         sum() { 
//             return operate(this.current, this.operator, this.store)
//         }   
//     }
    


// let updateDisplay = (btn) =>  {
//     currentNum = currentNum + btn.innerText.toString()
//     display.value = display.value + `${btn.innerText}`
// }


// btnNum.forEach(button => {
//     button.addEventListener('click', () => {
//         updateDisplay(button)
//         calculate.current = Number(currentNum)
//         if(calculate.summed) {
//             display.value = currentNum
//             calculate.summed = false
//         }
//     }) 
// })


// point.addEventListener('click', () => {
//     if (currentNum.includes(".") || currentNum == "") {
//         return ""
//     } else {
//         updateDisplay(point)
//     }
// })



// btnDel.addEventListener('click', () => {
//     currentNum = ""
//     display.value = ""
//     btnText = ""
//     calculate = {
//         sum() {
//             return operate(this.current, this.operator, this.store)
//         }
//     }
// })
// btnClear.addEventListener('click', () => {
//     if(!calculate.store) {
//         console.log("wew")
//         display.value = ""
//         return ""
//     } else {
//         display.value = `${calculate.store}`
//     }
// })
// btnClear.addEventListener('click', () => {
//     delete calculate.current
//     delete calculate.operator
//     currentNum = ""
//     btnText = ""
// })



// btnOperator.forEach(button => {
//     button.addEventListener('click', () => { {
//             if(!calculate.store 
//                 && calculate.current ) {
//             // console.log("click")
//             calculate.store = Number(calculate.current)
//             delete calculate.current
//         } 
//         else if (calculate.current === 0) {
//             display.value = calculate.sum()
//             calculate.store === 0
//             display.value  === ""

//         }
        
//         else if(calculate.current 
//             && (calculate.store || calculate.store === 0)) {
//             calculate.store = calculate.sum()
//             display.value = `${calculate.store} ${btnText} `
//             delete calculate.current
//         }    
//     } 

//             currentNum = ""  

//     })
// })

// btnOperator.forEach(button => {
//     button.addEventListener('click', () => {
//                 if(calculate.current === 0) {
//             display.value = display.value + ` ${button.innerText} `
//             btnText = ""   
//         }
//         else if(btnText === button.innerText ) {
//             console.log("woof")
//             return ""            
//         } 
//         else if (btnText && button.innerText !== btnText) {
//             console.log(btnText)
//             console.log(button.innerText)
//             console.log("meow")
//             display.value = display.value.replace(btnText, button.innerText)
//         } 

//         else {
//             display.value = display.value + ` ${button.innerText} `
//             btnText = ""
//         }
//     })
// })









// btnSum.addEventListener('click', () => {
//     console.log("click!")
//     calculate.summed = true
  
//     if(!calculate.store && calculate!== 0) {
//         return ""
//     }
//     else if(calculate.store === 0) {
//         display.value = display.value + ` ${button.innerText} `
//     }
//     calculate.current = calculate.sum()
//     display.value = Number(calculate.current)
//     currentNum = ""
//     delete calculate.store
//     if(!currentNum && calculate.current){
//         return ""
//     }  

// })


