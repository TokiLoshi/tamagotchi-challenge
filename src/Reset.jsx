import { useStore, GAME_STATES } from "./Store";
import { Html } from "@react-three/drei";
import "./styles.css";

export default function Reset({ creature }) {
	const { reset } = useStore();
	console.log("Creature: ", creature);

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
					<h2 className='reset-title'>You grew a {creature}!</h2>
					<p className='reset-message'>
						Would you like to grow another creature?
					</p>
					<p className='reset-info'>
						Try a different combo and see what happens...
					</p>
					<button className='reset-button' onClick={handleReset}>
						Reset
					</button>
				</div>
			</Html>
		</>
	);
}
