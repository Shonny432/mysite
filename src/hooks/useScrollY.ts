import { useEffect, useRef } from 'react'

/**
 * Tracks window scrollY and writes it to a ref + CSS var on `target`
 * via rAF, bypassing React state so scroll-linked visuals stay smooth.
 */
export function useScrollY(target?: React.RefObject<HTMLElement | null>) {
  const scrollY = useRef(0)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        scrollY.current = window.scrollY
        target?.current?.style.setProperty('--scroll', String(window.scrollY))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [target])

  return scrollY
}
