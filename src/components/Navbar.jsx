import { ArrowRight, Camera, Compass, Sparkles } from 'lucide-react'
import brandLogo from '../assets/haven-logo.svg'

const navItems = [
  { label: 'Trips', icon: Compass, id: 'trips' },
  { label: 'Experiences', icon: Camera, id: 'experiences' },
  { label: 'Gallery', icon: Sparkles, id: 'gallery' },
]

function Navbar({ accent = '#4c1d95', onBookNow }) {
  const handleNavClick = (event, sectionId) => {
    event.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="topbar">
      <div className="brand" aria-label="HAVEN brand logo">
        <img src={brandLogo} alt="HAVEN logo" className="brand-logo" />
        <span className="brand-name">HAVEN</span>
      </div>

      <nav className="nav" aria-label="Main navigation">
        {navItems.map(({ label, icon: Icon, id }) => (
          <a
            key={label}
            href={`#${id}`}
            className="nav-link"
            style={{ '--nav-accent': accent }}
            onClick={(event) => handleNavClick(event, id)}
          >
            <span className="nav-icon" aria-hidden="true">
              <Icon size={16} />
            </span>
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <button type="button" className="cta-button" onClick={onBookNow}>
        Book now
        <ArrowRight size={16} />
      </button>
    </header>
  )
}

export default Navbar
