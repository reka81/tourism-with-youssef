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
    image: "./wp3120316.jpg",
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
];

const services = [
  "Tailor-made journeys from four to fifteen days",
  "Family escapes, honeymoons, and adventure mixes",
  "Boutique riads and desert camps with curated comfort",
  "Local permit handling, logistics, and bilingual guiding",
  "Sustainability partners rooted in each destination",
];

const timeline = [
  {
    day: "Day 1",
    title: "Welcome to Marrakech",
    detail: "Airport meet, soft launch at a riad, followed by a night stroll with spices sizzling on the fire pits.",
  },
  {
    day: "Day 3",
    title: "Atlas welcome",
    detail: "Hike to an argan grove, share a lunch with Berber families, and swim in a secret waterfall.",
  },
  {
    day: "Day 6",
    title: "Atlantic unwind",
    detail: "Essaouira's calm harbor, artisan tours, and a windswept seafood meal on the ramparts.",
  },
  {
    day: "Last",
    title: "Desert crescendo",
    detail: "Sail across Merzouga dunes, sleep beneath the stars, and depart with an acoustic desert concert.",
  },
];

const timelineLoop = [...timeline, ...timeline];

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

const CityCard = ({ city, index }) => html`
  <article className="city-card" style=${{ "--city-image": `url(${city.image})` }}>
    <div className="city-highlight">
      <span style=${{ background: city.palette }}>${index + 1}</span>
      <strong>${city.highlight}</strong>
    </div>
    <h3>${city.name}</h3>
    <span className="region">${city.region}</span>
    <p>${city.description}</p>
    <ul>
      ${city.experiences.map((item) => html`<li key=${item}>${item}</li>`)}
    </ul>
  </article>
`;

const App = () => html`
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
        <a className="hero-cta" href="mailto:hello@youssefettalbi.com">
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
        <p>Every detail stays flexible, local, and intimate.</p>
      </div>
      <div className="service-list">
        ${services.map((service) => html`<div key=${service} className="service-pill">${service}</div>`)}
      </div>
    </section>

    <section className="section-card">
      <div className="section-heading">
        <h2>Cities that inspire</h2>
        <p>Each stop pairs a story, a local host, and a personal comfort note.</p>
      </div>
      <div className="grid">
        ${cities.map((city, index) => html`<${CityCard} key=${city.name} city=${city} index=${index} />`)}
      </div>
    </section>

    <section className="section-card">
      <div className="section-heading">
        <h2>Rhythm of a stay</h2>
        <p>Sample pacing to help you feel each landscape before moving on.</p>
      </div>
      <div className="timeline">
        <div className="timeline-track">
          ${timelineLoop.map((item, index) => html`
            <article key=${item.day + "-" + index} className="timeline-card">
              <h4>${item.day}</h4>
              <strong>${item.title}</strong>
              <p>${item.detail}</p>
            </article>
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
`;

const rootElement = document.getElementById("root");
createRoot(rootElement).render(React.createElement(App));