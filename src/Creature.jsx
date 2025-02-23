import { TorusGeometry } from "three";
import { useStore, GAME_STATES } from "./Store";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";
import { useGLTF } from "@react-three/drei";
import Tamagotchi from "./Tamagotchi";

export default function Creature({ position }) {
	const creatureRef = useRef();
	const [clicked, setClicked] = useState(false);
	const { currentState, setState, feedFood } = useStore();

	// Load in the model
	const { scene } = useGLTF("./tamagotchi.glb");
	// console.log("GLTF: ", scene);

	// console.log("Scene contents: ", scene);
	// console.log("Scene children: ", scene.children);

	// scene.traverse((child) => {
	// 	console.log("Child object: ", child);
	// 	if (child.isMesh) {
	// 		console.log("Found mesh: ", child.name);
	// 	}
	// });

	// Creature buttons
	function handleLeftButton() {
		console.log("Left logic button time");
	}
	function handleMiddleButton() {
		console.log("Middle logic time");
	}
	function handleRightButton() {
		console.log("Right button logic time");
	}

	function handleClick(e) {
		// AA02 is left button
		e.stopPropagation();
		const buttonName = e.object.name;
		console.log("Clicked button: ", buttonName);
		switch (buttonName) {
			case "ButtonA":
				console.log("Middle button clicked");
				handleMiddleButton();
				break;
			case "ButtonA001":
				console.log("Right button clicked");
				handleRightButton();
				break;
			case "ButtonA002":
				handleLeftButton();
				console.log("Left button clicked");
				break;
		}
		console.log("creature clicked: ", clicked);
		setClicked(!clicked);

		switch (currentState) {
			case GAME_STATES.START:
				setState(GAME_STATES.HATCHING);
				console.log("Egg is hatching");
				setTimeout(() => setState(GAME_STATES.IDLE), 2000);
				break;
			case GAME_STATES.IDLE:
				console.log("state is idle, c'mon, lets eat");
				break;
			default:
				console.log("current state: ", currentState);
		}
	}
	useFrame((state, delta) => {
		if (creatureRef.current) {
			switch (currentState) {
				case GAME_STATES.HATCHING:
					creatureRef.current.rotation.y += delta * 2;
					creatureRef.current.scale.x = creatureRef.current.scale.y =
						1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
					break;
				case GAME_STATES.EATING:
					creatureRef.current.scale.x = creatureRef.current.scale.y =
						1 + Math.sin(state.clock.elapsedTime * 8) * 0.1;
					break;
				default:
					creatureRef.current.position.y =
						position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
			}
		}
	});

	return (
		<Tamagotchi />
		// <group
		// 	ref={creatureRef}
		// 	rotation={[0, Math.PI, Math.PI]}
		// 	position={position}
		// 	scale={1}
		// 	onClick={handleClick}>
		// 	<primitive object={scene} scale={1} />
		// </group>
		// <mesh scale={4} position={position} ref={creatureRef} onClick={handleClick}>
		// 	<planeGeometry args={[2, 3]} />
		// 	<meshStandardMaterial
		// 		color={GAME_STATES.HATCHING ? "yellow" : "green"}
		// 		side={DoubleSide}
		// 	/>
		// </mesh>
	);
}
