import { Loader, useProgress } from "@react-three/drei";

export default function LoadingScreen() {
	<Loader
		containerStyles={{
			backgroundColor: "#1e0f5",
		}}
		innterStyles={{
			backgroundColor: "#8e5fd1",
			height: "10px",
			borderRadius: "4px",
		}}
		dataInterpolation={(p) => `Loading Tamagotchi... ${p.toFixed(0)}%`}
		dataStyles={{
			color: "#e0c0ff",
			fontSize: "14px",
			fontFamily: "Arial, sans-serif",
		}}
	/>;
}
