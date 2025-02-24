import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useStore, GAME_STATES } from "./Store";

export default function Egg({ texture }) {
	// To Do, remove the background
	const eggRef = useRef();

	const { setState } = useStore();

	const speed = 2;
	const distance = 2;
	const smoothness = 0.03;

	useFrame((state, delta) => {
		if (eggRef.current) {
			const targetX = Math.sin(delta * speed) * distance;
		}
	});

	const hatch = () => {
		setState(GAME_STATES.IDLE);
	};

	const handlePointerEnter = () => {
		document.body.style.cursor = "pointer";
	};
	const handlePointerLeave = () => {
		document.body.style.cursor = "auto";
	};

	return (
		<>
			<mesh
				position={[0, 2.9, 1]}
				scale={1.5}
				ref={eggRef}
				onPointerEnter={handlePointerEnter}
				onPointerLeave={handlePointerLeave}
				onClick={hatch}>
				<planeGeometry />
				<meshStandardMaterial color='#E7D6C4' map={texture} />
			</mesh>
		</>
	);
}
