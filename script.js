let conNumber = document.querySelector('#conNumber')
let convBtn = document.querySelector('.conv')
const result = document.querySelector('.result')

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const buttonClass = document.querySelectorAll('.button')
const listInnerClass = document.querySelector('#listInner')

let buttonNav1 = document.querySelector('#buttonNav1')
    let buttonNav2 = document.querySelector('#buttonNav2')
let buttonNav3 = document.querySelector('#buttonNav3')
    let buttonNav4 = document.querySelector('#buttonNav4')
let buttonNav5 = document.querySelector('#buttonNav5')

let lButtonTemp1 = document.querySelector('#buttonTemp1')
    let lButtonTemp2 = document.querySelector('#buttonTemp2')
let lButtonTemp3 = document.querySelector('#buttonTemp3')
    let lButtonTemp4 = document.querySelector('#buttonTemp4')
let lButtonTemp5 = document.querySelector('#buttonTemp5')
    let lButtonTemp6 = document.querySelector('#buttonTemp6')

let VarSpeed1 = document.createElement('div')
        VarSpeed1.textContent = 'Kilometry na godzinę na mile na godzinę'
        VarSpeed1.id = 'buttonSpeed1'
        VarSpeed1.className = 'button'
let VarSpeed2 = document.createElement('div')
        VarSpeed2.textContent = 'Mile na godzinę na kilometry na godzinę'
        VarSpeed2.id = 'buttonSpeed2'
        VarSpeed2.className = 'button'


let lButtonSpeed1 = document.getElementById('buttonSpeed1')
    let lButtonSpeed2 = document.getElementById('buttonSpeed2')
let lButtonSpeed3 = document.getElementById('buttonSpeed3')
    let lButtonSpeed4 = document.getElementById('buttonSpeed4')
let lButtonSpeed5 = document.getElementById('buttonSpeed5')
    let lButtonSpeed6 = document.getElementById('buttonSpeed6')



let fahrenheit
let celsius
let kelwin
let temperature
let reset


        reset = () =>{
            one.textContent = '_ _ _ _ _ _'
            two.textContent = '_ _ _ _ _ _'
            result.textContent = `Najpierw wybierz jednostki`
        }

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

    buttonNav1.addEventListener('click', function(){
        if(lButtonTemp1.textContent != 'Celsjusze na Fahrenheity'){
         reset()  
        }
        listInnerClass.innerHTML = ''
        listInnerClass.appendChild(lButtonTemp1)
        listInnerClass.appendChild(lButtonTemp2)
        listInnerClass.appendChild(lButtonTemp3)
        listInnerClass.appendChild(lButtonTemp4)
        listInnerClass.appendChild(lButtonTemp5)
        listInnerClass.appendChild(lButtonTemp6)
        })
    buttonNav2.addEventListener('click', function(){
            reset()
            listInnerClass.innerHTML = ''  
            listInnerClass.appendChild(VarSpeed1)
            listInnerClass.appendChild(VarSpeed2)
    
        
    
        })

convBtn.addEventListener('click',temperature)   

            lButtonTemp1.addEventListener('click', function() {
                console.log('C to F')
                one.textContent = 'Celsjuszy'
                two.textContent = 'Fahrenheity'
                result.textContent = `_ _ _ _ `
            })
            lButtonTemp2.addEventListener('click', function() {
                console.log('F to C')
                one.textContent = 'Fahrenheitów'
                two.textContent = 'Celsjusze'
                result.textContent = `_ _ _ _ `
            })
            lButtonTemp3.addEventListener('click', function() {
                console.log('C to K')
                one.textContent = 'Celsjuszy'
                two.textContent = 'Kelwiny'
                result.textContent = `_ _ _ _ `
            })
            lButtonTemp4.addEventListener('click', function() {
                console.log('K to C')
                one.textContent = 'Kelwinów'
                two.textContent = 'Celsjusze'
                result.textContent = `_ _ _ _ `
            })
            lButtonTemp5.addEventListener('click', function() {
                console.log('F to K')
                one.textContent = 'Fahrenheitów'
                two.textContent = 'Kelwiny'
                result.textContent = `_ _ _ _ `
            })
            lButtonTemp6.addEventListener('click', function() {
                console.log('K to F')
                one.textContent = 'Kelwinów'
                two.textContent = 'Fahrenheity'
                result.textContent = `_ _ _ _ `
            }) 
            lButtonSpeed1.addEventListener('click', function(){
                one.textContent = 'Kilometrów na godzinę'
                two.textContent = 'Mile na godzinę'
                result.textContent = `_ _ _ _ `
            })
        
