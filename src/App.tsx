import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Heart,
  TrendingUp,
  Users,
  MapPin,
  Mail,
  Shield,
  Sprout,
  X,
  CheckCircle2,
  Menu,
  GraduationCap,
  Landmark,
  HandHeart,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const credentials = [
  'First female Commissioner for Finance, Kwara State',
  'Harvard Kennedy School',
  'University of Ilorin',
  'Certified Fraud Examiner',
  'IPSAS & IFRS',
];

const reforms = [
  'Designed the roadmap for IPSAS and aligned the state’s accounts with the National Chart of Accounts.',
  'Established public financial management reforms, including quarterly monitoring and evaluation reports.',
  'Packaged the state’s debt law and payroll management system for World Bank acceptance.',
  'Opened the budget to citizens through participatory workshops and public feedback on the revised 2020 budget.',
  'Kept salaries current and released monthly allocations to ministries, departments, and agencies on time.',
  'Chaired the Kwara State Steering Committee for the World Bank SFTAS programme.',
];

const projects = [
  {
    image: '/black-soap.jpg',
    date: 'December 2020 · Odo-Owa, Oke-Ero',
    title: 'Black soap makers’ empowerment',
    text: 'She presented a palm-nut cracking machine and a revolving maintenance fund to women who had been cracking nuts by hand on a worn mortar. She asked them to form a cooperative so the business could sustain itself, and called for cottage industries across Kwara’s 16 local governments.',
    source: 'P.M. News / BusinessDay',
  },
  {
    image: '/raise-life.png',
    date: '27 November 2022 · Ilorin',
    title: 'Raise Life Class mentorship',
    text: 'She was Teacher of the November Raise Life Class, a monthly programme that mentors young people on career, leadership, and entrepreneurship, and builds a network of new public and private sector leaders in Kwara.',
    source: 'The Conscience',
  },
  {
    image: '/declaration.jpg',
    date: 'April 2026 · Omu-Aran',
    title: 'A pledge to the whole constituency',
    text: 'Declaring for the House of Representatives, she promised quality representation for women and every other demographic, stronger work with security agencies, and a constituency community security vanguard to support existing structures.',
    source: 'Nigerian Tribune',
  },
];

const pillars = [
  {
    icon: BookOpen,
    title: 'Education for all',
    text: 'A teacher by training as well as a finance specialist, she wants learning facilities, materials, and scholarships that give children in Kwara South a fair start.',
  },
  {
    icon: Heart,
    title: 'Healthcare access',
    text: 'Primary health centres that are staffed and equipped, with particular attention to maternal care and communities that currently travel too far for basic treatment.',
  },
  {
    icon: Users,
    title: 'Women and youth enterprise',
    text: 'Skill programmes, cooperative support, and small grants modelled on the Odo-Owa intervention, so local trades can grow without waiting on handouts.',
  },
  {
    icon: Sprout,
    title: 'Agriculture value chains',
    text: 'More than farmgate prices: processing, storage, and market access, the gap citizens themselves raised when she took the state budget back to the people.',
  },
  {
    icon: TrendingUp,
    title: 'Jobs and local industry',
    text: 'Her finance background is aimed at investment, procurement that small businesses can enter, and cottage industry in the four local governments.',
  },
  {
    icon: Shield,
    title: 'Safer communities',
    text: 'Closer work with national and state security agencies, plus a constituency-based community security vanguard to complement the structures already on the ground.',
  },
];

const lgas = [
  {
    name: 'Oke-Ero',
    note: 'Her home local government. In 2020 she returned here to equip black soap makers in Odo-Owa.',
  },
  {
    name: 'Irepodun',
    note: 'She declared her House bid in Omu-Aran and asked the four local governments to move together.',
  },
  {
    name: 'Isin',
    note: 'Part of the federal constituency she is asking to represent with the same attention given to every ward.',
  },
  {
    name: 'Ekiti',
    note: 'Included in her pledge of quality representation, enterprise support, and safer communities.',
  },
];

const journey = [
  { year: '2019', title: 'Commissioner for Finance and Planning', text: 'Sworn in with the first cabinet of Governor AbdulRahman AbdulRazaq. She became the first woman to hold the finance portfolio in Kwara.' },
  { year: '2020', title: 'Budgets people could see', text: 'Led citizen workshops on participatory budgeting and explained the revised 2020 budget in public. In December she empowered soap makers in Odo-Owa.' },
  { year: '2021', title: 'Commissioner for Finance', text: 'Sworn in again in September. In a Tribune interview she set out plans for stronger internally generated revenue and prudent spending.' },
  { year: '2022', title: 'Mentoring the next set', text: 'Taught the Raise Life Class, sharing a path from industrial chemistry and the classroom into public finance.' },
  { year: '2023', title: 'APC campaign spokesperson', text: 'Spoke for the All Progressives Congress in Kwara through the general elections.' },
  { year: '2026', title: 'APC candidate for the House', text: 'Declared in April, emerged from the direct primary, and became the party’s candidate for Ekiti/Irepodun/Isin/Oke-Ero.' },
];

const updates = [
  {
    image: '/declaration.jpg',
    date: 'April 2026',
    title: 'Declaration in Omu-Aran',
    text: 'Before stakeholders in Irepodun, she joined the race for the House of Representatives and promised representation that serves women and every other group in the constituency.',
    href: 'https://tribuneonlineng.com/2027-ex-kwara-finance-commissioner-joins-race-for-reps-seat/',
  },
  {
    image: '/portrait-nation.png',
    date: 'May 2026',
    title: 'Direct primary, then a wide welcome',
    text: 'The Coalition for Tinubu Solidarity Front congratulated her emergence from the APC direct primary and urged women, youths, and party faithful across the four local governments to rally behind her.',
    href: 'https://thenationonlineng.net/coalition-greets-rep-candidate-oyeyemi/',
  },
  {
    image: '/businessday.png',
    date: 'July 2026',
    title: 'APC ticket for 2027',
    text: 'With the incumbent stepping aside, she became the All Progressives Congress standard-bearer for Ekiti/Irepodun/Isin/Oke-Ero and was reported to have filed her INEC nomination.',
    href: 'https://9japarrot.com/2026/07/10/exclusive-coast-clear-for-olasumbo-florence-to-fly-apc-ticket-for-ekiti-irepodun-isin-oke-ero-federal-constituency-as-ajuloopin-withdraw-from-race/',
  },
];

const gallery = [
  { src: '/image.png', caption: 'Campaign portrait — Ìwájú láéló', credit: 'Forward Ever' },
  { src: '/portrait-nation.png', caption: 'Hon. Olasumbo Florence Oyeyemi', credit: 'The Nation' },
  { src: '/declaration.jpg', caption: 'Official declaration, Omu-Aran', credit: 'Nigerian Tribune' },
  { src: '/businessday.png', caption: 'Briefing as Commissioner for Finance and Planning', credit: 'BusinessDay' },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <a href="#top" className="nav-logo" onClick={closeMenu}>
            <img src="/apclogo.png" alt="APC" />
            <span>Hon. Olasumbo</span>
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#record" onClick={closeMenu}>Record</a>
            <a href="#projects" onClick={closeMenu}>Empowerment</a>
            <a href="#pillars" onClick={closeMenu}>Agenda</a>
            <a href="#news" onClick={closeMenu}>Updates</a>
            <a
              className="btn-nav"
              onClick={() => {
                closeMenu();
                setIsModalOpen(true);
              }}
            >
              Volunteer
            </a>
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="hero-wrapper">
          <div className="hero-bg-accent" />
          <div className="hero-bg-accent-2" />
          <div className="hero">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="tagline">
                APC Candidate · Ekiti / Irepodun / Isin / Oke-Ero
              </motion.div>
              <motion.h1 variants={fadeUp}>
                A finance mind for <br /><span>Kwara South’s seat</span>
              </motion.h1>
              <motion.p variants={fadeUp}>
                Hon. Olasumbo Florence Oyeyemi is the All Progressives Congress candidate for the House of Representatives. She is asking to take the same discipline she used on Kwara’s public finances into laws, projects, and opportunities for the four local governments.
              </motion.p>
              <motion.div variants={fadeUp} className="btn-group">
                <a href="#about" className="btn btn-primary">
                  Her story <ArrowRight size={20} />
                </a>
                <button onClick={() => setIsModalOpen(true)} className="btn btn-secondary">
                  Volunteer Now
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                src="/portrait-nation.png"
                alt="Hon. Olasumbo Florence Oyeyemi"
                className="hero-image"
              />
              <p className="photo-credit">Portrait published by The Nation</p>
            </motion.div>
          </div>
        </section>

        <section className="campaign-banner" aria-label="Campaign portrait">
          <img
            src="/image.png"
            alt="Hon. Olasumbo Florence Oyeyemi in campaign colours, with the slogan Ìwájú láéló — Forward Ever"
          />
        </section>

        <section className="cred-strip" aria-label="Credentials">
          {credentials.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section id="about" className="section section-bg">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/portrait-independent.jpg"
                alt="Hon. Olasumbo Florence Oyeyemi"
                className="about-image"
              />
              <p className="photo-credit">Portrait published by Independent Newspaper</p>
            </motion.div>

            <motion.div
              className="about-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeUp} className="kicker">About her</motion.p>
              <motion.h3 variants={fadeUp}>First woman to keep Kwara’s books</motion.h3>
              <motion.p variants={fadeUp}>
                From Oke-Ero Local Government, Hon. Oyeyemi served as Commissioner for Finance and Planning from December 2019, and as Commissioner for Finance from September 2021 to June 2023. She was 33 when she held the portfolio, the youngest person and the first woman to do so in the state.
              </motion.p>
              <motion.p variants={fadeUp}>
                She trained as an industrial chemist at the University of Ilorin, where she earned both her bachelor’s and master’s degrees, then added a Postgraduate Diploma in Education from the National Teachers’ Institute, Kaduna. An Executive Certificate in Public Policy from the Harvard Kennedy School sits alongside ACCA certification in IFRS and IPSAS, and her work as a Certified Fraud Examiner.
              </motion.p>
              <motion.p variants={fadeUp}>
                In 2023 she was spokesperson for the APC campaign in Kwara. In 2026 she declared for the Ekiti/Irepodun/Isin/Oke-Ero seat, emerged from the party’s direct primary, and is now the APC candidate for 2027.
              </motion.p>
              <motion.div className="stats-grid" variants={fadeUp}>
                <div className="stat-item">
                  <h4>1st</h4>
                  <p>Female Finance Commissioner in Kwara</p>
                </div>
                <div className="stat-item">
                  <h4>$16.9m</h4>
                  <p>World Bank SFTAS grant Kwara earned for 2019/2020</p>
                </div>
                <div className="stat-item">
                  <h4>4</h4>
                  <p>Local governments in the constituency</p>
                </div>
                <div className="stat-item">
                  <h4>10+</h4>
                  <p>Years across business, education, and public finance</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="quote-band">
          <blockquote>
            “It is a huge privilege we do not take for granted. We will work together as a team and contribute our quota maximally to the development of the state.”
          </blockquote>
          <cite>Hon. Olasumbo Florence Oyeyemi, on being sworn in as Commissioner for Finance, September 2021</cite>
        </section>

        <section id="record" className="section">
          <div className="section-header">
            <p className="kicker">Public finance</p>
            <h2>What she did with the state’s money</h2>
            <p>
              She has credited Kwara’s progress in that period to prudent management, transparency, and policies that could survive uncertain federal allocations and a thin internally generated revenue base.
            </p>
          </div>
          <div className="record-grid">
            <div className="record-photo">
              <img src="/businessday.png" alt="Hon. Oyeyemi addressing reporters as Commissioner for Finance and Planning" />
              <p className="photo-credit">BusinessDay, during her tenure as Commissioner</p>
            </div>
            <ul className="reform-list">
              {reforms.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projects" className="section section-bg">
          <div className="section-header">
            <p className="kicker">On the ground</p>
            <h2>Empowerment she has already done</h2>
            <p>
              Before the campaign, the work was local: a machine for women in her own local government, and time spent teaching young people how public institutions actually run.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <img src={project.image} alt="" />
                <div className="project-body">
                  <span className="news-date">{project.date}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <span className="source-line">Source: {project.source}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="pillars" className="section">
          <div className="section-header">
            <p className="kicker">If elected</p>
            <h2>Agenda for the constituency</h2>
            <p>
              Six priorities drawn from her work as commissioner and from the pledges she made when she declared in Omu-Aran.
            </p>
          </div>
          <div className="pillars-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="pillar-card">
                  <div className="pillar-icon">
                    <Icon size={28} />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="constituency" className="section section-bg">
          <div className="section-header">
            <p className="kicker">The seat</p>
            <h2>Ekiti, Irepodun, Isin, and Oke-Ero</h2>
            <p>
              One federal constituency in Kwara South. Her case to the other three local governments is the one elders made at her declaration: the seat should rotate, and she has already served at the centre of state government.
            </p>
          </div>
          <div className="lga-grid">
            {lgas.map((lga) => (
              <article key={lga.name} className="lga-card">
                <MapPin size={22} />
                <h3>{lga.name}</h3>
                <p>{lga.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="section">
          <div className="section-header">
            <p className="kicker">Path</p>
            <h2>From the ministry to the ballot</h2>
          </div>
          <ol className="timeline">
            {journey.map((item) => (
              <li key={item.year}>
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section section-bg" id="gallery">
          <div className="section-header">
            <p className="kicker">In pictures</p>
            <h2>Faces of the work</h2>
          </div>
          <div className="gallery-grid">
            {gallery.map((shot) => (
              <figure key={shot.src}>
                <img src={shot.src} alt={shot.caption} />
                <figcaption>
                  {shot.caption}
                  <span>{shot.credit}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="news" className="section">
          <div className="section-header">
            <p className="kicker">The race</p>
            <h2>Recent engagements</h2>
            <p>Moments from the declaration through her emergence as the APC candidate.</p>
          </div>
          <div className="updates-grid">
            {updates.map((item) => (
              <article key={item.title} className="news-card">
                <img src={item.image} alt="" className="news-image" />
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-text">{item.text}</p>
                  <a href={item.href} target="_blank" rel="noreferrer" className="text-link">
                    Read the report <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="cta-content">
            <Landmark size={36} />
            <h2>Be part of the progress</h2>
            <p>
              The Ekiti/Irepodun/Isin/Oke-Ero seat is open. Volunteers, women’s groups, and ward organisers are how this campaign reaches every polling unit.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-secondary"
              style={{ backgroundColor: 'white', color: 'var(--apc-blue)', border: 'none' }}
            >
              Volunteer Now
            </button>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close">
                <X size={24} />
              </button>
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle2 size={64} color="var(--apc-green)" style={{ margin: '0 auto 1rem' }} />
                  <h2 className="modal-title">Thank you</h2>
                  <p className="modal-desc">Your volunteer note has been received. The campaign team will be in touch.</p>
                </div>
              ) : (
                <>
                  <h2 className="modal-title">Join the campaign</h2>
                  <p className="modal-desc">Tell us how you want to help across Ekiti, Irepodun, Isin, and Oke-Ero.</p>
                  <form onSubmit={handleVolunteerSubmit}>
                    <div className="form-group">
                      <label htmlFor="vol-name">Full name</label>
                      <input id="vol-name" type="text" className="form-input" required placeholder="Enter your full name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vol-email">Email address</label>
                      <input id="vol-email" type="email" className="form-input" required placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vol-phone">Phone number</label>
                      <input id="vol-phone" type="tel" className="form-input" required placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vol-lga">Local government</label>
                      <select id="vol-lga" className="form-input" required defaultValue="">
                        <option value="" disabled>Select your LGA</option>
                        <option>Ekiti</option>
                        <option>Irepodun</option>
                        <option>Isin</option>
                        <option>Oke-Ero</option>
                        <option>Elsewhere in Kwara</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="vol-help">How would you like to help?</label>
                      <select id="vol-help" className="form-input" required defaultValue="">
                        <option value="" disabled>Select an option</option>
                        <option>Door-to-door campaigning</option>
                        <option>Social media advocacy</option>
                        <option>Event organisation</option>
                        <option>Women and youth mobilisation</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Submit application
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer>
        <div className="footer-container">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/apclogo.png" alt="APC" style={{ height: '50px' }} />
              <span>Hon. Olasumbo</span>
            </div>
            <p style={{ opacity: 0.8, marginTop: '1rem', maxWidth: '320px' }}>
              APC candidate for the House of Representatives, Ekiti/Irepodun/Isin/Oke-Ero Federal Constituency, Kwara State.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#record">Record in office</a></li>
              <li><a href="#projects">Empowerment</a></li>
              <li><a href="#pillars">Agenda</a></li>
              <li><a href="#gallery">Pictures</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Campaign</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <MapPin size={18} /> Kwara South, Nigeria
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} /> contact@olasumboflorence.com
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <GraduationCap size={18} /> Harvard Kennedy School alumna
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <HandHeart size={18} /> Oke-Ero · Irepodun · Isin · Ekiti
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hon. Olasumbo Florence Oyeyemi Campaign. All rights reserved.</p>
          <p>Photographs are reproduced from published news reports and credited beside each image.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
