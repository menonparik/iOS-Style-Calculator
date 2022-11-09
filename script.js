const btnNum = document.querySelectorAll(".num")
const operationBtn = document.querySelectorAll(".mat")
const text = document.querySelector(".text")
const resultBtn = document.querySelector(".result")



let getValue = () =>{
    for(let i = 0; i<btnNum.length; i++)
    {
        btnNum[i].addEventListener('click', e => {
            text.textContent += e.target.innerText
        })  
    }
}


let calcValue = () => {
    for(let i = 0; i<operationBtn.length; i++){
        operationBtn[i].addEventListener('click', e => {
            if(e.target.innerText  == "+"){
                text.textContent+="+"
            }

            else if(e.target.innerText == "-"){
                text.textContent+="-"
            }

            else if(e.target.innerText == "X"){
                text.textContent+="*" 
            }

            else if(e.target.innerText == "÷"){
                text.textContent+="/"
            }

            else if(e.target.innerText == "AC"){
                text.textContent = " "
            }

            else if(e.target.innerText == "C"){
                let str = text.textContent
                let newArr =str.split('')
                newArr.pop()
                let newStr = newArr.join('')
                text.textContent = newStr; 
            }

            else if(e.target.innerText == "%"){
                text.textContent +="%"
            }

            else if(e.target.innerText == "."){
                text.textContent +="."
            }
        })
    }
}


resultBtn.addEventListener('click', () => {
    text.innerText = eval(text.innerText)
})

calcValue()
getValue()