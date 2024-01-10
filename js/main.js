function calculateIMC(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value


    if(weight !== '' && height !== ''){
        let bmi = weight / ((height / 100) **2)
        let result = document.getElementById('result')

        result.innerHTML = 'Tu IMC es: ' + bmi.toFixed(2)

        //* Tabla del IMC

        if(bmi < 18.5){
            result.innerHTML += ' - Bajo peso'
        }else if(bmi < 25){
            result.innerHTML += ' - Peso normal'
        }else if(bmi < 30){
            result.innerHTML += ' - Sobrepeso'
        }else{
            result.innerHTML += ' - Obesidad'
        }
    }
}