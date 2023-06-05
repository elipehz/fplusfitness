function calculateBMI() {
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
	const bmi = weight / (height * height);

	let result = '';
	if (bmi < 18.5) {
		result = 'Abaixo do peso';
	} else if (bmi < 25) {
		result = 'Peso normal';
	} else if (bmi < 30) {
		result = 'Sobrepeso';
	} else {
		result = 'Obesidade';
	}

	document.getElementById('result').innerHTML = `Seu IMC é ${bmi.toFixed(1)} - ${result}`;
}

document.getElementById('calculate').addEventListener('click', calculateBMI);
