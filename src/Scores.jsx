import { useStore, GAME_STATES } from "./Store";
import { Html } from "@react-three/drei";

export default function Scores() {
	const { currentState, scoreTotal, foodScores } = useStore();

	return (
		<Html>
			<div
				style={{
					backgroundColor: "white",
					padding: "10px",
					borderRadius: "10px",
					position: "absolute",
					top: "-100px",
					left: "-20px",
				}}>
				<h1>Today's menu</h1>
				<p>
					<span style={{ textDecoration: "underline" }}>Candy:</span> 🍭{" "}
					{foodScores.candy}
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
