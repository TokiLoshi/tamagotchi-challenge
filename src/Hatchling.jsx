import { TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

export default function Hatchling() {
	const hatchlingTexture = useLoader(
		TextureLoader,
		"./textures/Tamagotchi/2.png"
	);
	console.log("Hatchling texture: ", hatchlingTexture);
	const hatchlingRef = useRef();
	return (
		<>
			<Suspense>
				<mesh position={[0, 2.9, 1]} scale={1.5} ref={hatchlingRef}>
					<planeGeometry />
					<meshStandardMaterial color='#E7D6C4' map={hatchlingTexture} />
				</mesh>
			</Suspense>
		</>
	);
}
