import { useStore, GAME_STATES } from "./Store";
import { Html } from "@react-three/drei";

export default function Reset() {
	const { scoreTotal, setState, reset } = useStore();
	console.log("Time to load the reset button: ", scoreTotal);

	const handleReset = () => {
		console.log("user would like to reset");
		reset();
	};

	const handlePointerEnter = (event) => {
		event.target.style.cursor = "pointer";
	};
	const handlePointerLeave = (event) => {
		event.target.style.cursor = "default";
	};
	return (
		<>
			<Html position={[-5, 4, 0]}>
				<div
					style={{
						padding: "20px",
						backgroundColor: "#311971",
						fontFamily: "sans-serif",
					}}
					onPointerEnter={handlePointerEnter}
					onPointerLeave={handlePointerLeave}>
					<p style={{ color: "whitesmoke", padding: "10px" }}>
						Thank you for playing!
					</p>
					<p style={{ color: "whitesmoke", padding: "10px" }}>
						Would you like to grow another creature?
					</p>
					<p
						style={{
							color: "white",
							padding: "20px",
							border: "1px solidrgb(149, 144, 164)",
							boxShadow: "5px 5px 5px",
							borderRadius: "10px",
						}}
						onClick={handleReset}>
						Reset
					</p>
				</div>
			</Html>
		</>
	);
}
