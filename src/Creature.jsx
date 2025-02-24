import { useStore, GAME_STATES } from "./Store";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import Tamagotchi from "./Tamagotchi";

export default function Creature({ position }) {
	const creatureRef = useRef();
	const [clicked, setClicked] = useState(false);
	const { currentState, setState, feedFood } = useStore();

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

	return <Tamagotchi />;
}
