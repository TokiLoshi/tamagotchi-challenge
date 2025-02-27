import { useStore, GAME_STATES } from "./Store";
import { Html } from "@react-three/drei";
import "./styles.css";
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";

export default function Scores({ visible = true }) {
	const { scoreTotal, foodScores } = useStore();
	const { viewport } = useThree();
	console.log("Viewport width: ", viewport.width);
	const [position, setPosition] = useState([-5, 3, 0]);

	useEffect(() => {
		const isMobile = window.innerWidth < 768;
		if (isMobile) {
			setPosition([-3.8, 4, 0]);
		}
	}, [viewport.width]);

	return (
		<group visible={visible}>
			<Html
				position={position}
				wrapperClass='menu-wrapper'
				distanceFactor={10}
				transform
				occlude>
				<div className='menu-container'>
					<h2 className='menu-title'>Menu-Gotchi!</h2>
					<p className='menu-instructions'>
						Click the buttons to feed your pet
					</p>
					<div className='food-items'>
						<div className='food-item'>
							<span className='food-name'>Candy: </span>
							<span className='food-score'>🍭 {foodScores.candy}</span>
						</div>
						<div className='food-item'>
							<span className='food-name'>Tofu: </span>
							<span className='food-score'>🥦 {foodScores.tofu}</span>
						</div>
						<div className='food-item'>
							<span className='food-name'>Pizza: </span>
							<span className='food-score'>🍕 {foodScores.pizza}</span>
						</div>
					</div>
					<div className='progress-bar'>
						<div
							className='progress'
							style={{
								width: `${Math.min((scoreTotal / 4) * 100, 100)}%`,
							}}></div>
					</div>
				</div>
			</Html>
		</group>
	);
}
