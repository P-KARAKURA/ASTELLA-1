function EventSection({ country }) {
  return (
    <section className="events-section">
      <div className="section-head">
        <span className="eyebrow">Coming soon</span>
        <h2>Events worth planning for</h2>
      </div>

      <div className="event-grid">
        {country.events.map((event) => (
          <article className="event-card" key={event.name}>
            <span className="event-date">{event.date}</span>
            <h3>{event.name}</h3>
            <p>{event.note}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EventSection
