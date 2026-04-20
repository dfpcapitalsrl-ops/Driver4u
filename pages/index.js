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
              <p className="eyebrow">NCC a Vicenza e Nord Italia</p>
              <h1>Transfer professionali per aziende, aeroporti, eventi e clienti VIP</h1>
              <p className="hero-text">
                Driver4u offre un servizio NCC puntuale, riservato e curato in ogni dettaglio.
                Accompagniamo aziende, professionisti, ospiti e viaggiatori privati con soluzioni
                su misura per trasferimenti business, aeroportuali ed eventi.
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
                  <span>Transfer organizzati con precisione</span>
                </div>
                <div>
                  <strong>Servizio business</strong>
                  <span>Per aziende, manager e ospiti</span>
                </div>
                <div>
                  <strong>Massima flessibilità</strong>
                  <span>Aeroporti, meeting, eventi e tratte su misura</span>
                </div>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-badge">Servizi Executive</div>
              <h2>Un partner affidabile per la mobilità aziendale</h2>
              <ul>
                <li>Transfer da e per aeroporti e stazioni</li>
                <li>Spostamenti per meeting, fiere e appuntamenti</li>
                <li>Accoglienza clienti, partner e ospiti VIP</li>
                <li>Servizi dedicati per eventi e roadshow</li>
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
              <span>Professionalità, riservatezza e cura del cliente</span>
            </div>
            <div className="trust-item">
              <strong>Flotta premium</strong>
              <span>Comfort, eleganza e immagine impeccabile</span>
            </div>
            <div className="trust-item">
              <strong>Servizio dedicato</strong>
              <span>Soluzioni per aziende, privati ed eventi</span>
            </div>
            <div className="trust-item">
              <strong>Contatto diretto</strong>
              <span>Preventivi rapidi e gestione semplice</span>
            </div>
          </div>
        </section>

        <section id="flotta" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Flotta</p>
              <h2>Veicoli eleganti e confortevoli per ogni tipo di trasferimento</h2>
              <p>
                La nostra flotta è selezionata per garantire comfort, affidabilità e una presenza
                adeguata a contesti business, transfer aeroportuali, accoglienza ospiti ed eventi.
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
                    Ideale per manager, professionisti e trasferimenti di rappresentanza con il
                    massimo della discrezione.
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
                    Perfetto per piccoli gruppi, transfer aeroportuali e viaggi con più bagagli in
                    totale comodità.
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
                    Una soluzione pensata per ospiti VIP, dirigenti e trasferimenti di alto livello.
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
                    Spazio, comfort e praticità per famiglie, eventi, tratte medio-lunghe e servizi
                    personalizzati.
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
                    Ideale per fiere, congressi, roadshow, eventi aziendali e transfer organizzati
                    su più tratte.
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
                    Per esigenze specifiche, itinerari su misura e richieste operative dedicate.
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
              <h2>Servizi NCC su misura per esigenze professionali e private</h2>
              <p>
                Organizziamo trasferimenti puntuali e personalizzati con un servizio curato,
                semplice da prenotare e pensato per offrire la migliore esperienza di viaggio.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <div className="service-icon">✈</div>
                <h3>Transfer aeroporti e stazioni</h3>
                <p>
                  Collegamenti da e per aeroporti, stazioni e principali hub del Nord Italia con
                  puntualità e assistenza dedicata.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">●</div>
                <h3>Meeting e appuntamenti</h3>
                <p>
                  Trasferimenti affidabili per manager, professionisti e clienti che hanno bisogno
                  di un servizio preciso e presentabile.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">◆</div>
                <h3>Fiere, congressi ed eventi</h3>
                <p>
                  Gestione transfer per relatori, ospiti, staff e partecipanti con organizzazione
                  flessibile anche su più tratte.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">★</div>
                <h3>Accoglienza clienti VIP</h3>
                <p>
                  Un servizio discreto e professionale per dirigenti, clienti di rappresentanza,
                  partner e ospiti di alto profilo.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">⌂</div>
                <h3>Cerimonie ed eventi privati</h3>
                <p>
                  Trasferimenti eleganti e confortevoli per matrimoni, serate speciali, ricorrenze
                  ed eventi privati.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">↔</div>
                <h3>Transfer personalizzati</h3>
                <p>
                  Itinerari su misura, servizi continuativi e soluzioni costruite in base a orari,
                  tratte e necessità del cliente.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="vantaggi" className="section section-dark">
          <div className="container">
            <div className="section-heading center light">
              <p className="eyebrow">Perché scegliere Driver4u</p>
              <h2>Affidabilità, immagine e gestione semplice in un unico servizio</h2>
            </div>

            <div className="advantages-grid advantages-grid-three">
              <article className="advantage-card">
                <h3>Puntualità concreta</h3>
                <p>
                  Ogni transfer viene pianificato con attenzione per garantire partenze e arrivi
                  puntuali, senza imprevisti.
                </p>
              </article>

              <article className="advantage-card">
                <h3>Discrezione e professionalità</h3>
                <p>
                  Un servizio adatto a contesti business, executive e accoglienza di clienti e
                  ospiti importanti.
                </p>
              </article>

              <article className="advantage-card">
                <h3>Organizzazione rapida</h3>
                <p>
                  Un referente diretto per prenotazioni, richieste ricorrenti, preventivi veloci e
                  gestione personalizzata.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="aziende" className="section">
          <div className="container business-box">
            <div className="business-text">
              <p className="eyebrow">Servizi per aziende</p>
              <h2>Un servizio NCC che valorizza anche l’immagine della tua azienda</h2>
              <p>
                Supportiamo aziende, studi professionali, hotel, organizzatori di eventi e realtà
                che desiderano offrire trasferimenti affidabili e curati a manager, collaboratori,
                clienti e ospiti.
              </p>
            </div>

            <div className="business-points">
              <div className="point">
                <h3>Prenotazioni ricorrenti</h3>
                <p>Per esigenze continuative, trasferimenti programmati e gestione semplificata.</p>
              </div>
              <div className="point">
                <h3>Accoglienza ospiti</h3>
                <p>Un servizio professionale per clienti, relatori, partner e ospiti aziendali.</p>
              </div>
              <div className="point">
                <h3>Preventivi rapidi</h3>
                <p>Risposte veloci e supporto diretto per organizzare ogni spostamento.</p>
              </div>
              <div className="point">
                <h3>Servizio su misura</h3>
                <p>Soluzioni personalizzate in base a tratte, orari, eventi e necessità operative.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">Affidabilità</p>
              <h2>Un’esperienza pensata per lasciare un’ottima impressione</h2>
              <p>
                Offriamo un servizio che mette insieme puntualità, comfort e professionalità,
                elementi essenziali quando si accompagna un cliente, un ospite o un collaboratore.
              </p>
            </div>

            <div className="testimonials-grid">
              <article className="testimonial-card">
                <p>
                  “Puntualità, cortesia e grande attenzione ai dettagli. Un servizio ideale per
                  trasferimenti business e accoglienza clienti.”
                </p>
                <span>Servizi corporate</span>
              </article>

              <article className="testimonial-card">
                <p>
                  “Ottima organizzazione fin dal primo contatto. Un riferimento affidabile per
                  aeroporti, meeting ed esigenze last minute.”
                </p>
                <span>Transfer executive</span>
              </article>

              <article className="testimonial-card">
                <p>
                  “Un servizio professionale, elegante e ben gestito, perfetto per eventi,
                  ospitalità e trasferimenti di rappresentanza.”
                </p>
                <span>Eventi e ospitalità</span>
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
                Contattaci per trasferimenti singoli, servizi business continuativi, eventi,
                transfer aeroportuali o richieste personalizzate.
              </p>
              <div className="contact-list">
                <a href="tel:+390000000000">+39 000 000 0000</a>
                <a href="mailto:info@driver4u.it">info@driver4u.it</a>
                <span>Operativi a Vicenza e in tutto il Nord Italia</span>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome e cognome</label>
                <input id="name" type="text" placeholder="Inserisci il tuo nome" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Inserisci la tua email" />
              </div>

              <div className="form-group">
                <label htmlFor="service">Servizio richiesto</label>
                <select id="service">
                  <option>Transfer aeroporto</option>
                  <option>Servizio business</option>
                  <option>Fiera / congresso / evento</option>
                  <option>Transfer personalizzato</option>
                  <option>Cerimonia / evento privato</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Messaggio</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Indica tratta, data, orario e numero di passeggeri"
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
              Servizio NCC professionale per aziende e privati. Transfer aeroportuali, business,
              eventi e soluzioni personalizzate a Vicenza e Nord Italia.
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
