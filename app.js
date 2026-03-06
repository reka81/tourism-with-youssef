import React from "https://esm.sh/react@18.3.1?dev";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client?dev";
import htm from "https://esm.sh/htm@3.1.1?dev";

const html = htm.bind(React.createElement);

const cities = [
  {
    name: "Marrakech",
    region: "Red City & Atlas foothills",
    highlight: "Jemaa el-Fna sunsets & souk secrets",
    description:
      "Rhythmic drumming, spice aromas, and the warm marble of riads set the tone before an Atlas mule ride.",
    palette: "#d96b3a",
    image: "./1327261.jpg",
    experiences: [
      "Guided night crawl of Djemaa el-Fna",
      "Sunrise ride through the Palmeraie",
      "Private tasting with Medina chefs",
    ],
  },
  {
    name: "Essaouira",
    region: "Atlantic breezes",
    highlight: "Wind-kissed ramparts & seafood",
    description:
      "Colorful boats, cedar-scented streets, and an oceanic calm perfect for slow strolls with local artisans.",
    palette: "#3a7bd5",
    image: "./204548-essaouira.jpg",
    experiences: ["Kite-surf introduction", "Thuya wood workshop visit", "Sunset concert on the cannons"],
  },
  {
    name: "Fes",
    region: "Imperial heart",
    highlight: "Madrassas & tannery views",
    description:
      "Medieval alleyways, UNESCO masterpieces, and peaceful riad rooftops where artisans dye leather in jewel tones.",
    palette: "#f5a946",
    image: "./Fes.jpg",
    experiences: [
      "Labyrinth walk with a historian",
      "Ceramics studio discovery",
      "Dinner in a revived mansion",
    ],
  },
  {
    name: "Sahara (Merzouga)",
    region: "Golden dunes",
    highlight: "Star-studded nights beyond the dunes",
    description:
      "Scale Erg Chebbi on camelback, share Berber stories by firelight, and sleep under a sky that feels infinite.",
    palette: "#9a6324",
    image: "./destination-merzouga-morocco.jpg",
    experiences: ["Camel trek at golden hour", "Sahara storytelling circle", "Sandboarding lessons"],
  },
  {
    name: "Ourika",
    region: "Atlas valley",
    highlight: "River walks & mountain villages",
    description:
      "A refreshing valley escape with flowing streams, Berber homes, and scenic trails that begin just beyond Marrakech.",
    palette: "#2f8f83",
    image: "./Ourika.jpg",
    experiences: ["Setti Fatma waterfalls hike", "Valley-side lunch", "Berber family tea stop"],
  },
  {
    name: "Imlil",
    region: "High Atlas gateway",
    highlight: "Toubkal views & crisp alpine air",
    description:
      "Stone mountain villages, terraced orchards, and panoramic passes make Imlil perfect for soft trekking and winter charm.",
    palette: "#5c7c4a",
    image: "Imlil.jpg",
    experiences: ["Guided village-to-village walk", "Mint tea with mountain hosts", "Toubkal viewpoint picnic"],
  },
  {
    name: "Ouzod",
    region: "Middle Atlas falls",
    highlight: "Waterfall cliffs & olive groves",
    description:
      "One of Morocco's most famous cascades, where rainbow mist, monkey sightings, and boat rides create a playful day out.",
    palette: "#3f88c5",
    image: "./Ouzoud.jpg",
    experiences: ["Waterfall trail circuit", "Traditional tagine by the falls", "Boat ride at the base"],
  },
  {
    name: "Ouarzazate",
    region: "Desert cinema crossroads",
    highlight: "Kasbahs, studios & Saharan light",
    description:
      "Gateway to Ait Benhaddou and Draa valleys, blending cinematic landscapes with kasbah architecture and desert routes.",
    palette: "#a05a2c",
    image: "Ouarzazate.webp",
    experiences: ["Ait Benhaddou guided visit", "Atlas film studios tour", "Sunset at Taourirt Kasbah"],
  },
  {
    name: "More destinations soon",
    region: "Coming soon",
    highlight: "New routes in planning",
    description: "Fresh city ideas are being crafted based on season, festivals, and your travel style.",
    palette: "#5f4b8b",
    image: "",
    experiences: ["More curated stays", "More local hosts", "More hidden gems"],
    placeholder: true,
  },
  {
    name: "Your custom stop",
    region: "Tailor-made",
    highlight: "Built around your interests",
    description: "Share what you love, and Youssef can add private stops that match your rhythm.",
    palette: "#6b705c",
    image: "",
    experiences: ["Culture", "Nature", "Wellness"],
    placeholder: true,
  },
];

const tripOptions = {
  collective: {
    label: "Collective option",
    title: "Collective trip options",
    price: "Group pricing in DH",
    sections: [
      {
        label: "One-day trip",
        items: [
          { city: "Ourika", price: "150 DH", guideIncluded: true },
          { city: "Imlil", price: "150 DH", guideIncluded: true },
          { city: "Essaouira", price: "200 DH", guideIncluded: false },
          { city: "Ouzod", price: "200 DH", guideIncluded: true },
          { city: "Ouarzazate", price: "200 DH", guideIncluded: false },
        ],
      },
      {
        label: "3-day trip",
        items: [{ city: "Merzouga", price: "1500 DH", guideIncluded: false }],
      },
    ],
  },
  private: {
    label: "Private option",
    title: "Singular / private trip",
    price: "Custom quote based on your route",
    details: [
      "Private driver and dedicated guide for your pace",
      "Flexible one-day or multi-day itinerary planning",
      "Door-to-door support and custom activity choices",
    ],
  },
};
const citySlides = cities;
const citySlidesLoop = [...citySlides, ...citySlides];

const testimonials = [
  {
    text: "Youssef curated our Morocco story with warmth and precision - every stop felt effortless even when we chased the sun.",
    author: "Amira & Julien - Paris",
  },
  {
    text: "The mountains, desert, and sea were stitched into a rhythm we still hum every week.",
    author: "Kenza - Casablanca",
  },
];

const CitySlide = ({ city, index, onSelect }) => html`
  <button
    className=${`destination-slide ${city.placeholder ? "is-placeholder" : ""}`}
    style=${{ "--city-image": city.image ? `url(${city.image})` : "none", "--city-accent": city.palette }}
    onClick=${() => onSelect(city)}
    aria-label=${`Open details for ${city.name}`}
  >
    <div className="destination-image" />
    <div className="destination-caption">
      <span>${index + 1}</span>
      <strong>${city.name}</strong>
    </div>
  </button>
`;

const App = () => {
  const [selectedCity, setSelectedCity] = React.useState(null);
  const [selectedTripType, setSelectedTripType] = React.useState("collective");
  const selectedTrip = tripOptions[selectedTripType];

  const normalizeCityName = (value) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

  const findCityByName = (name) => {
    const target = normalizeCityName(name);
    return cities.find((city) => {
      const normalizedCity = normalizeCityName(city.name);
      return normalizedCity.includes(target) || target.includes(normalizedCity);
    });
  };

  React.useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCity(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return html`
    <div className="page-wrapper">
    <section className="hero section-card">
      <div className="hero-content">
        <p>Youssef Ettalbi - Your Morocco story guide</p>
        <h1>
          From the medina maze to desert dunes.
        </h1>
        <p>
          Each itinerary blends hospitality, hidden gems, and modern comfort with Youssef personally curating your pace.
        </p>
        <a className="hero-cta" href="mailto:youssef.ett66@gmail.com">
          Plan a bespoke visit
        </a>
        <div className="hero-stats">
          <span>
            <strong>18</strong>
            Years guiding
          </span>
          <span>
            <strong>16+</strong>
            Cities served
          </span>
          <span>
            <strong>500+</strong>
            Travelers hosted
          </span>
        </div>
      </div>
    </section>

    <section className="section-card">
      <div className="section-heading">
        <h2>Signature services</h2>
        <p>Choose a format and view sample pricing.</p>
      </div>
      <div className="trip-switcher" role="tablist" aria-label="Trip type selector">
        ${Object.entries(tripOptions).map(([key, option]) => html`
          <button
            key=${key}
            className=${`trip-switch ${selectedTripType === key ? "is-active" : ""}`}
            onClick=${() => setSelectedTripType(key)}
            role="tab"
            aria-selected=${selectedTripType === key}
          >
            ${option.label}
          </button>
        `)}
      </div>
      <article className="trip-card">
        <h3>${selectedTrip.title}</h3>
        <p className="trip-price">${selectedTrip.price}</p>
        ${selectedTrip.sections
          ? html`
              <div className="trip-sections">
                ${selectedTrip.sections.map(
                  (section) => html`
                    <section key=${section.label} className="trip-section">
                      <h4>${section.label}</h4>
                      <ul>
                        ${section.items.map(
                          (item) => html`
                            <li key=${section.label + item.city}>
                              <button
                                className="city-link-button"
                                onClick=${() => {
                                  const matchedCity = findCityByName(item.city);
                                  if (matchedCity) {
                                    setSelectedCity(matchedCity);
                                  }
                                }}
                              >
                                ${item.city}
                              </button>
                              : ${item.price}${item.guideIncluded ? " (guide included)" : ""}
                            </li>
                          `
                        )}
                      </ul>
                    </section>
                  `
                )}
              </div>
            `
          : html`
              <ul>
                ${selectedTrip.details.map((detail) => html`<li key=${detail}>${detail}</li>`)}
              </ul>
            `}
      </article>
      <div className="service-list">
        <div className="service-pill">Flexible planning with direct support from Youssef</div>
      </div>
    </section>

    <section className="section-card">
      <div className="section-heading">
        <h2>Cities that inspire</h2>
        <p>Tap any moving card to open full details.</p>
      </div>
      <div className="destination-carousel">
        <div className="destination-track" style=${{ "--city-count": citySlides.length }}>
          ${citySlidesLoop.map((city, index) => html`
            <${CitySlide}
              key=${city.name + "-" + index}
              city=${city}
              index=${index % citySlides.length}
              onSelect=${setSelectedCity}
            />
          `)}
        </div>
      </div>
    </section>

    <section className="section-card">
      <div className="section-heading">
        <h2>Traveler notes</h2>
        <p>They arrived curious and left with stories that echo.</p>
      </div>
      <div className="grid">
        ${testimonials.map((item) => html`
          <article key=${item.author} className="city-card">
            <p className="testimonial">${item.text}</p>
            <p>${item.author}</p>
          </article>
        `)}
      </div>
    </section>

    <section className="section-card">
      <div className="section-heading">
        <h2>Connect with Youssef</h2>
        <p>Tell him what you love - he will weave it into Morocco's palette.</p>
      </div>
      <div className="contact-card">
        <p>
          Email or call to map out your journey. Youssef replies personally within a business day to propose solid options and
          flexible dates.
        </p>
        <a href="mailto:youssef.ett66@gmail.com">youssef.ett66@gmail.com</a>
        <a href="tel:+212666590883">+212 666 590 883</a>
      </div>
    </section>

    <footer>
      <p>Crafted with partners across Morocco - Inspired by landscapes, people, and modern explorers.</p>
    </footer>
    </div>

    ${selectedCity &&
    html`
      <div className="modal-backdrop" onClick=${() => setSelectedCity(null)}>
        <article className="modal-card" onClick=${(event) => event.stopPropagation()}>
          <button className="modal-close" onClick=${() => setSelectedCity(null)} aria-label="Close destination modal">
            ×
          </button>
          <div
            className=${`modal-image ${selectedCity.placeholder ? "is-placeholder" : ""}`}
            style=${{ "--city-image": selectedCity.image ? `url(${selectedCity.image})` : "none", "--city-accent": selectedCity.palette }}
          />
          <div className="modal-content">
            <h3>${selectedCity.name}</h3>
            <p className="modal-region">${selectedCity.region}</p>
            <p><strong>${selectedCity.highlight}</strong></p>
            <p>${selectedCity.description}</p>
            <ul>
              ${selectedCity.experiences.map((item) => html`<li key=${item}>${item}</li>`)}
            </ul>
          </div>
        </article>
      </div>
    `}
  `;
};

const rootElement = document.getElementById("root");
createRoot(rootElement).render(React.createElement(App));