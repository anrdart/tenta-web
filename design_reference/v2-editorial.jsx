// v2-editorial.jsx — Variation 2: Editorial Elegant (Fraunces serif + Manrope, hero centered, bold product cards)

const V2 = () => {
  const services = [
    { num: '01', cat: 'Identity',  title: 'Brand Identity System',    desc: 'Logo, marks, palette, type lockups, dan brand book.',      price: '4,900,000' },
    { num: '02', cat: 'Digital',   title: 'Website & Landing Pages',  desc: 'Dari wireframe hingga halaman production-ready.',          price: '8,500,000' },
    { num: '03', cat: 'Editorial', title: 'Content & Editorial Kit',  desc: 'Layout sistem, template sosial, panduan visual.',          price: '2,400,000' },
    { num: '04', cat: 'Product',   title: 'Packaging & Print',        desc: 'Riset kompetitor, dieline, mockup, siap produksi.',        price: '3,700,000' },
  ];

  const testimonials = [
    { name: 'Kirana Ayu',    role: 'Founder · Kanaya Studio',   text: 'Prosesnya rapi, komunikasi jelas, hasilnya jauh di atas ekspektasi.' },
    { name: 'Bagas Prawira', role: 'Marketing Lead · Kulaku',   text: 'Enam minggu, sistem branding kami scalable. Konversi naik 38%.' },
    { name: 'Nadira Salsa',  role: 'CEO · Teras Kopi',          text: 'Tidak hanya desain, mereka bantu positioning. Worth every rupiah.' },
  ];

  const faqs = [
    { q: 'Berapa lama pengerjaan satu proyek?', a: 'Logo & branding dasar 2-3 minggu, website lengkap 5-8 minggu. Timeline detail dikirim setelah kick-off.' },
    { q: 'Apakah ada revisi?', a: 'Setiap paket termasuk 2-3 putaran revisi di tiap milestone.' },
    { q: 'Bagaimana sistem pembayarannya?', a: 'DP 50% kickoff, 25% mid, 25% hand-off.' },
    { q: 'Bisa sign NDA?', a: 'Tentu, rutin untuk klien korporat & startup early-stage.' },
  ];

  return (
    <div className="tenta-root v2">
      <style>{V2_CSS}</style>

      {/* Announcement bar */}
      <div className="v2-anc">
        ✦ Menerima 3 proyek untuk Q3 2026 &nbsp;·&nbsp; <a>Lihat ketersediaan →</a>
      </div>

      {/* NAV */}
      <header className="v2-nav">
        <a className="v2-word">TENTA<sup>®</sup></a>
        <nav className="v2-nav-l">
          <a>Karya</a><a>Layanan</a><a>Proses</a><a>Jurnal</a><a>Studio</a>
        </nav>
        <div className="v2-nav-r">
          <a>ID · EN</a>
          <button className="v2-btn-dark">Jadwalkan Panggilan</button>
        </div>
      </header>

      {/* HERO — editorial centered */}
      <section className="v2-hero">
        <div className="v2-hero-meta">
          <span>Est. 2019</span>
          <span className="v2-dot">·</span>
          <span>Jakarta / Remote</span>
          <span className="v2-dot">·</span>
          <span>Vol. 07 — Spring '26</span>
        </div>

        <h1 className="v2-h1">
          <span className="v2-h1-line">Kami merancang <em>identitas</em></span>
          <span className="v2-h1-line">untuk merek yang</span>
          <span className="v2-h1-line"><span className="v2-h1-mark">ingin&nbsp;bertahan</span>.</span>
        </h1>

        <p className="v2-hero-lead">
          TENTA adalah studio desain kecil yang berfokus pada sistem visual <em>yang bertahan lama</em>—
          dari riset, strategi, hingga pengerjaan detail. Tidak mengejar tren, tidak memotong proses.
        </p>

        <div className="v2-hero-cta">
          <button className="v2-btn-primary">Lihat Portofolio</button>
          <a className="v2-link-ul">atau baca proses kami →</a>
        </div>

        {/* Editorial strip */}
        <div className="v2-strip">
          <div className="v2-strip-l">
            <div className="v2-plate">
              <HeroPlate/>
            </div>
          </div>
          <div className="v2-strip-m">
            <div className="v2-strip-num">142</div>
            <div className="v2-strip-lbl">Proyek<br/>dikirim</div>
          </div>
          <div className="v2-strip-m">
            <div className="v2-strip-num">06</div>
            <div className="v2-strip-lbl">Kepala di<br/>studio</div>
          </div>
          <div className="v2-strip-m">
            <div className="v2-strip-num">98<span>%</span></div>
            <div className="v2-strip-lbl">Klien<br/>repeat order</div>
          </div>
          <div className="v2-strip-r">
            <div className="v2-seal">
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <defs>
                  <path id="v2-seal-path" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"/>
                </defs>
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.6"/>
                <text fontSize="8" letterSpacing="2">
                  <textPath href="#v2-seal-path">TENTA · DESIGN STUDIO · EST. 2019 · JAKARTA · </textPath>
                </text>
                <text x="50" y="54" textAnchor="middle" fontSize="20" fontWeight="700" fontFamily="Fraunces" fontStyle="italic">T</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services — bold numbered rows */}
      <section className="v2-sec">
        <div className="v2-sec-head">
          <div>
            <div className="v2-kicker">— Layanan</div>
            <h2>Empat cara kami bisa membantu.</h2>
          </div>
          <a className="v2-link-ul">Semua layanan →</a>
        </div>
        <div className="v2-services">
          {services.map((s, i) => (
            <article key={i} className="v2-serv">
              <div className="v2-serv-num">{s.num}</div>
              <div className="v2-serv-visual" data-v={i}>
                <ServVisual i={i}/>
              </div>
              <div className="v2-serv-body">
                <div className="v2-serv-cat">{s.cat}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="v2-serv-foot">
                  <span className="v2-serv-price">Mulai <strong>Rp {s.price}</strong></span>
                  <button className="v2-arrow-btn" aria-label="more"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 7h8M8 3l3 4-3 4"/></svg></button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Feature bundle */}
      <section className="v2-sec">
        <div className="v2-feat">
          <div className="v2-feat-img">
            <FeatPlate/>
          </div>
          <div className="v2-feat-txt">
            <div className="v2-kicker">— Paket Hemat</div>
            <h2><em>Starter Brand Kit</em><br/>dalam empat minggu.</h2>
            <p>Logo, guideline, kartu nama, dua puluh template sosial, dan satu landing page. Lebih hemat 32% dibanding pesan terpisah, dengan tingkat detail yang sama.</p>
            <ul className="v2-feat-list">
              <li><Check/> Logo utama + 2 variasi mark</li>
              <li><Check/> 30 halaman brand guideline</li>
              <li><Check/> 20 template sosial siap pakai</li>
              <li><Check/> Landing page responsif</li>
            </ul>
            <div className="v2-feat-cta">
              <button className="v2-btn-primary">Ambil Paket — Rp 12,9 jt</button>
              <a className="v2-link-ul">Rincian →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="v2-sec v2-testi-sec">
        <div className="v2-kicker center">— Kata Klien</div>
        <h2 className="v2-center">Hasil yang berbicara<br/><em>untuk dirinya sendiri.</em></h2>
        <div className="v2-testis">
          {testimonials.map((t, i) => (
            <figure key={i} className="v2-testi">
              <div className="v2-quote-mark">"</div>
              <blockquote>{t.text}</blockquote>
              <figcaption>
                <span>{t.name}</span>
                <small>{t.role}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="v2-sec">
        <div className="v2-faq">
          <div>
            <div className="v2-kicker">— FAQ</div>
            <h2>Pertanyaan<br/><em>yang sering ditanyakan.</em></h2>
            <p className="v2-faq-note">Tidak menemukan jawaban? Kirim ke <a>halo@tenta.studio</a></p>
          </div>
          <div className="v2-faq-list">
            {faqs.map((f, i) => <V2Faq key={i} q={f.q} a={f.a} open={i === 0}/>)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="v2-footer">
        <div className="v2-footer-mark">TENTA</div>
        <div className="v2-footer-cols">
          <div className="v2-footer-col">
            <h5>Studio</h5>
            <a>Tentang</a><a>Tim</a><a>Proses</a><a>Karir</a>
          </div>
          <div className="v2-footer-col">
            <h5>Layanan</h5>
            <a>Brand Identity</a><a>Website</a><a>Editorial</a><a>Packaging</a>
          </div>
          <div className="v2-footer-col">
            <h5>Ikuti</h5>
            <a>Instagram</a><a>Dribbble</a><a>Behance</a><a>Are.na</a>
          </div>
          <div className="v2-footer-col v2-footer-news">
            <h5>Surat Studio</h5>
            <p>Jurnal bulanan tentang desain, proses, dan proyek.</p>
            <form className="v2-news" onSubmit={(e)=>e.preventDefault()}>
              <input placeholder="Email kamu"/>
              <button>Daftar</button>
            </form>
          </div>
        </div>
        <div className="v2-footer-bot">
          <span>© 2026 TENTA Studio ·  Dirancang & dibuat di Jakarta</span>
          <span>Kebijakan · Syarat · Cookies</span>
        </div>
      </footer>
    </div>
  );
};

// Visuals
const HeroPlate = () => (
  <svg viewBox="0 0 200 140" width="100%" height="100%">
    <rect width="200" height="140" fill="var(--ink-950)"/>
    <circle cx="100" cy="70" r="42" fill="var(--tenta-500)"/>
    <path d="M100 40 L130 100 H70 Z" fill="var(--paper)"/>
    <circle cx="100" cy="70" r="42" fill="none" stroke="var(--tenta-300)" strokeWidth="0.6" strokeDasharray="2 3"/>
    <text x="10" y="16" fill="var(--ink-400)" fontSize="6" fontFamily="Manrope" letterSpacing="1.5">FIG. 01 — HOUSE MARK</text>
    <text x="10" y="130" fill="var(--ink-400)" fontSize="6" fontFamily="Manrope" letterSpacing="1.5">TENTA / 2026</text>
  </svg>
);

const FeatPlate = () => (
  <svg viewBox="0 0 320 380" width="100%" height="100%">
    <rect width="320" height="380" fill="var(--ink-950)"/>
    {/* grid dots */}
    {[...Array(6)].map((_,r)=>[...Array(5)].map((_,c)=>(
      <circle key={`${r}-${c}`} cx={40+c*60} cy={30+r*60} r="1" fill="var(--ink-700)"/>
    )))}
    {/* logo */}
    <g transform="translate(50 60)">
      <rect width="140" height="90" fill="var(--paper)" rx="4"/>
      <path d="M40 70 L70 25 L100 70 Z" fill="var(--tenta-500)"/>
      <text x="70" y="85" textAnchor="middle" fill="var(--ink-800)" fontSize="9" fontFamily="Fraunces" fontWeight="700">TENTA</text>
    </g>
    {/* palette */}
    <g transform="translate(200 70)">
      <rect width="30" height="30" fill="var(--tenta-500)"/>
      <rect y="32" width="30" height="30" fill="var(--tenta-300)"/>
      <rect y="64" width="30" height="30" fill="var(--ink-900)"/>
      <rect x="34" width="30" height="30" fill="var(--accent-cream)"/>
      <rect x="34" y="32" width="30" height="30" fill="var(--tenta-700)"/>
      <rect x="34" y="64" width="30" height="30" fill="var(--paper)"/>
    </g>
    {/* business card */}
    <g transform="translate(60 200)">
      <rect width="160" height="100" fill="var(--tenta-500)" rx="4"/>
      <text x="16" y="30" fill="var(--paper)" fontSize="20" fontFamily="Fraunces" fontWeight="700" fontStyle="italic">T</text>
      <rect x="16" y="48" width="80" height="3" fill="var(--paper)" opacity="0.5"/>
      <rect x="16" y="58" width="60" height="3" fill="var(--paper)" opacity="0.4"/>
      <rect x="16" y="74" width="40" height="3" fill="var(--paper)" opacity="0.3"/>
    </g>
    {/* label */}
    <text x="20" y="350" fill="var(--ink-400)" fontSize="8" fontFamily="Manrope" letterSpacing="1.5">STARTER KIT — 04 WEEKS</text>
    <text x="300" y="350" textAnchor="end" fill="var(--tenta-400)" fontSize="8" fontFamily="Manrope" letterSpacing="1.5">ALL-IN-ONE</text>
  </svg>
);

const ServVisual = ({ i }) => {
  const svgs = [
    // 01 identity - T mark on dark
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="var(--ink-900)"/>
      <text x="50" y="64" textAnchor="middle" fill="var(--tenta-400)" fontSize="52" fontFamily="Fraunces" fontWeight="700" fontStyle="italic">T</text>
      <circle cx="50" cy="50" r="34" fill="none" stroke="var(--tenta-500)" strokeWidth="0.5" strokeDasharray="1 2"/>
    </svg>,
    // 02 web - browser
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="var(--tenta-50)"/>
      <rect x="14" y="18" width="72" height="62" rx="3" fill="var(--paper)" stroke="var(--ink-200)"/>
      <rect x="14" y="18" width="72" height="9" fill="var(--ink-100)"/>
      <circle cx="20" cy="22.5" r="1.2" fill="var(--tenta-400)"/>
      <rect x="20" y="36" width="44" height="4" fill="var(--ink-900)"/>
      <rect x="20" y="44" width="30" height="2" fill="var(--ink-300)"/>
      <rect x="20" y="50" width="40" height="2" fill="var(--ink-300)"/>
      <rect x="20" y="60" width="18" height="6" rx="1" fill="var(--tenta-500)"/>
    </svg>,
    // 03 editorial - stack
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="var(--accent-cream)"/>
      <rect x="28" y="22" width="44" height="58" fill="var(--paper)" stroke="var(--ink-300)"/>
      <rect x="34" y="30" width="32" height="2" fill="var(--tenta-600)"/>
      <rect x="34" y="36" width="28" height="1.2" fill="var(--ink-400)"/>
      <rect x="34" y="40" width="30" height="1.2" fill="var(--ink-400)"/>
      <rect x="34" y="44" width="20" height="1.2" fill="var(--ink-400)"/>
      <circle cx="50" cy="60" r="10" fill="var(--tenta-500)"/>
    </svg>,
    // 04 packaging
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="var(--tenta-500)"/>
      <rect x="30" y="20" width="40" height="60" fill="var(--paper)" rx="2"/>
      <rect x="30" y="40" width="40" height="8" fill="var(--ink-900)"/>
      <text x="50" y="46.5" textAnchor="middle" fill="var(--tenta-400)" fontSize="5" fontFamily="Manrope" fontWeight="700" letterSpacing="1">TENTA</text>
      <circle cx="50" cy="62" r="7" fill="none" stroke="var(--tenta-600)" strokeWidth="1"/>
    </svg>,
  ];
  return svgs[i];
};

const Check = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 7l3 3 7-7"/></svg>;

const V2Faq = ({ q, a, open: initOpen }) => {
  const [open, setOpen] = React.useState(!!initOpen);
  return (
    <div className={`v2-faq-item ${open?'open':''}`}>
      <button onClick={()=>setOpen(o=>!o)}>
        <span>{q}</span>
        <span className="v2-faq-ic">{open?'−':'+'}</span>
      </button>
      {open && <div className="v2-faq-ans">{a}</div>}
    </div>
  );
};

window.V2 = V2;

const V2_CSS = `
.v2 { font-family: 'Manrope', ui-sans-serif, system-ui; font-size: 15px; line-height: 1.55; color: var(--ink-900); background: var(--paper); }
.v2 em { font-family: 'Fraunces', serif; font-style: italic; font-weight: 400; }

/* announcement */
.v2 .v2-anc { background: var(--ink-950); color: var(--ink-200); text-align: center; font-size: 13px; padding: 10px 20px; letter-spacing: 0.01em; }
.v2 .v2-anc a { color: var(--tenta-400); border-bottom: 1px solid var(--tenta-600); cursor: pointer; margin-left: 4px; }

/* NAV */
.v2 .v2-nav { display: flex; align-items: center; justify-content: space-between; padding: 22px 48px; border-bottom: 1px solid var(--ink-200); background: var(--paper); position: sticky; top: 0; z-index: 20; }
.v2 .v2-word { font-family: 'Fraunces', serif; font-weight: 700; font-size: 26px; letter-spacing: -0.02em; color: var(--ink-900); }
.v2 .v2-word sup { font-size: 11px; color: var(--tenta-600); top: -10px; }
.v2 .v2-nav-l { display: flex; gap: 34px; font-size: 14px; font-weight: 500; color: var(--ink-800); }
.v2 .v2-nav-l a { cursor: pointer; padding: 4px 0; border-bottom: 1px solid transparent; }
.v2 .v2-nav-l a:hover { border-color: var(--ink-900); }
.v2 .v2-nav-r { display: flex; align-items: center; gap: 18px; }
.v2 .v2-nav-r a { font-size: 12.5px; font-weight: 600; letter-spacing: 0.06em; color: var(--ink-600); cursor: pointer; }
.v2 .v2-btn-dark { background: var(--ink-950); color: var(--paper); padding: 11px 18px; border-radius: 4px; font-weight: 600; font-size: 13.5px; cursor: pointer; }
.v2 .v2-btn-dark:hover { background: var(--tenta-600); }

/* HERO */
.v2 .v2-hero { padding: 80px 48px 56px; text-align: center; background: var(--accent-cream); position: relative; }
.v2 .v2-hero::before { content: '✦'; position: absolute; top: 40px; left: 80px; color: var(--tenta-500); font-size: 20px; }
.v2 .v2-hero::after { content: '✦'; position: absolute; top: 60px; right: 120px; color: var(--tenta-500); font-size: 14px; }
.v2 .v2-hero-meta { display: inline-flex; gap: 10px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-600); font-weight: 600; margin-bottom: 28px; }
.v2 .v2-dot { color: var(--tenta-500); }
.v2 .v2-h1 { font-family: 'Fraunces', serif; font-weight: 500; font-size: 88px; line-height: 0.98; letter-spacing: -0.04em; color: var(--ink-950); max-width: 1000px; margin: 0 auto; }
.v2 .v2-h1-line { display: block; }
.v2 .v2-h1-mark { background: linear-gradient(180deg, transparent 62%, var(--tenta-300) 62%, var(--tenta-300) 92%, transparent 92%); padding: 0 6px; }
.v2 .v2-hero-lead { font-size: 18px; line-height: 1.6; color: var(--ink-700); max-width: 620px; margin: 32px auto 0; text-wrap: balance; }
.v2 .v2-hero-cta { display: inline-flex; align-items: center; gap: 22px; margin-top: 32px; }
.v2 .v2-btn-primary { background: var(--tenta-500); color: var(--paper); padding: 14px 26px; border-radius: 4px; font-weight: 700; font-size: 14.5px; letter-spacing: 0.01em; cursor: pointer; transition: background .15s; }
.v2 .v2-btn-primary:hover { background: var(--tenta-600); }
.v2 .v2-link-ul { font-size: 14.5px; color: var(--ink-900); font-weight: 600; cursor: pointer; border-bottom: 1px solid var(--ink-900); padding-bottom: 2px; }

/* strip */
.v2 .v2-strip { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 2fr; gap: 0; margin-top: 64px; border-top: 1px solid var(--ink-300); border-bottom: 1px solid var(--ink-300); }
.v2 .v2-strip > div { padding: 28px 24px; border-right: 1px solid var(--ink-300); display: flex; flex-direction: column; justify-content: center; gap: 8px; }
.v2 .v2-strip > div:last-child { border-right: 0; }
.v2 .v2-strip-l { align-items: flex-start; padding: 20px !important; }
.v2 .v2-plate { width: 100%; aspect-ratio: 10/7; background: var(--ink-950); overflow: hidden; }
.v2 .v2-strip-num { font-family: 'Fraunces', serif; font-size: 54px; font-weight: 700; letter-spacing: -0.04em; line-height: 1; color: var(--ink-950); }
.v2 .v2-strip-num span { font-size: 30px; color: var(--tenta-500); }
.v2 .v2-strip-lbl { font-size: 11.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-600); line-height: 1.4; }
.v2 .v2-strip-r { align-items: center !important; justify-content: center !important; }
.v2 .v2-seal { width: 120px; height: 120px; color: var(--ink-700); animation: v2-spin 30s linear infinite; }
@keyframes v2-spin { to { transform: rotate(360deg); } }

/* Sections */
.v2 .v2-sec { padding: 96px 48px; }
.v2 .v2-sec-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; gap: 20px; }
.v2 .v2-kicker { font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--tenta-600); margin-bottom: 10px; }
.v2 .v2-kicker.center { text-align: center; }
.v2 .v2-sec h2 { font-family: 'Fraunces', serif; font-size: 48px; font-weight: 500; line-height: 1.05; letter-spacing: -0.025em; color: var(--ink-950); max-width: 900px; }
.v2 .v2-center { text-align: center; margin: 0 auto; }

/* Services — bold editorial cards */
.v2 .v2-services { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; border: 1px solid var(--ink-900); background: var(--ink-900); }
.v2 .v2-serv { background: var(--paper); padding: 28px; display: grid; grid-template-columns: 60px 1fr; grid-template-rows: auto auto; gap: 12px 24px; transition: background .2s; cursor: pointer; min-height: 320px; }
.v2 .v2-serv:hover { background: var(--tenta-50); }
.v2 .v2-serv-num { font-family: 'Fraunces', serif; font-size: 38px; font-weight: 500; font-style: italic; color: var(--tenta-500); line-height: 1; }
.v2 .v2-serv-visual { grid-row: span 2; grid-column: 2; justify-self: end; width: 180px; height: 180px; }
.v2 .v2-serv-visual svg { width: 100%; height: 100%; display: block; }
.v2 .v2-serv-body { grid-column: 1 / -1; padding-top: 16px; border-top: 1px solid var(--ink-200); display: flex; flex-direction: column; gap: 8px; }
.v2 .v2-serv-cat { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-500); }
.v2 .v2-serv h3 { font-family: 'Fraunces', serif; font-size: 28px; font-weight: 500; line-height: 1.1; letter-spacing: -0.02em; color: var(--ink-950); }
.v2 .v2-serv p { font-size: 14.5px; color: var(--ink-700); max-width: 420px; line-height: 1.55; }
.v2 .v2-serv-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 12px; padding-top: 14px; border-top: 1px dashed var(--ink-300); }
.v2 .v2-serv-price { font-size: 14px; color: var(--ink-600); }
.v2 .v2-serv-price strong { color: var(--ink-950); font-weight: 700; }
.v2 .v2-arrow-btn { width: 36px; height: 36px; border-radius: 999px; border: 1px solid var(--ink-300); background: var(--paper); color: var(--ink-900); display: grid; place-items: center; cursor: pointer; transition: all .15s; }
.v2 .v2-serv:hover .v2-arrow-btn { background: var(--ink-950); color: var(--paper); border-color: var(--ink-950); transform: rotate(-45deg); }

/* FEATURED bundle */
.v2 .v2-feat { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.v2 .v2-feat-img { aspect-ratio: 4/5; background: var(--ink-950); overflow: hidden; border-radius: 2px; }
.v2 .v2-feat-txt h2 { margin-bottom: 20px; }
.v2 .v2-feat-txt p { font-size: 16px; color: var(--ink-700); line-height: 1.65; max-width: 500px; }
.v2 .v2-feat-list { list-style: none; padding: 0; margin: 24px 0 32px; display: flex; flex-direction: column; gap: 12px; }
.v2 .v2-feat-list li { display: flex; align-items: center; gap: 12px; font-size: 15px; color: var(--ink-800); }
.v2 .v2-feat-list li svg { color: var(--tenta-600); flex-shrink: 0; }
.v2 .v2-feat-cta { display: flex; align-items: center; gap: 24px; }

/* Testimonials */
.v2 .v2-testi-sec { background: var(--ink-950); color: var(--paper); padding: 104px 48px; }
.v2 .v2-testi-sec h2 { color: var(--paper); }
.v2 .v2-testi-sec .v2-kicker { color: var(--tenta-400); }
.v2 .v2-testis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 56px; }
.v2 .v2-testi { margin: 0; padding: 28px 24px 24px; border-top: 1px solid var(--ink-700); color: var(--ink-100); }
.v2 .v2-quote-mark { font-family: 'Fraunces', serif; font-size: 56px; line-height: 0; color: var(--tenta-400); margin-bottom: 24px; display: block; }
.v2 .v2-testi blockquote { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 400; line-height: 1.35; letter-spacing: -0.01em; color: var(--paper); margin: 0 0 20px; font-style: italic; text-wrap: pretty; }
.v2 .v2-testi figcaption { display: flex; flex-direction: column; gap: 3px; padding-top: 16px; border-top: 1px solid var(--ink-800); }
.v2 .v2-testi figcaption span { font-weight: 600; color: var(--paper); font-size: 14px; }
.v2 .v2-testi figcaption small { color: var(--ink-400); font-size: 12.5px; }

/* FAQ */
.v2 .v2-faq { display: grid; grid-template-columns: 1fr 1.3fr; gap: 72px; align-items: flex-start; }
.v2 .v2-faq-note { color: var(--ink-600); font-size: 14.5px; margin-top: 16px; }
.v2 .v2-faq-note a { color: var(--tenta-600); border-bottom: 1px solid var(--tenta-400); }
.v2 .v2-faq-list { display: flex; flex-direction: column; border-top: 1px solid var(--ink-300); }
.v2 .v2-faq-item { border-bottom: 1px solid var(--ink-300); }
.v2 .v2-faq-item button { width: 100%; background: none; border: 0; text-align: left; display: flex; justify-content: space-between; align-items: center; padding: 22px 0; cursor: pointer; font-family: 'Fraunces', serif; font-size: 22px; font-weight: 500; line-height: 1.3; color: var(--ink-950); letter-spacing: -0.01em; gap: 20px; }
.v2 .v2-faq-item button:hover { color: var(--tenta-600); }
.v2 .v2-faq-ic { font-size: 28px; font-weight: 300; color: var(--tenta-500); font-family: Manrope; line-height: 1; }
.v2 .v2-faq-ans { padding: 0 0 24px; color: var(--ink-700); font-size: 15px; line-height: 1.65; max-width: 580px; }

/* Footer */
.v2 .v2-footer { background: var(--paper); padding: 80px 48px 28px; border-top: 1px solid var(--ink-200); }
.v2 .v2-footer-mark { font-family: 'Fraunces', serif; font-weight: 700; font-size: 180px; letter-spacing: -0.06em; line-height: 0.85; color: var(--ink-950); margin-bottom: 48px; background: linear-gradient(180deg, var(--ink-950) 0%, var(--ink-950) 85%, var(--tenta-500) 85%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
.v2 .v2-footer-cols { display: grid; grid-template-columns: repeat(3, 1fr) 1.6fr; gap: 40px; padding: 32px 0; border-top: 1px solid var(--ink-200); }
.v2 .v2-footer-col h5 { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-500); margin-bottom: 18px; }
.v2 .v2-footer-col { display: flex; flex-direction: column; gap: 10px; }
.v2 .v2-footer-col a { color: var(--ink-900); font-size: 15.5px; font-family: 'Fraunces', serif; cursor: pointer; }
.v2 .v2-footer-col a:hover { color: var(--tenta-600); font-style: italic; }
.v2 .v2-footer-news p { font-size: 14px; color: var(--ink-600); font-family: Manrope; margin-bottom: 16px; line-height: 1.55; }
.v2 .v2-news { display: flex; border: 1px solid var(--ink-300); border-radius: 2px; overflow: hidden; }
.v2 .v2-news input { flex: 1; border: 0; padding: 12px 14px; font-size: 14px; font-family: Manrope; outline: 0; background: transparent; color: var(--ink-900); }
.v2 .v2-news button { background: var(--ink-950); color: var(--paper); padding: 0 18px; font-weight: 600; font-size: 13px; letter-spacing: 0.02em; cursor: pointer; border: 0; }
.v2 .v2-footer-bot { display: flex; justify-content: space-between; align-items: center; padding-top: 20px; border-top: 1px solid var(--ink-200); font-size: 12.5px; color: var(--ink-500); }
`;
