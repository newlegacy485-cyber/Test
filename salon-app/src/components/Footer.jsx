import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ display: 'inline-block', color: 'var(--gold)' }}
            >✂</motion.span>
            {' '}Suddenly<em>Samantha</em>
          </a>
          <p>Easton's go-to hair salon for cuts,<br />color, perms & more.</p>
          <div className="footer-social">
            <a href="https://instagram.com/suddenlysamantha" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.vagaro.com/suddenlysamantha" target="_blank" rel="noopener noreferrer" aria-label="Vagaro">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2zm0-8h2v6h-2z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Salon</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Meet the Team</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#reviews">Reviews</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Haircuts & Styling</a></li>
              <li><a href="#services">Color & Vivids</a></li>
              <li><a href="#services">Treatments & Perms</a></li>
              <li><a href="#services">Waxing & Makeup</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Visit</h4>
            <ul>
              <li><span>140 Northampton St</span></li>
              <li><span>Grand Eastonian Hotel, Easton PA</span></li>
              <li><a href="tel:+16105598590">(610) 559-8590</a></li>
              <li><a href="https://www.vagaro.com/suddenlysamantha" target="_blank" rel="noopener noreferrer">Book on Vagaro</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Suddenly Samantha · Easton, PA</span>
          <span>Walk-ins welcome · (610) 559-8590</span>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--charcoal-2);
          color: var(--cream);
          padding-top: 72px;
        }
        .footer-inner {
          display: grid; grid-template-columns: 1fr 1.6fr;
          gap: 80px; margin-bottom: 60px;
        }
        .footer-logo {
          font-family: var(--font-display);
          font-size: 1.5rem; font-weight: 600;
          display: inline-flex; align-items: center; gap: 8px;
          color: var(--cream); margin-bottom: 14px;
        }
        .footer-logo em { font-style: italic; font-weight: 300; color: var(--rose-2); }
        .footer-brand p {
          font-size: 0.88rem; color: var(--warm-gray-2);
          line-height: 1.7; margin-bottom: 20px;
        }
        .footer-social {
          display: flex; gap: 12px;
        }
        .footer-social a {
          width: 38px; height: 38px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          color: var(--warm-gray-2); transition: all 0.25s;
        }
        .footer-social a:hover {
          border-color: var(--rose-2);
          color: var(--rose-2);
          background: rgba(181,131,141,0.1);
        }
        .footer-links {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px;
        }
        .footer-col h4 {
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--warm-gray-2); margin-bottom: 18px;
        }
        .footer-col ul { display: flex; flex-direction: column; gap: 10px; }
        .footer-col a, .footer-col span {
          font-size: 0.87rem; color: rgba(250,247,242,0.55);
          transition: color 0.2s;
        }
        .footer-col a:hover { color: var(--cream); }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 20px 0;
        }
        .footer-bottom-inner {
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.8rem; color: rgba(250,247,242,0.35);
        }
        @media (max-width: 900px) {
          .footer-inner { grid-template-columns: 1fr; gap: 40px; }
          .footer-links { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .footer-links { grid-template-columns: 1fr 1fr; }
          .footer-bottom-inner { flex-direction: column; gap: 6px; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
