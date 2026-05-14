import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Services', 'Gallery', 'Team', 'Reviews']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`nav${scrolled ? ' nav--scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner container">
        {/* Hamburger */}
        <button className="nav__hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} />
          <motion.span animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} />
          <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} />
        </button>

        {/* Logo */}
        <a href="#home" className="nav__logo">
          <motion.span
            className="logo-orn"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >✂</motion.span>
          <span>Suddenly<em>Samantha</em></span>
        </a>

        {/* Desktop links */}
        <ul className="nav__links">
          {links.map((l, i) => (
            <motion.li
              key={l}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
            >
              <a href={`#${l.toLowerCase()}`} className="nav__link">{l}</a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#booking"
          className="btn btn-primary nav__cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Book Now
        </motion.a>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <ul>
              {links.map((l, i) => (
                <motion.li
                  key={l}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
                </motion.li>
              ))}
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.06 }}
              >
                <a href="#booking" className="mobile-cta" onClick={() => setOpen(false)}>Book Appointment</a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 100; height: 80px;
          transition: background 0.4s, box-shadow 0.4s;
        }
        .nav--scrolled {
          background: rgba(250,247,242,0.92);
          backdrop-filter: blur(16px);
          box-shadow: 0 1px 0 rgba(26,22,18,0.08);
        }
        .nav__inner {
          height: 80px; display: flex; align-items: center; gap: 40px;
        }
        .nav__logo {
          font-family: var(--font-display);
          font-size: 1.5rem; font-weight: 600;
          letter-spacing: -0.01em;
          display: flex; align-items: center; gap: 10px;
          margin-right: auto; color: var(--charcoal);
        }
        .nav__logo em { font-style: italic; font-weight: 300; color: var(--rose-dark); }
        .logo-orn { color: var(--gold); font-size: 1.2rem; display: inline-block; }
        .nav__links { display: flex; gap: 36px; }
        .nav__link {
          font-size: 0.87rem; font-weight: 500; letter-spacing: 0.05em;
          color: var(--text-2); position: relative; transition: color 0.3s;
        }
        .nav__link::after {
          content: ''; position: absolute; bottom: -3px; left: 0;
          width: 0; height: 1px; background: var(--rose-dark);
          transition: width 0.3s ease;
        }
        .nav__link:hover { color: var(--charcoal); }
        .nav__link:hover::after { width: 100%; }
        .nav__cta { margin-left: 8px; }
        .nav__hamburger {
          display: none; flex-direction: column; gap: 5px; width: 28px; padding: 4px 0;
        }
        .nav__hamburger span {
          display: block; height: 1.5px; background: var(--charcoal); border-radius: 2px;
          transform-origin: center;
        }
        .nav__mobile {
          overflow: hidden;
          background: rgba(250,247,242,0.98);
          backdrop-filter: blur(16px);
          border-top: 1px solid var(--border);
        }
        .nav__mobile ul {
          padding: 16px 32px 24px;
          display: flex; flex-direction: column; gap: 2px;
        }
        .nav__mobile a {
          display: block; padding: 12px 0;
          font-size: 1rem; font-weight: 500; color: var(--text-2);
          border-bottom: 1px solid var(--border-2);
          transition: color 0.2s;
        }
        .nav__mobile a:hover { color: var(--charcoal); }
        .nav__mobile .mobile-cta {
          margin-top: 10px; color: var(--rose-dark); font-weight: 600; border: none;
        }
        @media (max-width: 900px) {
          .nav__links, .nav__cta { display: none; }
          .nav__hamburger { display: flex; }
        }
      `}</style>
    </motion.nav>
  )
}
