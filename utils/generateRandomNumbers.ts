export const generateRandomNumbers = (max: number) => {
	let firstNumber = Math.floor(Math.random() * max);
	let secondNumber = Math.floor(Math.random() * max);

	if (firstNumber == secondNumber) {
		secondNumber = Math.floor(Math.random() * max);
	}

	return [firstNumber, secondNumber];
};
