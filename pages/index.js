export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="logo" aria-label="Driver4u home">
            <img src="/logo.png" alt="Driver4u" className="logo-image" />
          </a>

          <nav className="main-nav">
            <a href="#flotta">Flotta</a>
            <a href="#servizi">Servizi</a>
            <a href="#vantaggi">Perché noi</a>
            <a href="#aziende">Aziende</a>
            <a href="#contatti">Contatti</a>
          </nav>

          <a href="#contatti" className="btn btn-outline">
            Richiedi preventivo
          </a>

          <button className="menu-toggle" aria-label="Apri menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">NCC professionale a Vicenza e Nord Italia</p>
              <h1>Transfer affidabili per aziende, aeroporti, meeting ed eventi</h1>
              <p className="hero-text">
                Un servizio NCC pensato per chi cerca puntualità, discrezione e
                un’esperienza di viaggio all’altezza del proprio business. Ideale per
                manager, clienti, ospiti aziendali e transfer privati premium.
              </p>

              <div className="hero-actions">
                <a href="#contatti" className="btn btn-primary">
                  Richiedi preventivo
                </a>
                <a href="tel:+390000000000" className="btn btn-secondary">
                  Chiama ora
                </a>
              </div>

              <div className="hero-highlights">
                <div>
                  <strong>Puntualità</strong>
                  <span>Servizio su prenotazione</span>
                </div>
                <div>
                  <strong>Business travel</strong>
                  <span>Per aziende e professionisti</span>
                </div>
                <div>
                  <strong>Disponibilità</strong>
                  <span>Transfer aeroporti, fiere, eventi</span>
                </div>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-badge">Servizi Executive</div>
              <h2>Soluzioni dedicate per aziende</h2>
              <ul>
                <li>Transfer da/per aeroporti e stazioni</li>
                <li>Spostamenti per meeting e appuntamenti</li>
                <li>Servizi per fiere, congressi ed eventi</li>
                <li>Accoglienza clienti e ospiti VIP</li>
                <li>Prenotazioni singole o continuative</li>
              </ul>
              <a href="#aziende" className="text-link">
                Scopri i servizi business
              </a>
            </div>
          </div>
        </section>

        <section className="trust-bar">
          <div className="container trust-grid">
            <div className="trust-item">
              <strong>Autisti qualificati</strong>
              <span>Professionalità e riservatezza</span>
            </div>
            <div className="trust-item">
              <strong>Flotta premium</strong>
              <span>Comfort, eleganza, immagine</span>
            </div>
            <div className="trust-item">
              <strong>Servizio business</strong>
              <span>Per aziende, manager e ospiti</span>
            </div>
            <div className="trust-item">
              <strong>Assistenza diretta</strong>
              <span>Preventivi e prenotazioni rapide</span>
            </div>
          </div>
        </section>

        <section id="flotta" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Flotta</p>
              <h2>Veicoli eleganti per un’esperienza di livello business</h2>
              <p>
                La nostra flotta è selezionata per offrire comfort, affidabilità e una
                presenza coerente con contesti professionali, transfer executive,
                aeroportuali ed eventi.
              </p>
            </div>

            <div className="fleet-gallery-grid">
              <article className="vehicle-card">
                <div className="vehicle-image-real">
                  <img src="/fleet-1.jpg" alt="Berlina Executive Driver4u" />
                </div>
                <div className="vehicle-card-body">
                  <span className="fleet-label">Business</span>
                  <h3>Berlina Executive</h3>
                  <p>
                    Ideale per manager, appuntamenti, transfer rappresentanza e clienti
                    business.
                  </p>
                </div>
              </article>

              <article className="vehicle-card">
                <div className="vehicle-image-real">
                  <img src="/fleet-2.jpg" alt="Van Business Driver4u" />
                </div>
                <div className="vehicle-card-body">
                  <span className="fleet-label">Premium</span>
                  <h3>Van Business</h3>
                  <p>
                    Perfetto per piccoli gruppi, transfer aeroportuali e bagagli.
                  </p>
                </div>
              </article>

              <article className="vehicle-card">
                <div className="vehicle-image-real">
                  <img src="/fleet-3.jpg" alt="Auto di rappresentanza Driver4u" />
                </div>
                <div className="vehicle-card-body">
                  <span className="fleet-label">Executive</span>
                  <h3>Auto di rappresentanza</h3>
                  <p>
                    Pensata per ospiti VIP, dirigenti e trasferimenti di alto profilo.
                  </p>
                </div>
              </article>

              <article className="vehicle-card">
                <div className="vehicle-image-real">
                  <img src="/fleet-4.jpg" alt="Monovolume premium Driver4u" />
                </div>
                <div className="vehicle-card-body">
                  <span className="fleet-label">Comfort</span>
                  <h3>Monovolume premium</h3>
                  <p>
                    Spaziosa e comoda per famiglie, eventi e viaggi più lunghi.
                  </p>
                </div>
              </article>

              <article className="vehicle-card">
                <div className="vehicle-image-real">
                  <img src="/fleet-5.jpg" alt="Shuttle dedicato Driver4u" />
                </div>
                <div className="vehicle-card-body">
                  <span className="fleet-label">Eventi</span>
                  <h3>Shuttle dedicato</h3>
                  <p>
                    Soluzione utile per fiere, congressi, roadshow e transfer organizzati.
                  </p>
                </div>
              </article>

              <article className="vehicle-card">
                <div className="vehicle-image-real">
                  <img src="/fleet-6.jpg" alt="Soluzione personalizzata Driver4u" />
                </div>
                <div className="vehicle-card-body">
                  <span className="fleet-label">Custom</span>
                  <h3>Soluzione personalizzata</h3>
                  <p>
                    Per richieste speciali, itinerari su misura e necessità operative dedicate.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="servizi" className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Servizi</p>
              <h2>Un NCC pensato per esigenze professionali e private</h2>
              <p>
                Organizziamo transfer puntuali e personalizzati con un approccio
                orientato alla qualità del servizio e alla semplicità operativa.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <div className="service-icon">✈</div>
                <h3>Transfer aeroporti e stazioni</h3>
                <p>
                  Servizio da e per aeroporti, stazioni e hub principali con la
                  massima puntualità.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">●</div>
                <h3>Meeting e appuntamenti</h3>
                <p>
                  Soluzioni dedicate per manager, professionisti e clienti che
                  necessitano di trasferimenti affidabili.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">◆</div>
                <h3>Fiere, congressi ed eventi</h3>
                <p>
                  Gestione transfer per eventi aziendali, ospiti, relatori e
                  trasferimenti multipli su richiesta.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">★</div>
                <h3>Transfer per clienti VIP</h3>
                <p>
                  Accoglienza professionale e servizio discreto per ospiti,
                  dirigenti e clienti di rappresentanza.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">⌂</div>
                <h3>Cerimonie ed eventi privati</h3>
                <p>
                  Un servizio elegante e confortevole per matrimoni, serate,
                  eventi speciali e occasioni private.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">↔</div>
                <h3>Transfer personalizzati</h3>
                <p>
                  Itinerari su misura, spostamenti continuativi e servizi
                  costruiti sulle esigenze del cliente.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="vantaggi" className="section section-dark">
          <div className="container">
            <div className="section-heading center light">
              <p className="eyebrow">Perché scegliere Driver4u</p>
              <h2>Un partner affidabile per la mobilità professionale</h2>
            </div>

            <div className="advantages-grid advantages-grid-three">
              <article className="advantage-card">
                <h3>Puntualità reale</h3>
                <p>
                  Pianifichiamo ogni transfer con attenzione per garantire
                  arrivi e partenze senza stress.
                </p>
              </article>

              <article className="advantage-card">
                <h3>Discrezione e immagine</h3>
                <p>
                  Un servizio adatto a contesti business, executive e relazioni
                  con clienti e ospiti.
                </p>
              </article>

              <article className="advantage-card">
                <h3>Gestione semplice</h3>
                <p>
                  Un referente diretto per prenotazioni, richieste ricorrenti e
                  preventivi rapidi.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="aziende" className="section">
          <div className="container business-box">
            <div className="business-text">
              <p className="eyebrow">Servizi per aziende</p>
              <h2>Un servizio NCC presentabile anche ai tuoi clienti</h2>
              <p>
                Supportiamo aziende, studi professionali, hotel, organizzatori
                di eventi e realtà che desiderano offrire trasferimenti di
                qualità a manager, collaboratori e ospiti.
              </p>
            </div>

            <div className="business-points">
              <div className="point">
                <h3>Prenotazioni ricorrenti</h3>
                <p>Per esigenze continuative e trasferimenti programmati.</p>
              </div>
              <div className="point">
                <h3>Accoglienza ospiti</h3>
                <p>Un servizio curato per clienti, relatori e partner.</p>
              </div>
              <div className="point">
                <h3>Preventivi rapidi</h3>
                <p>Risposte rapide e gestione semplice delle richieste.</p>
              </div>
              <div className="point">
                <h3>Servizio personalizzato</h3>
                <p>Soluzioni su misura per tratte, orari e necessità operative.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">Affidabilità</p>
              <h2>Il tipo di esperienza che vuoi offrire ai tuoi clienti</h2>
            </div>

            <div className="testimonials-grid">
              <article className="testimonial-card">
                <p>
                  “Servizio preciso, professionale e perfetto per trasferimenti
                  business e accoglienza clienti.”
                </p>
                <span>Cliente aziendale</span>
              </article>

              <article className="testimonial-card">
                <p>
                  “Ottima impressione fin dal primo contatto. Puntuali,
                  disponibili e molto curati.”
                </p>
                <span>Transfer executive</span>
              </article>

              <article className="testimonial-card">
                <p>
                  “Una soluzione affidabile per aeroporti, meeting ed eventi con
                  ospiti importanti.”
                </p>
                <span>Evento corporate</span>
              </article>
            </div>
          </div>
        </section>

        <section id="contatti" className="section cta-section">
          <div className="container cta-box">
            <div className="cta-text">
              <p className="eyebrow">Contatti</p>
              <h2>Richiedi un preventivo o prenota il tuo transfer</h2>
              <p>
                Contattaci per trasferimenti singoli, servizi business
                continuativi, eventi o esigenze personalizzate.
              </p>
              <div className="contact-list">
                <a href="tel:+390000000000">+39 000 000 0000</a>
                <a href="mailto:info@ncc-driver4u.it">info@driver4u.it</a>
                <span>Vicenza e Nord Italia</span>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome e cognome</label>
                <input id="name" type="text" placeholder="Il tuo nome" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="La tua email" />
              </div>

              <div className="form-group">
                <label htmlFor="service">Servizio richiesto</label>
                <select id="service">
                  <option>Transfer aeroporto</option>
                  <option>Servizio business</option>
                  <option>Evento / fiera</option>
                  <option>Transfer personalizzato</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Messaggio</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Descrivi la tua richiesta"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Invia richiesta
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <a href="#" className="logo footer-logo" aria-label="Driver4u home">
              <img src="/logo.png" alt="Driver4u" className="logo-image footer-logo-image" />
            </a>
            <p className="footer-copy">
              NCC professionale per aziende e privati. Transfer business,
              aeroportuali, eventi e servizi personalizzati.
            </p>
          </div>

          <div className="footer-links">
            <a href="#flotta">Flotta</a>
            <a href="#servizi">Servizi</a>
            <a href="#aziende">Aziende</a>
            <a href="#contatti">Contatti</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
