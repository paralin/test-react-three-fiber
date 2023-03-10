import { useGLTF, Html } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh } from 'three'

type GLTFResult = GLTF & {
	nodes: {
		Default: THREE.Mesh
	}
}

const Model3D = () => {
	const model = useGLTF(
		'https://uploads.codesandbox.io/uploads/user/c16bd0b5-fe7e-4464-bdea-b2bf766b639b/h9Gz-arwing.glb',
		true
	) as unknown
	const { nodes } = model as GLTFResult
	return (
		<mesh geometry={(nodes.Default as Mesh).geometry}>
			<meshStandardMaterial attach="material" color="#49404a" roughness={0.3} metalness={0.3} />
		</mesh>
	)
}

const Spaceship = () => {
	const group = useRef<THREE.Group>(null!)

	return (
		<Suspense fallback={null}>
			<group ref={group}>
				<Model3D></Model3D>
				<Html
					center={true}
					position={[0, 0, 1]}
					className="flex items-center justify-center w-48 rounded-lg select-none sm:w-80 aspect-video"
				>
          <h1 style={{'color': 'white'}}>Hello from HTML</h1>
				</Html>
			</group>
		</Suspense>
	)
}

export { Spaceship }
