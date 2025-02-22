import "./styles.css";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Box(props) {
	const meshRef = useRef();
	const [hovered, setHovered] = useState(false);
	const [active, setActive] = useState(false);

	useFrame((state, delta) => (meshRef.current.rotation.x += delta));

	console.log("clicked");
	return (
		<>
			<mesh
				{...props}
				ref={meshRef}
				scale={active ? 1.5 : 1}
				onClick={(event) => setActive(!active)}
				onPointerOver={(event) => setHovered(true)}
				onPointerOut={(event) => setHovered(false)}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={hovered ? "hotpink" : "green"} />
			</mesh>
		</>
	);
}

export default function Experience() {
	return (
		<>
			<Box position={[-1.2, 0, 1]} />
		</>
	);
}
