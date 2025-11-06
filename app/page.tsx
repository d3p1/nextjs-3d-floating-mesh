/**
 * @description Page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use client'

import {Float, OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'

export default function Page() {
  return (
    <Canvas orthographic={true} camera={{position: [1, 1, 1], zoom: 500}}>
      <OrbitControls />

      <Float>
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Float>
    </Canvas>
  )
}
