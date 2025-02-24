import { TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

export default function GrownCreature() {
	const grownCreatureTexture = useLoader(
		TextureLoader,
		"./textures/Tamagotchi/6.png"
	);
	console.log("Grown creature texture: ", grownCreatureTexture);
	const grownCreatureRef = useRef();

	return (
		<>
			<Suspense>
				<mesh position={[0, 2.9, 1]} scale={1.5} ref={grownCreatureRef}>
					<planeGeometry />
					<meshStandardMaterial color='#E7D6C4' map={grownCreatureTexture} />
				</mesh>
			</Suspense>
		</>
	);
}
