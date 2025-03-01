import { Loader, useProgress, Html } from "@react-three/drei";

export default function LoadingScreen() {
	const { progress } = useProgress();
	return (
		// <Loader
		// 	containerStyles={{
		// 		backgroundColor: "#1e0f45",
		// 	}}
		// 	innerStyles={{
		// 		backgroundColor: "#8e5fd1",
		// 		height: "10px",
		// 		borderRadius: "4px",
		// 	}}
		// 	dataInterpolation={(p) => `Loading Tamagotchi... ${p.toFixed(0)}%`}
		// 	dataStyles={{
		// 		color: "#e0c0ff",
		// 		fontSize: "14px",
		// 		fontFamily: "Arial, sans-serif",
		// 	}}
		// />
		<Html center>
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					color: "#e0c0ff",
					fontFamily: "Arial, sans-serif",
					backgroundColor: "#1e0f45",
					padding: "20px",
					borderRadius: "8px",
				}}>
				<div>Loading Menu-gotchi... {progress.toFixed(0)}%</div>
				<div
					style={{
						width: "200px",
						marginTop: "10px",
					}}>
					<div
						style={{
							height: "10px",
							width: `${progress}%`,
							backgroundColor: "#8e5fd1",
							borderRadius: "4px",
						}}></div>
				</div>
			</div>
		</Html>
	);
}
