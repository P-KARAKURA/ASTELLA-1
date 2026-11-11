function BookingSection({ country, booking, tripTotal, basePrice, onBookingChange, onSubmit, submitted }) {
  return (
    <section className="booking-section" id="booking">
      <div className="section-head">
        <span className="eyebrow">Plan your trip</span>
        <h2>Reserve a real getaway</h2>
      </div>

      <div className="booking-card">
        <form className="booking-form" onSubmit={onSubmit}>
          <label>
            <span>Email</span>
            <input
              type="email"
              value={booking.email}
              onChange={(event) => onBookingChange('email', event.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            <span>Check-in</span>
            <input
              type="date"
              value={booking.checkIn}
              onChange={(event) => onBookingChange('checkIn', event.target.value)}
              required
            />
          </label>

          <label>
            <span>Travelers</span>
            <select
              value={booking.travelers}
              onChange={(event) => onBookingChange('travelers', Number(event.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map((count) => (
                <option key={count} value={count}>
                  {count} traveler{count > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Nights</span>
            <input
              type="number"
              min="2"
              max="12"
              value={booking.nights}
              onChange={(event) => onBookingChange('nights', Number(event.target.value) || 2)}
            />
          </label>

          <button type="submit" className="primary full-width">Confirm booking</button>
        </form>

        <aside className="booking-summary" style={{ borderTopColor: country.accent }}>
          <div className="summary-row">
            <span>Destination</span>
            <strong>{country.name}</strong>
          </div>
          <div className="summary-row">
            <span>Trip base</span>
            <strong>${basePrice}</strong>
          </div>
          <div className="summary-row">
            <span>Duration</span>
            <strong>{booking.nights} nights</strong>
          </div>
          <div className="summary-row">
            <span>Travelers</span>
            <strong>{booking.travelers}</strong>
          </div>
          <div className="summary-row total-row">
            <span>Estimated total</span>
            <strong>${tripTotal}</strong>
          </div>

          {submitted && (
            <div className="success-banner">
              Booking request prepared for <strong>{booking.email || 'your email'}</strong>.
            </div>
          )}
        </aside>
      </div>
    </section>
  )
}

export default BookingSection
