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
import { TextureLoader } from "three";
import { calculateCreature } from "./utils.js";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Loader } from "@react-three/drei";
import LoadingScreen from "./LoadingScreen";

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
	console.log("Current State: ", currentState);
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
			return calculateCreature(foodScores);
		}
		return null;
	}, [foodScores, scoreTotal]);

	const bloomIntensity = useMemo(() => {
		if (scoreTotal >= 4) {
			return 1.5;
		} else if (scoreTotal === 3) {
			return 0.5;
		}
		return 0.0;
	}, [scoreTotal]);

	return (
		<>
			<EffectComposer>
				<Bloom
					intensity={bloomIntensity}
					luminanceThreshold={0.2}
					luminanceSmoothing={0.9}
					mipmapBlur
					resolutionScale={0.5}
				/>
				<Egg visible={currentState === "start"} texture={textures.egg} />
				<Hatchling
					texture={textures.hatchling}
					visible={currentState === "idle" && scoreTotal < 4}
				/>
				<Eating
					texture={textures.eating[currentFood]}
					visible={currentState === "eating" && scoreTotal < 4}
				/>
				{currentState !== "start" && scoreTotal < 4 && <Scores />}

				{scoreTotal >= 4 && (
					<GrownCreature baseUrl={urlBase} creatureType={creatureType} />
				)}

				<Tamagotchi />
			</EffectComposer>
		</>
	);
}
