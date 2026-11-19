import React, { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Boxes, Check, ChevronDown,
  ChevronRight, CircleDot, CloudCog, Code2, Database, Fingerprint,
  Headphones, Layers3, LockKeyhole, Mail, MapPinned, Menu, MonitorCheck,
  Network, PackageCheck, Radar, ScanSearch, Shield, ShieldAlert,
  ShieldCheck, ShoppingCart, Sparkles, X,
} from 'lucide-react';

const securityServices = [
  { icon: ScanSearch, title: 'Penetration Testing', text: 'Identifikasi celah keamanan pada aplikasi, jaringan, dan infrastruktur melalui pengujian yang terukur.', tag: 'Offensive Security' },
  { icon: Fingerprint, title: 'Digital Forensics', text: 'Investigasi bukti digital untuk memahami kejadian, sumber ancaman, dan dampaknya.', tag: 'Investigation' },
  { icon: ShieldAlert, title: 'Incident Response', text: 'Pendampingan dalam identifikasi, containment, eradikasi, dan pemulihan insiden siber.', tag: 'Rapid Response' },
  { icon: BadgeCheck, title: 'ISO & Security Advisory', text: 'Pendampingan tata kelola, risk assessment, dan kesiapan implementasi standar keamanan informasi.', tag: 'Governance & Risk' },
  { icon: MonitorCheck, title: 'SOC & Managed Security', text: 'Pemantauan keamanan, analisis alert, dan dukungan respons ancaman secara berkelanjutan.', tag: 'Defensive Security' },
];
const businessServices = [
  { icon: Layers3, title: 'ERP Solution', text: 'Integrasikan data keuangan, pengadaan, penjualan, dan aktivitas operasional dalam platform ERP yang sesuai proses bisnis.', category: 'Enterprise Resource Planning' },
  { icon: Boxes, title: 'Warehouse Management', text: 'Kelola stok, pergerakan barang, dan operasional gudang dalam satu sistem yang rapi.', category: 'Inventory & Warehouse' },
  { icon: ShoppingCart, title: 'Point of Sale (POS)', text: 'Sederhanakan transaksi, pemantauan penjualan, dan pelaporan untuk operasional bisnis.', category: 'Retail & Commerce' },
  { icon: MapPinned, title: 'GPS Tracking Solution', text: 'Pantau aset dan armada dengan visibilitas lokasi dan data perjalanan yang lebih baik.', category: 'Fleet & Operations' },
];
const certificates = [
  { acronym: 'CEH', label: 'Certified Ethical Hacker' },
  { acronym: 'CHFI', label: 'Computer Hacking Forensic Investigator' },
  { acronym: 'CRTP', label: 'Certified Red Team Professional' },
  { acronym: 'eCTHP', label: 'Certified Threat Hunting Professional' },
];
const faqs = [
  { q: 'Apakah layanan dapat disesuaikan dengan kebutuhan perusahaan?', a: 'Ya. Ruang lingkup layanan disusun berdasarkan kebutuhan, kondisi sistem, tujuan, dan prioritas perusahaan Anda.' },
  { q: 'Apakah Fandeean menyediakan layanan IT Security dan solusi bisnis sekaligus?', a: 'Ya. Kami menyediakan layanan keamanan siber sekaligus ERP, warehouse management, POS, dan GPS tracking.' },
  { q: 'Bagaimana proses memulai konsultasi?', a: 'Isi formulir konsultasi dan jelaskan kebutuhan Anda. Tim kami dapat melanjutkan dengan diskusi awal untuk menentukan ruang lingkup pekerjaan.' },
];

function Logo({ inverse = false }) {
  return <a className={`logo ${inverse ? 'logo-inverse' : ''}`} href="#home" aria-label="Fandeean Solusi Digital - beranda">
    <span className="logo-symbol"><span>F</span><i /></span>
    <span className="logo-copy"><strong>fandeean<span className="logo-period">.</span></strong><small>SOLUSI DIGITAL</small></span>
  </a>;
}

function SectionEyebrow({ children, light = false }) {
  return <div className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span className="eyebrow-line" />{children}</div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [ ['Layanan', '#services'], ['ERP & GPS', '#solutions'], ['Tentang Kami', '#about'], ['Sertifikasi', '#certifications'] ];
  const closeMenu = () => setOpen(false);
  return <header className="site-header"><div className="container header-inner">
    <Logo />
    <nav className={`nav ${open ? 'nav-open' : ''}`} aria-label="Navigasi utama">
      {links.map(([text, href]) => <a onClick={closeMenu} href={href} key={href}>{text}</a>)}
      <a onClick={closeMenu} className="nav-mobile-cta" href="#contact">Hubungi Kami <ArrowUpRight size={15} /></a>
    </nav>
    <a className="btn btn-header" href="#contact">Konsultasi Gratis <ArrowUpRight size={16} /></a>
    <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open}>{open ? <X size={25}/> : <Menu size={25}/>}</button>
  </div></header>;
}

function HeroVisual() {
  return <div className="hero-visual" aria-label="Ilustrasi dashboard pemantauan keamanan siber">
    <div className="visual-grid" />
    <div className="visual-orbit visual-orbit-one" /><div className="visual-orbit visual-orbit-two" />
    <div className="dashboard-card">
      <div className="dashboard-top"><span className="dashboard-label"><span className="pulse-dot" /> SECURITY OVERVIEW</span><span className="dashboard-mini">LIVE SYSTEM</span></div>
      <div className="dashboard-title"><span>Security posture</span><ShieldCheck size={18}/></div>
      <div className="dashboard-score"><span>Protected infrastructure</span><div className="status-badge"><Check size={12}/> MONITORING</div></div>
      <div className="chart-box">
        <div className="chart-grid-lines" />
        <svg viewBox="0 0 390 117" preserveAspectRatio="none" role="img" aria-label="Grafik ilustratif aktivitas monitoring">
          <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#36b7ff" stopOpacity=".29"/><stop offset="1" stopColor="#36b7ff" stopOpacity="0"/></linearGradient></defs>
          <path d="M0 89 L33 75 L62 82 L90 51 L126 64 L158 38 L192 57 L224 34 L249 45 L279 22 L305 43 L344 23 L390 11 L390 117 L0 117 Z" fill="url(#area)" />
          <path d="M0 89 L33 75 L62 82 L90 51 L126 64 L158 38 L192 57 L224 34 L249 45 L279 22 L305 43 L344 23 L390 11" fill="none" stroke="#49caff" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="390" cy="11" r="5" fill="#5de0ff" stroke="#103d6d" strokeWidth="5" />
        </svg>
      </div>
      <div className="dashboard-bottom"><span><span className="tiny-blue-dot"/> Network visibility</span><span>Endpoint overview <ChevronRight size={12}/></span></div>
    </div>
    <div className="floating-security"><span><ShieldCheck size={22}/></span><div><strong>Security first</strong><small>Protection at every layer</small></div><Check className="floating-check" size={16}/></div>
    <div className="floating-data"><div className="data-icon"><Network size={20}/></div><div><span>CONNECTED SYSTEMS</span><strong>Secure & scalable</strong></div></div>
    <div className="hero-star hero-star-a">✦</div><div className="hero-star hero-star-b">✦</div>
  </div>;
}

function Hero() {
  return <section id="home" className="hero"><div className="hero-glow glow-left"/><div className="hero-glow glow-right"/>
    <div className="container hero-layout"><div className="hero-content">
      <div className="hero-kicker"><span className="kicker-icon"><Sparkles size={13}/></span> F A N D E E A N  ·  S O L U S I  D I G I T A L <span className="kicker-rule"/></div>
      <h1>Secure Your<br/><span>Digital World.</span><br/>Accelerate Your<br/>Business.</h1>
      <p>Solusi terintegrasi untuk melindungi aset digital dan mengakselerasi bisnis Anda. Dari <strong>cybersecurity</strong> hingga <strong>ERP, POS, dan GPS tracking.</strong></p>
      <div className="hero-buttons"><a href="#contact" className="btn btn-primary">Diskusikan Kebutuhan Anda <ArrowUpRight size={18}/></a><a href="#services" className="btn btn-ghost">Jelajahi Layanan <ArrowRight size={17}/></a></div>
      <div className="hero-bottom"><span className="hero-bottom-shield"><ShieldCheck size={17}/></span><span>Built on expertise. Driven by trust.</span><i/><span>Cybersecurity • ERP • GPS Tracking</span></div>
    </div><HeroVisual/></div>
    <div className="hero-bottom-wave" />
  </section>;
}

function TrustStrip() {
  return <div className="trust-strip"><div className="container trust-inner"><span className="trust-intro">EXPERTISE THAT POWERS OUR WORK</span><div className="trust-items"><span><ShieldCheck size={19}/> Cybersecurity</span><span><CloudCog size={19}/> Managed Services</span><span><Layers3 size={19}/> Enterprise Solutions</span><span><Code2 size={19}/> Technology Advisory</span></div></div></div>;
}

function Services() {
  return <section id="services" className="section services-section"><div className="container">
    <div className="section-head section-head-split"><div><SectionEyebrow>WHAT WE DO</SectionEyebrow><h2>Cybersecurity yang lebih<br/><span>kuat, bisnis yang lebih aman.</span></h2></div><p>Dari identifikasi risiko hingga pengawasan berkelanjutan, kami membantu organisasi membangun ketahanan siber yang terukur.</p></div>
    <div className="services-grid">{securityServices.map((s, i) => { const Icon = s.icon; return <article className={`service-card service-card-${i+1}`} key={s.title}><div className="service-icon"><Icon size={25} strokeWidth={1.8}/></div><div className="service-tag">{s.tag}</div><h3>{s.title}</h3><p>{s.text}</p><a href="#contact" aria-label={`Konsultasi ${s.title}`}>Konsultasikan layanan <ArrowUpRight size={16}/></a></article>; })}</div>
    <div className="services-note"><Shield size={19}/><span>Butuh pendekatan keamanan yang lebih menyeluruh?</span><a href="#contact">Bicara dengan tim kami <ArrowRight size={16}/></a></div>
  </div></section>;
}

function Solutions() {
  return <section id="solutions" className="section solutions-section"><div className="container"><div className="section-head centered"><SectionEyebrow>BEYOND SECURITY</SectionEyebrow><h2>Integrated ERP & GPS.<br/><span>Smarter operations.</span></h2><p>Kami juga menghadirkan solusi teknologi untuk membuat operasional lebih efisien, terintegrasi, dan siap berkembang.</p></div>
    <div className="solution-grid">{businessServices.map((s, i) => {const Icon=s.icon; return <article className="solution-card" key={s.title}><div className={`solution-graphic solution-graphic-${i+1}`}>
      {s.title==='ERP Solution' ? <div className="erp-graphic"><div className="erp-core"><Database size={32}/><span>ERP CORE</span></div><span className="erp-node erp-node-a"><ShoppingCart size={17}/> Sales</span><span className="erp-node erp-node-b"><Boxes size={17}/> Inventory</span><span className="erp-node erp-node-c"><PackageCheck size={17}/> Finance</span></div> : s.title==='Warehouse Management' ? <div className="warehouse-graphic"><div className="warehouse-head"><Boxes size={17}/><span>Inventory Overview</span><CircleDot size={12}/></div><div className="warehouse-bars"><i/><i/><i/><i/><i/></div><div className="warehouse-rows"><span/><span/><span/></div></div> : s.title==='Point of Sale (POS)' ? <div className="pos-graphic"><div className="pos-left"><span>SALES OVERVIEW</span><strong>Business insight</strong><div className="pos-wave"><svg viewBox="0 0 200 55"><path d="M0 40L20 29L40 35L60 15L80 22L100 10L125 24L145 15L165 19L200 4" fill="none" stroke="#60bcff" strokeWidth="3"/></svg></div></div><ShoppingCart size={36}/></div> : <div className="gps-graphic"><div className="gps-road road-one"/><div className="gps-road road-two"/><div className="gps-location"><MapPinned size={27}/></div><span className="gps-dot gps-dot-a"/><span className="gps-dot gps-dot-b"/></div>}
      </div><div className="solution-card-body"><span className="solution-category">0{i+1} / {s.category}</span><div className="solution-title"><h3>{s.title}</h3><span><Icon size={21}/></span></div><p>{s.text}</p><a href="#contact">Explore solution <ArrowUpRight size={17}/></a></div></article>;})}</div>
  </div></section>;
}

function About() {
  return <section id="about" className="section about-section"><div className="container about-grid"><div className="about-visual"><div className="about-visual-pattern"/><div className="about-shield"><ShieldCheck size={95} strokeWidth={1.15}/><span className="about-shield-glow"/></div><div className="about-visual-label"><span className="label-circle"><Check size={16}/></span><div><small>OUR PHILOSOPHY</small><strong>Protect. Connect. Transform.</strong></div></div><div className="about-visual-corner">F / SD</div></div>
    <div className="about-content"><SectionEyebrow>WHO WE ARE</SectionEyebrow><h2>Your business deserves<br/><span>a stronger foundation.</span></h2><p><strong>Fandeean Solusi Digital</strong> hadir untuk membantu organisasi menghadapi tantangan keamanan digital sekaligus memaksimalkan potensi teknologi dalam operasional bisnis.</p><p>Kami memadukan pendekatan berbasis risiko, kompetensi teknis, dan pemahaman kebutuhan bisnis agar setiap solusi memberikan nilai nyata.</p><div className="about-benefits"><div><span><LockKeyhole size={18}/></span><div><strong>Security-driven approach</strong><small>Keamanan menjadi bagian dari setiap langkah.</small></div></div><div><span><Database size={18}/></span><div><strong>Business-focused solutions</strong><small>Teknologi yang selaras dengan kebutuhan bisnis.</small></div></div><div><span><Headphones size={18}/></span><div><strong>Collaborative partnership</strong><small>Kolaborasi untuk hasil yang berkelanjutan.</small></div></div></div><a href="#contact" className="text-link">Mari berkolaborasi <ArrowUpRight size={18}/></a></div>
  </div></section>;
}

function Certifications() {
  return <section id="certifications" className="section cert-section"><div className="cert-glow"/><div className="container"><div className="section-head centered"><SectionEyebrow light>PROFESSIONAL CREDENTIALS</SectionEyebrow><h2>Expertise backed by<br/><span>recognized certifications.</span></h2><p>Tim kami memiliki kompetensi profesional yang didukung oleh sertifikasi di bidang ethical hacking, digital forensics, red teaming, dan threat hunting.</p></div><div className="cert-grid">{certificates.map((c,i)=><div className="cert-card" key={c.acronym}><div className="cert-card-top"><span className="cert-icon"><BadgeCheck size={22}/></span><span className="cert-index">0{i+1}</span></div><strong>{c.acronym}</strong><p>{c.label}</p><div className="cert-card-bar"/></div>)}</div><p className="cert-note">Sertifikasi yang dimiliki oleh anggota tim; bukan klaim sertifikasi perusahaan.</p></div></section>;
}

function Process() {
  const steps = [ {n:'01',t:'Discover',d:'Memahami tujuan, tantangan, dan kebutuhan Anda.'},{n:'02',t:'Assess & Design',d:'Menyusun pendekatan dan solusi yang paling relevan.'},{n:'03',t:'Deliver',d:'Implementasi layanan dengan komunikasi yang jelas.'},{n:'04',t:'Improve',d:'Evaluasi dan rekomendasi untuk perbaikan berkelanjutan.'} ];
  return <section className="section process-section"><div className="container"><div className="section-head centered"><SectionEyebrow>HOW WE WORK</SectionEyebrow><h2>Simple process. <span>Meaningful impact.</span></h2><p>Proses kolaborasi yang transparan dan berorientasi pada kebutuhan organisasi.</p></div><div className="steps-grid">{steps.map((s,i)=><div className="step" key={s.n}><div className="step-top"><span>{s.n}</span>{i<3&&<div className="step-line"><ArrowRight size={16}/></div>}</div><h3>{s.t}</h3><p>{s.d}</p></div>)}</div></div></section>;
}

function FAQ() {
  const [active, setActive] = useState(0);
  return <section className="faq-section section"><div className="container faq-layout"><div><SectionEyebrow>FREQUENTLY ASKED</SectionEyebrow><h2>Punya pertanyaan?<br/><span>Kami siap membantu.</span></h2><p>Beberapa hal yang sering ditanyakan sebelum memulai kerja sama.</p><a className="text-link" href="#contact">Konsultasikan kebutuhan Anda <ArrowUpRight size={18}/></a></div><div className="faq-list">{faqs.map((f,i)=><div className={`faq-item ${active===i?'faq-item-active':''}`} key={f.q}><button type="button" onClick={()=>setActive(active===i?-1:i)} aria-expanded={active===i}><span>{f.q}</span><ChevronDown size={19}/></button>{active===i&&<p>{f.a}</p>}</div>)}</div></div></section>;
}

function Contact() {
  return <section id="contact" className="contact-section"><div className="container contact-grid"><div className="contact-copy"><SectionEyebrow light>LET'S CONNECT</SectionEyebrow><h2>Let's build something<br/><span>secure & exceptional.</span></h2><p>Ceritakan tantangan atau ide Anda. Kami siap berdiskusi mengenai solusi keamanan siber maupun kebutuhan digitalisasi bisnis.</p><div className="contact-highlights"><div><ShieldCheck size={20}/><span>Solusi sesuai kebutuhan</span></div><div><Headphones size={20}/><span>Diskusi langsung dengan tim</span></div><div><Sparkles size={20}/><span>Pendekatan profesional</span></div></div><div className="contact-small"><Mail size={17}/><span>Isi formulir berikut untuk menghubungi kami.</span></div></div>
    <div className="contact-card"><div className="contact-card-header"><div><span>START A CONVERSATION</span><h3>Tell us about your project.</h3></div><span className="contact-card-icon"><ArrowUpRight size={21}/></span></div><form name="consultation" method="POST" action="/success.html" data-netlify="true" netlify-honeypot="bot-field"><input type="hidden" name="form-name" value="consultation"/><p className="hidden-field"><label>Do not fill this field: <input name="bot-field"/></label></p><div className="form-row"><label>Nama Lengkap <span>*</span><input name="name" autoComplete="name" placeholder="Nama Anda" required/></label><label>Email <span>*</span><input type="email" name="email" autoComplete="email" placeholder="nama@perusahaan.com" required/></label></div><label>Perusahaan / Organisasi<input name="company" autoComplete="organization" placeholder="Nama perusahaan (opsional)"/></label><label>Layanan yang Dibutuhkan <span>*</span><select name="service" defaultValue="" required><option value="" disabled>Pilih kategori layanan</option><option>Penetration Testing</option><option>Digital Forensics</option><option>Incident Response</option><option>ISO & Security Advisory</option><option>SOC & Managed Security</option><option>ERP Solution</option><option>Warehouse Management</option><option>Point of Sale (POS)</option><option>GPS Tracking Solution</option><option>Lainnya / Konsultasi Umum</option></select></label><label>Ceritakan Kebutuhan Anda <span>*</span><textarea name="message" rows="4" placeholder="Beri kami sedikit gambaran tentang kebutuhan atau proyek Anda..." required/></label><button className="btn btn-submit" type="submit">Kirim Pesan Konsultasi <ArrowUpRight size={18}/></button><p className="form-disclaimer"><LockKeyhole size={13}/> Informasi Anda digunakan untuk menindaklanjuti permintaan konsultasi.</p></form></div>
  </div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Logo inverse/><p>Building secure digital environments and empowering businesses with purposeful technology solutions.</p></div><div className="footer-column"><h4>Navigation</h4><a href="#home">Home</a><a href="#services">Cybersecurity</a><a href="#solutions">Business Solutions</a><a href="#about">About Us</a></div><div className="footer-column"><h4>Our Expertise</h4><a href="#services">Penetration Testing</a><a href="#services">Incident Response</a><a href="#services">Managed Security & SOC</a><a href="#solutions">ERP Solutions</a></div><div className="footer-column"><h4>Get in Touch</h4><p>Let’s discuss how technology can work better for your business.</p><a href="#contact" className="footer-contact-link">Start a Conversation <ArrowUpRight size={16}/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Fandeean Solusi Digital. All rights reserved.</span><span>Protect. Connect. Transform.</span></div></div></footer>;
}

export default function App() {
  return <><Navbar/><main><Hero/><TrustStrip/><Services/><Solutions/><About/><Certifications/><Process/><FAQ/><Contact/></main><Footer/></>;
}
