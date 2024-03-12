function calculateIMC() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value


    if (weight !== '' && height !== '') {
        let bmi = weight / ((height / 100) ** 2)
        let result = document.getElementById('result')

        result.style.display = 'block';

        let resultText = 'Tu IMC es: ' + bmi.toFixed(2);

        //* Determinar clasificación de peso y color resultado
        let weightClass;
        let textColor = 'white'; // Default color

        //* Tabla del IMC

        if (bmi < 18.5) {
            weightClass = 'Bajo peso';
            textColor = 'red';
        } else if (bmi < 25) {
            weightClass = 'Peso normal';
            textColor = 'green'; 
        } else if (bmi < 30) {
            weightClass = 'Sobrepeso';
            textColor = 'orange';
        } else {
            weightClass = 'Obesidad';
            textColor = 'red';
        }

        result.innerHTML = resultText + ' - ' + weightClass;
        result.style.color = textColor; //* Establecer color de texto según el resultado

    }
}