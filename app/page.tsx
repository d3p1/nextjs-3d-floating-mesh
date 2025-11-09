/**
 * @description Page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use client'

import * as THREE from 'three'
import {MouseableMesh} from '@/app/component/MouseableMesh'
import {useMouse} from '@/app/hook/useMouse'
import {Float, OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {config} from '@/app/etc/config'

const meshNormalMaterial = new THREE.MeshNormalMaterial()
const box = new THREE.Mesh(new THREE.BoxGeometry(), meshNormalMaterial)
const sphere = new THREE.Mesh(new THREE.SphereGeometry(), meshNormalMaterial)
const tetrahedron = new THREE.Mesh(
  new THREE.TetrahedronGeometry(),
  meshNormalMaterial,
)
const torusKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(),
  meshNormalMaterial,
)
const torus = new THREE.Mesh(new THREE.TorusGeometry(), meshNormalMaterial)

box.position.set(2, 2, 1)
sphere.position.set(-2, -2, -1)
tetrahedron.position.set(4, 0, 3)
torusKnot.position.set(-4, 0, -4)
torus.position.set(0, 0, 0)
torus.rotation.set(Math.PI / 4, Math.PI / 3, 0)

export default function Page() {
  const mouseRef = useMouse()

  return (
    <Canvas
      orthographic={true}
      camera={{
        position: config.camera.position as [number, number, number],
        top: config.camera.size,
        right: config.camera.size,
        bottom: -config.camera.size,
        left: -config.camera.size,
        zoom: 1,
      }}
    >
      <OrbitControls />

      <Float floatIntensity={4} rotationIntensity={4}>
        <MouseableMesh mouse={mouseRef.current} mesh={box} />
        <MouseableMesh mouse={mouseRef.current} mesh={sphere} />
        <MouseableMesh mouse={mouseRef.current} mesh={tetrahedron} />
        <MouseableMesh mouse={mouseRef.current} mesh={torusKnot} />
        <MouseableMesh mouse={mouseRef.current} mesh={torus} />
      </Float>
    </Canvas>
  )
}
