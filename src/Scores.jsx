import { useStore, GAME_STATES } from "./Store";
import { Html } from "@react-three/drei";

export default function Scores() {
	const { currentState, scoreTotal, foodScores } = useStore();

	return (
		<Html
			position={[-5, 4, 0]}
			wrapperClass='html-wrap'
			distanceFactor={10}
			transform>
			<div
				style={{
					backgroundColor: "#311971",
					colour: "#000000",
					padding: "10px",
					borderRadius: "10px",
					position: "relative",
				}}>
				<h1>Today's menu</h1>
				<p>
					<span style={{ text: "#FF0000", textDecoration: "underline" }}>
						Candy:
					</span>{" "}
					🍭 {foodScores.candy}
				</p>
				<p>
					<span style={{ textDecoration: "underline" }}>Tofu:</span>{" "}
					{foodScores.tofu}
				</p>
				<p>
					<span style={{ textDecoration: "underline" }}>Pizza:</span> 🍕
					{foodScores.pizza}
				</p>
			</div>
		</Html>
	);
}
