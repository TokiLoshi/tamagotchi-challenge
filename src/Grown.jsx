import { useRef } from "react";
import { useSpring, animated } from "@react-spring/three";

export default function GrownCreature({ texture }) {
	const grownCreatureRef = useRef();

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
