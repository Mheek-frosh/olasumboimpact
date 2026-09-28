import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Heart, TrendingUp, Users, MapPin, Mail, Phone, X, CheckCircle2 } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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
          <div className="nav-logo">
            <img src="/apclogo.png" alt="APC Logo" style={{ objectFit: 'contain' }} />
            <span>Hon. Olasumbo</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#pillars">Pillars of Impact</a>
            <a href="#news">Updates</a>
            <a onClick={() => setIsModalOpen(true)} className="btn-nav">Volunteer</a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero-wrapper">
          <div className="hero-bg-accent"></div>
          <div className="hero-bg-accent-2"></div>
          
          <div className="hero">
            <motion.div 
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="tagline">
                APC Candidate • Ekiti/Irepodun/Isin/Oke-Ero
              </motion.div>
              <motion.h1 variants={fadeUp}>
                Empowering Communities, <br/><span>Transforming Lives</span>
              </motion.h1>
              <motion.p variants={fadeUp}>
                Hon. Olasumbo Florence Oyeyemi is dedicated to driving sustainable development, inclusive growth, and strategic public resource management for a brighter future.
              </motion.p>
              <motion.div variants={fadeUp} className="btn-group">
                <a href="#about" className="btn btn-primary">
                  Learn More <ArrowRight size={20} />
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
              transition={{ duration: 1, delay: 0.4 }}
            >
              <img src="/ww.png" alt="Hon. Olasumbo Florence Oyeyemi" className="hero-image" />
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section section-bg">
          <div className="about-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img src="/image.png" alt="Hon Olasumbo in action" className="about-image" />
            </motion.div>
            
            <motion.div 
              className="about-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeUp}>A Leader with Vision and Integrity</motion.h3>
              <motion.p variants={fadeUp}>
                Hon. Olasumbo Florence Oyeyemi stands as a beacon of progressive leadership in Kwara State. Formerly serving as the Commissioner for Finance and Planning, she has a proven track record of strategic resource management and implementing policies that drive inclusive economic growth.
              </motion.p>
              <motion.p variants={fadeUp}>
                Her educational background includes an Executive Certificate in Public Policy from the prestigious Harvard Kennedy School, equipping her with global perspectives on local challenges. She is deeply committed to the grassroots, consistently engaging with communities to understand and solve their most pressing needs.
              </motion.p>
              
              <motion.div className="stats-grid" variants={fadeUp}>
                <div className="stat-item">
                  <h4>10+</h4>
                  <p>Years in Public Service</p>
                </div>
                <div className="stat-item">
                  <h4>4</h4>
                  <p>Local Governments Impacted</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PILLARS SECTION */}
        <section id="pillars" className="section">
          <div className="section-header">
            <h2>Pillars of Impact</h2>
            <p>Our strategic approach focuses on key areas that directly improve the quality of life for all constituents in the Ekiti/Irepodun/Isin/Oke-Ero Federal Constituency.</p>
          </div>
          
          <motion.div 
            className="pillars-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div className="pillar-card" variants={fadeUp}>
              <div className="pillar-icon">
                <BookOpen size={28} />
              </div>
              <h3>Education for All</h3>
              <p>Promoting access to quality education, upgrading learning facilities, and providing scholarships to empower the next generation of leaders.</p>
            </motion.div>

            <motion.div className="pillar-card" variants={fadeUp}>
              <div className="pillar-icon">
                <Heart size={28} />
              </div>
              <h3>Healthcare Access</h3>
              <p>Advocating for better healthcare infrastructure, maternal health support, and ensuring primary health centers are adequately equipped.</p>
            </motion.div>

            <motion.div className="pillar-card" variants={fadeUp}>
              <div className="pillar-icon">
                <Users size={28} />
              </div>
              <h3>Youth & Women Empowerment</h3>
              <p>Creating skill acquisition programs, supporting SMEs with grants, and fostering environments where youth and women can thrive economically.</p>
            </motion.div>

            <motion.div className="pillar-card" variants={fadeUp}>
              <div className="pillar-icon">
                <TrendingUp size={28} />
              </div>
              <h3>Economic Development</h3>
              <p>Leveraging her expertise in finance to attract investment, improve agricultural value chains, and create sustainable jobs in our communities.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* NEWS & UPDATES SECTION */}
        <section id="news" className="section section-bg">
          <div className="section-header">
            <h2>Recent Engagements</h2>
            <p>Stay updated with Hon. Olasumbo's latest community initiatives, campaign trails, and progressive developments.</p>
          </div>
          
          <div className="news-grid">
            <motion.div 
              className="news-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/hero_bg.jpg" alt="Community Outreach" className="news-image" />
              <div className="news-content">
                <span className="news-date">September 2026</span>
                <h3 className="news-title">Back to School Initiative Kickoff</h3>
                <p className="news-text">Hon. Olasumbo Florence welcomed learners back to school, distributing educational materials and assuring parents of her commitment to educational reforms in Kwara South.</p>
                <a href="#news" style={{ color: 'var(--apc-blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <motion.div 
                className="news-card" style={{ display: 'flex', alignItems: 'center' }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img src="/olasumbo.jpg" alt="Harvard Certification" style={{ width: '200px', height: '100%', objectFit: 'cover' }} />
                <div className="news-content">
                  <span className="news-date">August 2026</span>
                  <h3 className="news-title" style={{ fontSize: '1.2rem' }}>Harvard Public Policy Certification</h3>
                  <p className="news-text" style={{ fontSize: '0.9rem' }}>Completing an Executive Certificate in Public Policy from Harvard Kennedy School to implement inclusive growth strategies locally.</p>
                </div>
              </motion.div>

              <motion.div 
                className="news-card" style={{ display: 'flex', alignItems: 'center' }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <img src="/image.png" alt="APC Primary" style={{ width: '200px', height: '100%', objectFit: 'cover' }} />
                <div className="news-content">
                  <span className="news-date">May 2026</span>
                  <h3 className="news-title" style={{ fontSize: '1.2rem' }}>Emerging as APC Candidate</h3>
                  <p className="news-text" style={{ fontSize: '0.9rem' }}>Hon. Olasumbo successfully emerged as the APC flagbearer for the Ekiti/Irepodun/Isin/Oke-Ero Federal Constituency.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="cta-section" id="contact">
          <div className="cta-content">
            <h2>Be Part of the Progress</h2>
            <p>Your support is crucial in bringing progressive representation to the Ekiti/Irepodun/Isin/Oke-Ero Federal Constituency. Join the movement today.</p>
            <button onClick={() => setIsModalOpen(true)} className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--apc-blue)', border: 'none' }}>
              Volunteer Now
            </button>
          </div>
        </section>
      </main>

      {/* VOLUNTEER MODAL */}
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
              <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
              
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle2 size={64} color="var(--apc-green)" style={{ margin: '0 auto 1rem' }} />
                  <h2 className="modal-title">Thank You!</h2>
                  <p className="modal-desc">Your volunteer application has been received. Our team will contact you shortly.</p>
                </div>
              ) : (
                <>
                  <h2 className="modal-title">Join the Campaign</h2>
                  <p className="modal-desc">Fill out the form below to become a volunteer and help us drive progress in Kwara South.</p>
                  
                  <form onSubmit={handleVolunteerSubmit}>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" className="form-input" required placeholder="Enter your full name" />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" className="form-input" required placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" className="form-input" required placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                      <label>How would you like to help?</label>
                      <select className="form-input" required>
                        <option value="">Select an option</option>
                        <option value="door-to-door">Door-to-Door Campaigning</option>
                        <option value="social-media">Social Media Advocacy</option>
                        <option value="events">Event Organization</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Submit Application
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
            <p style={{ opacity: 0.8, marginTop: '1rem', maxWidth: '300px' }}>
              Representing Ekiti/Irepodun/Isin/Oke-Ero Federal Constituency under the All Progressives Congress (APC).
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Hon. Olasumbo</a></li>
              <li><a href="#pillars">Our Vision</a></li>
              <li><a href="#news">Latest Updates</a></li>
              <li><a onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>Get Involved</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <MapPin size={18} /> Kwara State, Nigeria
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} /> contact@olasumboflorence.com
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} /> +234 (0) 800 000 0000
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hon. Olasumbo Florence Oyeyemi Campaign. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
