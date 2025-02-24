import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useStore, GAME_STATES } from "./Store";
import Creature from "./Creature";
import Tamagotchi from "./Tamagotchi";
import Egg from "./Egg";
import Hatchling from "./Hatchling";
import Eating from "./Eating";
import GrownCreature from "./Grown";
import Scores from "./Scores";
import Reset from "./Reset";

export default function Experience() {
	const { currentState, scoreTotal, foodScores, setState, feedFood } =
		useStore();
	useEffect(() => {
		console.log(`Current State: ${currentState}`);
		console.log(`Current Score: ${scoreTotal}`);
		console.log(
			`Food scores:\n candy: ${foodScores.candy} \n tofu: ${foodScores.tofu} \n pizza: ${foodScores.pizza}`
		);
	}, [currentState, scoreTotal, foodScores]);

	return (
		<>
			{currentState != "start" && scoreTotal < 3 && <Scores />}
			{currentState == "start" && <Egg />}
			{currentState == "idle" && <Hatchling />}
			{currentState == "eating" && <Eating />}
			{currentState == "idle" && scoreTotal >= 3 && <GrownCreature />}
			{scoreTotal >= 3 && <Reset />}
			<Tamagotchi />
		</>
	);
}
