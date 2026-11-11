function ShowcaseCard({ country, selectedPlace, selectedHighlight, onPlaceSelect, onHighlightSelect }) {
  const placeItems = country.places || []
  const activePlace =
    placeItems.find((place) => place.name === selectedPlace) || placeItems[0]
  const activeHighlight =
    (country.highlights || []).find((item) => item.title === selectedHighlight) || country.highlights[0]

  return (
    <section className="showcase-card" id="experiences">
      <div className="showcase-image-wrap">
        <img
          src={activePlace?.image || country.bestPhoto}
          alt={activePlace?.name || country.name}
          className="showcase-image"
        />
      </div>

      <div className="showcase-info" style={{ borderTopColor: country.accent }}>
        <div className="info-topline">
          <span className="badge">{country.region}</span>
          <span className="price">{country.price}</span>
        </div>

        <h3>{country.name}</h3>
        <p>{country.description}</p>

        {placeItems.length > 0 && (
          <>
            <div className="place-list" aria-label={`${country.name} places`}>
              {placeItems.map((place) => (
                <button
                  key={place.name}
                  type="button"
                  className={`place-chip ${selectedPlace === place.name ? 'active' : ''}`}
                  onClick={() => onPlaceSelect(place.name)}
                  aria-pressed={selectedPlace === place.name}
                >
                  {place.name}
                </button>
              ))}
            </div>

            <div className="place-detail-box">
              {activePlace.image && <img src={activePlace.image} alt={activePlace.name} className="place-image" />}
              <strong>{activePlace.name}</strong>
              <p>{activePlace.description}</p>
              {activePlace.story && <blockquote className="place-story">“{activePlace.story}”</blockquote>}
              {activePlace.link && (
                <a
                  href={activePlace.link}
                  target="_blank"
                  rel="noreferrer"
                  className="place-link"
                >
                  Visit this place
                </a>
              )}
            </div>
          </>
        )}

        <div className="highlight-grid">
          {country.highlights.map((item) => (
            <article
              key={item.title}
              className={`mini-card ${selectedHighlight === item.title ? 'active' : ''}`}
              onClick={() => onHighlightSelect(item.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  onHighlightSelect(item.title)
                }
              }}
            >
              <img src={item.image} alt={item.title} />
              <div className="mini-copy">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            </article>
          ))}
        </div>

        {activeHighlight && (
          <div className="highlight-detail">
            <span className="highlight-label">Featured choice</span>
            <h4>{activeHighlight.title}</h4>
            <p>{activeHighlight.description}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ShowcaseCard
