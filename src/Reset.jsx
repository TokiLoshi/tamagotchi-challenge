import { useStore, GAME_STATES } from "./Store";
import { Html } from "@react-three/drei";
import "./styles.css";

export default function Reset() {
	const { reset } = useStore();

	const handleReset = () => {
		reset();
	};
	return (
		<>
			<Html
				position={[-5.5, 4, 0]}
				wrapperClass='reset-wrapper'
				distanceFactor={10}
				transform
				occlude>
				<div className='reset-container'>
					<h2 className='reset-title'>Thank you for playing!</h2>
					<p className='reset-message'>
						Would you like to grow another creature?
					</p>
					<button className='reset-button' onClick={handleReset}>
						Reset
					</button>
				</div>
			</Html>
		</>
	);
}
