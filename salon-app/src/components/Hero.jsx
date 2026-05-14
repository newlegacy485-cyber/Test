import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section className="hero" id="home" ref={ref}>
      {/* Parallax background */}
      <motion.div className="hero__bg" style={{ y: bgY }}>
        <div className="hero__bg-shape hero__bg-shape--1" />
        <div className="hero__bg-shape hero__bg-shape--2" />
        <div className="hero__bg-shape hero__bg-shape--3" />
        <div className="hero__bg-dots" />
      </motion.div>

      <div className="container hero__container">
        <motion.div className="hero__text" style={{ y: textY, opacity }}>
          <motion.div className="hero__eyebrow" {...fadeUp(0.2)}>
            <span className="eyebrow-line" />
            Grand Eastonian Hotel · Easton, PA · Walk-ins Welcome
            <span className="eyebrow-line" />
          </motion.div>

          <motion.h1 className="hero__headline" {...fadeUp(0.35)}>
            Great hair starts<br />
            <em>here.</em>
          </motion.h1>

          <motion.p className="hero__sub" {...fadeUp(0.5)}>
            Suddenly Samantha is Easton's go-to salon for cuts, vivid color,
            perms, and treatments — in a relaxed, welcoming atmosphere you'll love.
          </motion.p>

          <motion.div className="hero__cta" {...fadeUp(0.65)}>
            <motion.a
              href="#booking"
              className="btn btn-primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Book an Appointment
            </motion.a>
            <motion.a
              href="#services"
              className="btn btn-outline"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          <motion.div className="hero__stats" {...fadeUp(0.8)}>
            {[
              { num: '★ 5.0', label: 'Vagaro Rating' },
              { num: '6', label: 'Talented Stylists' },
              { num: 'PM', label: 'Paul Mitchell Focus Salon' },
            ].map((s, i) => (
              <div key={i} className="hero__stat-group">
                {i > 0 && <div className="stat-sep" />}
                <div className="hero__stat">
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main card */}
          <motion.div
            className="hero__card hero__card--main"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="hero__card-inner">
              <div className="hero__card-blob" />
              <div className="hero__card-content">
                <div className="card-scissors">✂</div>
                <p className="card-title">Suddenly Samantha</p>
                <p className="card-sub">Easton, PA</p>
              </div>
            </div>
          </motion.div>

          {/* Floating accent cards */}
          <motion.div
            className="hero__float hero__float--1"
            animate={{ y: [0, 8, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <span>🌿</span>
            <div>
              <strong>Eco Certified</strong>
              <span>Clean beauty only</span>
            </div>
          </motion.div>

          <motion.div
            className="hero__float hero__float--2"
            animate={{ y: [0, -10, 0], rotate: [0, -1.5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span>⭐</span>
            <div>
              <strong>Best Salon 2025</strong>
              <span>SF Magazine</span>
            </div>
          </motion.div>

          <motion.div
            className="hero__float hero__float--3"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            <span>💆</span>
            <div>
              <strong>Free Consultation</strong>
              <span>Every visit</span>
            </div>
          </motion.div>

          {/* Decorative ring */}
          <motion.div
            className="hero__ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ opacity }}
      >
        <motion.div
          className="scroll-dot"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <style>{`
        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 80px;
          background: var(--cream);
        }
        .hero__bg {
          position: absolute; inset: 0; pointer-events: none; will-change: transform;
        }
        .hero__bg-shape {
          position: absolute; border-radius: 50%;
          filter: blur(70px); opacity: 0.45;
        }
        .hero__bg-shape--1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, #e8d5c0, transparent 70%);
          top: -100px; right: -150px;
        }
        .hero__bg-shape--2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #ddc5cb, transparent 70%);
          bottom: -80px; left: -80px;
        }
        .hero__bg-shape--3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #f0e4d0, transparent 70%);
          top: 50%; left: 35%;
        }
        .hero__bg-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(26,22,18,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
        }
        .hero__container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          padding-top: 40px;
          padding-bottom: 80px;
          position: relative;
          z-index: 1;
        }
        .hero__eyebrow {
          display: flex; align-items: center; gap: 14px;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--rose-dark); margin-bottom: 24px;
        }
        .eyebrow-line { display: block; width: 28px; height: 1px; background: var(--rose); }
        .hero__headline {
          font-family: var(--font-display);
          font-size: clamp(3.2rem, 6vw, 5.5rem);
          font-weight: 600; line-height: 1.08;
          letter-spacing: -0.02em;
          color: var(--charcoal); margin-bottom: 24px;
        }
        .hero__headline em {
          display: block; font-style: italic; font-weight: 300;
          color: var(--rose-dark);
        }
        .hero__sub {
          font-size: 1.05rem; color: var(--text-2);
          max-width: 440px; line-height: 1.85; margin-bottom: 40px;
        }
        .hero__cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 52px; }
        .hero__stats { display: flex; align-items: center; gap: 0; }
        .hero__stat-group { display: flex; align-items: center; }
        .stat-sep { width: 1px; height: 40px; background: var(--cream-3); margin: 0 28px; }
        .hero__stat { display: flex; flex-direction: column; }
        .stat-num {
          font-family: var(--font-display);
          font-size: 1.9rem; font-weight: 600;
          color: var(--charcoal); line-height: 1;
        }
        .stat-label {
          font-size: 0.75rem; color: var(--text-3);
          letter-spacing: 0.06em; margin-top: 4px;
        }
        /* Visual side */
        .hero__visual {
          position: relative; height: 540px;
        }
        .hero__card--main {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 280px; height: 340px;
        }
        .hero__card-inner {
          width: 100%; height: 100%;
          border-radius: 32px;
          background: linear-gradient(145deg, #fff, var(--cream-2));
          border: 1px solid var(--cream-3);
          box-shadow: 0 24px 60px rgba(26,22,18,0.12), 0 4px 16px rgba(26,22,18,0.06);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          overflow: hidden; position: relative;
        }
        .hero__card-blob {
          position: absolute; inset: 0;
          background: radial-gradient(circle at 70% 20%, rgba(201,168,154,0.25), transparent 60%),
                      radial-gradient(circle at 30% 80%, rgba(201,184,76,0.15), transparent 60%);
        }
        .hero__card-content { position: relative; text-align: center; z-index: 1; }
        .card-scissors { font-size: 2.5rem; margin-bottom: 14px; display: block; }
        .card-title {
          font-family: var(--font-display); font-size: 1.2rem;
          font-weight: 600; color: var(--charcoal);
        }
        .card-sub { font-size: 0.8rem; color: var(--text-3); margin-top: 4px; }
        /* Float badges */
        .hero__float {
          position: absolute;
          display: flex; align-items: center; gap: 10px;
          padding: 12px 18px;
          background: #fff; border: 1px solid var(--cream-3);
          border-radius: 100px;
          box-shadow: 0 8px 28px rgba(26,22,18,0.1);
          font-size: 0.82rem; white-space: nowrap;
          will-change: transform;
        }
        .hero__float span:first-child { font-size: 1.2rem; }
        .hero__float strong { display: block; font-weight: 600; font-size: 0.82rem; color: var(--charcoal); }
        .hero__float span:last-child { font-size: 0.73rem; color: var(--text-3); }
        .hero__float--1 { top: 18%; right: -20px; }
        .hero__float--2 { bottom: 32%; left: -20px; }
        .hero__float--3 { bottom: 12%; right: 10px; }
        /* Decorative ring */
        .hero__ring {
          position: absolute; top: 50%; left: 50%;
          width: 380px; height: 380px;
          margin: -190px 0 0 -190px;
          border-radius: 50%;
          border: 1px dashed rgba(201,168,154,0.35);
          pointer-events: none;
          will-change: transform;
        }
        /* Scroll hint */
        .hero__scroll {
          position: absolute; bottom: 32px; left: 50%;
          transform: translateX(-50%);
          width: 26px; height: 42px;
          border: 1.5px solid var(--cream-3);
          border-radius: 13px;
          display: flex; justify-content: center; padding-top: 8px;
        }
        .scroll-dot {
          width: 4px; height: 8px;
          background: var(--rose); border-radius: 2px;
        }
        @media (max-width: 900px) {
          .hero__container { grid-template-columns: 1fr; }
          .hero__visual { display: none; }
          .hero__headline { font-size: clamp(2.8rem, 8vw, 4rem); }
        }
        @media (max-width: 480px) {
          .hero__cta { flex-direction: column; }
          .hero__stats { gap: 0; }
        }
      `}</style>
    </section>
  )
}
