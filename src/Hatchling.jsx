import { TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

export default function Hatchling({ texture }) {
	const hatchlingRef = useRef();
	return (
		<>
			<mesh position={[0, 2.9, 1]} scale={1.5} ref={hatchlingRef}>
				<planeGeometry />
				<meshStandardMaterial color='#E7D6C4' map={texture} />
			</mesh>
		</>
	);
}
