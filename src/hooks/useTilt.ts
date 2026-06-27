import { useRef } from 'react'

const MAX_TILT = 10
const PERSPECTIVE = 900

/**
 * Mouse-following 3D tilt for a card. Mutates the DOM transform directly
 * on pointer move to avoid a React re-render per frame.
 */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  const onPointerMove = (e: React.PointerEvent<T>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * MAX_TILT * 2
    const rotateX = (0.5 - py) * MAX_TILT * 2
    el.style.transform = `perspective(${PERSPECTIVE}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
    el.style.setProperty('--glow-x', `${px * 100}%`)
    el.style.setProperty('--glow-y', `${py * 100}%`)
  }

  const onPointerLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = `perspective(${PERSPECTIVE}px) rotateX(0deg) rotateY(0deg) translateZ(0)`
  }

  return { ref, onPointerMove, onPointerLeave }
}
