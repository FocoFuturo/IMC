const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const resultado = document.querySelector('#resultado');


const resImc = () => {
    if (altura.value != '' && peso.value != '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
        let classification = ''

        if (imc < 18.5) {
            classification = 'Magreza 0'
        } else if ((imc == 18.5) && (imc <= 24.9)) {
            classification = 'Normal 0'
        } else if ((imc >= 25) && (imc <= 29.9)) {
            classification = 'Sobrepeso I'
        } else if ((imc >= 30) && (imc <= 39.9)) {
            classification = 'Obesidade II'

        } else if (imc >= 40) {
            classification = 'Obesidade grave III'
        }
        resultado.innerHTML = `"IMC:" ${imc} (${classification})`

    } else {
        resultado.innerHTML = 'Preencha os campos';
    }
}

