import "./styles.css";
import React, { Suspense, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { useStore } from "./Store";
import Tamagotchi from "./Tamagotchi";
import Egg from "./Egg";
import Hatchling from "./Hatchling";
import Eating from "./Eating";
import GrownCreature from "./Grown";
import Scores from "./Scores";
import Reset from "./Reset";
import { TextureLoader } from "three";
import { calculateCreature } from "./utils.js";

const urlBase = "./textures/Tamagotchi/";

const TEXTURES = {
	egg: urlBase + "egg.png",
	hatchling: urlBase + "panda.png",
	eating: {
		candy: urlBase + "pandaEating1.png",
		tofu: urlBase + "pandaEating2.png",
		pizza: urlBase + "pandaEating3.png",
	},
	grown: {
		cat: urlBase + "cat.png",
		dinosaur: urlBase + "dinosaur.png",
		dragon: urlBase + "dragon.png",
		ducky: urlBase + "ducky.png",
		frenchBulldog: urlBase + "frenchBulldog.png",
		lion: urlBase + "lion.png",
		lizard: urlBase + "lizard.png",
		shiba: urlBase + "shiba.png",
		tiger: urlBase + "tiger.png",
	},
};

export default function Experience() {
	const { currentState, scoreTotal, currentFood, foodScores } = useStore();
	const textures = useMemo(
		() => ({
			egg: useLoader(TextureLoader, TEXTURES.egg),
			hatchling: useLoader(TextureLoader, TEXTURES.hatchling),
			eating: {
				candy: useLoader(TextureLoader, TEXTURES.eating.candy),
				tofu: useLoader(TextureLoader, TEXTURES.eating.tofu),
				pizza: useLoader(TextureLoader, TEXTURES.eating.pizza),
			},
			grown: {
				cat: useLoader(TextureLoader, TEXTURES.grown.cat),
				dinosaur: useLoader(TextureLoader, TEXTURES.grown.dinosaur),
				dragon: useLoader(TextureLoader, TEXTURES.grown.dragon),
				ducky: useLoader(TextureLoader, TEXTURES.grown.ducky),
				frenchBulldog: useLoader(TextureLoader, TEXTURES.grown.frenchBulldog),
				lion: useLoader(TextureLoader, TEXTURES.grown.lion),
				lizard: useLoader(TextureLoader, TEXTURES.grown.lizard),
				shiba: useLoader(TextureLoader, TEXTURES.grown.shiba),
				tiger: useLoader(TextureLoader, TEXTURES.grown.tiger),
			},
		}),
		[]
	);

	const creatureType = useMemo(() => {
		if (scoreTotal >= 4) {
			console.log("calculating creature type");
			return calculateCreature(foodScores);
		}
		return null;
	}, [foodScores, scoreTotal]);

	return (
		<>
			<Suspense fallback={null}>
				{currentState != "start" && scoreTotal < 4 && <Scores />}
				{currentState == "start" && <Egg texture={textures.egg} />}
				{currentState == "idle" && scoreTotal < 4 && (
					<Hatchling texture={textures.hatchling} />
				)}
				{currentState == "eating" && scoreTotal < 4 && (
					<Eating texture={textures.eating[currentFood]} />
				)}
				{currentState == "idle" && scoreTotal >= 4 && (
					<GrownCreature baseUrl={urlBase} creatureType={creatureType} />
				)}
				<Tamagotchi />
			</Suspense>
		</>
	);
}
