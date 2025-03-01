import { Canvas } from "@react-three/fiber";
import {
	ContactShadows,
	PresentationControls,
	Loader,
	useProgress,
	Stars,
	Caustics,
	SoftShadows,
} from "@react-three/drei";
import { Leva, useControls, folder } from "leva";
import Experience from "./Experience";
import Floor from "./Floor";
import { useStore } from "./Store";
import { Suspense, useMemo, useRef } from "react";
import { Perf } from "r3f-perf";
import LoadingScreen from "./LoadingScreen";
// import Loader from "./Loader";

export default function App() {
	const {
		ambientIntensity,
		spotLightIntensity,
		directionalIntensity,
		shadowBias,
		directionalPosition,
	} = useControls("Lighting", {
		ambient: folder({
			ambientIntensity: { value: 2.5, min: 0, max: 4, step: 0.1 },
		}),
		pointLight: folder({
			pointLightIntensity: { value: 1.2, min: 0, max: 3, step: 0.1 },
			pointLightPosition: { value: [0, 4, 2], joystick: "invertY" },
		}),
		spotLight: folder({
			spotLightIntensity: { value: 1.2, min: 0, max: 3, step: 0.1 },
		}),
		directionalLight: folder({
			directionalIntensity: { value: 1.8, min: 0, max: 5 },
			shadowBias: { value: 0.0001, min: -0.001, max: 1, step: 0.01 },
			directionalPosition: { value: [2, 4.3, -0.4], joystick: "invertY" },
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
		return scoreTotal === 4 ? "#340e55" : "#511d80";
	}, [scoreTotal]);

	const isDebugMode = location.hash === "#debug";
	const directionalLightRef = useRef();
	return (
		<>
			<Leva collapsed hidden={location.hash !== "#debug"} />
			<Canvas
				shadows
				className='r3f'
				camera={{ position: [0, 3, 8.5], fov: 75 }}
				gl={{
					antialias: true,
					toneMapping: "ACESFilmic",
					outputEncoding: "sRGB",
				}}>
				<color attach='background' args={[backgroundColor]} />
				{isDebugMode && <Perf position='top-left' />}

				<PresentationControls
					enabled={true}
					cursor={true}
					global
					polar={polar}
					azimuth={azimuth}
					zoom={zoom}
					config={{ mass: 2, tension: 500 }}
					snap={{ mass: 4, tension: 1500 }}>
					{/* Lighting */}
					<ambientLight intensity={ambientIntensity} />
					<directionalLight
						position={directionalPosition}
						intensity={directionalIntensity}
						castShadow
						shadowBias={shadowBias}
						ref={directionalLightRef}
					/>
					{/* {directionalLightRef.current && (
						<directionalLightHelper
							args={[directionalLightRef.current, 2, 0xff0000]}
						/>
					)} */}
					<Suspense fallback={<LoadingScreen />}>
						{/* Drei Stars */}
						<Stars
							radius={100}
							depth={50}
							count={5000}
							factor={4}
							saturation={0}
							fade
							speed={1}
						/>
						<Experience />
						<Floor floorColor={floorColor} />
					</Suspense>
				</PresentationControls>
			</Canvas>
			<Loader
				containerStyles={{
					backgroundColor: "#1e0f45",
				}}
				innerStyles={{ backgroundColor: "#8e5fd1 " }}
				dataStyles={{ color: "#e0c0ff " }}
			/>
		</>
	);
}
