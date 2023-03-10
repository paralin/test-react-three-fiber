import { Canvas } from '@react-three/fiber'
import { MapControls, Stars } from '@react-three/drei'
import { Spaceship } from './Spaceship'

const Universe = () => {
	// <OrbitControls></OrbitControls>
  // <MapControls rotation={[90, 0, 0]} />
			// <pointLight position={[10, 50, 10]} intensity={1} />
	return (
		<Canvas className="w-full h-full bg-black">
      <MapControls up={[90, 0, 0]} rotation={[0, 0, 0]} />
      <Spaceship></Spaceship>
      <Stars></Stars>
      <spotLight position={[10, 100, 10]} intensity={10}  />
		</Canvas>
	)
}

export { Universe }
