import { Canvas } from "@react-three/fiber";
import {
	ContactShadows,
	PresentationControls,
	Loader,
	useProgress,
} from "@react-three/drei";
import { Leva, useControls, folder } from "leva";
import Experience from "./Experience";
import Floor from "./Floor";
import { useStore } from "./Store";
import { Suspense, useMemo } from "react";
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
		return scoreTotal === 4 ? "#340e55" : "#511d80";
	}, [scoreTotal]);

	const isDebugMode = location.hash === "#debug";

	return (
		<>
			<Leva collapsed hidden={location.hash !== "#debug"} />
			<Canvas
				shadows
				className='r3f'
				camera={{ position: [0, 3, 12], fov: 75 }}
				gl={{
					antialias: true,
					// toneMapping: "ACESFilmic",
					// outputEncoding: "sRGB",
				}}>
				<Suspense fallback={<LoadingScreen />}>
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
						snap={{ mas: 4, tension: 1500 }}>
						<ambientLight intensity={ambientIntensity} />
						<directionalLight
							// position={directionalPosition}
							intensity={directionalIntensity}
							castShadow
							// shadow-mapSize={[shadowMapSize, shadowMapSize]}
							shadowBias={shadowBias}
							// shadowRadius={shadowRadius}
						/>

						<Experience />

						<Floor floorColor={floorColor} />
					</PresentationControls>
				</Suspense>
			</Canvas>
		</>
	);
}
