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

let lButtonSpeed1 = document.createElement('div')
        lButtonSpeed1.textContent = 'Kilometry na godzinę na mile na godzinę'
        lButtonSpeed1.id = 'buttonSpeed1'
        lButtonSpeed1.className = 'button'
let lButtonSpeed2 = document.createElement('div')
        lButtonSpeed2.textContent = 'Mile na godzinę na kilometry na godzinę'
        lButtonSpeed2.id = 'buttonSpeed2'
        lButtonSpeed2.className = 'button'
let lButtonSpeed3 = document.createElement('div')
        lButtonSpeed3.textContent = 'Kilometry na godzinę na metry na sekundę'
        lButtonSpeed3.id = 'buttonSpeed3'
        lButtonSpeed3.className = 'button'
let lButtonSpeed4 = document.createElement('div')
        lButtonSpeed4.textContent = 'Metry na sekundę na kilometry na godzinę'
        lButtonSpeed4.id = 'buttonSpeed4'
        lButtonSpeed4.className = 'button'
let lButtonSpeed5 = document.createElement('div')
        lButtonSpeed5.textContent = 'Mile na godzinę na metry na sekundę'
        lButtonSpeed5.id = 'buttonSpeed5'
        lButtonSpeed5.className = 'button'
let lButtonSpeed6 = document.createElement('div')
        lButtonSpeed6.textContent = 'Metry na sekundę na mile na godzinę'
        lButtonSpeed6.id = 'buttonSpeed6'
        lButtonSpeed6.className = 'button'


let lButtonWeight1 = document.createElement('div')
        lButtonWeight1.textContent = 'Kilogramy na funty'
        lButtonWeight1.id = 'buttonWeight1'
        lButtonWeight1.className = 'button'
let lButtonWeight2 = document.createElement('div')
        lButtonWeight2.textContent = 'Funty na kilogramy'
        lButtonWeight2.id = 'buttonWeight2'
        lButtonWeight2.className = 'button'
let lButtonWeight3 = document.createElement('div')
        lButtonWeight3.textContent = 'Kilogramy na uncje'
        lButtonWeight3.id = 'buttonWeight3'
        lButtonWeight3.className = 'button'
let lButtonWeight4 = document.createElement('div')
        lButtonWeight4.textContent = 'Uncje na kilogramy'
        lButtonWeight4.id = 'buttonWeight4'
        lButtonWeight4.className = 'button'
let lButtonWeight5 = document.createElement('div')
        lButtonWeight5.textContent = 'Funty na uncje'
        lButtonWeight5.id = 'buttonWeight5'
        lButtonWeight5.className = 'button'
let lButtonWeight6 = document.createElement('div')
        lButtonWeight6.textContent = 'Uncje na funty'
        lButtonWeight6.id = 'buttonWeight6'
        lButtonWeight6.className = 'button'


let lButtonLength1 = document.createElement('div')
        lButtonLength1.textContent = 'Metry na stopy'
        lButtonLength1.id = 'buttonLength1'
        lButtonLength1.className = 'button'
let lButtonLength2 = document.createElement('div')
        lButtonLength2.textContent = 'Stopy na metry'
        lButtonLength2.id = 'buttonLength2'
        lButtonLength2.className = 'button'
let lButtonLength3 = document.createElement('div')
        lButtonLength3.textContent = 'Metry na mile'
        lButtonLength3.id = 'buttonLength3'
        lButtonLength3.className = 'button'
let lButtonLength4 = document.createElement('div')
        lButtonLength4.textContent = 'Mile na metry'
        lButtonLength4.id = 'buttonLength4'
        lButtonLength4.className = 'button'
let lButtonLength5 = document.createElement('div')
        lButtonLength5.textContent = 'Stopy na mile'
        lButtonLength5.id = 'buttonLength5'
        lButtonLength5.className = 'button'
let lButtonLength6 = document.createElement('div')
        lButtonLength6.textContent = 'Mile na stopy'
        lButtonLength6.id = 'buttonLength7'
        lButtonLength6.className = 'button'
let lButtonLength7 = document.createElement('div')
        lButtonLength7.textContent = 'Metry na jardy'
        lButtonLength7.id = 'buttonLength6'
        lButtonLength7.className = 'button'
let lButtonLength8 = document.createElement('div')
        lButtonLength8.textContent = 'Jardy na metry'
        lButtonLength8.id = 'buttonLength8'
        lButtonLength8.className = 'button'


let lButtonArea1 = document.createElement('div')
        lButtonArea1.textContent = 'Metry kwadratowe na kilometry kwadratowe'
        lButtonArea1.id = 'buttonArea1'
        lButtonArea1.className = 'button'
let lButtonArea2 = document.createElement('div')
        lButtonArea2.textContent = 'Kilometry kwadratowe na metry kwadratowe'
        lButtonArea2.id = 'buttonArea2'
        lButtonArea2.className = 'button'
let lButtonArea3 = document.createElement('div')
        lButtonArea3.textContent = 'Metry kwadratowe na ary'
        lButtonArea3.id = 'buttonArea3'
        lButtonArea3.className = 'button'
let lButtonArea4 = document.createElement('div')
        lButtonArea4.textContent = 'Ary na metry kwadratowe'
        lButtonArea4.id = 'buttonArea4'
        lButtonArea4.className = 'button'
let lButtonArea5 = document.createElement('div')
        lButtonArea5.textContent = 'Kilometry kwadratowe na ary'
        lButtonArea5.id = 'buttonArea5'
        lButtonArea5.className = 'button'
let lButtonArea6 = document.createElement('div')
        lButtonArea6.textContent = 'Ary na kilometry kwadratowe'
        lButtonArea6.id = 'buttonArea6'
        lButtonArea6.className = 'button'
let lButtonArea7 = document.createElement('div')
        lButtonArea7.textContent = 'Metry kwadratowe na hektary'
        lButtonArea7.id = 'buttonArea7'
        lButtonArea7.className = 'button'
let lButtonArea8 = document.createElement('div')
        lButtonArea8.textContent = 'Hektary na metry kwadratowe'
        lButtonArea8.id = 'buttonArea8'
        lButtonArea8.className = 'button'



let measure
let reset
let innerNumber


        reset = () =>{
            one.textContent = '_ _ _ _ _ _'
            two.textContent = '_ _ _ _ _ _'
            result.textContent = `Najpierw wybierz jednostki`
        }

        measure = () =>{
        if(one.textContent === 'Celsjuszy' && two.textContent === `Fahrenheity`){
                    innerNumber = conNumber.value * 1.8 + 32
                    if (conNumber.value !== '0' && innerNumber===32) {
                        result.textContent = `Podaj wartość`    }   
                    else{
                        result.textContent = `${conNumber.value} Celsjuszy to ${innerNumber.toFixed(2)} Fahrenheitów` 
                        conNumber.value = ''    
                    }}
        else if(one.textContent === 'Fahrenheitów' && two.textContent === `Celsjusze`){
                    innerNumber = (conNumber.value -32) / 1.8
                    if (conNumber.value == '' ) {
                        result.textContent = `Podaj wartość`    } 
                    else{
                        result.textContent = `${conNumber.value} Fahrenheitów to ${innerNumber.toFixed(2)} Celsjuszy`
                        conNumber.value = ''
                    }}
        else if(one.textContent === 'Celsjuszy' && two.textContent === `Kelwiny`){
                    innerNumber = parseInt(conNumber.value) + 273.15
                    if (conNumber.value == 0 && innerNumber !==273.15) {
                        result.textContent = `Podaj wartość`    }
                    else{
                        result.textContent = `${conNumber.value} Celsjuszy to ${innerNumber} Kelwinów`
                        conNumber.value = ''
                    }}
        else if(one.textContent === 'Kelwinów' && two.textContent === `Celsjusze`){
                    innerNumber = conNumber.value - 273.15
                    if (conNumber.value !== '0' && innerNumber ==-273.15) {
                        result.textContent = `Podaj wartość`    }
                    else{
                        result.textContent = `${conNumber.value} Kelwinów to ${innerNumber} Celsjuszy`
                        conNumber.value = ''
                    }}
        else if(one.textContent === 'Fahrenheitów' && two.textContent === `Kelwiny`){
                    innerNumber = (conNumber.value-32)/1.8000 + 273.15
                    if (conNumber.value == '') {
                        result.textContent = `Podaj wartość`    }
                    else{
                        result.textContent = `${conNumber.value} Fahrenheitów to ${innerNumber.toFixed(4)} Kelwiny`
                        conNumber.value = ''
                    }}
        else if(one.textContent === 'Kelwinów' && two.textContent === `Fahrenheity`){
                    innerNumber = (conNumber.value - 273.15)*1.8000 + 32
                    if (conNumber.value == '') {
                        result.textContent = `Podaj wartość`    }
                    else{
                        result.textContent = `${conNumber.value} Kelwinów to ${innerNumber.toFixed(4)} Fahrenheity`
                        conNumber.value = ''
                    }}

                    else if(one.textContent === 'kilometrów na godzinę' && two.textContent === `mile na godzinę`){
                            innerNumber = conNumber.value * 1.609344
                            if (conNumber.value == '') {
                                result.textContent = `Podaj wartość`    }   
                            else{
                                result.textContent = `${conNumber.value} kilometry na godzinę to ${innerNumber.toFixed(2)} mil na godzinę` 
                                conNumber.value = ''    
                            }}
                    else if(one.textContent === 'mil na godzinę' && two.textContent === `kilometry na godzinę`){
                            innerNumber = conNumber.value / 1.609344
                            if (conNumber.value == '') {
                                result.textContent = `Podaj wartość`    }   
                            else{
                                result.textContent = `${conNumber.value} mil na godzinę to ${innerNumber.toFixed(2)} kilometrów na godzinę` 
                                conNumber.value = ''    
                            }}
                    else if(one.textContent === 'kilometrów na godzinę' && two.textContent === `metry na sekundę`){
                                innerNumber = (conNumber.value * 1000)/3600
                                if (conNumber.value == '') {
                                    result.textContent = `Podaj wartość`    }   
                                else{
                                    result.textContent = `${conNumber.value} kilometry na godzinę to ${innerNumber.toFixed(2)} metrów na sekundę` 
                                    conNumber.value = ''    
                                }}
                    else if(one.textContent === 'metrów na sekundę' && two.textContent === `kilometry na godzinę`){
                                innerNumber = (conNumber.value * 3600)/1000
                                if (conNumber.value == '') {
                                    result.textContent = `Podaj wartość`    }   
                                else{
                                    result.textContent = `${conNumber.value} metry na sekundę to ${innerNumber.toFixed(2)} kilometrów na godzinę` 
                                    conNumber.value = ''    
                                }}
                    else if(one.textContent === 'mil na godzinę' && two.textContent === `metry na sekundę`){
                                innerNumber = conNumber.value / 2.2369362920544
                                if (conNumber.value == '') {
                                    result.textContent = `Podaj wartość`    }   
                                else{
                                    result.textContent = `${conNumber.value} mil na godzinę to ${innerNumber.toFixed(2)} metrów na sekundę` 
                                    conNumber.value = ''    
                                }}
                    else if(one.textContent === 'metrów na sekundę' && two.textContent === `mile na godzinę`){
                                innerNumber = ((conNumber.value / 1.609344) *3600)/1000
                                if (conNumber.value == '') {
                                    result.textContent = `Podaj wartość`    }   
                                else{
                                    result.textContent = `${conNumber.value} metry na sekundę to ${innerNumber.toFixed(2)} mil na godzinę` 
                                    conNumber.value = ''    
                                }}
        else if(one.textContent === 'kilogramów' && two.textContent === `funty`){
                    innerNumber = conNumber.value * 2.20462262
                    if (conNumber.value == '') {
                        result.textContent = `Podaj wartość`    }   
                    else{
                        result.textContent = `${conNumber.value} kilogramów to ${innerNumber.toFixed(2)} funty` 
                        conNumber.value = ''    
                    }}
        else if(one.textContent === 'funtów' && two.textContent === `kilogramy`){
                    innerNumber = conNumber.value * 0.45359237
                    if (conNumber.value == '') {
                        result.textContent = `Podaj wartość`    }   
                    else{
                        result.textContent = `${conNumber.value} funtów to ${innerNumber.toFixed(2)} kilogramów` 
                        conNumber.value = ''    
                    }}
        else if(one.textContent === 'kilogramów' && two.textContent === `uncje`){
                    innerNumber = conNumber.value * 35.27396
                    if (conNumber.value == '') {
                        result.textContent = `Podaj wartość`    }   
                    else{
                        result.textContent = `${conNumber.value} kilogramów to ${innerNumber.toFixed(2)} uncji` 
                        conNumber.value = ''    
                    }}
        else if(one.textContent === 'uncji' && two.textContent === `kilogramy`){
                    innerNumber = conNumber.value / 35.27396
                    if (conNumber.value == '') {
                        result.textContent = `Podaj wartość`    }   
                    else{
                        result.textContent = `${conNumber.value} uncji to ${innerNumber.toFixed(4)} kilogramów` 
                        conNumber.value = ''    
                    }}
        else if(one.textContent === 'funtów' && two.textContent === `uncje`){
                    innerNumber = conNumber.value * 16.000
                    if (conNumber.value == '') {
                        result.textContent = `Podaj wartość`    }   
                    else{
                        result.textContent = `${conNumber.value} funtów to ${innerNumber.toFixed(2)} uncji` 
                        conNumber.value = ''    
                    }}         
        else if(one.textContent === 'uncji' && two.textContent === `funty`){
                    innerNumber = conNumber.value * 0.062500
                    if (conNumber.value == '') {
                        result.textContent = `Podaj wartość`    }   
                    else{
                        result.textContent = `${conNumber.value} uncji to ${innerNumber.toFixed(4)} funtów` 
                        conNumber.value = ''    
                    }} 


                    else if(one.textContent === 'metrów' && two.textContent === `stopy`){
                                innerNumber = conNumber.value * 3.28084
                                if (conNumber.value == '') {
                                    result.textContent = `Podaj wartość`    }   
                                else{
                                    result.textContent = `${conNumber.value} metrów to ${innerNumber.toFixed(2)} stóp` 
                                    conNumber.value = ''    
                                }}    
                    else if(one.textContent === 'stóp' && two.textContent === `metry`){
                                innerNumber = conNumber.value * 0.3048
                                if (conNumber.value == '') {
                                    result.textContent = `Podaj wartość`    }   
                                else{
                                    result.textContent = `${conNumber.value} stóp to ${innerNumber.toFixed(2)} metrów` 
                                    conNumber.value = ''    
                                }} 
                    else if(one.textContent === 'metrów' && two.textContent === `mile`){
                                innerNumber = conNumber.value * 0.00062137119223733
                                if (conNumber.value == '') {
                                    result.textContent = `Podaj wartość`    }   
                                else{
                                    result.textContent = `${conNumber.value} metrów to ${innerNumber.toFixed(4)} mil` 
                                    conNumber.value = ''    
                                }}
                    else if(one.textContent === 'mil' && two.textContent === `metry`){
                                innerNumber = conNumber.value * 1609.344
                                if (conNumber.value == '') {
                                    result.textContent = `Podaj wartość`    }   
                                else{
                                    result.textContent = `${conNumber.value} mil to ${innerNumber.toFixed(2)} metrów` 
                                    conNumber.value = ''    
                                }} 
                    else if(one.textContent === 'stóp' && two.textContent === `mile`){
                                innerNumber = conNumber.value * 0.00018939
                                if (conNumber.value == '') {
                                    result.textContent = `Podaj wartość`    }   
                                else{
                                    result.textContent = `${conNumber.value} stóp to ${innerNumber.toFixed(4)} mil` 
                                    conNumber.value = ''    
                                }}  
                    else if(one.textContent === 'mil' && two.textContent === `stopy`){
                                innerNumber = conNumber.value * 5280.0
                                if (conNumber.value == '') {
                                    result.textContent = `Podaj wartość`    }   
                                else{
                                    result.textContent = `${conNumber.value} mil to ${innerNumber.toFixed(4)} stóp` 
                                    conNumber.value = ''    
                                }}
                    else if(one.textContent === 'metrów' && two.textContent === `jardy`){
                                innerNumber = conNumber.value * 1.0936
                                if (conNumber.value == '') {
                                    result.textContent = `Podaj wartość`    }   
                                else{
                                    result.textContent = `${conNumber.value} metrów to ${innerNumber.toFixed(4)} jardów` 
                                    conNumber.value = ''    
                                }}
                    else if(one.textContent === 'jardów' && two.textContent === `metry`){
                                innerNumber = conNumber.value / 1.0936
                                if (conNumber.value == '') {
                                    result.textContent = `Podaj wartość`    }   
                                else{
                                    result.textContent = `${conNumber.value} jardów to ${innerNumber.toFixed(4)} metrów` 
                                    conNumber.value = ''    
                                }} 
        else if(one.textContent === 'metrów kwadratowych' && two.textContent === `kilometry kwadratowe`){
                        innerNumber = conNumber.value / 1000000
                        if (conNumber.value == '') {
                            result.textContent = `Podaj wartość`    }   
                        else{
                            result.textContent = `${conNumber.value} metrów kwadratowych to ${innerNumber.toFixed(6)} kilometrów kwadratowych` 
                            conNumber.value = ''    
                        }}
        else if(one.textContent === 'kilometrów kwadratowych' && two.textContent === `metry kwadratowe`){
                            innerNumber = conNumber.value * 1000000
                            if (conNumber.value == '') {
                                result.textContent = `Podaj wartość`    }   
                            else{
                                result.textContent = `${conNumber.value} kilometrów kwadratowych to ${innerNumber.toFixed(2)} metrów kwadratowych` 
                                conNumber.value = ''    
                            }}
        else if(one.textContent === 'metrów kwadratowych' && two.textContent === `ary`){
                        innerNumber = conNumber.value * 0.01
                        if (conNumber.value == '') {
                            result.textContent = `Podaj wartość`    }   
                        else{
                            result.textContent = `${conNumber.value} metrów kwadratowych to ${innerNumber.toFixed(2)} ary` 
                            conNumber.value = ''    
                        }}
        else if(one.textContent === 'arów' && two.textContent === `metry kwadratowe`){
                        innerNumber = conNumber.value * 100
                        if (conNumber.value == '') {
                            result.textContent = `Podaj wartość`    }   
                        else{
                            result.textContent = `${conNumber.value} arów to ${innerNumber.toFixed(2)} metrów kwadratowych` 
                            conNumber.value = ''    
                        }} 
        else if(one.textContent === 'kilometrów kwadratowych' && two.textContent === `ary`){
                            innerNumber = conNumber.value * 10000
                            if (conNumber.value == '') {
                                result.textContent = `Podaj wartość`    }   
                            else{
                                result.textContent = `${conNumber.value} kilometrów kwadratowych to ${innerNumber.toFixed(2)} arów` 
                                conNumber.value = ''    
                            }}    
        else if(one.textContent === 'arów' && two.textContent === `kilometry kwadratowe`){
                            innerNumber = conNumber.value * 0.0001
                            if (conNumber.value == '') {
                                result.textContent = `Podaj wartość`    }   
                            else{
                                result.textContent = `${conNumber.value} arów to ${innerNumber.toFixed(2)} kilometrów kwadratowych` 
                                conNumber.value = ''    
                            }}
        else if(one.textContent === 'metrów kwadratowych' && two.textContent === `hektary`){
                        innerNumber = conNumber.value * 0.0001
                        if (conNumber.value == '') {
                            result.textContent = `Podaj wartość`    }   
                        else{
                            result.textContent = `${conNumber.value} metrów kwadratowych to ${innerNumber.toFixed(4)} hektary` 
                            conNumber.value = ''    
                        }}
        else if(one.textContent === 'hektarów' && two.textContent === `metry kwadratowe`){
                        innerNumber = conNumber.value * 10000
                        if (conNumber.value == '') {
                            result.textContent = `Podaj wartość`    }   
                        else{
                            result.textContent = `${conNumber.value} hektarów to ${innerNumber.toFixed(0)} metrów kwadratowych` 
                            conNumber.value = ''    
                        }}                                                                                      
    }



    buttonNav1.addEventListener('click', function(){
            if(one.textContent = 'Celsjuszy' || 'Fahrenheitów' || 'Kelwinów'){
            reset()}  
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
            listInnerClass.appendChild(lButtonSpeed1)
            listInnerClass.appendChild(lButtonSpeed2)
            listInnerClass.appendChild(lButtonSpeed3)
            listInnerClass.appendChild(lButtonSpeed4)
            listInnerClass.appendChild(lButtonSpeed5)
            listInnerClass.appendChild(lButtonSpeed6)
        })
    buttonNav3.addEventListener('click', function(){
            reset()
            listInnerClass.innerHTML = ''  
            listInnerClass.appendChild(lButtonWeight1)
            listInnerClass.appendChild(lButtonWeight2)
            listInnerClass.appendChild(lButtonWeight3)
            listInnerClass.appendChild(lButtonWeight4)
            listInnerClass.appendChild(lButtonWeight5)
            listInnerClass.appendChild(lButtonWeight6)
        })
    buttonNav4.addEventListener('click', function(){
            reset()
            listInnerClass.innerHTML = ''  
            listInnerClass.appendChild(lButtonLength1)
            listInnerClass.appendChild(lButtonLength2)
            listInnerClass.appendChild(lButtonLength3)
            listInnerClass.appendChild(lButtonLength4)
            listInnerClass.appendChild(lButtonLength5)
            listInnerClass.appendChild(lButtonLength6)
            listInnerClass.appendChild(lButtonLength7)
            listInnerClass.appendChild(lButtonLength8)
        })
    buttonNav5.addEventListener('click', function(){
            reset()
            listInnerClass.innerHTML = ''  
            listInnerClass.appendChild(lButtonArea1)
            listInnerClass.appendChild(lButtonArea2)
            listInnerClass.appendChild(lButtonArea3)
            listInnerClass.appendChild(lButtonArea4)
            listInnerClass.appendChild(lButtonArea5)
            listInnerClass.appendChild(lButtonArea6)
            listInnerClass.appendChild(lButtonArea7)
            listInnerClass.appendChild(lButtonArea8)


        })


            convBtn.addEventListener('click',measure)   

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
                console.log('KpH to MpH')
                one.textContent = 'kilometrów na godzinę'
                two.textContent = 'mile na godzinę'
                result.textContent = `_ _ _ _ `
            })
            lButtonSpeed2.addEventListener('click', function(){
                console.log('MpH to KpH')
                one.textContent = 'mil na godzinę'
                two.textContent = 'kilometry na godzinę'
                result.textContent = `_ _ _ _ `
            })
            lButtonSpeed3.addEventListener('click', function(){
                console.log('KpH to MpS')
                one.textContent = 'kilometrów na godzinę'
                two.textContent = 'metry na sekundę'
                result.textContent = `_ _ _ _ `
            })
            lButtonSpeed4.addEventListener('click', function(){
                console.log('MpS to KpH')
                one.textContent = 'metrów na sekundę'
                two.textContent = 'kilometry na godzinę'
                result.textContent = `_ _ _ _ `
            })
            lButtonSpeed5.addEventListener('click', function(){
                console.log('MpS to MpH')
                one.textContent = 'mil na godzinę'
                two.textContent = 'metry na sekundę'
                result.textContent = `_ _ _ _ `
            })
            lButtonSpeed6.addEventListener('click', function(){
                console.log('MpH to MpS')
                one.textContent = 'metrów na sekundę'
                two.textContent = 'mile na godzinę'
                result.textContent = `_ _ _ _ `
            })



            lButtonWeight1.addEventListener('click', function(){
                console.log('K to F')
                one.textContent = 'kilogramów'
                two.textContent = 'funty'
                result.textContent = `_ _ _ _ `
            })
            lButtonWeight2.addEventListener('click', function(){
                console.log('F to K')
                one.textContent = 'funtów'
                two.textContent = 'kilogramy'
                result.textContent = `_ _ _ _ `
            })
            lButtonWeight3.addEventListener('click', function(){
                console.log('K to U')
                one.textContent = 'kilogramów'
                two.textContent = 'uncje'
                result.textContent = `_ _ _ _ `
            })
            lButtonWeight4.addEventListener('click', function(){
                console.log('U to K')
                one.textContent = 'uncji'
                two.textContent = 'kilogramy'
                result.textContent = `_ _ _ _ `
            })
            lButtonWeight5.addEventListener('click', function(){
                console.log('F to U')
                one.textContent = 'funtów'
                two.textContent = 'uncje'
                result.textContent = `_ _ _ _ `
            })
            lButtonWeight6.addEventListener('click', function(){
                console.log('U to F')
                one.textContent = 'uncji'
                two.textContent = 'funty'
                result.textContent = `_ _ _ _ `
            })


            lButtonLength1.addEventListener('click', function(){
                one.textContent = 'metrów'
                two.textContent = 'stopy'
                result.textContent = `_ _ _ _ `
            })
            lButtonLength2.addEventListener('click', function(){
                one.textContent = 'stóp'
                two.textContent = 'metry'
                result.textContent = `_ _ _ _ `
            })
            lButtonLength3.addEventListener('click', function(){
                one.textContent = 'metrów'
                two.textContent = 'mile'
                result.textContent = `_ _ _ _ `
            })
            lButtonLength4.addEventListener('click', function(){
                one.textContent = 'mil'
                two.textContent = 'metry'
                result.textContent = `_ _ _ _ `
            })
            lButtonLength5.addEventListener('click', function(){
                one.textContent = 'stóp'
                two.textContent = 'mile'
                result.textContent = `_ _ _ _ `
            })
            lButtonLength6.addEventListener('click', function(){
                one.textContent = 'mil'
                two.textContent = 'stopy'
                result.textContent = `_ _ _ _ `
            })
            lButtonLength7.addEventListener('click', function(){
                one.textContent = 'metrów'
                two.textContent = 'jardy'
                result.textContent = `_ _ _ _ `
            })
            lButtonLength8.addEventListener('click', function(){
                one.textContent = 'jardów'
                two.textContent = 'metry'
                result.textContent = `_ _ _ _ `
            })



            lButtonArea1.addEventListener('click', function(){
                one.textContent = 'metrów kwadratowych'
                two.textContent = 'kilometry kwadratowe'
                result.textContent = `_ _ _ _ `
            })
            lButtonArea2.addEventListener('click', function(){
                one.textContent = 'kilometrów kwadratowych'
                two.textContent = 'metry kwadratowe'
                result.textContent = `_ _ _ _ `
            })
            lButtonArea3.addEventListener('click', function(){
                one.textContent = 'metrów kwadratowych'
                two.textContent = 'ary'
                result.textContent = `_ _ _ _ `
            })
            lButtonArea4.addEventListener('click', function(){
                one.textContent = 'arów'
                two.textContent = 'metry kwadratowe'
                result.textContent = `_ _ _ _ `
            })
            lButtonArea5.addEventListener('click', function(){
                one.textContent = 'kilometrów kwadratowych'
                two.textContent = 'ary'
                result.textContent = `_ _ _ _ `
            })
            lButtonArea6.addEventListener('click', function(){
                one.textContent = 'arów'
                two.textContent = 'kilometry kwadratowe'
                result.textContent = `_ _ _ _ `
            })
            lButtonArea7.addEventListener('click', function(){
                one.textContent = 'metrów kwadratowych'
                two.textContent = 'hektary'
                result.textContent = `_ _ _ _ `
            })
            lButtonArea8.addEventListener('click', function(){
                one.textContent = 'hektarów'
                two.textContent = 'metry kwadratowe'
                result.textContent = `_ _ _ _ `
            })

            
