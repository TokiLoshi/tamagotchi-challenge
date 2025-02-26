import { Canvas } from "@react-three/fiber";
import {
	Loader,
	PresentationControls,
	AccumulativeShadows,
	RandomizedLight,
	Environment,
	SoftShadows,
} from "@react-three/drei";
import { Leva, useControls, folder } from "leva";
import Experience from "./Experience";
import Floor from "./Floor";
import { useStore } from "./Store";
import { useMemo } from "react";

export default function App() {
	const {
		ambientIntensity,
		spotLightIntensity,
		directionalIntensity,
		shadowBias,
		directionalPosition,
	} = useControls("Lighting", {
		ambient: folder({
			ambientIntensity: { value: 1.5, min: 0, max: 2, step: 0.1 },
		}),
		spotLight: folder({
			spotLightIntensity: { value: 1.2, min: 0, max: 3, step: 0.1 },
		}),
		directionalLight: folder({
			directionalIntensity: { value: 0.8, min: 0, max: 5 },
			shadowBias: { value: 0.0001, min: -0.001, max: 1, step: 0.01 },
			directionalPosition: { value: [5, 5, 5], joystick: "invertY" },
		}),
	});

	const { polar, azimuth, zoom } = useControls("Camera Controls", {
		polar: { value: [0, 0.22], min: 0, max: 0.4 },
		azimuth: {
			value: [-0.2, 0.19],
			min: -Math.PI,
			max: Math.PI,
		},
		zoom: { value: 1, min: 0, max: 2, step: 0.01 },
	});

	const { shadowOpacity, shadowScale } = useControls("Shadows", {
		shadowOpacity: { value: 0.7, min: 0, max: 1, step: 0.02 },
		shadowScale: { value: 10, min: 5, max: 20, step: 0.5 },
	});

	const { floorColor } = useControls("Floor", {
		floorColor: "#ae98c1",
	});
	const { scoreTotal } = useStore();

	const backgroundColor = useMemo(() => {
		console.log("Current state in app: ", scoreTotal);
		return scoreTotal === 4 ? "#340e55" : "#511d80";
	}, [scoreTotal]);

	console.log("Background color: ", backgroundColor);
	return (
		<>
			<Leva collapsed />
			<Canvas
				shadows
				camera={{ position: [0, 3, 12], fov: 75 }}
				gl={{
					antialias: true,
					// toneMapping: "ACESFilmic",
					// outputEncoding: "sRGB",
				}}>
				<color attach='background' args={[backgroundColor]} />
				<PresentationControls
					enabled={true}
					cursor={true}
					global
					polar={polar}
					azimuth={azimuth}
					zoom={zoom}
					config={{ mass: 2, tension: 500 }}
					snap={{ mas: 4, tension: 1500 }}>
					<ambientLight intensity={ambientIntensity} />
					{/* <spotLight
						position={[5, 5, 5]}
						angle={0.25}
						penumbra={0.5}
						intensity={spotLightIntensity}
					/>
					<spotLight
						position={[-5, 3, -5]}
						angle={0.3}
						penumbra={0.5}
						intensity={spotLightIntensity * 0.5}
					/> */}
					{/* <Environment preset='city' /> */}
					{/* <AccumulativeShadows
						position={[0, -2.9, 0]}
						scale={shadowScale}
						opacity={shadowOpacity}
						frames={1}
						temporal
						alphaTest={0.85}
						color='#333'>
						<RandomizedLight
							amount={8}
							radius={10}
							ambient={0.5}
							intesnity={1}
							position={[5, 5, 5]}
							bias={0.001}
						/>
					</AccumulativeShadows> */}
					<directionalLight
						// position={directionalPosition}
						intensity={directionalIntensity}
						castShadow
						// shadow-mapSize={[shadowMapSize, shadowMapSize]}
						shadowBias={shadowBias}
						// shadowRadius={shadowRadius}
					/>
					{/* <Grid position={[0, -0.01, 0]} args={gridSize} {...gridConfig} /> */}
					<Loader />
					<Experience />
					<Floor floorColor={floorColor} />
				</PresentationControls>
			</Canvas>
		</>
	);
}
