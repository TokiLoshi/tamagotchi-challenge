import { useRef } from "react";

export default function GrownCreature({ texture }) {
	const grownCreatureRef = useRef();

	return (
		<>
			<mesh position={[0, 2.9, 1]} scale={1.5} ref={grownCreatureRef}>
				<planeGeometry />
				<meshStandardMaterial color='#E7D6C4' map={texture} />
			</mesh>
		</>
	);
}
