export default function Floor({ floorColor }) {
	return (
		<>
			<mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
				<planeGeometry args={[30, 30]} />
				<meshStandardMaterial
					color={floorColor}
					roughness={0.8}
					metalness={0.3}
				/>
			</mesh>
		</>
	);
}
