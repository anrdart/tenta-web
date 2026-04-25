// v3-agency.jsx — Digital Marketing Agency (Playful energetic, evolved from V3)

const V3 = () => {
  const services = [
    { icon: 'seo',     title: 'SEO Organik',         tag: 'Search',    price: '6jt/bln',  color: 'orange',  desc: 'Naik ke halaman 1, tanpa black-hat.' },
    { icon: 'ads',     title: 'Google Ads',          tag: 'Paid',      price: '8jt/bln',  color: 'dark',    desc: 'ROAS fokus, budget efisien, tracking bersih.' },
    { icon: 'social',  title: 'Social Media',        tag: 'Organic',   price: '5jt/bln',  color: 'cream',   desc: '30 post + engagement & community.' },
    { icon: 'meta',    title: 'Meta & TikTok Ads',   tag: 'Paid',      price: '7jt/bln',  color: 'orange2', desc: 'Creative + targeting + A/B testing.' },
    { icon: 'content', title: 'Content Marketing',   tag: 'Content',   price: '4jt/bln',  color: 'dark',    desc: 'Blog, copywriting, SEO-friendly.' },
    { icon: 'brand',   title: 'Branding & Creative', tag: 'Brand',     price: '4,9jt',    color: 'orange',  desc: 'Logo, identitas, visual guideline.' },
    { icon: 'data',    title: 'Analytics & Report',  tag: 'Data',      price: '2jt/bln',  color: 'cream',   desc: 'Dashboard custom + insight bulanan.' },
    { icon: 'web',     title: 'Web Development',     tag: 'Digital',   price: '8,5jt',    color: 'orange2', desc: 'Landing, company profile, e-commerce.' },
  ];

  const stats = [
    { num: '142+', lbl: 'Klien Aktif',      sub: 'Sejak 2019' },
    { num: '4.2x', lbl: 'Rata-rata ROAS',   sub: 'Seluruh kampanye' },
    { num: '38M',  lbl: 'Impressions/bln',  sub: 'Diolah tim kami' },
    { num: '98%',  lbl: 'Klien Repeat',     sub: 'Retensi 12 bulan' },
  ];

  const process = [
    { n: '01', t: 'Discover',  d: 'Audit kondisi saat ini — website, ads, data, kompetitor. Kami cari ruang tumbuh.' },
    { n: '02', t: 'Strategy',  d: 'Roadmap 90 hari dengan KPI jelas. Kamu tahu apa yang dikerjakan dan kenapa.' },
    { n: '03', t: 'Execute',   d: 'Tim kami jalan — creative, ads ops, SEO, content. Laporan mingguan.' },
    { n: '04', t: 'Optimize',  d: 'Review bulanan. Skala yang menang, matikan yang rugi. Iterasi terus.' },
  ];

  const cases = [
    { client: 'Kulaku F&B',     industry: 'F&B',          metric: '+240%',  metricLbl: 'Website traffic', period: '6 bulan',   color: 'orange' },
    { client: 'Teras Kopi',     industry: 'Coffee Chain', metric: '5.8x',   metricLbl: 'ROAS Meta Ads',   period: '3 bulan',   color: 'dark'   },
    { client: 'Kanaya Fashion', industry: 'Lifestyle',    metric: '+180K',  metricLbl: 'Followers organik', period: '12 bulan', color: 'cream'  },
  ];

  const pricing = [
    { name: 'Starter',   price: '6',   tag: null,         features: ['1-2 channel fokus', 'Laporan bulanan', 'Konsultasi 1x/bulan', 'Response 48 jam'], cta: 'Pilih Starter' },
    { name: 'Growth',    price: '15',  tag: 'Paling Populer', features: ['3-4 channel terintegrasi', 'Laporan mingguan', 'Dedicated PM', 'Creative 20 aset/bln', 'A/B testing'], cta: 'Pilih Growth' },
    { name: 'Scale',     price: '30',  tag: null,         features: ['Omnichannel full-service', 'Dashboard real-time', 'Dedicated tim (3 org)', 'Creative unlimited', 'Priority support'], cta: 'Hubungi Sales' },
  ];

  const industries = [
    { emoji: '🍜', name: 'F&B & Kuliner' },
    { emoji: '👗', name: 'Fashion & Lifestyle' },
    { emoji: '💻', name: 'SaaS & Tech' },
    { emoji: '🛒', name: 'E-commerce & D2C' },
    { emoji: '🏪', name: 'UMKM Lokal' },
  ];

  const logos = ['Kulaku', 'Teras Kopi', 'Kanaya', 'Satwa', 'Ombak', 'Beranda', 'Langit Biru', 'Senja Co.', 'Kalimaya', 'Pinang'];

  const testimonials = [
    { name: 'Kirana Ayu',    role: 'Founder · Kanaya',     text: 'Konversi Instagram ads kami naik 3x dalam 2 bulan. Tim TENTA paham audiens fashion Indonesia.', tint: 'orange' },
    { name: 'Bagas Prawira', role: 'CMO · Kulaku F&B',      text: '6 bulan, organic traffic naik 240%. Reporting-nya jelas, tidak ada angka aneh.',                tint: 'dark'   },
    { name: 'Nadira Salsa',  role: 'CEO · Teras Kopi',       text: 'ROAS 5.8x di Meta Ads. Yang bikin beda: mereka ngerti bisnis kopi, bukan cuma jalanin ads.',   tint: 'cream'  },
  ];

  const faqs = [
    { q: 'Minimum kontrak berapa lama?',              a: 'Minimal 3 bulan untuk paket retainer — karena butuh waktu untuk data learning & optimasi. Proyek branding bisa one-time.' },
    { q: 'Apakah budget ads sudah termasuk?',         a: 'Belum — budget ads terpisah, dikelola dari akun kamu. Kami hanya charge management fee + jasa.' },
    { q: 'Bagaimana sistem reportingnya?',            a: 'Dashboard real-time (Looker Studio) + laporan bulanan PDF. Review call tiap akhir bulan.' },
    { q: 'Bisa white-label untuk agency lain?',       a: 'Bisa. Kami sering jadi production partner untuk agency yang butuh scale tim.' },
    { q: 'Ada garansi hasil?',                        a: 'Kami tidak janji angka spesifik karena digital marketing banyak variabel. Tapi kami transparan — kalau nggak cocok di 60 hari, bisa stop tanpa penalty.' },
  ];

  return (
    <div className="tenta-root v3">
      <style>{V3_CSS}</style>

      {/* NAV */}
      <header className="v3-nav">
        <div className="v3-brand">
          <div className="v3-logo">
            <svg viewBox="0 0 40 40" width="36" height="36">
              <circle cx="20" cy="20" r="18" fill="var(--tenta-500)"/>
              <path d="M8 28 L20 10 L32 28 Z" fill="var(--paper)"/>
              <circle cx="20" cy="20" r="3" fill="var(--ink-950)"/>
            </svg>
          </div>
          <span>TENTA</span>
        </div>
        <nav className="v3-nav-l">
          <a className="active">Beranda</a>
          <a>Layanan</a><a>Case Study</a><a>Harga</a><a>Tentang</a>
        </nav>
        <div className="v3-nav-r">
          <button className="v3-chip">💬 WhatsApp</button>
          <button className="v3-btn">Konsultasi Gratis</button>
        </div>
      </header>

      {/* HERO */}
      <section className="v3-hero">
        <div className="v3-hero-l">
          <div className="v3-badge">
            <span className="v3-badge-dot">●</span> Menerima klien baru — Mei 2026
          </div>
          <h1>
            Agency<br/>
            <span className="v3-h-wrap">
              <span className="v3-h-tag">performance-driven</span>
            </span>
            <span className="v3-h-big">buat brand</span><br/>
            <span className="v3-h-italic">yang&nbsp;mau&nbsp;tumbuh.</span>
          </h1>
          <p>
            TENTA bantu brand Indonesia tumbuh lewat SEO, ads, social, dan content yang terukur.
            <strong> 4.2x rata-rata ROAS</strong> — bukan cuma impression kosong.
          </p>
          <div className="v3-cta">
            <button className="v3-btn v3-btn-big">Konsultasi Gratis 30 mnt →</button>
            <div className="v3-cta-side">
              <AvatarStack/>
              <div>
                <strong>4.9 ★</strong><br/>
                <small>142+ klien aktif</small>
              </div>
            </div>
          </div>
        </div>

        <div className="v3-hero-r">
          <div className="v3-hero-mark">
            <div className="v3-mark-ring"></div>
            <div className="v3-mark-ring v3-mark-ring2"></div>
            <div className="v3-mark-core">
              <svg viewBox="0 0 120 120" width="100%" height="100%">
                <defs>
                  <clipPath id="v3-clip"><circle cx="60" cy="60" r="50"/></clipPath>
                </defs>
                <circle cx="60" cy="60" r="50" fill="var(--ink-950)"/>
                <g clipPath="url(#v3-clip)">
                  <path d="M10 85 L60 20 L110 85 Z" fill="var(--tenta-500)"/>
                  <circle cx="60" cy="55" r="12" fill="var(--paper)"/>
                  <text x="60" y="59" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--tenta-600)" fontFamily="Space Grotesk">↗</text>
                </g>
              </svg>
            </div>
            <div className="v3-sticker v3-st-1">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <defs>
                  <path id="v3-sp" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/>
                </defs>
                <circle cx="50" cy="50" r="50" fill="var(--tenta-400)"/>
                <text fontSize="10" fontWeight="700" fill="var(--ink-950)" letterSpacing="1.5" fontFamily="Space Grotesk">
                  <textPath href="#v3-sp">★ SEO · ADS · SOCIAL · CONTENT · </textPath>
                </text>
                <text x="50" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--ink-950)" fontFamily="Space Grotesk">4.2x</text>
              </svg>
            </div>
            <div className="v3-sticker v3-st-2">
              <div className="v3-kpi">
                <div className="v3-kpi-lbl">ROAS</div>
                <div className="v3-kpi-num">5.8<span>x</span></div>
                <div className="v3-kpi-trend">↗ +142%</div>
              </div>
            </div>
            <div className="v3-sticker v3-st-3">
              <div className="v3-chart">
                <svg viewBox="0 0 100 60" width="100%" height="100%">
                  <path d="M5 50 Q 25 40 40 30 T 70 15 L 95 8" fill="none" stroke="var(--tenta-500)" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="95" cy="8" r="4" fill="var(--tenta-500)"/>
                  <text x="5" y="12" fontSize="7" fill="var(--ink-600)" fontFamily="Space Grotesk" fontWeight="600">Growth</text>
                </svg>
              </div>
            </div>
            <div className="v3-sparkle v3-sp-1">✦</div>
            <div className="v3-sparkle v3-sp-2">✦</div>
            <div className="v3-sparkle v3-sp-3">✦</div>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className="v3-stats">
          {stats.map((s, i) => (
            <div key={i} className="v3-stat">
              <div className="v3-stat-num">{s.num}</div>
              <div className="v3-stat-lbl">{s.lbl}</div>
              <div className="v3-stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* LOGO MARQUEE */}
        <div className="v3-marquee">
          <div className="v3-marquee-track">
            {[...logos, ...logos].map((x,i)=>(
              <span key={i}>{x} <em className="v3-mq-sep">✦</em></span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="v3-sec">
        <div className="v3-sec-head">
          <div>
            <div className="v3-kicker-inline">LAYANAN</div>
            <h2>Full-stack <em>growth</em></h2>
          </div>
          <a>Lihat semua layanan →</a>
        </div>
        <div className="v3-grid-srv">
          {services.map((s, i) => (
            <article key={i} className={`v3-card v3-card-${s.color}`}>
              <div className="v3-card-head">
                <div className="v3-card-tag">{s.tag}</div>
                <div className="v3-card-icon"><ServiceIcon name={s.icon}/></div>
              </div>
              <div className="v3-card-foot">
                <div>
                  <h3>{s.title}</h3>
                  <p className="v3-card-desc">{s.desc}</p>
                </div>
                <div className="v3-card-meta">
                  <span className="v3-price">{s.price}</span>
                  <button className="v3-card-arrow">↗</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="v3-sec v3-proc-sec">
        <div className="v3-sec-head">
          <div>
            <div className="v3-kicker-inline">PROSES KERJA</div>
            <h2>Cara kami <em>jalanin</em> proyek</h2>
          </div>
          <div className="v3-proc-sub">4 tahap. Tidak lebih, tidak kurang.</div>
        </div>
        <div className="v3-proc-grid">
          {process.map((p, i) => (
            <div key={i} className="v3-proc-step">
              <div className="v3-proc-num">{p.n}</div>
              <h4>{p.t}</h4>
              <p>{p.d}</p>
              {i < process.length - 1 && <div className="v3-proc-arrow">→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="v3-sec">
        <div className="v3-sec-head">
          <div>
            <div className="v3-kicker-inline">CASE STUDY</div>
            <h2>Hasil <em>nyata</em>, angka nyata</h2>
          </div>
          <a>Semua case →</a>
        </div>
        <div className="v3-case-grid">
          {cases.map((c, i) => (
            <article key={i} className={`v3-case v3-case-${c.color}`}>
              <div className="v3-case-head">
                <div className="v3-case-client">{c.client}</div>
                <div className="v3-case-ind">{c.industry}</div>
              </div>
              <div className="v3-case-metric">
                <div className="v3-case-num">{c.metric}</div>
                <div className="v3-case-lbl">{c.metricLbl}</div>
              </div>
              <div className="v3-case-ft">
                <span>⏱ {c.period}</span>
                <button className="v3-card-arrow">↗</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="v3-sec v3-ind-sec">
        <div className="v3-ind-head">
          <h2>Berpengalaman di <em>5 industri</em></h2>
          <p>Tim kami paham nuansa market Indonesia per vertikal.</p>
        </div>
        <div className="v3-ind-grid">
          {industries.map((ind, i) => (
            <div key={i} className="v3-ind">
              <div className="v3-ind-emoji">{ind.emoji}</div>
              <div className="v3-ind-name">{ind.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="v3-sec">
        <div className="v3-sec-head v3-sec-head-c">
          <div className="v3-kicker-inline">PAKET HARGA</div>
          <h2>Mulai dari <em>6jt/bulan</em></h2>
          <p className="v3-sec-sub">Semua paket bisa custom. Angka di bawah adalah management fee — belum termasuk budget ads.</p>
        </div>
        <div className="v3-price-grid">
          {pricing.map((p, i) => (
            <div key={i} className={`v3-tier ${p.tag?'featured':''}`}>
              {p.tag && <div className="v3-tier-tag">{p.tag}</div>}
              <div className="v3-tier-name">{p.name}</div>
              <div className="v3-tier-price">
                <small>Rp</small>
                <strong>{p.price}</strong>
                <span>jt/bln</span>
              </div>
              <ul className="v3-tier-list">
                {p.features.map((f, j) => (
                  <li key={j}><span className="v3-check">✓</span> {f}</li>
                ))}
              </ul>
              <button className={`v3-btn v3-btn-big ${p.tag?'':'v3-btn-outline'}`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="v3-sec">
        <div className="v3-sec-head">
          <div>
            <div className="v3-kicker-inline">KATA KLIEN</div>
            <h2>Yang mereka <em>bilang</em> ✨</h2>
          </div>
          <div className="v3-stars">★★★★★ <span>4.9 / 5.0</span></div>
        </div>
        <div className="v3-testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`v3-testi v3-testi-${t.tint}`}>
              <div className="v3-testi-stars">★★★★★</div>
              <p>"{t.text}"</p>
              <div className="v3-testi-ft">
                <div className="v3-testi-av">{t.name[0]}</div>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="v3-sec v3-faq-sec">
        <div className="v3-faq-head">
          <div className="v3-kicker">FAQ ✦</div>
          <h2>Masih <em>ragu?</em></h2>
          <p>Pertanyaan yang sering muncul.</p>
        </div>
        <div className="v3-faq-list">
          {faqs.map((f, i) => <V3Faq key={i} q={f.q} a={f.a} open={i === 0}/>)}
        </div>
      </section>

      {/* CTA strip */}
      <section className="v3-cta-strip">
        <div className="v3-cta-big">
          <h2>Siap tumbuh <em>bareng&nbsp;kami?</em></h2>
          <p>Konsultasi 30 menit, tanpa biaya, tanpa komitmen.</p>
          <button className="v3-btn v3-btn-big">Booking sekarang →</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="v3-footer">
        <div className="v3-footer-top">
          <div className="v3-footer-brand">
            <div className="v3-brand">
              <div className="v3-logo">
                <svg viewBox="0 0 40 40" width="36" height="36">
                  <circle cx="20" cy="20" r="18" fill="var(--tenta-500)"/>
                  <path d="M8 28 L20 10 L32 28 Z" fill="var(--paper)"/>
                </svg>
              </div>
              <span style={{color:'var(--paper)'}}>TENTA</span>
            </div>
            <p>Digital marketing agency berbasis di Jakarta, bantu brand Indonesia tumbuh dengan data.</p>
            <div className="v3-socials">
              <a>IG</a><a>TW</a><a>LI</a><a>TT</a>
            </div>
          </div>
          <div className="v3-footer-col">
            <h5>Layanan</h5>
            <a>SEO</a><a>Google Ads</a><a>Social Media</a><a>Content</a><a>Branding</a>
          </div>
          <div className="v3-footer-col">
            <h5>Perusahaan</h5>
            <a>Tentang</a><a>Case Study</a><a>Blog</a><a>Karir</a><a>Kontak</a>
          </div>
          <div className="v3-footer-news">
            <h5>Growth Letter 🟠</h5>
            <p>Insight digital marketing Indonesia, bulanan.</p>
            <form className="v3-news" onSubmit={(e)=>e.preventDefault()}>
              <input placeholder="email@kamu.com"/>
              <button>Gas →</button>
            </form>
          </div>
        </div>
        <div className="v3-footer-big">TENTA</div>
        <div className="v3-footer-bot">
          <span>© 2026 TENTA Digital Agency · Dibuat di Jakarta 🧡</span>
          <span>Privacy · Terms · Cookies</span>
        </div>
      </footer>
    </div>
  );
};

const AvatarStack = () => (
  <div className="v3-avs">
    {['K','B','N','A'].map((l, i) => (
      <div key={i} className="v3-av" style={{background: ['var(--tenta-400)','var(--ink-900)','var(--tenta-600)','var(--accent-cream)'][i], color: i===3?'var(--ink-900)':'var(--paper)'}}>{l}</div>
    ))}
  </div>
);

const ServiceIcon = ({ name }) => {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    seo:     <g {...common}><circle cx="11" cy="11" r="6"/><path d="m16 16 5 5"/><path d="M8 11h6M11 8v6"/></g>,
    ads:     <g {...common}><path d="M3 11v2l14-8v16z"/><path d="M7 11H5a2 2 0 0 0 0 4h2"/><path d="M7 15v4l4 1-1-5"/></g>,
    social:  <g {...common}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m9 10 6-4M9 14l6 4"/></g>,
    meta:    <g {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.5"/><path d="M14 9h4M14 13h4M14 16h3"/></g>,
    content: <g {...common}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></g>,
    brand:   <g {...common}><path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z"/><path d="m9 12 2 2 4-4"/></g>,
    data:    <g {...common}><path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/></g>,
    web:     <g {...common}><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M7 12h6M7 15h10"/></g>,
  };
  return <svg viewBox="0 0 24 24" width="32" height="32">{paths[name]}</svg>;
};

const V3Faq = ({ q, a, open: initOpen }) => {
  const [open, setOpen] = React.useState(!!initOpen);
  return (
    <div className={`v3-faq ${open?'open':''}`}>
      <button onClick={()=>setOpen(o=>!o)}>
        <span>{q}</span>
        <span className="v3-faq-ic">{open?'−':'+'}</span>
      </button>
      {open && <div className="v3-faq-a">{a}</div>}
    </div>
  );
};

window.V3 = V3;

const V3_CSS = `
.v3 { font-family: 'DM Sans', ui-sans-serif, system-ui; font-size: 15px; line-height: 1.5; color: var(--ink-900); background: var(--accent-cream); position: relative; overflow: hidden; }
.v3 em { font-family: 'Space Grotesk', ui-sans-serif; font-style: italic; font-weight: 500; color: var(--tenta-600); }
.v3 strong { font-weight: 700; }
.v3 h1, .v3 h2, .v3 h3, .v3 h4 { font-family: 'Space Grotesk', ui-sans-serif; letter-spacing: -0.03em; color: var(--ink-950); }

/* NAV */
.v3 .v3-nav { display: flex; align-items: center; gap: 24px; padding: 16px 40px; border-bottom: 2px solid var(--ink-950); background: var(--accent-cream); position: sticky; top: 0; z-index: 20; }
.v3 .v3-brand { display: flex; align-items: center; gap: 10px; flex-shrink: 0; font-family: 'Space Grotesk', ui-sans-serif; font-size: 22px; font-weight: 700; letter-spacing: -0.03em; color: var(--ink-950); }
.v3 .v3-logo { width: 40px; height: 40px; background: var(--ink-950); border-radius: 50%; display: grid; place-items: center; }
.v3 .v3-nav-l { display: flex; gap: 4px; flex: 1; justify-content: center; font-size: 14px; font-weight: 600; }
.v3 .v3-nav-l a { padding: 8px 14px; border-radius: 999px; cursor: pointer; color: var(--ink-800); }
.v3 .v3-nav-l a:hover { background: rgba(26,19,12,.06); }
.v3 .v3-nav-l a.active { background: var(--ink-950); color: var(--paper); }
.v3 .v3-nav-r { display: flex; align-items: center; gap: 10px; }
.v3 .v3-chip { background: var(--paper); border: 2px solid var(--ink-950); padding: 8px 14px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer; }
.v3 .v3-chip:hover { background: var(--tenta-100); }

.v3 .v3-btn { background: var(--tenta-500); color: var(--paper); padding: 10px 18px; border-radius: 999px; font-family: 'Space Grotesk', ui-sans-serif; font-weight: 700; font-size: 14px; cursor: pointer; border: 2px solid var(--ink-950); box-shadow: 3px 3px 0 var(--ink-950); transition: all .1s; }
.v3 .v3-btn:hover { transform: translate(-1px,-1px); box-shadow: 4px 4px 0 var(--ink-950); }
.v3 .v3-btn:active { transform: translate(2px,2px); box-shadow: 1px 1px 0 var(--ink-950); }
.v3 .v3-btn-big { padding: 14px 26px; font-size: 15.5px; box-shadow: 4px 4px 0 var(--ink-950); }
.v3 .v3-btn-big:hover { box-shadow: 6px 6px 0 var(--ink-950); }
.v3 .v3-btn-dark { background: var(--ink-950); color: var(--paper); }
.v3 .v3-btn-outline { background: var(--paper); color: var(--ink-950); }

/* HERO */
.v3 .v3-hero { padding: 56px 40px 0; display: grid; grid-template-columns: 1.1fr 1fr; gap: 40px; align-items: center; min-height: 560px; position: relative; }
.v3 .v3-hero::before { content: ''; position: absolute; width: 280px; height: 280px; border-radius: 50%; background: var(--tenta-200); top: 40px; right: -80px; z-index: 0; }

.v3 .v3-hero-l { position: relative; z-index: 2; }
.v3 .v3-badge { display: inline-flex; align-items: center; gap: 8px; background: var(--ink-950); color: var(--tenta-300); padding: 8px 14px; border-radius: 999px; font-size: 12.5px; font-weight: 600; margin-bottom: 20px; }
.v3 .v3-badge-dot { color: var(--tenta-500); animation: v3-pulse 1.5s infinite; }
@keyframes v3-pulse { 50% { opacity: .4; } }
.v3 .v3-hero h1 { font-size: 76px; font-weight: 700; line-height: 0.98; letter-spacing: -0.04em; color: var(--ink-950); }
.v3 .v3-h-wrap { display: block; }
.v3 .v3-h-tag { display: inline-block; background: var(--ink-950); color: var(--tenta-400); padding: 0 14px; border-radius: 999px; font-size: 30px; font-weight: 600; vertical-align: middle; letter-spacing: -0.02em; transform: rotate(-2deg); margin: 8px 0; }
.v3 .v3-h-big { color: var(--tenta-500); }
.v3 .v3-h-italic { font-family: 'Space Grotesk', ui-sans-serif; font-style: italic; font-weight: 500; color: var(--ink-950); text-decoration: underline; text-decoration-color: var(--tenta-500); text-decoration-thickness: 6px; text-underline-offset: 8px; }
.v3 .v3-hero-l p { font-size: 17px; color: var(--ink-700); margin: 24px 0 32px; max-width: 480px; line-height: 1.55; }
.v3 .v3-cta { display: flex; align-items: center; gap: 24px; }
.v3 .v3-cta-side { display: flex; align-items: center; gap: 12px; font-size: 13px; color: var(--ink-700); line-height: 1.3; }
.v3 .v3-cta-side strong { color: var(--ink-950); font-size: 15px; font-family: 'Space Grotesk'; }

.v3 .v3-avs { display: flex; }
.v3 .v3-av { width: 32px; height: 32px; border-radius: 50%; border: 2px solid var(--accent-cream); display: grid; place-items: center; font-size: 12px; font-weight: 700; margin-left: -8px; }
.v3 .v3-av:first-child { margin-left: 0; }

/* Hero right */
.v3 .v3-hero-r { position: relative; z-index: 1; height: 520px; }
.v3 .v3-hero-mark { position: absolute; inset: 20px; }
.v3 .v3-mark-ring { position: absolute; inset: 20px; border: 2px dashed var(--tenta-500); border-radius: 50%; animation: v3-spin 40s linear infinite; }
.v3 .v3-mark-ring2 { inset: 60px; border-color: var(--ink-950); border-style: solid; animation-duration: 60s; animation-direction: reverse; }
@keyframes v3-spin { to { transform: rotate(360deg); } }
.v3 .v3-mark-core { position: absolute; inset: 110px; }
.v3 .v3-sticker { position: absolute; filter: drop-shadow(4px 4px 0 var(--ink-950)); }
.v3 .v3-st-1 { top: 0; right: 20px; --r: 12deg; transform: rotate(12deg); animation: v3-bob 4s ease-in-out infinite; }
.v3 .v3-st-2 { bottom: 40px; left: 0; --r: -8deg; transform: rotate(-8deg); animation: v3-bob 4s ease-in-out infinite .8s; }
.v3 .v3-st-3 { bottom: 20px; right: 40px; --r: 6deg; transform: rotate(6deg); animation: v3-bob 4s ease-in-out infinite 1.6s; }
@keyframes v3-bob { 50% { transform: translateY(-8px) rotate(var(--r, 0deg)); } }

.v3 .v3-kpi { background: var(--paper); border: 2px solid var(--ink-950); border-radius: 12px; padding: 12px 16px; width: 120px; }
.v3 .v3-kpi-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; color: var(--ink-500); text-transform: uppercase; }
.v3 .v3-kpi-num { font-family: 'Space Grotesk'; font-size: 32px; font-weight: 700; color: var(--ink-950); line-height: 1; margin: 4px 0; }
.v3 .v3-kpi-num span { color: var(--tenta-500); font-size: 20px; }
.v3 .v3-kpi-trend { font-size: 11px; font-weight: 700; color: var(--success); font-family: 'Space Grotesk'; }

.v3 .v3-chart { background: var(--paper); border: 2px solid var(--ink-950); border-radius: 12px; padding: 10px; width: 130px; height: 70px; }
.v3 .v3-chart svg { width: 100%; height: 100%; }

.v3 .v3-sparkle { position: absolute; color: var(--tenta-500); font-size: 32px; font-weight: 900; text-shadow: 2px 2px 0 var(--ink-950); }
.v3 .v3-sp-1 { top: 0; left: 20px; animation: v3-twinkle 2s infinite; }
.v3 .v3-sp-2 { top: 60%; right: 0; font-size: 20px; animation: v3-twinkle 2s infinite .6s; }
.v3 .v3-sp-3 { bottom: 20px; left: 30%; font-size: 24px; animation: v3-twinkle 2s infinite 1.2s; }
@keyframes v3-twinkle { 50% { transform: scale(1.3) rotate(90deg); } }

/* STATS STRIP */
.v3 .v3-stats { grid-column: 1 / -1; margin: 56px -40px 0; background: var(--paper); border-top: 2px solid var(--ink-950); border-bottom: 2px solid var(--ink-950); display: grid; grid-template-columns: repeat(4, 1fr); position: relative; z-index: 3; }
.v3 .v3-stat { padding: 28px 32px; border-right: 2px solid var(--ink-950); }
.v3 .v3-stat:last-child { border-right: 0; }
.v3 .v3-stat-num { font-family: 'Space Grotesk'; font-size: 52px; font-weight: 700; letter-spacing: -0.04em; line-height: 1; color: var(--tenta-600); }
.v3 .v3-stat-lbl { font-size: 14px; font-weight: 700; color: var(--ink-950); margin-top: 8px; font-family: 'Space Grotesk'; }
.v3 .v3-stat-sub { font-size: 12px; color: var(--ink-600); margin-top: 2px; }

/* Marquee */
.v3 .v3-marquee { grid-column: 1 / -1; margin: 0 -40px; background: var(--ink-950); color: var(--paper); border-bottom: 2px solid var(--ink-950); padding: 16px 0; overflow: hidden; position: relative; z-index: 3; }
.v3 .v3-marquee-track { display: flex; gap: 32px; animation: v3-marquee 30s linear infinite; white-space: nowrap; font-family: 'Space Grotesk'; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
.v3 .v3-mq-sep { color: var(--tenta-500); margin-left: 24px; font-style: normal; }
@keyframes v3-marquee { to { transform: translateX(-50%); } }

/* Sections */
.v3 .v3-sec { padding: 72px 40px; background: var(--accent-cream); }
.v3 .v3-sec-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 36px; gap: 20px; }
.v3 .v3-sec-head-c { flex-direction: column; align-items: center; text-align: center; margin-bottom: 44px; }
.v3 .v3-sec-head h2 { font-size: 52px; font-weight: 700; line-height: 1; letter-spacing: -0.035em; }
.v3 .v3-sec-head > a { font-weight: 700; color: var(--ink-950); border-bottom: 3px solid var(--tenta-500); padding-bottom: 2px; cursor: pointer; font-size: 15px; }
.v3 .v3-kicker-inline { font-family: 'Space Grotesk'; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; color: var(--tenta-600); margin-bottom: 10px; }
.v3 .v3-sec-sub { color: var(--ink-700); font-size: 15px; max-width: 520px; margin-top: 12px; }
.v3 .v3-stars { font-size: 16px; color: var(--tenta-500); letter-spacing: 2px; }
.v3 .v3-stars span { color: var(--ink-900); font-weight: 700; font-family: 'Space Grotesk'; margin-left: 6px; letter-spacing: 0; }

/* Service cards — agency version: 4 cols, 8 items */
.v3 .v3-grid-srv { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.v3 .v3-card { border: 2px solid var(--ink-950); border-radius: 20px; padding: 20px; min-height: 240px; display: flex; flex-direction: column; justify-content: space-between; position: relative; cursor: pointer; transition: all .15s; box-shadow: 5px 5px 0 var(--ink-950); gap: 20px; }
.v3 .v3-card:hover { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 var(--ink-950); }
.v3 .v3-card-orange { background: var(--tenta-400); }
.v3 .v3-card-dark { background: var(--ink-950); color: var(--paper); }
.v3 .v3-card-cream { background: var(--paper); }
.v3 .v3-card-orange2 { background: var(--tenta-200); }
.v3 .v3-card-head { display: flex; justify-content: space-between; align-items: flex-start; }
.v3 .v3-card-tag { background: var(--paper); border: 1.5px solid var(--ink-950); padding: 4px 10px; border-radius: 999px; font-size: 10.5px; font-weight: 700; color: var(--ink-950); letter-spacing: 0.04em; text-transform: uppercase; }
.v3 .v3-card-dark .v3-card-tag { background: var(--tenta-500); border-color: var(--tenta-500); }
.v3 .v3-card-icon { width: 44px; height: 44px; background: var(--paper); border: 2px solid var(--ink-950); border-radius: 12px; display: grid; place-items: center; color: var(--ink-950); }
.v3 .v3-card-dark .v3-card-icon { background: var(--tenta-500); }
.v3 .v3-card-foot { display: flex; flex-direction: column; gap: 14px; }
.v3 .v3-card h3 { font-size: 20px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; color: inherit; }
.v3 .v3-card-dark h3 { color: var(--paper); }
.v3 .v3-card-desc { font-size: 13px; line-height: 1.4; margin-top: 4px; opacity: .85; }
.v3 .v3-card-meta { display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1.5px solid rgba(0,0,0,.15); }
.v3 .v3-card-dark .v3-card-meta { border-color: rgba(255,255,255,.2); }
.v3 .v3-price { font-size: 13px; font-weight: 700; font-family: 'Space Grotesk'; }
.v3 .v3-card-arrow { background: var(--paper); border: 2px solid var(--ink-950); width: 34px; height: 34px; border-radius: 50%; font-family: 'Space Grotesk'; font-size: 16px; font-weight: 700; cursor: pointer; display: grid; place-items: center; flex-shrink: 0; color: var(--ink-950); }
.v3 .v3-card:hover .v3-card-arrow { background: var(--tenta-500); transform: rotate(45deg); }

/* PROCESS */
.v3 .v3-proc-sec { background: var(--ink-950); color: var(--paper); border-top: 4px solid var(--ink-950); border-bottom: 4px solid var(--ink-950); }
.v3 .v3-proc-sec h2, .v3 .v3-proc-sec .v3-kicker-inline { color: var(--paper); }
.v3 .v3-proc-sec .v3-kicker-inline { color: var(--tenta-400); }
.v3 .v3-proc-sub { color: var(--ink-400); font-family: 'Space Grotesk'; font-weight: 500; font-size: 15px; }
.v3 .v3-proc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.v3 .v3-proc-step { background: var(--ink-900); border: 2px solid var(--ink-800); border-radius: 20px; padding: 24px 22px; position: relative; }
.v3 .v3-proc-step:nth-child(odd) { background: var(--tenta-500); color: var(--ink-950); border-color: var(--tenta-500); }
.v3 .v3-proc-step:nth-child(odd) h4, .v3 .v3-proc-step:nth-child(odd) .v3-proc-num { color: var(--ink-950); }
.v3 .v3-proc-num { font-family: 'Space Grotesk'; font-size: 44px; font-weight: 700; letter-spacing: -0.04em; color: var(--tenta-400); line-height: 1; }
.v3 .v3-proc-step h4 { font-size: 24px; font-weight: 700; margin: 10px 0 10px; letter-spacing: -0.02em; color: var(--paper); }
.v3 .v3-proc-step p { font-size: 14px; line-height: 1.5; opacity: .9; }
.v3 .v3-proc-step:nth-child(odd) p { opacity: 1; color: var(--ink-800); }
.v3 .v3-proc-arrow { position: absolute; right: -20px; top: 36px; font-size: 24px; color: var(--tenta-500); z-index: 2; background: var(--ink-950); border: 2px solid var(--ink-950); width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-weight: 700; }
.v3 .v3-proc-step:nth-child(odd) .v3-proc-arrow { background: var(--tenta-500); color: var(--ink-950); }

/* CASE STUDIES */
.v3 .v3-case-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.v3 .v3-case { border: 2px solid var(--ink-950); border-radius: 20px; padding: 26px; box-shadow: 6px 6px 0 var(--ink-950); cursor: pointer; transition: all .15s; display: flex; flex-direction: column; gap: 24px; }
.v3 .v3-case:hover { transform: translate(-2px,-2px); box-shadow: 8px 8px 0 var(--ink-950); }
.v3 .v3-case-orange { background: var(--tenta-400); }
.v3 .v3-case-dark { background: var(--ink-950); color: var(--paper); }
.v3 .v3-case-cream { background: var(--paper); }
.v3 .v3-case-head { display: flex; justify-content: space-between; align-items: flex-start; font-family: 'Space Grotesk'; }
.v3 .v3-case-client { font-size: 18px; font-weight: 700; }
.v3 .v3-case-ind { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; background: var(--paper); color: var(--ink-950); padding: 4px 8px; border-radius: 6px; border: 1.5px solid var(--ink-950); }
.v3 .v3-case-dark .v3-case-ind { background: var(--tenta-500); border-color: var(--tenta-500); }
.v3 .v3-case-metric { padding: 8px 0; }
.v3 .v3-case-num { font-family: 'Space Grotesk'; font-size: 64px; font-weight: 700; letter-spacing: -0.05em; line-height: 1; color: inherit; }
.v3 .v3-case-orange .v3-case-num { color: var(--ink-950); }
.v3 .v3-case-dark .v3-case-num { color: var(--tenta-400); }
.v3 .v3-case-lbl { font-size: 14px; font-weight: 600; margin-top: 6px; opacity: .8; }
.v3 .v3-case-ft { display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1.5px solid rgba(0,0,0,.15); font-size: 13px; font-weight: 600; }
.v3 .v3-case-dark .v3-case-ft { border-color: rgba(255,255,255,.2); }

/* INDUSTRIES */
.v3 .v3-ind-sec { background: var(--tenta-500); border-top: 4px solid var(--ink-950); border-bottom: 4px solid var(--ink-950); }
.v3 .v3-ind-head { text-align: center; margin-bottom: 36px; }
.v3 .v3-ind-head h2 { color: var(--ink-950); font-size: 52px; }
.v3 .v3-ind-head em { color: var(--paper); }
.v3 .v3-ind-head p { color: var(--ink-900); font-size: 16px; margin-top: 10px; font-weight: 500; }
.v3 .v3-ind-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
.v3 .v3-ind { background: var(--paper); border: 2px solid var(--ink-950); border-radius: 20px; padding: 24px 16px; text-align: center; box-shadow: 5px 5px 0 var(--ink-950); cursor: pointer; transition: all .15s; }
.v3 .v3-ind:hover { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 var(--ink-950); background: var(--tenta-100); }
.v3 .v3-ind-emoji { font-size: 40px; line-height: 1; margin-bottom: 10px; }
.v3 .v3-ind-name { font-family: 'Space Grotesk'; font-size: 14px; font-weight: 700; color: var(--ink-950); }

/* PRICING */
.v3 .v3-price-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 1100px; margin: 0 auto; }
.v3 .v3-tier { background: var(--paper); border: 2px solid var(--ink-950); border-radius: 24px; padding: 32px 28px; box-shadow: 5px 5px 0 var(--ink-950); display: flex; flex-direction: column; position: relative; }
.v3 .v3-tier.featured { background: var(--tenta-500); color: var(--paper); transform: translateY(-8px); box-shadow: 7px 7px 0 var(--ink-950); }
.v3 .v3-tier.featured h3, .v3 .v3-tier.featured .v3-tier-name { color: var(--paper); }
.v3 .v3-tier-tag { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--ink-950); color: var(--tenta-400); padding: 6px 14px; border-radius: 999px; font-family: 'Space Grotesk'; font-size: 11.5px; font-weight: 700; letter-spacing: 0.08em; border: 2px solid var(--ink-950); }
.v3 .v3-tier-name { font-family: 'Space Grotesk'; font-size: 20px; font-weight: 700; color: var(--ink-950); letter-spacing: -0.02em; }
.v3 .v3-tier-price { font-family: 'Space Grotesk'; margin: 16px 0 24px; color: var(--ink-950); display: flex; align-items: baseline; gap: 6px; }
.v3 .v3-tier.featured .v3-tier-price { color: var(--paper); }
.v3 .v3-tier-price small { font-size: 16px; font-weight: 600; opacity: .7; }
.v3 .v3-tier-price strong { font-size: 56px; font-weight: 700; letter-spacing: -0.04em; line-height: 1; }
.v3 .v3-tier-price span { font-size: 15px; font-weight: 600; opacity: .7; }
.v3 .v3-tier-list { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 10px; flex: 1; border-top: 1.5px solid rgba(0,0,0,.12); padding-top: 20px; }
.v3 .v3-tier.featured .v3-tier-list { border-color: rgba(255,255,255,.2); }
.v3 .v3-tier-list li { display: flex; gap: 10px; font-size: 14px; line-height: 1.4; }
.v3 .v3-check { color: var(--tenta-600); font-weight: 700; flex-shrink: 0; }
.v3 .v3-tier.featured .v3-check { color: var(--paper); background: var(--ink-950); width: 20px; height: 20px; border-radius: 50%; display: grid; place-items: center; font-size: 12px; margin-top: 1px; }

/* Testimonials */
.v3 .v3-testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.v3 .v3-testi { border: 2px solid var(--ink-950); border-radius: 20px; padding: 24px; box-shadow: 5px 5px 0 var(--ink-950); }
.v3 .v3-testi-orange { background: var(--tenta-300); }
.v3 .v3-testi-dark { background: var(--ink-950); color: var(--paper); }
.v3 .v3-testi-cream { background: var(--paper); }
.v3 .v3-testi-stars { color: var(--tenta-600); letter-spacing: 2px; font-size: 16px; }
.v3 .v3-testi-dark .v3-testi-stars { color: var(--tenta-400); }
.v3 .v3-testi p { font-family: 'Space Grotesk'; font-size: 17px; font-weight: 500; line-height: 1.4; margin: 14px 0 18px; text-wrap: pretty; }
.v3 .v3-testi-ft { display: flex; align-items: center; gap: 12px; padding-top: 14px; border-top: 1.5px solid currentColor; }
.v3 .v3-testi-dark .v3-testi-ft { border-color: rgba(255,255,255,.2); }
.v3 .v3-testi-av { width: 38px; height: 38px; border-radius: 50%; background: var(--ink-950); color: var(--tenta-400); display: grid; place-items: center; font-weight: 700; font-family: 'Space Grotesk'; border: 2px solid var(--ink-950); }
.v3 .v3-testi-dark .v3-testi-av { background: var(--tenta-500); color: var(--ink-950); }
.v3 .v3-testi-ft strong { font-family: 'Space Grotesk'; font-size: 14px; display: block; font-weight: 700; }
.v3 .v3-testi-ft small { font-size: 12.5px; opacity: .7; }

/* FAQ */
.v3 .v3-faq-sec { background: var(--ink-950); color: var(--paper); border-top: 4px solid var(--ink-950); border-bottom: 4px solid var(--ink-950); display: grid; grid-template-columns: 1fr 1.3fr; gap: 56px; }
.v3 .v3-faq-sec h2 { color: var(--paper); font-size: 56px; }
.v3 .v3-faq-head p { color: var(--ink-400); margin-top: 16px; font-size: 15px; }
.v3 .v3-kicker { background: var(--tenta-500); color: var(--ink-950); padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; display: inline-block; margin-bottom: 16px; }
.v3 .v3-faq-list { display: flex; flex-direction: column; gap: 10px; }
.v3 .v3-faq { background: var(--ink-900); border: 2px solid var(--ink-800); border-radius: 16px; overflow: hidden; }
.v3 .v3-faq.open { background: var(--tenta-500); border-color: var(--tenta-500); color: var(--ink-950); }
.v3 .v3-faq button { width: 100%; background: none; border: 0; color: inherit; text-align: left; display: flex; justify-content: space-between; align-items: center; padding: 18px 22px; font-family: 'Space Grotesk'; font-size: 18px; font-weight: 600; cursor: pointer; gap: 16px; }
.v3 .v3-faq-ic { font-size: 26px; font-weight: 300; line-height: 1; }
.v3 .v3-faq-a { padding: 0 22px 20px; font-size: 14.5px; line-height: 1.55; opacity: .9; }
.v3 .v3-faq.open .v3-faq-a { opacity: 1; color: var(--ink-900); }

/* CTA strip */
.v3 .v3-cta-strip { background: var(--tenta-500); padding: 72px 40px; text-align: center; border-bottom: 4px solid var(--ink-950); }
.v3 .v3-cta-big h2 { font-size: 64px; font-weight: 700; line-height: 1; letter-spacing: -0.04em; color: var(--ink-950); margin-bottom: 16px; }
.v3 .v3-cta-big p { color: var(--ink-900); font-size: 17px; margin-bottom: 28px; font-weight: 500; }
.v3 .v3-cta-big em { color: var(--paper); }
.v3 .v3-cta-strip .v3-btn { background: var(--ink-950); color: var(--paper); }

/* Footer */
.v3 .v3-footer { background: var(--ink-950); color: var(--ink-200); padding: 64px 40px 20px; position: relative; overflow: hidden; }
.v3 .v3-footer-top { display: grid; grid-template-columns: 1.3fr 1fr 1fr 1.6fr; gap: 40px; padding-bottom: 40px; border-bottom: 1px solid var(--ink-800); }
.v3 .v3-footer-brand p { color: var(--ink-400); font-size: 14px; margin-top: 16px; max-width: 280px; line-height: 1.55; }
.v3 .v3-socials { display: flex; gap: 6px; margin-top: 20px; }
.v3 .v3-socials a { width: 34px; height: 34px; border-radius: 50%; background: var(--ink-800); color: var(--paper); display: grid; place-items: center; font-size: 11px; font-weight: 700; font-family: 'Space Grotesk'; cursor: pointer; }
.v3 .v3-socials a:hover { background: var(--tenta-500); color: var(--ink-950); }
.v3 .v3-footer-col h5, .v3 .v3-footer-news h5 { font-family: 'Space Grotesk'; font-size: 14px; font-weight: 700; color: var(--paper); margin-bottom: 16px; }
.v3 .v3-footer-col { display: flex; flex-direction: column; gap: 9px; }
.v3 .v3-footer-col a { color: var(--ink-400); font-size: 14px; cursor: pointer; }
.v3 .v3-footer-col a:hover { color: var(--tenta-400); }
.v3 .v3-footer-news p { color: var(--ink-400); font-size: 13.5px; margin-bottom: 14px; }
.v3 .v3-news { display: flex; gap: 8px; }
.v3 .v3-news input { flex: 1; background: var(--ink-900); border: 1.5px solid var(--ink-800); border-radius: 999px; padding: 10px 14px; color: var(--paper); font-size: 13.5px; outline: 0; font-family: inherit; }
.v3 .v3-news button { background: var(--tenta-500); color: var(--ink-950); border: 1.5px solid var(--tenta-500); border-radius: 999px; padding: 0 16px; font-weight: 700; font-family: 'Space Grotesk'; cursor: pointer; font-size: 13.5px; }
.v3 .v3-footer-big { font-family: 'Space Grotesk'; font-weight: 700; font-size: 200px; letter-spacing: -0.06em; color: transparent; -webkit-text-stroke: 2px var(--ink-800); line-height: 0.85; margin: 32px 0 -24px; text-align: center; user-select: none; }
.v3 .v3-footer-bot { display: flex; justify-content: space-between; font-size: 12.5px; color: var(--ink-500); padding-top: 16px; border-top: 1px solid var(--ink-800); }
`;
