import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useStore, GAME_STATES } from "./Store";
import Creature from "./Creature";

function Box(props) {
	const meshRef = useRef();
	const [hovered, setHovered] = useState(false);
	const [active, setActive] = useState(false);

	useFrame((state, delta) => (meshRef.current.rotation.x += delta));

	console.log("clicked");
	return (
		<>
			<mesh
				{...props}
				ref={meshRef}
				scale={active ? 1.5 : 1}
				onClick={(event) => setActive(!active)}
				onPointerOver={(event) => setHovered(true)}
				onPointerOut={(event) => setHovered(false)}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={hovered ? "hotpink" : "green"} />
			</mesh>
		</>
	);
}

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

	function handleFeedClick(foodType) {
		console.log("Feeding Food: ", foodType);
		setState(GAME_STATES.EATING);
		feedFood(foodType);
		setTimeout(() => setState(GAME_STATES.IDLE), 1000);
	}
	return (
		<>
			<Creature position={[2, 2, 1]} />

			<group position={[1, 0, 2]}>
				{currentState === GAME_STATES.IDLE && (
					<>
						<mesh
							position={[0, 0, 1]}
							onClick={() => useStore.getState().feedFood("candy")}>
							<boxGeometry args={[0.5, 0.5, 0.5]} />
							<meshStandardMaterial color='red' />
						</mesh>
						<mesh
							position={[1, 0, 1]}
							onClick={() => useStore.getState().feedFood("tofu")}>
							<boxGeometry args={[0.5, 0.5, 0.5]} />
							<meshStandardMaterial color='orange' />
						</mesh>
						<mesh
							position={[2, 0, 1]}
							onClick={() => useStore.getState().feedFood("pizza")}>
							<boxGeometry args={[0.5, 0.5, 0.5]} />
							<meshStandardMaterial color='blue' />
						</mesh>
					</>
				)}
			</group>
		</>
	);
}
