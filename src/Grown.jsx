import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { calculateCreature } from "./utils.js";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useStore } from "./Store";
import Reset from "./Reset";

export default function GrownCreature({ baseUrl }) {
	const grownCreatureRef = useRef();
	const { foodScores } = useStore();
	const [texture, setTexture] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	console.log("Is loading: ", isLoading);

	const creatureType = calculateCreature(foodScores);
	const texturePath = `${baseUrl}${creatureType}.png`;

	useEffect(() => {
		const loader = new TextureLoader();
		console.log("In useEffect, isLoading: ", isLoading);
		setIsLoading(true);
		loader.load(
			texturePath,
			(loadedTexture) => {
				console.log("Loading...");
				setTexture(loadedTexture);
				setIsLoading(false);
			},
			undefined,
			(error) => {
				console.error(`Error loading texture for ${creatureType}`);
			}
		);
		console.log("Returning from useEffect: ", isLoading);
		return () => {
			if (texture) {
				texture.dispose();
			}
		};
	}, [baseUrl, creatureType]);

	const { scale } = useSpring({
		from: { scale: 1.5 },
		to: [{ scale: 1.5 }, { scale: 1.3 }],
		loop: true,
		config: {
			mass: 2,
			tension: 180,
			friction: 8,
		},
	});

	if (isLoading || !texture) {
		// console.log(i)
		return null;
	}

	return (
		<>
			{isLoading && (
				<mesh>
					<sphereGeometry />
					<meshStandardMaterial />
				</mesh>
			)}
			<animated.mesh
				position={[0, 2.9, 1]}
				scale={scale}
				ref={grownCreatureRef}>
				<planeGeometry />
				<meshStandardMaterial
					color='#E7D6C4'
					map={texture}
					transparent={true}
				/>
			</animated.mesh>
			<Reset creature={creatureType} />
		</>
	);
}
