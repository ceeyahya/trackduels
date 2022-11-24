export const generateRandomNumbers = (
	min: number,
	max: number,
	times: number
) => {
	const randoms = [];

	for (let i = 0; i < times; i++) {
		randoms.push(Math.floor(Math.random() * (max - min) + min));
	}

	return randoms;
};
