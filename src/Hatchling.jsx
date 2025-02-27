import { useRef } from "react";
import { useSpring, animated } from "@react-spring/three";

export default function Hatchling({ texture, visible = true }) {
	const hatchlingRef = useRef();

	const { position } = useSpring({
		from: { position: [0, 2.9, 1] },
		to: [{ position: [0.3, 2.91, 1] }, { position: [-0.3, 2.934, 1] }],
		loop: true,
		config: {
			mass: 1,
			tension: 120,
			friction: 8,
		},
	});

	return (
		<>
			<group visible={visible}>
				<animated.mesh position={position} scale={1.5} ref={hatchlingRef}>
					<planeGeometry />
					<meshStandardMaterial
						color='#E7D6C4'
						map={texture}
						transparent={true}
						// transparent={true}
					/>
				</animated.mesh>
			</group>
		</>
	);
}
