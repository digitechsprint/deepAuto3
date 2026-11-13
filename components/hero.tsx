"use client";

import { images } from "@/lib/content";
import { useRotator } from "@/components/interactive";

const slides = [
  { image: images.hero1, kicker: "Automotive components since 1998", title: "Precision in every connection", text: "Wire harnesses, cables, terminals and precision components for India's leading automotive manufacturers." },
  { image: images.hero2, kicker: "Engineered around your application", title: "Made to fit. Made to move.", text: "From your drawing to a tested, production-ready part — designed, tooled and manufactured in-house." },
  { image: images.hero3, kicker: "IATF 16949 · ISO 9001 certified", title: "Quality that lasts the distance", text: "Certified systems and in-house testing at every step, so every connection performs on the road." },
];

export function Hero() {
  const [active, setActive] = useRotator(slides.length, 6500);
  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Highlights">
      {slides.map((s, i) => (
        <div key={s.title} className={`hero-slide${i === active ? " is-active" : ""}`} style={{ backgroundImage: `url("${s.image}")` }} aria-hidden={i !== active} />
      ))}
      <div className="hero-shade" />
      <div className="wrap hero-body">
        <div className="hero-copy" key={active}>
          <span className="hero-kicker">{slides[active].kicker}</span>
          <h1>{slides[active].title}</h1>
          <p>{slides[active].text}</p>
          <div className="hero-btns">
            <a href="#products" className="btn btn-accent">Explore products</a>
            <a href="#contact" className="btn btn-white">Request a quote</a>
          </div>
        </div>
        <div className="hero-dots" role="tablist" aria-label="Choose slide">
          {slides.map((s, i) => (
            <button key={s.title} type="button" role="tab" aria-selected={i === active} aria-label={`Slide ${i + 1}`} className={i === active ? "is-active" : ""} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
