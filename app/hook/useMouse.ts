/**
 * @description Hook to manage mouse
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {config} from '@/app/etc/config'
import {Mouse} from '@/app/types'
import {RefObject, useEffect, useRef} from 'react'

export const useMouse = () => {
  const mouseRef: RefObject<Mouse> = useRef({
    x: null,
    y: null,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x =
        (e.offsetX / window.innerWidth - 0.5) * 2 * config.camera.size
      mouseRef.current.y =
        (e.offsetY / window.innerHeight - 0.5) * -2 * config.camera.size
    }

    addEventListener('mousemove', handleMouseMove)

    return () => {
      removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mouseRef
}
