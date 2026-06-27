import './Divider.css'

export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span className="divider__line" />
      <span className="divider__mark">
        <span className="divider__diamond" />
      </span>
      <span className="divider__line" />
    </div>
  )
}
