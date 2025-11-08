/**
 * @description Page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use client'

import {Float, OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'

export default function Page() {
  return (
    <Canvas
      orthographic={true}
      camera={{
        position: [0, 0, 3],
        top: 4,
        right: 4,
        bottom: -4,
        left: -4,
        zoom: 1,
      }}
    >
      <OrbitControls />

      <Float floatIntensity={4}>
        <mesh position={[2, 2, 1]}>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>

        <mesh rotation={[Math.PI / 4, Math.PI / 3, 0]}>
          <torusGeometry />
          <meshNormalMaterial />
        </mesh>

        <mesh position={[-2, -2, -1]}>
          <sphereGeometry />
          <meshNormalMaterial />
        </mesh>
      </Float>
    </Canvas>
  )
}
