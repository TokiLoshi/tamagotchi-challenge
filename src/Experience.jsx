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
	const { currentState, scoreTotal, currentFood } = useStore();
	const textures = useMemo(
		() => ({
			egg: useLoader(TextureLoader, TEXTURES.egg),
			hatchling: useLoader(TextureLoader, TEXTURES.hatchling),
			eating: {
				candy: useLoader(TextureLoader, TEXTURES.eating.candy),
				tofu: useLoader(TextureLoader, TEXTURES.eating.tofu),
				pizza: useLoader(TextureLoader, TEXTURES.eating.pizza),
			},
		}),
		[]
	);

	return (
		<>
			<Suspense fallback={null}>
				{currentState != "start" && scoreTotal < 4 && <Scores />}
				{currentState == "start" && <Egg texture={textures.egg} />}
				{currentState == "idle" && scoreTotal < 4 && (
					<Hatchling texture={textures.hatchling} />
				)}
				{currentState == "eating" && (
					<Eating texture={textures.eating[currentFood]} />
				)}
				{currentState == "idle" && scoreTotal >= 4 && (
					<GrownCreature baseUrl={urlBase} />
				)}
				{scoreTotal >= 4 && <Reset />}
				<Tamagotchi />
			</Suspense>
		</>
	);
}
