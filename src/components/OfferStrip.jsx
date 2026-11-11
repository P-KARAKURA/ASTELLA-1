function OfferStrip({ country, onReserve }) {
  return (
    <section className="offer-strip" style={{ borderTopColor: country.accent }}>
      <div>
        <span className="eyebrow">Special service</span>
        <h3>Booking offers made for travelers</h3>
      </div>
      <div className="offer-box">
        <strong>{country.offer}</strong>
        <button type="button" className="primary" onClick={onReserve}>Reserve my trip</button>
      </div>
    </section>
  )
}

export default OfferStrip
