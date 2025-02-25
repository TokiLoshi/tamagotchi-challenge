export function calculateCreature(foodScores) {
	console.log("Food scores: ", foodScores);
	const defaultCreature = "dragon";
	// 9 creatures
	const possibleCreatures = {
		cat: { candy: 4, tofu: 0, pizza: 0 }, // 4
		dinosaur: { candy: 0, tofu: 0, pizza: 4 }, // 4
		dragon: { candy: 1, tofu: 0, pizza: 3 }, //4
		frenchBulldog: { candy: 2, tofu: 0, pizza: 2 }, //4
		lion: { candy: 2, tofu: 2, pizza: 0 }, //4
		lizard: { candy: 0, tofu: 3, pizza: 1 }, //4
		shiba: { candy: 1, tofu: 2, pizza: 1 }, //4
		tiger: { candy: 2, tofu: 1, pizza: 1 }, //4
	};

	for (const [creature, requiredScores] of Object.entries(possibleCreatures)) {
		if (
			foodScores.candy === requiredScores.candy &&
			foodScores.tofu === requiredScores.tofu &&
			foodScores.pizza === requiredScores.pizza
		) {
			console.log("Found a match! It's a ", creature);
			return creature;
		}
	}
	return defaultCreature;
}
