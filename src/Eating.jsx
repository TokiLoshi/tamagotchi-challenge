import { TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Eating({ texture }) {
	const eatingRef = useRef();

	return (
		<>
			<mesh position={[0, 2.9, 1]} scale={1.5} ref={eatingRef}>
				<planeGeometry />
				<meshStandardMaterial color='#E7D6C4' map={texture} />
			</mesh>
		</>
	);
}
