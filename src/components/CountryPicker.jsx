import Button from './Button'

function CountryPicker({ countries, selectedCountry, onSelect }) {
  return (
    <section className="country-picker" id="trips">
      <div className="section-head">
        <span className="eyebrow">Featured destinations</span>
        <h2>Choose your next story</h2>
      </div>

      <div className="button-row">
        {countries.map((country) => (
          <Button
            key={country.name}
            color={country.accent}
            active={selectedCountry.name === country.name}
            onClick={() => onSelect(country)}
          >
            {country.name}
          </Button>
        ))}
      </div>
    </section>
  )
}

export default CountryPicker
