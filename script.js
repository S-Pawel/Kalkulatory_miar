let conNumber = document.querySelector('#conNumber')
let convBtn = document.querySelector('.conv')
const result = document.querySelector('.result')

const one = document.querySelector('.one')
const two = document.querySelector('.two')

let lButton1 = document.querySelector('#button1')
    let lButton2 = document.querySelector('#button2')
let lButton3 = document.querySelector('#button3')
    let lButton4 = document.querySelector('#button4')
let lButton5 = document.querySelector('#button5')
    let lButton6 = document.querySelector('#button6')


let fahrenheit
let celsius
let kelwin
let temperature



        temperature = () =>{
        if(one.textContent === 'Celsjuszy' && two.textContent === `Fahrenheity`){
                    fahrenheit = conNumber.value * 1.8 + 32
                    if (conNumber.value !== '0' && fahrenheit===32) {
                        result.textContent = `Podaj wartość`    }   
                    else{
                        result.textContent = `${conNumber.value} Celsjuszy to ${fahrenheit.toFixed(2)} Fahrenheitów` 
                        conNumber.value = ''    
                    } 
        }
        else if(one.textContent === 'Fahrenheitów' && two.textContent === `Celsjusze`){
                    celsius = (conNumber.value -32) / 1.8
                    if (conNumber.value == '' ) {
                        result.textContent = `Podaj wartość`    } 
                    else{
                        result.textContent = `${conNumber.value} Fahrenheitów to ${celsius.toFixed(2)} Celsjuszy`
                        conNumber.value = ''
                    } 
        }
        else if(one.textContent === 'Celsjuszy' && two.textContent === `Kelwiny`){
                    kelwin = parseInt(conNumber.value) + 273.15
                    if (conNumber.value == 0 && kelwin !==273.15) {
                        result.textContent = `Podaj wartość`    }
                    else{
                        result.textContent = `${conNumber.value} Celsjuszy to ${kelwin} Kelwinów`
                        conNumber.value = ''
                    }
        }
        else if(one.textContent === 'Kelwinów' && two.textContent === `Celsjusze`){
                    celsius = conNumber.value - 273.15
                    if (conNumber.value !== '0' && celsius ==-273.15) {
                        result.textContent = `Podaj wartość`    }
                    else{
                        result.textContent = `${conNumber.value} Kelwinów to ${celsius} Celsjuszy`
                        conNumber.value = ''
                    }
        }
        else if(one.textContent === 'Fahrenheitów' && two.textContent === `Kelwiny`){
                    kelwin = (conNumber.value-32)/1.8000 + 273.15
                    if (conNumber.value == '') {
                        result.textContent = `Podaj wartość`    }
                    else{
                        result.textContent = `${conNumber.value} Fahrenheitów to ${kelwin.toFixed(4)} Kelwiny`
                        conNumber.value = ''
                    }
        }
        else if(one.textContent === 'Kelwinów' && two.textContent === `Fahrenheity`){
                    fahrenheit = (conNumber.value - 273.15)*1.8000 + 32
                    if (conNumber.value == '') {
                        result.textContent = `Podaj wartość`    }
                    else{
                        result.textContent = `${conNumber.value} Kelwinów to ${fahrenheit.toFixed(4)} Fahrenheity`
                        conNumber.value = ''
                    }

        }
    }
        
    convBtn.addEventListener('click',temperature)   

    lButton1.addEventListener('click', function() {
        console.log('C to F')
        one.textContent = 'Celsjuszy'
        two.textContent = 'Fahrenheity'
        result.textContent = `_ _ _ _ `
    })
    lButton2.addEventListener('click', function() {
        console.log('F to C')
        one.textContent = 'Fahrenheitów'
        two.textContent = 'Celsjusze'
        result.textContent = `_ _ _ _ `
    })
    lButton3.addEventListener('click', function() {
        console.log('C to K')
        one.textContent = 'Celsjuszy'
        two.textContent = 'Kelwiny'
        result.textContent = `_ _ _ _ `
    })
    lButton4.addEventListener('click', function() {
        console.log('K to C')
        one.textContent = 'Kelwinów'
        two.textContent = 'Celsjusze'
        result.textContent = `_ _ _ _ `
    })
    lButton5.addEventListener('click', function() {
        console.log('F to K')
        one.textContent = 'Fahrenheitów'
        two.textContent = 'Kelwiny'
        result.textContent = `_ _ _ _ `
    })
    lButton6.addEventListener('click', function() {
        console.log('K to F')
        one.textContent = 'Kelwinów'
        two.textContent = 'Fahrenheity'
        result.textContent = `_ _ _ _ `
    }) 

