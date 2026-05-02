import { useState } from "react";

export default function Home() {
  const [formStatus, setFormStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleContactSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setFormStatus("");

    const form = event.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      service: form.service.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Errore invio richiesta");
      }

      form.reset();
      setFormStatus("Richiesta inviata con successo. Ti risponderemo al più presto.");
    } catch (error) {
      setFormStatus("Non siamo riusciti a inviare la richiesta. Contattaci via WhatsApp o riprova tra poco.");
    } finally {
      setIsSending(false);
    }
  }

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
                <a href="tel:+393792594122" className="btn btn-secondary">
                  Chiama ora
                </a>
                <a
                  href="https://wa.me/393792594122?text=Ciao%20Driver4u,%20vorrei%20richiedere%20un%20preventivo%20per%20un%20servizio%20NCC"
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
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
                  <img src="/fleet-1.jpg" alt="Mercedes Vito Driver4u" />
                </div>
                <div className="vehicle-card-body">
                  <span className="fleet-label">Business</span>
                  <h3>Mercedes Vito</h3>
                  <p>
                    Spazioso e versatile, ideale per transfer aeroportuali, piccoli gruppi,
                    bagagli e servizi business con massimo comfort.
                  </p>
                </div>
              </article>

              <article className="vehicle-card">
                <div className="vehicle-image-real">
                  <img src="/fleet-2.jpg" alt="Mercedes V Class Driver4u" />
                </div>
                <div className="vehicle-card-body">
                  <span className="fleet-label">Premium</span>
                  <h3>Mercedes V Class</h3>
                  <p>
                    Van premium elegante e confortevole, perfetto per clienti VIP, executive,
                    famiglie e trasferimenti con più passeggeri.
                  </p>
                </div>
              </article>

              <article className="vehicle-card">
                <div className="vehicle-image-real">
                  <img src="/fleet-3.jpg" alt="Mercedes E Class Driver4u" />
                </div>
                <div className="vehicle-card-body">
                  <span className="fleet-label">Executive</span>
                  <h3>Mercedes E Class</h3>
                  <p>
                    Berlina executive raffinata, pensata per manager, professionisti e
                    trasferimenti di rappresentanza in totale discrezione.
                  </p>
                </div>
              </article>

              <article className="vehicle-card">
                <div className="vehicle-image-real">
                  <img src="/fleet-4.jpg" alt="Mercedes E Class SW Driver4u" />
                </div>
                <div className="vehicle-card-body">
                  <span className="fleet-label">Comfort</span>
                  <h3>Mercedes E Class SW</h3>
                  <p>
                    Station wagon elegante e capiente, ideale per tratte medio-lunghe,
                    transfer aeroportuali e viaggi con bagagli.
                  </p>
                </div>
              </article>

              <article className="vehicle-card">
                <div className="vehicle-image-real">
                  <img src="/fleet-5.jpg" alt="Mercedes C Class SW Driver4u" />
                </div>
                <div className="vehicle-card-body">
                  <span className="fleet-label">Eventi</span>
                  <h3>Mercedes C Class SW</h3>
                  <p>
                    Soluzione dinamica e confortevole per transfer business, eventi,
                    appuntamenti e spostamenti quotidiani.
                  </p>
                </div>
              </article>

              <article className="vehicle-card">
                <div className="vehicle-image-real">
                  <img src="/fleet-6.jpg" alt="Porsche Panamera Driver4u" />
                </div>
                <div className="vehicle-card-body">
                  <span className="fleet-label">Luxury</span>
                  <h3>Porsche Panamera</h3>
                  <p>
                    Auto luxury sportiva ed elegante, dedicata a clienti VIP, eventi esclusivi
                    e trasferimenti di alto profilo.
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

        <section id="contatti" className="section cta-section">
          <div className="container cta-box">
            <div className="cta-text">
              <p className="eyebrow">Contatti</p>
              <h2>Richiedi un preventivo o prenota il tuo transfer</h2>
              <p>
                Contattaci per trasferimenti singoli, servizi business continuativi, eventi,
                transfer aeroportuali o richieste personalizzate.
              </p>
              <ul className="cta-benefits">
                <li>Risposta rapida e preventivo personalizzato</li>
                <li>Transfer aeroportuali, business ed eventi</li>
                <li>Servizio operativo a Vicenza e Nord Italia</li>
              </ul>
              <div className="contact-list">
                <a href="tel:+393792594122">+39 379 259 4122</a>
                <a href="mailto:info@ncc-driver4u.it">info@ncc-driver4u.it</a>
                <span>Operativi a Vicenza e in tutto il Nord Italia</span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome e cognome</label>
                <input id="name" name="name" type="text" placeholder="Inserisci il tuo nome" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Inserisci la tua email" required />
              </div>

              <div className="form-group">
                <label htmlFor="service">Servizio richiesto</label>
                <select id="service" name="service">
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
                  name="message"
                  rows="5"
                  placeholder="Indica tratta, data, orario e numero di passeggeri"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full" disabled={isSending}>
                {isSending ? "Invio in corso..." : "Invia richiesta"}
              </button>
              {formStatus && <p className="form-status">{formStatus}</p>}
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
