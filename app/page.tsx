import { Logo } from "@/components/logo";
import { Hero } from "@/components/hero";
import { EnquiryForm, MobileMenu, Reveal } from "@/components/interactive";
import { capabilities, categories, certificates, company, customers, images, nav, plants, stats, steps } from "@/lib/content";

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" className="ico" aria-hidden="true"><path d={d} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const icons = {
  phone: "M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  pin: "M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Zm0-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  check: "M5 12l4 4L19 6",
  tool: "M14 7a4 4 0 0 1-5 5l-5 5 3 3 5-5a4 4 0 0 0 5-5l-3 3-3-3 3-3Z",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
  cube: "M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 0v20M3 7l9 5 9-5",
  shield: "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-3 9 2 2 4-4",
  arrow: "M5 12h14m-5-5 5 5-5 5",
};
const capIcons = [icons.tool, icons.bolt, icons.cube, icons.shield];

export default function Home() {
  return (
    <div id="top">
      <Reveal />

      {/* Top bar */}
      <div className="topbar">
        <div className="wrap topbar-row">
          <span>IATF 16949 &amp; ISO 9001 Certified Manufacturer · Since {company.since}</span>
          <div>
            <a href={company.phoneHref}><Icon d={icons.phone} />{company.phone}</a>
            <a href={`mailto:${company.email}`}><Icon d={icons.mail} />{company.email}</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="wrap header-row">
          <Logo id="hd" />
          <nav className="nav" aria-label="Primary">
            {nav.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <a href="#contact" className="btn btn-accent btn-sm header-cta">Get a Quote</a>
          <MobileMenu links={[...nav, { href: "#contact", label: "Contact" }]} cta={<a href="#contact" className="btn btn-accent">Get a Quote</a>} />
        </div>
      </header>

      <Hero />

      {/* Highlights strip overlapping the hero */}
      <div className="wrap highlights">
        {capabilities.map((c, i) => (
          <div key={c.title} className="highlight">
            <span className="highlight-ico"><Icon d={capIcons[i]} /></span>
            <div><strong>{c.title}</strong><small>{["Tools & moulds built in-house", "44 automatic machines", "35 – 180 tonne range", "Tested at every stage"][i]}</small></div>
          </div>
        ))}
      </div>

      {/* About */}
      <section id="about" className="section">
        <div className="wrap about">
          <div className="about-media" data-reveal>
            <img src={images.factory} alt="DAEPL production floor" />
            <div className="about-badge"><strong>25+</strong><span>Years of manufacturing excellence</span></div>
          </div>
          <div data-reveal>
            <span className="label">About DAEPL</span>
            <h2>A trusted partner for automotive components since {company.since}</h2>
            <p className="lead">Deep Auto Electricals Pvt. Ltd. designs and manufactures wire harnesses, cables, terminals, PVC sleeves, sheet metal and plastic moulded parts for automotive OEMs and Tier-1 suppliers.</p>
            <ul className="ticks">
              {["In-house tool room & moulding", "100% electrical testing", "IATF 16949 certified processes", "Three plants across Delhi NCR"].map((t) => <li key={t}><Icon d={icons.check} />{t}</li>)}
            </ul>
            <a href="#contact" className="btn btn-navy">Know more about us</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="wrap stats-row">
          {stats.map((s) => <div key={s.label} data-reveal><strong>{s.value}</strong><span>{s.label}</span></div>)}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="section section-grey">
        <div className="wrap">
          <div className="heading" data-reveal>
            <span className="label">Our Products</span>
            <h2>Complete range of automotive components</h2>
            <p>Six product families, one quality standard — manufactured to your drawing and specification.</p>
          </div>
          <div className="products">
            {categories.map((c) => (
              <article key={c.name} className="product" data-reveal>
                <div className="product-img" style={{ backgroundImage: `url("${c.image}")` }} />
                <div className="product-body">
                  <h3>{c.name}</h3>
                  <p>{c.summary}</p>
                  <ul>{c.products.map((p) => <li key={p}>{p}</li>)}</ul>
                  <a href="#contact" className="more">Enquire now <Icon d={icons.arrow} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why DAEPL */}
      <section id="infrastructure" className="section section-navy">
        <div className="wrap">
          <div className="heading heading-light" data-reveal>
            <span className="label">Infrastructure</span>
            <h2>Everything under one roof</h2>
            <p>Integrated capabilities that give our customers shorter lead times and consistent quality.</p>
          </div>
          <div className="why">
            {capabilities.map((c, i) => (
              <div key={c.title} className="why-card" data-reveal>
                <span className="why-ico"><Icon d={capIcons[i]} /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <ol className="process" data-reveal>
            {steps.map((s, i) => <li key={s.title}><span>{String(i + 1).padStart(2, "0")}</span><strong>{s.title}</strong><small>{s.text}</small></li>)}
          </ol>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="section">
        <div className="wrap quality">
          <div data-reveal>
            <span className="label">Quality &amp; Certifications</span>
            <h2>Trust On Quality — in every part we make</h2>
            <p className="lead">Our quality management systems are certified to international automotive standards, backed by inspection at incoming, in-process and final stages.</p>
            <div className="certs">
              {certificates.map((c) => (
                <div key={c.code} className="cert">
                  <span className="cert-seal"><Icon d={icons.shield} /></span>
                  <div><strong>{c.code}</strong><small>{c.title}</small></div>
                </div>
              ))}
            </div>
          </div>
          <div className="quality-media" data-reveal>
            <img src={images.production} alt="Quality inspection at DAEPL" />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="clients">
        <div className="wrap clients-row">
          <span className="label">Trusted by</span>
          {customers.map((c) => <strong key={c}>{c}</strong>)}
          <span className="clients-more">and a growing network of OEM &amp; Tier-1 partners</span>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="section section-grey">
        <div className="wrap">
          <div className="heading" data-reveal>
            <span className="label">Our Plants</span>
            <h2>Three locations across Delhi NCR</h2>
          </div>
          <div className="plants">
            {plants.map((p, i) => (
              <div key={p.city} className="plant" data-reveal>
                <span className="plant-no">0{i + 1}</span>
                <h3>{p.city}, {p.state}</h3>
                <p>{p.label}</p>
                <span className={`status${p.status === "Operational" ? "" : " status-soon"}`}>{p.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers band */}
      <section id="careers" className="careers" style={{ backgroundImage: `linear-gradient(90deg, rgba(11,37,69,.94), rgba(11,37,69,.7)), url("${images.team}")` }}>
        <div className="wrap careers-row" data-reveal>
          <div>
            <span className="label label-light">Careers</span>
            <h2>Build your career with DAEPL</h2>
            <p>Join a team of 25+ years in automotive manufacturing. Openings in production, quality and tool room.</p>
          </div>
          <a href="#contact" className="btn btn-accent">View current openings</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="wrap contact">
          <div data-reveal>
            <span className="label">Contact Us</span>
            <h2>Request a quote</h2>
            <p className="lead">Share your drawing or requirement — our engineering team responds within one working day.</p>
            <ul className="contact-list">
              <li><Icon d={icons.phone} /><div><small>Call us</small><a href={company.phoneHref}>{company.phone}</a></div></li>
              <li><Icon d={icons.mail} /><div><small>Email</small><a href={`mailto:${company.email}`}>{company.email}</a></div></li>
              <li><Icon d={icons.pin} /><div><small>Head office</small><span>Samaypur Industrial Area, Delhi</span></div></li>
            </ul>
          </div>
          <div className="contact-card" data-reveal>
            <EnquiryForm button="Submit enquiry" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="wrap footer-row">
          <div className="footer-about">
            <Logo id="ft" light />
            <p>IATF 16949 &amp; ISO 9001 certified manufacturer of automotive wire harnesses and components since {company.since}.</p>
          </div>
          <div><h4>Products</h4>{categories.map((c) => <a key={c.name} href="#products">{c.name}</a>)}</div>
          <div><h4>Company</h4>{nav.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}</div>
          <div><h4>Contact</h4><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a>{plants.map((p) => <span key={p.city}>{p.city}, {p.state}</span>)}</div>
        </div>
        <div className="wrap footer-bottom">© {new Date().getFullYear()} {company.name} All rights reserved.</div>
      </footer>
    </div>
  );
}
