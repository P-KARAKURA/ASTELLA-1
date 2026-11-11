function HeroSection({ country, onExplore, onSeeExperiences }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">Live unforgettable moments</span>
        <h1>Travel for the photos, the taste, and the memory.</h1>
        <p>
          Discover beautiful destinations where every stay turns into a story, every meal becomes a memory,
          and every frame feels worth keeping.
        </p>
        <div className="hero-actions">
          <button type="button" className="primary" onClick={onExplore}>Explore places</button>
          <button type="button" className="secondary" onClick={onSeeExperiences}>See experiences</button>
        </div>
      </div>

      <img src={country.heroImage} alt={country.name} className="hero-image" />
    </section>
  )
}

export default HeroSection
