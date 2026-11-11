function Button({ children, color, active, onClick }) {
  return (
    <button
      className={`color-button ${active ? 'active' : ''}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
      aria-pressed={active}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button