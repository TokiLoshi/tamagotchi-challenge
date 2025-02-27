import { Html, useProgress } from "@react-three/drei";

// Borrowed from old project https://github.com/TokiLoshi/memory-game
export default function Loader() {
	const { progress } = useProgress();

	const displayProgress = Math.round(progress);

	return (
		<>
			<Html center>
				<div
					style={{
						position: "fixed",
						inset: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "rgba(81, 29, 128, 0.9)",
						transition: "opacity 300ms ease",
					}}>
					<div
						style={{
							textAlign: "center",
							fontFamily: "Doto, sans-serif",
						}}>
						<h2
							style={{
								fontSize: "2.5rem",
								color: "#ffdcff",
								marginBottom: "1rem",
							}}>
							Loading {displayProgress}%
						</h2>
						<div
							style={{
								width: "256px",
								height: "8px",
								backgroundColor: "#311971",
								borderRadius: "4px",
								overflow: "hidden",
							}}>
							<div
								style={{
									width: `${displayProgress}%`,
									height: "100%",
									backgroundColor: "#ff6bec",
									borderRadius: "4px",
									transition: "width 300ms ease-out",
								}}
							/>
							<p
								style={{
									color: "white",
									marginTop: "0.5rem",
								}}>
								{displayProgress}%
							</p>
						</div>
					</div>
				</div>
			</Html>
		</>
	);
}
