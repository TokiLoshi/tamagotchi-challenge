import { useRef } from "react";
import { useStore, GAME_STATES } from "./Store";
import { useSpring, animated } from "@react-spring/three";

export default function Egg({ texture, visible = true }) {
	// To Do, remove the background
	const eggRef = useRef();

	const { setState } = useStore();

	const { scale } = useSpring({
		from: { scale: 1.3 },
		to: [{ scale: 1.5 }, { scale: 1.3 }],
		loop: true,
		config: {
			mass: 3,
			tension: 180,
			friction: 8,
		},
	});

	const hatch = () => {
		setState(GAME_STATES.IDLE);
	};

	// const handlePointerEnter = () => {
	// 	document.body.style.cursor = "pointer";
	// };
	// const handlePointerLeave = () => {
	// 	document.body.style.cursor = "auto";
	// };

	return (
		<>
			<group visible={visible}>
				<animated.mesh
					position={[0, 2.9, 1]}
					scale={scale}
					ref={eggRef}
					// onPointerEnter={handlePointerEnter}
					// onPointerLeave={handlePointerLeave}
					onClick={hatch}>
					<planeGeometry />
					<meshStandardMaterial
						color='#E7D6C4'
						map={texture}
						transparent={true}
					/>
				</animated.mesh>
			</group>
		</>
	);
}
