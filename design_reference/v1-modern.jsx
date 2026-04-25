// v1-modern.jsx — Variation 1: Modern & Minimal (Geist sans, hero kanan, product card clean)

const V1 = () => {
  const services = [
    { tag: 'Branding',    title: 'Identitas Merek',      desc: 'Logo, sistem warna, tone',        price: 'Mulai 4,9jt', rating: '4.9', count: 120 },
    { tag: 'Web Design',  title: 'Desain Web Lengkap',   desc: 'UI/UX hingga hand-off',           price: 'Mulai 8,5jt', rating: '4.8', count: 86  },
    { tag: 'Social',      title: 'Konten Sosial Media',  desc: 'Template + 30 post/bulan',        price: 'Mulai 2,4jt', rating: '4.9', count: 204 },
    { tag: 'Packaging',   title: 'Desain Kemasan',       desc: 'Riset, mockup, file produksi',    price: 'Mulai 3,7jt', rating: '4.7', count: 42  },
  ];

  const categories = [
    { icon: 'layout',  label: 'Desain UI/UX',   sub: 'Web & aplikasi' },
    { icon: 'book',    label: 'Branding',       sub: 'Logo & identitas' },
    { icon: 'image',   label: 'Ilustrasi',      sub: 'Kustom & editorial' },
    { icon: 'tool',    label: 'Motion',         sub: 'Animasi & video pendek' },
  ];

  const testimonials = [
    { name: 'Kirana Ayu',   role: 'Founder, Kanaya Studio',     text: 'Prosesnya sistematis, komunikasi jelas, hasilnya jauh di atas ekspektasi. Tim TENTA benar-benar paham brand kami.', avatar: 'KA' },
    { name: 'Bagas Prawira', role: 'Marketing Lead, Kulaku',    text: 'Dalam 6 minggu kami punya sistem branding yang scalable. Konversi landing page naik 38%.', avatar: 'BP' },
    { name: 'Nadira Salsa',  role: 'CEO, Teras Kopi',           text: 'Tidak hanya desain, mereka bantu kami merapikan positioning. Worth every rupiah.', avatar: 'NS' },
  ];

  const faqs = [
    { q: 'Berapa lama pengerjaan satu proyek?', a: 'Bervariasi tergantung scope — logo & branding dasar 2-3 minggu, website lengkap 5-8 minggu. Setelah kick-off kami kirim timeline detail.' },
    { q: 'Apakah ada revisi?', a: 'Iya, setiap paket termasuk 2-3 putaran revisi di tiap milestone. Revisi tambahan dihitung per jam.' },
    { q: 'Bagaimana sistem pembayarannya?', a: 'DP 50% untuk kickoff, 25% di tengah proyek, 25% saat hand-off. Transfer bank lokal atau invoice via Xendit.' },
    { q: 'Apakah bisa sign NDA?', a: 'Tentu. Kami rutin bekerja di bawah NDA untuk klien korporat dan startup early-stage.' },
  ];

  return (
    <div className="tenta-root v1" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui' }}>
      <style>{V1_CSS}</style>

      {/* NAV */}
      <header className="v1-nav">
        <div className="v1-brand">
          <div className="v1-logo"><LogoMark/></div>
          <div>
            <div className="v1-brand-name">TENTA</div>
            <div className="v1-brand-sub">Design Studio</div>
          </div>
        </div>
        <nav className="v1-navlinks">
          <a className="active">Beranda</a>
          <a>Layanan <Caret/></a>
          <a>Portofolio <Caret/></a>
          <a>Paket</a>
          <a>Tentang</a>
        </nav>
        <div className="v1-navright">
          <button className="v1-iconbtn"><Search/></button>
          <button className="v1-btn-primary">Mulai Proyek</button>
        </div>
      </header>

      {/* HERO */}
      <section className="v1-hero">
        <div className="v1-hero-l">
          <div className="v1-pill">
            <span className="v1-pill-dot"></span>
            Menerima proyek Q3 2026
          </div>
          <h1 className="v1-hero-h">
            Studio desain untuk<br/>
            merek yang ingin<br/>
            <span className="v1-hero-accent">terlihat & terasa premium.</span>
          </h1>
          <p className="v1-hero-p">
            TENTA adalah studio desain independen berbasis di Jakarta.
            Kami bantu brand, startup, dan UMKM membangun identitas visual
            yang konsisten, dari riset hingga eksekusi.
          </p>
          <div className="v1-cta-row">
            <button className="v1-btn-primary v1-btn-lg">
              <ArrowIcon/> Lihat Paket Layanan
            </button>
            <button className="v1-btn-ghost v1-btn-lg">
              <PlayIcon/> Cerita Studio (2 mnt)
            </button>
          </div>
          <div className="v1-trust">
            <TrustItem icon="bolt" head="Pengerjaan Cepat" sub="Rata-rata 3 minggu" />
            <TrustItem icon="shield" head="Garansi Revisi" sub="Hingga 3 putaran" />
            <TrustItem icon="head" head="Dukungan 1-on-1" sub="Dedicated PM" />
          </div>
        </div>
        <div className="v1-hero-r">
          <HeroVisual/>
        </div>
      </section>

      {/* SERVICES */}
      <section className="v1-sec">
        <div className="v1-sec-head">
          <h2>Layanan Populer</h2>
          <a className="v1-link">Lihat semua layanan <ArrowRight/></a>
        </div>
        <div className="v1-grid-4">
          {services.map((s, i) => (
            <article key={i} className="v1-card">
              <div className="v1-card-img">
                <div className="v1-card-tag">{s.tag}</div>
                <div className="v1-card-visual" data-v={i}></div>
              </div>
              <div className="v1-card-body">
                <div className="v1-card-title">{s.title}</div>
                <div className="v1-card-desc">{s.desc}</div>
                <div className="v1-card-foot">
                  <div className="v1-card-price">{s.price}</div>
                  <div className="v1-card-rate"><Star/> {s.rating} <span>({s.count})</span></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BUNDLE */}
      <section className="v1-sec">
        <div className="v1-bundle">
          <div className="v1-bundle-l">
            <BundleMark/>
          </div>
          <div className="v1-bundle-c">
            <div className="v1-bundle-kicker">Paket Hemat</div>
            <h3>Starter Brand Kit<br/><span>lengkap dalam 4 minggu.</span></h3>
            <p>Logo + guideline + kartu nama + 20 template sosial media + 1 halaman landing page. Hemat hingga 32% dibanding pesan terpisah.</p>
          </div>
          <div className="v1-bundle-r">
            <button className="v1-btn-dark v1-btn-lg">
              Lihat Paket <ArrowRight/>
            </button>
            <div className="v1-bundle-price"><span>Mulai</span> Rp 12,9 jt</div>
          </div>
        </div>

        <div className="v1-cats">
          {categories.map((c, i) => (
            <div key={i} className="v1-cat">
              <div className="v1-cat-icon"><CatIcon name={c.icon}/></div>
              <div>
                <div className="v1-cat-lbl">{c.label}</div>
                <div className="v1-cat-sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="v1-sec">
        <div className="v1-sec-head">
          <h2>Kata Mereka</h2>
          <div className="v1-stat"><span>98%</span> klien kembali order</div>
        </div>
        <div className="v1-grid-3">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="v1-testi">
              <div className="v1-testi-stars">★★★★★</div>
              <p>"{t.text}"</p>
              <footer>
                <div className="v1-avatar">{t.avatar}</div>
                <div>
                  <div className="v1-testi-name">{t.name}</div>
                  <div className="v1-testi-role">{t.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="v1-sec">
        <div className="v1-faq-wrap">
          <div className="v1-faq-l">
            <div className="v1-kicker">FAQ</div>
            <h2>Pertanyaan yang sering ditanyakan</h2>
            <p>Belum menemukan jawaban? Kirim email ke <a className="v1-inline-link">halo@tenta.studio</a> — biasanya kami balas dalam 24 jam kerja.</p>
          </div>
          <div className="v1-faq-r">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} open={i === 0}/>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="v1-footer">
        <div className="v1-footer-top">
          <div className="v1-footer-brand">
            <div className="v1-brand">
              <div className="v1-logo"><LogoMark/></div>
              <div>
                <div className="v1-brand-name">TENTA</div>
                <div className="v1-brand-sub">Design Studio</div>
              </div>
            </div>
            <p>Studio desain independen yang fokus pada identitas merek, produk digital, dan konten visual untuk pertumbuhan.</p>
            <div className="v1-socials">
              <SocialIcon n="ig"/><SocialIcon n="tw"/><SocialIcon n="dr"/><SocialIcon n="be"/>
            </div>
          </div>
          <div className="v1-footer-col">
            <h5>Layanan</h5>
            <a>Branding</a><a>Web Design</a><a>Ilustrasi</a><a>Motion</a><a>Paket</a>
          </div>
          <div className="v1-footer-col">
            <h5>Studio</h5>
            <a>Tentang</a><a>Karya</a><a>Proses</a><a>Karir</a><a>Kontak</a>
          </div>
          <div className="v1-footer-news">
            <h5>Dapat update studio</h5>
            <p>Proyek terbaru, artikel desain, tidak lebih dari 1x/bulan.</p>
            <form className="v1-news-form" onSubmit={(e)=>e.preventDefault()}>
              <input placeholder="email@anda.com" />
              <button type="submit"><ArrowRight/></button>
            </form>
          </div>
        </div>
        <div className="v1-footer-bot">
          <div>© 2026 TENTA Studio. Semua hak dilindungi.</div>
          <div className="v1-footer-legal">
            <a>Kebijakan Privasi</a><span>·</span><a>Syarat & Ketentuan</a><span>·</span><a>Cookie</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// ─── Inline SVG helpers ─────────────────────────────────────────────
const LogoMark = () => (
  <svg viewBox="0 0 32 32" width="32" height="32">
    <path d="M4 24 L16 6 L28 24 Z" fill="var(--tenta-500)"/>
    <path d="M10 24 L16 14 L22 24 Z" fill="var(--paper)"/>
    <circle cx="16" cy="10" r="2" fill="var(--tenta-600)"/>
  </svg>
);
const Caret = () => <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4l3 3 3-3"/></svg>;
const Search = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="8" cy="8" r="5.5"/><path d="m12 12 3.5 3.5"/></svg>;
const ArrowIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>;
const ArrowRight = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 7h8M8 3l3 4-3 4"/></svg>;
const PlayIcon = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="7" cy="7" r="6"/><path d="M5.5 4.5 10 7l-4.5 2.5z" fill="currentColor"/></svg>;
const Star = () => <svg width="12" height="12" viewBox="0 0 12 12" fill="var(--tenta-500)"><path d="M6 1l1.5 3.3L11 5l-2.7 2.3L9 11 6 9.2 3 11l.7-3.7L1 5l3.5-.7z"/></svg>;

const TrustItem = ({ icon, head, sub }) => {
  const icons = {
    bolt:   <path d="M10 2 4 12h5l-1 8 7-10h-5l1-8z" fill="var(--tenta-500)"/>,
    shield: <path d="M10 2 3 5v5c0 4 3 7 7 8 4-1 7-4 7-8V5z" fill="none" stroke="var(--tenta-500)" strokeWidth="1.7"/>,
    head:   <><circle cx="10" cy="8" r="3.5" fill="none" stroke="var(--tenta-500)" strokeWidth="1.7"/><path d="M4 17c1-3 3.5-4.5 6-4.5s5 1.5 6 4.5" fill="none" stroke="var(--tenta-500)" strokeWidth="1.7"/></>,
  };
  return (
    <div className="v1-trust-item">
      <div className="v1-trust-ic"><svg viewBox="0 0 20 20" width="20" height="20">{icons[icon]}</svg></div>
      <div>
        <div className="v1-trust-h">{head}</div>
        <div className="v1-trust-s">{sub}</div>
      </div>
    </div>
  );
};

const CatIcon = ({ name }) => {
  const icons = {
    layout: <><rect x="3" y="3" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M3 8h14M8 8v9" stroke="currentColor" strokeWidth="1.6"/></>,
    book:   <><path d="M4 4h5a3 3 0 0 1 3 3v10a3 3 0 0 0-3-3H4zM16 4h-5a3 3 0 0 0-3 3v10a3 3 0 0 1 3-3h5z" fill="none" stroke="currentColor" strokeWidth="1.6"/></>,
    image:  <><rect x="3" y="3" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><path d="m3 14 4-4 4 4 3-3 3 3" fill="none" stroke="currentColor" strokeWidth="1.6"/></>,
    tool:   <><path d="M12 3a3.5 3.5 0 0 1 4.5 4.5L8 16l-4-4 8.5-8.5z" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m11 5 4 4" stroke="currentColor" strokeWidth="1.6"/></>,
  };
  return <svg viewBox="0 0 20 20" width="20" height="20">{icons[name]}</svg>;
};

const BundleMark = () => (
  <svg viewBox="0 0 120 120" width="100%" height="100%">
    <rect x="20" y="40" width="80" height="60" rx="6" fill="var(--tenta-500)"/>
    <rect x="20" y="40" width="80" height="10" fill="var(--tenta-700)"/>
    <rect x="55" y="30" width="10" height="80" fill="var(--tenta-600)"/>
    <circle cx="60" cy="45" r="10" fill="var(--ink-900)"/>
    <text x="60" y="49" textAnchor="middle" fill="var(--tenta-300)" fontSize="11" fontWeight="700" fontFamily="Geist">%</text>
    {[...Array(6)].map((_, i) => {
      const ang = (i / 6) * Math.PI * 2;
      return <circle key={i} cx={60 + Math.cos(ang)*50} cy={45 + Math.sin(ang)*35} r="3" fill="var(--tenta-300)"/>;
    })}
  </svg>
);

const SocialIcon = ({ n }) => {
  const paths = {
    ig: <><rect x="3" y="3" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4"/><circle cx="10" cy="10" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.4"/><circle cx="14.3" cy="5.7" r="0.9" fill="currentColor"/></>,
    tw: <path d="M4 4l5 7-5 5h2l4-4 3 4h3l-5-7 5-5h-2l-4 4-3-4z" fill="currentColor"/>,
    dr: <><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M3 9c4 0 9 .5 14 4M5 4c3 3 6 8 7 14M16 4c-1 4-4 8-8 12" fill="none" stroke="currentColor" strokeWidth="1.2"/></>,
    be: <><path d="M3 5h6a2.5 2.5 0 0 1 0 5H3zM3 10h6.5a2.5 2.5 0 0 1 0 5H3zM13 9h4M12 12c.5 2 2 3 3.5 3s2.5-1 3-2.5c-1-2-5-2-6.5-.5z" fill="none" stroke="currentColor" strokeWidth="1.4"/></>,
  };
  return <a className="v1-social"><svg viewBox="0 0 20 20" width="16" height="16">{paths[n]}</svg></a>;
};

const HeroVisual = () => (
  <div className="v1-hero-visual">
    <div className="v1-hv-bg"></div>
    <div className="v1-hv-board">
      <div className="v1-hv-board-head">
        <span></span><span></span><span></span>
      </div>
      <div className="v1-hv-board-body">
        <div className="v1-hv-tri"></div>
        <div className="v1-hv-lines">
          <div style={{width:'70%'}}></div>
          <div style={{width:'85%'}}></div>
          <div style={{width:'55%'}}></div>
        </div>
      </div>
    </div>
    <div className="v1-hv-card v1-hv-card1">
      <div className="v1-hv-aa">Aa</div>
      <div className="v1-hv-card-lines">
        <div></div><div style={{width:'65%'}}></div>
      </div>
    </div>
    <div className="v1-hv-card v1-hv-card2">
      <div className="v1-hv-palette">
        <i style={{background:'var(--tenta-500)'}}></i>
        <i style={{background:'var(--tenta-300)'}}></i>
        <i style={{background:'var(--ink-900)'}}></i>
        <i style={{background:'var(--accent-cream)'}}></i>
      </div>
    </div>
    <div className="v1-hv-plant">
      <div className="v1-hv-pot"></div>
      <svg viewBox="0 0 80 100" className="v1-hv-leaves">
        <ellipse cx="40" cy="30" rx="6" ry="28" fill="var(--tenta-600)" transform="rotate(-10 40 30)"/>
        <ellipse cx="40" cy="30" rx="6" ry="28" fill="var(--tenta-500)" transform="rotate(10 40 30)"/>
        <ellipse cx="40" cy="30" rx="6" ry="32" fill="var(--tenta-700)"/>
        <ellipse cx="40" cy="30" rx="6" ry="28" fill="var(--tenta-400)" transform="rotate(-25 40 30)"/>
        <ellipse cx="40" cy="30" rx="6" ry="28" fill="var(--tenta-500)" transform="rotate(25 40 30)"/>
      </svg>
    </div>
    <div className="v1-hv-dots">
      {[...Array(20)].map((_,i)=><span key={i}></span>)}
    </div>
  </div>
);

const FaqItem = ({ q, a, open: initOpen }) => {
  const [open, setOpen] = React.useState(!!initOpen);
  return (
    <div className={`v1-faq ${open?'open':''}`}>
      <button className="v1-faq-q" onClick={()=>setOpen(o=>!o)}>
        <span>{q}</span>
        <span className="v1-faq-plus"><span></span><span></span></span>
      </button>
      {open && <div className="v1-faq-a">{a}</div>}
    </div>
  );
};

window.V1 = V1;

// ─────────────────────────────────────────────────────────────────
// Scoped CSS
// ─────────────────────────────────────────────────────────────────
const V1_CSS = `
.v1 { font-size: 15px; line-height: 1.55; letter-spacing: -0.005em; }
.v1 .v1-nav { display: flex; align-items: center; gap: 32px; padding: 18px 48px; border-bottom: 1px solid var(--ink-100); background: var(--paper); position: sticky; top: 0; z-index: 10; }
.v1 .v1-brand { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
.v1 .v1-logo { width: 36px; height: 36px; background: var(--tenta-50); border-radius: 10px; display: grid; place-items: center; }
.v1 .v1-brand-name { font-size: 17px; font-weight: 700; letter-spacing: -0.02em; color: var(--ink-900); }
.v1 .v1-brand-sub { font-size: 11px; color: var(--ink-500); margin-top: -2px; }
.v1 .v1-navlinks { display: flex; gap: 28px; flex: 1; justify-content: center; font-size: 14px; font-weight: 500; color: var(--ink-700); }
.v1 .v1-navlinks a { display: inline-flex; align-items: center; gap: 4px; cursor: pointer; padding: 6px 2px; position: relative; }
.v1 .v1-navlinks a:hover { color: var(--tenta-600); }
.v1 .v1-navlinks a.active { color: var(--tenta-600); }
.v1 .v1-navlinks a.active::after { content: ''; position: absolute; left: 2px; right: 2px; bottom: -4px; height: 2px; background: var(--tenta-500); border-radius: 2px; }
.v1 .v1-navright { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
.v1 .v1-iconbtn { width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center; color: var(--ink-700); }
.v1 .v1-iconbtn:hover { background: var(--ink-100); }

.v1 .v1-btn-primary { background: var(--tenta-500); color: white; padding: 10px 18px; border-radius: 10px; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; transition: all .15s; box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 4px 14px rgba(255,122,26,.28); }
.v1 .v1-btn-primary:hover { background: var(--tenta-600); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(255,122,26,.35); }
.v1 .v1-btn-ghost { background: var(--paper); color: var(--ink-900); padding: 10px 18px; border-radius: 10px; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--ink-200); }
.v1 .v1-btn-ghost:hover { border-color: var(--ink-300); background: var(--ink-50); }
.v1 .v1-btn-dark { background: var(--ink-900); color: var(--paper); padding: 10px 18px; border-radius: 10px; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; }
.v1 .v1-btn-dark:hover { background: var(--ink-800); }
.v1 .v1-btn-lg { padding: 13px 22px; font-size: 14.5px; border-radius: 12px; }

/* HERO */
.v1 .v1-hero { padding: 56px 48px 72px; display: grid; grid-template-columns: 1.05fr 1fr; gap: 56px; align-items: center; background: linear-gradient(180deg, var(--tenta-50) 0%, transparent 92%); position: relative; }
.v1 .v1-hero::before { content: ''; position: absolute; top: 0; right: 0; width: 60%; height: 100%; background: radial-gradient(ellipse at 70% 50%, rgba(255,122,26,.08), transparent 60%); pointer-events: none; }
.v1 .v1-pill { display: inline-flex; align-items: center; gap: 8px; background: var(--paper); border: 1px solid var(--ink-200); padding: 7px 14px 7px 10px; border-radius: 999px; font-size: 13px; font-weight: 500; color: var(--ink-700); width: fit-content; box-shadow: 0 1px 0 rgba(0,0,0,.02); }
.v1 .v1-pill-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--success); box-shadow: 0 0 0 3px rgba(61,174,113,.2); }
.v1 .v1-hero-h { font-size: 64px; line-height: 1.03; font-weight: 700; letter-spacing: -0.035em; margin: 20px 0 18px; color: var(--ink-900); }
.v1 .v1-hero-accent { color: var(--tenta-600); font-style: italic; font-weight: 500; }
.v1 .v1-hero-p { font-size: 16.5px; color: var(--ink-600); max-width: 500px; margin-bottom: 28px; line-height: 1.6; }
.v1 .v1-cta-row { display: flex; gap: 12px; margin-bottom: 40px; }
.v1 .v1-trust { display: flex; gap: 28px; padding-top: 24px; border-top: 1px solid var(--ink-200); }
.v1 .v1-trust-item { display: flex; gap: 10px; align-items: flex-start; }
.v1 .v1-trust-ic { width: 32px; height: 32px; background: var(--tenta-50); border-radius: 8px; display: grid; place-items: center; flex-shrink: 0; }
.v1 .v1-trust-h { font-weight: 600; font-size: 13.5px; color: var(--ink-900); }
.v1 .v1-trust-s { font-size: 12.5px; color: var(--ink-500); margin-top: 2px; }

/* Hero visual */
.v1 .v1-hero-r { position: relative; min-height: 500px; }
.v1 .v1-hero-visual { position: relative; width: 100%; height: 500px; }
.v1 .v1-hv-bg { position: absolute; inset: 60px 20px 40px 60px; background: radial-gradient(ellipse at center, var(--tenta-100), var(--tenta-50) 65%); border-radius: 50%; }
.v1 .v1-hv-board { position: absolute; top: 80px; left: 80px; width: 320px; height: 230px; background: var(--paper); border-radius: 14px; box-shadow: 0 20px 60px -20px rgba(255,122,26,.35), 0 2px 6px rgba(0,0,0,.05); overflow: hidden; border: 1px solid var(--ink-100); }
.v1 .v1-hv-board-head { height: 28px; background: var(--ink-50); display: flex; align-items: center; gap: 6px; padding: 0 12px; border-bottom: 1px solid var(--ink-100); }
.v1 .v1-hv-board-head span { width: 9px; height: 9px; border-radius: 50%; background: var(--ink-200); }
.v1 .v1-hv-board-head span:first-child { background: var(--tenta-400); }
.v1 .v1-hv-board-body { display: flex; padding: 22px; gap: 20px; align-items: flex-start; height: calc(100% - 28px); }
.v1 .v1-hv-tri { width: 110px; height: 110px; background: var(--tenta-500); clip-path: polygon(50% 0, 100% 100%, 0 100%); flex-shrink: 0; margin-top: 14px; position: relative; }
.v1 .v1-hv-tri::before { content: ''; position: absolute; width: 50px; height: 50px; background: var(--paper); clip-path: polygon(50% 25%, 100% 100%, 0 100%); left: 50%; bottom: 0; transform: translateX(-50%); }
.v1 .v1-hv-lines { flex: 1; display: flex; flex-direction: column; gap: 10px; margin-top: 14px; }
.v1 .v1-hv-lines div { height: 8px; background: var(--ink-100); border-radius: 4px; }
.v1 .v1-hv-lines div:first-child { background: var(--tenta-200); }
.v1 .v1-hv-card { position: absolute; background: var(--paper); border-radius: 12px; box-shadow: 0 12px 40px -12px rgba(0,0,0,.18), 0 2px 4px rgba(0,0,0,.04); padding: 16px; border: 1px solid var(--ink-100); }
.v1 .v1-hv-card1 { bottom: 80px; left: 40px; width: 140px; }
.v1 .v1-hv-card2 { bottom: 40px; right: 120px; width: 150px; }
.v1 .v1-hv-aa { font-size: 32px; font-weight: 700; color: var(--tenta-600); line-height: 1; margin-bottom: 10px; letter-spacing: -0.05em; }
.v1 .v1-hv-card-lines > div { height: 6px; background: var(--ink-100); border-radius: 3px; margin-top: 6px; }
.v1 .v1-hv-palette { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.v1 .v1-hv-palette i { height: 38px; border-radius: 6px; display: block; }
.v1 .v1-hv-plant { position: absolute; bottom: 20px; right: 20px; width: 90px; }
.v1 .v1-hv-pot { width: 70px; height: 44px; background: linear-gradient(180deg, #fff 0%, var(--ink-100) 100%); border-radius: 0 0 8px 8px; margin: 0 auto; border: 1px solid var(--ink-200); border-top: 0; }
.v1 .v1-hv-leaves { position: absolute; bottom: 36px; left: 5px; width: 80px; }
.v1 .v1-hv-dots { position: absolute; top: 20px; right: 20px; display: grid; grid-template-columns: repeat(5, 4px); gap: 8px; }
.v1 .v1-hv-dots span { width: 4px; height: 4px; border-radius: 50%; background: var(--tenta-300); }

/* SECTIONS */
.v1 .v1-sec { padding: 64px 48px; }
.v1 .v1-sec-head { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 32px; }
.v1 .v1-sec h2 { font-size: 32px; font-weight: 700; letter-spacing: -0.03em; color: var(--ink-900); }
.v1 .v1-link { color: var(--tenta-600); font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }
.v1 .v1-link:hover { gap: 10px; }
.v1 .v1-stat { font-size: 13.5px; color: var(--ink-600); }
.v1 .v1-stat span { color: var(--tenta-600); font-weight: 700; }

.v1 .v1-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.v1 .v1-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

/* Product card — minimal */
.v1 .v1-card { background: var(--paper); border-radius: 16px; overflow: hidden; border: 1px solid var(--ink-100); transition: all .2s; cursor: pointer; }
.v1 .v1-card:hover { transform: translateY(-3px); box-shadow: 0 20px 40px -24px rgba(26,19,12,.2); border-color: var(--ink-200); }
.v1 .v1-card-img { height: 170px; background: var(--ink-50); position: relative; overflow: hidden; }
.v1 .v1-card-tag { position: absolute; top: 12px; left: 12px; background: var(--paper); color: var(--ink-700); padding: 4px 10px; border-radius: 999px; font-size: 11.5px; font-weight: 600; z-index: 2; box-shadow: 0 1px 2px rgba(0,0,0,.04); }
.v1 .v1-card-visual { position: absolute; inset: 0; }
.v1 .v1-card-visual[data-v="0"] { background: var(--ink-900); }
.v1 .v1-card-visual[data-v="0"]::before { content:''; position: absolute; top: 40px; left: 40px; right: 40px; height: 80px; background: repeating-linear-gradient(90deg, var(--tenta-500) 0 40px, var(--tenta-400) 40px 80px, var(--tenta-300) 80px 120px); border-radius: 6px; }
.v1 .v1-card-visual[data-v="0"]::after { content:''; position: absolute; bottom: 20px; left: 40px; width: 60px; height: 6px; background: var(--tenta-500); border-radius: 3px; }
.v1 .v1-card-visual[data-v="1"] { background: linear-gradient(135deg, var(--tenta-100), var(--paper)); }
.v1 .v1-card-visual[data-v="1"]::before { content:''; position: absolute; inset: 28px 40px; background: var(--paper); border-radius: 6px; box-shadow: 0 8px 24px -8px rgba(0,0,0,.15); }
.v1 .v1-card-visual[data-v="1"]::after { content:''; position: absolute; top: 44px; left: 56px; right: 56px; height: 4px; background: var(--ink-900); border-radius: 2px; box-shadow: 0 12px 0 var(--ink-200), 0 24px 0 var(--ink-200), 0 36px 0 var(--tenta-500); }
.v1 .v1-card-visual[data-v="2"] { background: var(--ink-950); }
.v1 .v1-card-visual[data-v="2"]::before { content:''; position: absolute; top: 30px; left: 30px; right: 30px; height: 100px; background: linear-gradient(180deg, transparent, var(--tenta-500) 50%, var(--tenta-600)); clip-path: polygon(0 100%, 20% 60%, 40% 80%, 60% 20%, 80% 50%, 100% 30%, 100% 100%); opacity: .85; }
.v1 .v1-card-visual[data-v="2"]::after { content:''; position: absolute; bottom: 20px; left: 30px; right: 30px; height: 1px; background: var(--ink-700); box-shadow: 0 -14px 0 var(--ink-800), 0 -28px 0 var(--ink-800); }
.v1 .v1-card-visual[data-v="3"] { background: var(--tenta-50); display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; padding: 28px; }
.v1 .v1-card-visual[data-v="3"] { --c: var(--tenta-600); }
.v1 .v1-card-visual[data-v="3"]::before, .v1 .v1-card-visual[data-v="3"]::after { display: none; }
.v1 .v1-card-body { padding: 16px 18px 18px; }
.v1 .v1-card-title { font-weight: 600; font-size: 15.5px; color: var(--ink-900); letter-spacing: -0.01em; }
.v1 .v1-card-desc { font-size: 13px; color: var(--ink-500); margin-top: 3px; }
.v1 .v1-card-foot { display: flex; justify-content: space-between; align-items: center; margin-top: 14px; padding-top: 12px; border-top: 1px dashed var(--ink-200); }
.v1 .v1-card-price { font-weight: 700; color: var(--tenta-600); font-size: 15px; }
.v1 .v1-card-rate { font-size: 12.5px; color: var(--ink-700); display: flex; align-items: center; gap: 4px; }
.v1 .v1-card-rate span { color: var(--ink-400); }

/* fill v3 card with icon grid */
.v1 .v1-card-visual[data-v="3"]::before { display: block !important; content: ''; grid-column: 1 / -1; height: 0; }

/* BUNDLE */
.v1 .v1-bundle { display: grid; grid-template-columns: 140px 1fr auto; gap: 32px; align-items: center; background: linear-gradient(100deg, var(--tenta-50), var(--accent-cream)); border-radius: 24px; padding: 36px 40px; border: 1px solid var(--tenta-100); position: relative; overflow: hidden; }
.v1 .v1-bundle::after { content: ''; position: absolute; right: -60px; top: -60px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(255,122,26,.12), transparent 70%); border-radius: 50%; }
.v1 .v1-bundle-l { width: 140px; height: 130px; position: relative; z-index: 1; }
.v1 .v1-bundle-kicker { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--tenta-600); margin-bottom: 8px; }
.v1 .v1-bundle-c h3 { font-size: 30px; font-weight: 700; letter-spacing: -0.025em; color: var(--ink-900); line-height: 1.1; }
.v1 .v1-bundle-c h3 span { color: var(--tenta-600); font-style: italic; font-weight: 500; }
.v1 .v1-bundle-c p { color: var(--ink-600); margin-top: 10px; max-width: 520px; font-size: 14.5px; }
.v1 .v1-bundle-r { display: flex; flex-direction: column; align-items: flex-end; gap: 12px; position: relative; z-index: 1; }
.v1 .v1-bundle-price { font-size: 14px; color: var(--ink-900); font-weight: 700; }
.v1 .v1-bundle-price span { color: var(--ink-500); font-weight: 400; margin-right: 4px; }

/* CATEGORIES */
.v1 .v1-cats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 20px; }
.v1 .v1-cat { display: flex; align-items: center; gap: 14px; padding: 18px 20px; background: var(--paper); border: 1px solid var(--ink-100); border-radius: 14px; transition: all .15s; cursor: pointer; }
.v1 .v1-cat:hover { border-color: var(--tenta-300); background: var(--tenta-50); }
.v1 .v1-cat-icon { width: 40px; height: 40px; background: var(--ink-50); border-radius: 10px; display: grid; place-items: center; color: var(--tenta-600); flex-shrink: 0; }
.v1 .v1-cat:hover .v1-cat-icon { background: var(--paper); }
.v1 .v1-cat-lbl { font-weight: 600; font-size: 14px; color: var(--ink-900); }
.v1 .v1-cat-sub { font-size: 12.5px; color: var(--ink-500); margin-top: 2px; }

/* TESTIMONIALS */
.v1 .v1-testi { background: var(--paper); border: 1px solid var(--ink-100); border-radius: 16px; padding: 24px; margin: 0; display: flex; flex-direction: column; gap: 14px; }
.v1 .v1-testi-stars { color: var(--tenta-500); letter-spacing: 2px; font-size: 14px; }
.v1 .v1-testi p { font-size: 14.5px; line-height: 1.6; color: var(--ink-800); flex: 1; text-wrap: pretty; }
.v1 .v1-testi footer { display: flex; align-items: center; gap: 12px; padding-top: 14px; border-top: 1px solid var(--ink-100); }
.v1 .v1-avatar { width: 38px; height: 38px; border-radius: 50%; background: var(--tenta-100); color: var(--tenta-700); display: grid; place-items: center; font-weight: 700; font-size: 13px; }
.v1 .v1-testi-name { font-weight: 600; font-size: 13.5px; color: var(--ink-900); }
.v1 .v1-testi-role { font-size: 12px; color: var(--ink-500); margin-top: 2px; }

/* FAQ */
.v1 .v1-faq-wrap { display: grid; grid-template-columns: 1fr 1.3fr; gap: 56px; align-items: flex-start; }
.v1 .v1-faq-l { position: sticky; top: 96px; }
.v1 .v1-kicker { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--tenta-600); margin-bottom: 10px; }
.v1 .v1-faq-l h2 { margin-bottom: 14px; }
.v1 .v1-faq-l p { color: var(--ink-600); font-size: 14.5px; }
.v1 .v1-inline-link { color: var(--tenta-600); font-weight: 500; border-bottom: 1px dashed var(--tenta-400); }
.v1 .v1-faq-r { display: flex; flex-direction: column; gap: 8px; }
.v1 .v1-faq { border: 1px solid var(--ink-100); border-radius: 14px; background: var(--paper); overflow: hidden; }
.v1 .v1-faq.open { border-color: var(--tenta-300); background: var(--tenta-50); }
.v1 .v1-faq-q { width: 100%; text-align: left; display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; font-weight: 600; font-size: 15px; color: var(--ink-900); cursor: pointer; gap: 16px; }
.v1 .v1-faq-plus { width: 20px; height: 20px; position: relative; flex-shrink: 0; }
.v1 .v1-faq-plus span { position: absolute; background: var(--ink-600); border-radius: 2px; transition: transform .2s; }
.v1 .v1-faq-plus span:nth-child(1) { left: 0; right: 0; top: 9px; height: 2px; }
.v1 .v1-faq-plus span:nth-child(2) { top: 0; bottom: 0; left: 9px; width: 2px; }
.v1 .v1-faq.open .v1-faq-plus span:nth-child(2) { transform: scaleY(0); }
.v1 .v1-faq.open .v1-faq-plus span { background: var(--tenta-600); }
.v1 .v1-faq-a { padding: 0 22px 22px; color: var(--ink-600); font-size: 14.5px; line-height: 1.6; }

/* FOOTER */
.v1 .v1-footer { background: var(--ink-950); color: var(--ink-200); padding: 72px 48px 24px; }
.v1 .v1-footer-top { display: grid; grid-template-columns: 1.3fr 1fr 1fr 1.4fr; gap: 48px; padding-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,.08); }
.v1 .v1-footer-brand { max-width: 320px; }
.v1 .v1-footer-brand .v1-brand-name { color: var(--paper); }
.v1 .v1-footer-brand .v1-brand-sub { color: var(--ink-400); }
.v1 .v1-footer-brand .v1-logo { background: rgba(255,122,26,.15); }
.v1 .v1-footer-brand p { color: var(--ink-400); margin-top: 18px; font-size: 14px; line-height: 1.6; }
.v1 .v1-socials { display: flex; gap: 8px; margin-top: 22px; }
.v1 .v1-social { width: 36px; height: 36px; border-radius: 10px; background: rgba(255,255,255,.05); display: grid; place-items: center; color: var(--ink-200); transition: all .15s; }
.v1 .v1-social:hover { background: var(--tenta-500); color: white; }
.v1 .v1-footer-col h5, .v1 .v1-footer-news h5 { font-size: 13px; font-weight: 600; color: var(--paper); margin-bottom: 18px; letter-spacing: 0.02em; }
.v1 .v1-footer-col { display: flex; flex-direction: column; gap: 10px; }
.v1 .v1-footer-col a { color: var(--ink-400); font-size: 14px; cursor: pointer; }
.v1 .v1-footer-col a:hover { color: var(--tenta-400); }
.v1 .v1-footer-news p { color: var(--ink-400); font-size: 13.5px; margin-bottom: 14px; line-height: 1.55; }
.v1 .v1-news-form { display: flex; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.08); border-radius: 10px; padding: 4px; }
.v1 .v1-news-form input { flex: 1; background: transparent; border: 0; outline: 0; padding: 8px 12px; color: var(--paper); font-size: 14px; font-family: inherit; }
.v1 .v1-news-form input::placeholder { color: var(--ink-500); }
.v1 .v1-news-form button { width: 36px; height: 36px; background: var(--tenta-500); border-radius: 7px; color: white; display: grid; place-items: center; }
.v1 .v1-news-form button:hover { background: var(--tenta-400); }
.v1 .v1-footer-bot { display: flex; justify-content: space-between; align-items: center; padding-top: 24px; font-size: 13px; color: var(--ink-500); }
.v1 .v1-footer-legal { display: flex; gap: 10px; align-items: center; }
.v1 .v1-footer-legal a { cursor: pointer; }
.v1 .v1-footer-legal a:hover { color: var(--tenta-400); }
`;
