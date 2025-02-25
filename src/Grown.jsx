import { useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/three";
import { calculateCreature } from "./utils.js";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useStore } from "./Store";

export default function GrownCreature({ baseUrl }) {
	const grownCreatureRef = useRef();
	const { foodScores } = useStore();
	const result = calculateCreature(foodScores);
	const texturePath = `${baseUrl}${result}.png`;
	const texture = useLoader(TextureLoader, texturePath);

	const { scale } = useSpring({
		from: { scale: 1.5 },
		to: [{ scale: 1.5 }, { scale: 1.3 }],
		loop: true,
		config: {
			mass: 2,
			tension: 180,
			friction: 8,
		},
	});

	useEffect(() => {
		return () => {
			if (texture) {
				texture.dispose();
			}
		};
	}, [texture]);

	return (
		<>
			<animated.mesh
				position={[0, 2.9, 1]}
				scale={scale}
				ref={grownCreatureRef}>
				<planeGeometry />
				<meshStandardMaterial color='#E7D6C4' map={texture} />
			</animated.mesh>
		</>
	);
}
