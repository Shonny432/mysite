import { useRef } from 'react'
import { useScrollY } from '../hooks/useScrollY'
import './Kaleidoscope.css'

const SLICES = 12

export default function Kaleidoscope() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollY(ref)

  return (
    <div className="kaleidoscope" ref={ref} aria-hidden="true">
      <div className="kaleidoscope__core" />
      <div className="kaleidoscope__ring kaleidoscope__ring--cw">
        {Array.from({ length: SLICES }, (_, i) => (
          <span
            key={i}
            className="kaleidoscope__slice"
            style={{ '--i': i, '--n': SLICES } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="kaleidoscope__ring kaleidoscope__ring--ccw">
        {Array.from({ length: SLICES }, (_, i) => (
          <span
            key={i}
            className="kaleidoscope__slice kaleidoscope__slice--alt"
            style={{ '--i': i, '--n': SLICES } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  )
}
