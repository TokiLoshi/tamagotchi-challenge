import { TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

export default function Eating(food = candy) {
	// Eating Textures
	const candyTexture = useLoader(TextureLoader, "./textures/Tamagotchi/3.png");
	const tofuTexture = useLoader(TextureLoader, "./textures/Tamagotchi/4.png");
	const pizzaTexture = useLoader(TextureLoader, "./textures/Tamagotchi/5.png");

	// Texture Debugging
	console.log("Candy texture: ", candyTexture);
	console.log("Tofu texture: ", tofuTexture);
	console.log("Pizza Texture: ", pizzaTexture);

	const eatingRef = useRef();

	let face = candyTexture;

	if (food == "tofu") {
		face = tofuTexture;
	} else if (food == "pizza") {
		face = pizzaTexture;
	}

	return (
		<>
			<Suspense>
				<mesh position={[0, 2.9, 1]} scale={1.5} ref={eatingRef}>
					<planeGeometry />
					<meshStandardMaterial color='#E7D6C4' map={face} />
				</mesh>
			</Suspense>
		</>
	);
}
