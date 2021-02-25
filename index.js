const one = `&#9856`
const two = `&#9857`
const three = `&#9858`
const four = `&#9859`
const five = `&#9860`
const six = `&#9861`

document.addEventListener('DOMContentLoaded', () => {
    let newArr = []
    let count = 0
    let button = document.querySelector('button')

    button.addEventListener('click', () => {
        let input = document.querySelector('input').value
        let dieOutput = document.getElementById('dice-para')
        let output = document.getElementById('sum-para')
        let numArr = []
        let sum 

        function sumDie () {
            count += 1
            for (let i = 0; i < input; i += 1) {
                numArr.push(Math.floor(Math.random() * 6 + 1))
            }

            sum = numArr.reduce((a, b) => a + b)
            output.textContent = `Sum = ${sum}`
        }
        sumDie()

        function displayDie () {
           let img = ''
           
           numArr.forEach(num => {
               switch(num) {
                   case 1: img += one;
                   break
                   case 2: img += two;
                   break
                   case 3: img += three;
                   break
                   case 4: img += four;
                   break
                   case 5: img += five;
                   break
                   case 6: img += six;
                   break
               }
           })
           dieOutput.innerHTML = img
           newArr.push({dieImg: img, dieSum: sum})
        }
        displayDie()
     
        if (count > 1) {
            let list = document.querySelector('ul')
            let li = document.createElement('li')
            li.innerHTML = `${newArr[0].dieImg} = ${newArr[0].dieSum}`
            list.appendChild(li)
            newArr.shift()
        }  
    }) 
})