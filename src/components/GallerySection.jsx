function GallerySection({ country }) {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section-head">
        <span className="eyebrow">Best moments</span>
        <h2>Memories worth sharing</h2>
      </div>

      <div className="gallery-grid">
        {country.gallery.map((photo, index) => (
          <div className="gallery-item" key={`${country.name}-${index}`}>
            <img src={photo} alt={`${country.name} memory ${index + 1}`} />
            <span>{index + 1} / {country.gallery.length}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
