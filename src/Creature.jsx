import { TorusGeometry } from "three";
import { useStore, GAME_STATES } from "./Store";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";

export default function Creature({ position }) {
	const creatureRef = useRef();
	const [clicked, setClicked] = useState(false);
	const { currentState, setState, feedFood } = useStore();

	function handleClick() {
		console.log("state is currently: ");
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
		<mesh scale={4} position={position} ref={creatureRef} onClick={handleClick}>
			<planeGeometry args={[2, 3]} />
			<meshStandardMaterial
				color={GAME_STATES.HATCHING ? "yellow" : "green"}
				side={DoubleSide}
			/>
		</mesh>
	);
}
