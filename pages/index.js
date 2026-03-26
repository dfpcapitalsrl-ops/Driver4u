export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="logo">
            <span className="logo-mark">D4U</span>
            <span className="logo-text">Driver4u</span>
          </a>

          <nav className="main-nav">
            <a href="#flotta">Flotta</a>
            <a href="#servizi">Servizi</a>
            <a href="#vantaggi">Perché noi</a>
            <a href="#contatti">Contatti</a>
          </nav>

          <a href="#contatti" className="btn btn-outline">
            Richiedi preventivo
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">NCC professionale</p>
              <h1>Transfer affidabili per aziende e privati</h1>
              <p className="hero-text">
                Servizi NCC per aeroporti, meeting, eventi e clienti business.
                Puntualità, discrezione e comfort.
              </p>

              <div className="hero-actions">
                <a href="#contatti" className="btn btn-primary">
                  Richiedi preventivo
                </a>
                <a href="tel:+390000000000" className="btn btn-secondary">
                  Chiama ora
                </a>
              </div>
            </div>

            <div className="hero-card">
              <h2>Servizi Business</h2>
              <ul>
                <li>Transfer aeroporti</li>
                <li>Meeting aziendali</li>
                <li>Eventi e fiere</li>
                <li>Clienti VIP</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FLOTTA */}
        <section id="flotta" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Flotta</p>
              <h2>Veicoli professionali per ogni esigenza</h2>
              <p>
                Soluzioni per transfer business, aeroportuali e servizi
                personalizzati.
              </p>
            </div>

            <div className="fleet-gallery-grid">
              {[
                "Berlina Executive",
                "Van Business",
                "Auto rappresentanza",
                "Monovolume",
                "Shuttle eventi",
                "Soluzioni custom",
              ].map((title, i) => (
                <div key={i} className="vehicle-card">
                  <div className="vehicle-image-placeholder">
                    <span>Carica foto</span>
                  </div>
                  <div className="vehicle-card-body">
                    <h3>{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVIZI */}
        <section id="servizi" className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Servizi</p>
              <h2>Servizi NCC</h2>
            </div>

            <div className="services-grid">
              <div className="card">Aeroporti</div>
              <div className="card">Business</div>
              <div className="card">Eventi</div>
              <div className="card">VIP</div>
              <div className="card">Cerimonie</div>
              <div className="card">Personalizzati</div>
            </div>
          </div>
        </section>

        {/* CONTATTI */}
        <section id="contatti" className="section cta-section">
          <div className="container cta-box">
            <div>
              <h2>Richiedi un preventivo</h2>
              <p>Contattaci per qualsiasi richiesta</p>
            </div>

            <form className="contact-form">
              <input placeholder="Nome" />
              <input placeholder="Email" />
              <textarea placeholder="Messaggio"></textarea>
              <button className="btn btn-primary">Invia</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© Driver4u - NCC</p>
        </div>
      </footer>
    </>
  );
}
