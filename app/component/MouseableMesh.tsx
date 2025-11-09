/**
 * @description Mouseable mesh
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {config} from '@/app/etc/config'
import {Mouse} from '@/app/types'
import {useFrame} from '@react-three/fiber'
import {useRef} from 'react'
import * as React from 'react'
import * as THREE from 'three'

export const MouseableMesh: React.FC<{mesh: THREE.Mesh; mouse: Mouse}> = ({
  mesh,
  mouse,
}) => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    if (!mouse.x || !mouse.y) {
      return
    }

    const vX = mouse.x - meshRef.current.position.x
    const vY = mouse.x - meshRef.current.position.y
    const v = new THREE.Vector2(vX, vY)

    if (v.length() < config.world.displacement.distance.min) {
      return
    }

    const dir = v.normalize()
    meshRef.current.translateX(
      dir.x * config.world.displacement.velocity * delta,
    )
    meshRef.current.translateY(
      dir.y * config.world.displacement.velocity * delta,
    )
  })

  return <primitive object={mesh} ref={meshRef} />
}
