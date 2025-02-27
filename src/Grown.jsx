import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import Reset from "./Reset";
import { useTexture } from "@react-three/drei";

export default function GrownCreature({
	baseUrl,
	creatureType,
	visible = true,
}) {
	const grownCreatureRef = useRef();
	const texturePath = `${baseUrl}${creatureType}.png`;

	const texture = useTexture(texturePath);

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
			<group visible={visible}>
				<animated.mesh
					position={[0, 2.9, 1]}
					scale={scale}
					ref={grownCreatureRef}>
					<planeGeometry />
					<meshStandardMaterial
						color='#E7D6C4'
						map={texture}
						transparent={true}
					/>
				</animated.mesh>
				<Reset creature={creatureType} />
			</group>
		</>
	);
}
