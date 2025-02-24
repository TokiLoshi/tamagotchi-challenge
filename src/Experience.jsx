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

const TEXTURES = {
	egg: "./textures/Tamagotchi/1.png",
	hatchling: "./textures/Tamagotchi/2.png",
	eating: {
		candy: "./textures/Tamagotchi/3.png",
		tofu: "./textures/Tamagotchi/4.png",
		pizza: "./textures/Tamagotchi/5.png",
	},
	grown: "./textures/Tamagotchi/6.png",
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
			grown: useLoader(TextureLoader, TEXTURES.grown),
		}),
		[]
	);

	return (
		<>
			<Suspense fallback={null}>
				{currentState != "start" && scoreTotal < 3 && <Scores />}
				{currentState == "start" && <Egg texture={textures.egg} />}
				{currentState == "idle" && <Hatchling texture={textures.hatchling} />}
				{currentState == "eating" && (
					<Eating texture={textures.eating[currentFood]} />
				)}
				{currentState == "idle" && scoreTotal >= 3 && (
					<GrownCreature texture={textures.grown} />
				)}
				{scoreTotal >= 3 && <Reset />}
				<Tamagotchi />
			</Suspense>
		</>
	);
}
