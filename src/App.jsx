import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CountryPicker from './components/CountryPicker'
import ShowcaseCard from './components/ShowcaseCard'
import BookingSection from './components/BookingSection'
import EventSection from './components/EventSection'
import OfferStrip from './components/OfferStrip'
import GallerySection from './components/GallerySection'
import rwanda1 from './assets/1Rwanda.jpeg'
import rwanda2 from './assets/2Rwanda.jpeg'
import rwanda3 from './assets/3Rwanda.jpeg'
import rwanda4 from './assets/4Rwanda.jpeg'
import rwanda5 from './assets/5Rwanda.jpeg'
import rwanda6 from './assets/6Rwanda.jpeg'
import rwanda7 from './assets/7Rwanda.jpeg'
import rwanda8 from './assets/8Rwanda.jpeg'
import rwanda9 from './assets/9Rwanda.jpeg'
import rwanda10 from './assets/10Rwanda.jpeg'
import rwanda11 from './assets/11Rwanda.jpeg'
import marange1 from './assets/marange1.jpeg'
import marange2 from './assets/marange2.jpeg'
import marange3 from './assets/marange3.jpeg'
import marange4 from './assets/marange4.jpeg'
import nyirangarama from './assets/nyirangarama.jpeg'
import nyirangarama2 from './assets/nyirangarama2.jpeg'
import drc1 from './assets/images.jpeg'
import drc2 from './assets/images (1).jpeg'
import drc3 from './assets/images (2).jpeg'
import drc4 from './assets/images (3).jpeg'
import drc5 from './assets/images (11).jpeg'

const countries = [
  {
    name: 'Rwanda',
    accent: '#2563eb',
    region: 'East Africa',
    heroImage:
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=80',
    bestPhoto: rwanda10,
    description:
      'Rwanda blends modern hospitality with peaceful landscapes, city energy, and unforgettable mountain views.',
    price: '$420 / 3 days',
    tag: 'Luxury city + nature',
    places: [
      {
        name: 'Mu marange (Nyamirambo)',
        description: 'A lively and colorful area of Kigali known for its vibrant street life, neighborhood culture, and unforgettable photo moments.',
        image: marange1,
        story: 'Photographer Joel K. captured a powerful evening in the streets of Nyamirambo and described it as the kind of place where every frame tells a story.',
        link: 'https://www.google.com/search?q=mu+marangi+nyamirambo+kigali&udm=2',
      },
      {
        name: 'Nyirangarama',
        description: 'A memorable scenic area known for calm surroundings, local character, and unforgettable storytelling light.',
        image: nyirangarama,
        story: 'A local photographer said the golden-hour view in Nyirangarama felt like a memory already waiting to be framed.',
        link: 'https://www.google.com/maps/search/Nyirangarama+Kigali',
      },
      {
        name: 'Lake Muhazi',
        description: 'A peaceful lakeside escape perfect for scenic views and memorable sunrise photography.',
        image: rwanda8,
        link: 'https://www.google.com/maps/search/Lake+Muhazi+Rwanda',
      },
      {
        name: 'Kigali City Centre',
        description: 'The modern heart of Rwanda, full of cafés, hotels, art, and dynamic city energy.',
        image: rwanda7,
        link: 'https://www.google.com/maps/search/Kigali+City+Centre+Rwanda',
      },
    ],
    highlights: [
      { title: 'Restaurants', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80', description: 'Fine dining and rooftop experiences with local flavor.' },
      { title: 'Hotels', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80', description: 'Boutique stays and luxury city comfort.' },
      { title: 'Art gallery', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80', description: 'Creative spaces and cultural storytelling.' },
    ],
    events: [
      { name: 'Kigali City Lights Festival', date: '12 Jul 2026', note: 'Live music, food courts, and night photography walks.' },
      { name: 'Lake Rwanda Food Week', date: '25 Jul 2026', note: 'Chef pop-ups and curated local tasting menus.' },
      { name: 'Culture & Art Weekend', date: '08 Aug 2026', note: 'Exhibitions, performances, and local artist meetups.' },
    ],
    offer: 'Book 3 nights and enjoy 15% off your stay + free welcome dinner.',
    gallery: [marange1, marange2, marange3, marange4, nyirangarama, nyirangarama2, rwanda6, rwanda7, rwanda8, rwanda9],
  },
  {
    name: 'DRC',
    accent: '#dc2626',
    region: 'Central Africa',
    heroImage:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1400&q=80',
    bestPhoto:
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80',
    description:
      'The DRC brings dramatic landscapes, vibrant local culture, and energetic city life to every traveler story.',
    price: '$360 / 3 days',
    tag: 'Culture + adventure',
    places: [
      {
        name: 'Rond Point BDGL',
        description: 'A lively urban landmark with strong cultural energy and scenic city atmosphere.',
        link: 'https://www.google.com/maps/search/Rond+Point+BDGL+Goma',
      },
      {
        name: 'Lake Goma',
        description: 'A refreshing waterfront setting for slow afternoons and unforgettable views.',
        link: 'https://www.google.com/maps/search/Lake+Goma+Goma',
      },
      {
        name: 'Local Market Route',
        description: 'A colorful route of taste, motion, and local storytelling.',
        link: 'https://www.google.com/maps/search/Goma+market+DRC',
      },
    ],
    highlights: [
      { title: 'Restaurants', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80', description: 'Street flavors, grilled dishes, and lively dining scenes.' },
      { title: 'Hotels', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80', description: 'Comfortable stays near the city and lake region.' },
      { title: 'Art gallery', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', description: 'Art spaces shaped by local stories and identity.' },
    ],
    events: [
      { name: 'Goma Lake Nights', date: '18 Jul 2026', note: 'A waterfront celebration of food, live music, and sunset photography.' },
      { name: 'Heritage Food Fair', date: '31 Jul 2026', note: 'Local dishes, cultural storytelling, and market experiences.' },
      { name: 'Arts on the Hill', date: '14 Aug 2026', note: 'Open-air gallery showcases and community performances.' },
    ],
    offer: 'Reserve now and get 12% off your booking plus a complimentary local tasting tour.',
    gallery: [drc1, drc2, drc3, drc4, drc5],
  },
  {
    name: 'Kenya',
    accent: '#14b8a6',
    region: 'East Africa',
    heroImage:
      'https://images.unsplash.com/photo-1546412414-8035e1776c9d?auto=format&fit=crop&w=1400&q=80',
    bestPhoto:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80',
    description:
      'Kenya offers golden savannahs, wildlife experiences, and warm hospitality for unforgettable memories.',
    price: '$520 / 4 days',
    tag: 'Safari + sunset',
    places: [
      {
        name: 'Maasai Mara',
        description: 'A dream safari route with sunset drives and cinematic wildlife moments.',
        link: 'https://www.google.com/maps/search/Maasai+Mara+Kenya',
      },
      {
        name: 'Nairobi City',
        description: 'A vibrant blend of culture, nightlife, and city dining experiences.',
        link: 'https://www.google.com/maps/search/Nairobi+City+Kenya',
      },
    ],
    highlights: [
      { title: 'Restaurants', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80', description: 'Fresh seafood, grilled meats, and cultural dining.' },
      { title: 'Hotels', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80', description: 'Luxury safari lodges with panoramic views.' },
      { title: 'Art gallery', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80', description: 'Contemporary art and local expression.' },
    ],
    events: [
      { name: 'Maasai Sunset Festival', date: '05 Jul 2026', note: 'Music, food, and unforgettable golden-hour photography.' },
      { name: 'Nairobi Food & Music Week', date: '20 Jul 2026', note: 'Chef pop-ups and live cultural performances.' },
      { name: 'Wildlife Lens Weekend', date: '03 Aug 2026', note: 'A guided photography experience across iconic spots.' },
    ],
    offer: 'Book a safari stay and receive 18% off plus a free photo guide session.',
    gallery: [
      'https://images.unsplash.com/photo-1546412414-8035e1776c9d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    name: 'Tanzania',
    accent: '#f59e0b',
    region: 'East Africa',
    heroImage:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80',
    bestPhoto:
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80',
    description:
      'Tanzania offers cinematic scenery, warm beaches, and rich cultural experiences for both travelers and photographers.',
    price: '$560 / 4 days',
    tag: 'Cliffs + coast',
    places: [
      {
        name: 'Zanzibar',
        description: 'A vibrant island with crystal beaches and unforgettable sunset scenes.',
        link: 'https://www.google.com/maps/search/Zanzibar+Tanzania',
      },
      {
        name: 'Serengeti',
        description: 'A classic safari destination rich in wildlife and cinematic landscapes.',
        link: 'https://www.google.com/maps/search/Serengeti+Tanzania',
      },
    ],
    highlights: [
      { title: 'Restaurants', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80', description: 'Fresh coastal seafood and vibrant local cuisine.' },
      { title: 'Hotels', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80', description: 'Escapes with styled rooms and serene views.' },
      { title: 'Art gallery', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80', description: 'Creative spaces inspired by local identity.' },
    ],
    events: [
      { name: 'Zanzibar Sunset Carnival', date: '09 Jul 2026', note: 'Beach lights, music, and a memorable dining circuit.' },
      { name: 'Coastal Food Week', date: '28 Jul 2026', note: 'Fresh flavors with chef-led beach experiences.' },
      { name: 'Creative Coast Showcase', date: '12 Aug 2026', note: 'Open galleries and handmade art sessions.' },
    ],
    offer: 'Book a coastal stay and save 16% with a complimentary beach dinner.',
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    name: 'Uganda',
    accent: '#22c55e',
    region: 'East Africa',
    heroImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    bestPhoto:
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=80',
    description:
      'Uganda offers green beauty, rich wildlife, calm lakes, and delicious local food for rewarding experiences.',
    price: '$480 / 4 days',
    tag: 'Nature + flavor',
    places: [
      {
        name: 'Lake Victoria',
        description: 'A tranquil destination full of reflections, local life, and scenic calm.',
        link: 'https://www.google.com/maps/search/Lake+Victoria+Uganda',
      },
      {
        name: 'Bwindi',
        description: 'A wildlife-rich region known for unforgettable natural experiences.',
        link: 'https://www.google.com/maps/search/Bwindi+Uganda',
      },
    ],
    highlights: [
      { title: 'Restaurants', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80', description: 'Warm local kitchens and fresh seasonal meals.' },
      { title: 'Hotels', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80', description: 'Peaceful stays connected to nature and scenery.' },
      { title: 'Art gallery', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80', description: 'Cultural gems and artist-led spaces.' },
    ],
    events: [
      { name: 'Lake Views Festival', date: '11 Jul 2026', note: 'Sunset overlooks, music, and local food experiences.' },
      { name: 'Forest & Flame Nights', date: '22 Jul 2026', note: 'Campfire dining and guided nature walks.' },
      { name: 'Creative Village Week', date: '06 Aug 2026', note: 'Open galleries, workshops, and cultural showcases.' },
    ],
    offer: 'Book a nature retreat and enjoy 14% off + a complimentary village food tasting.',
    gallery: [
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
    ],
  },
]

const getPriceInfo = (country) => {
  const priceMatch = country.price.match(/\$?(\d+)(?:\.\d+)?/)
  const daysMatch = country.price.match(/\/\s*(\d+)\s*days?/i)

  return {
    price: Number(priceMatch?.[1] ?? 0),
    nights: Number(daysMatch?.[1] ?? 3),
  }
}

function App() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [selectedPlace, setSelectedPlace] = useState(countries[0].places[0].name)
  const [selectedHighlight, setSelectedHighlight] = useState(countries[0].highlights[0].title)
  const [booking, setBooking] = useState({ travelers: 2, nights: 3, checkIn: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    setSelectedPlace(selectedCountry.places[0].name)
    setSelectedHighlight(selectedCountry.highlights[0].title)
    setBooking((current) => ({ ...current, nights: getPriceInfo(selectedCountry).nights }))
  }, [selectedCountry])

  const { price, nights } = getPriceInfo(selectedCountry)
  const serviceFee = booking.travelers * 32 + 48
  const tripTotal = Math.round(price * (booking.nights / nights) + serviceFee)

  const handleBookingChange = (field, value) => {
    setBooking((current) => ({ ...current, [field]: value }))
    if (submitted) setSubmitted(false)
  }

  const handleBookingSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main
      className="tourism-page"
      style={{
        background: `radial-gradient(circle at top, ${selectedCountry.accent} 0%, #f8fafc 34%, #eef2ff 100%)`,
      }}
    >
      <div className="container">
        <Navbar accent={selectedCountry.accent} onBookNow={() => scrollToSection('booking')} />

        <HeroSection
          country={selectedCountry}
          onExplore={() => scrollToSection('trips')}
          onSeeExperiences={() => scrollToSection('experiences')}
        />

        <CountryPicker
          countries={countries}
          selectedCountry={selectedCountry}
          onSelect={(country) => {
            setSelectedCountry(country)
            setSelectedPlace(country.places[0].name)
            scrollToSection('experiences')
          }}
        />

        <ShowcaseCard
          country={selectedCountry}
          selectedPlace={selectedPlace}
          selectedHighlight={selectedHighlight}
          onPlaceSelect={setSelectedPlace}
          onHighlightSelect={setSelectedHighlight}
        />

        <BookingSection
          country={selectedCountry}
          booking={booking}
          tripTotal={tripTotal}
          basePrice={price}
          onBookingChange={handleBookingChange}
          onSubmit={handleBookingSubmit}
          submitted={submitted}
        />

        <EventSection country={selectedCountry} />
        <OfferStrip country={selectedCountry} onReserve={() => scrollToSection('booking')} />
        <GallerySection country={selectedCountry} />
      </div>
    </main>
  )
}

export default App