import { Canvas } from "@react-three/fiber";
import { Grid, Loader, OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";
import Experience from "./Experience";
import Scores from "./Scores";

export default function App() {
	const { gridSize, ...gridConfig } = useControls("Grid Settings", {
		gridSize: [10.5, 10.5],
		cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
		cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
		cellcolor: "#6f6f6f",
		sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
		sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
		sectionColor: "#9d4b4b",
		fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
		fadeStrength: {
			value: 1,
			min: 0,
			max: 1,
			step: 0.1,
			followCamera: false,
			infiniteGrid: true,
		},
	});
	return (
		<>
			<Leva collapsed />
			<Canvas shadows camera={{ position: [0, Math.PI, 12], fov: 75 }}>
				<Scores />
				<OrbitControls />
				<ambientLight intensity={1.5} />
				<pointLight position={[10, 0, 0]} />
				<Grid position={[0, -0.01, 0]} args={gridSize} {...gridConfig} />
				<Loader />
				<Experience />
			</Canvas>
		</>
	);
}
