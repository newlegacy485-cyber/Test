import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  { icon: '💰', title: 'Affordable Pricing', desc: 'Great quality at prices that make sense' },
  { icon: '🎨', title: 'Color Specialists', desc: 'Vivid, balayage, highlights & more' },
  { icon: '🤝', title: 'We Listen', desc: 'Every service starts with a real consultation' },
]

function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const yMap = { up: 40, down: -40, left: 40, right: -40 }
  const xMap = { up: 0, down: 0, left: -40, right: 40 }
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yMap[direction] || 0, x: xMap[direction] || 0 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const imgRef = useRef(null)
  const inView = useInView(imgRef, { once: true, margin: '-80px' })

  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        {/* Visual side */}
        <div className="about__visuals" ref={imgRef}>
          {/* Tall image */}
          <motion.div
            className="about-img about-img--tall"
            initial={{ opacity: 0, scale: 0.92, x: -30 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-img__inner">
              <div className="about-img__overlay" />
              <div className="about-img__content">
                <span className="img-icon">✂</span>
                <p>Our Studio</p>
              </div>
            </div>
          </motion.div>

          {/* Square image */}
          <motion.div
            className="about-img about-img--sq"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-img__inner about-img__inner--rose">
              <div className="about-img__content">
                <span className="img-icon">🌸</span>
                <p>Our Products</p>
              </div>
            </div>
          </motion.div>

          {/* Stat card */}
          <motion.div
            className="about-stat"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, boxShadow: '0 20px 48px rgba(26,22,18,0.14)' }}
          >
            <span className="about-stat__num">10+</span>
            <span className="about-stat__label">Years of craft</span>
          </motion.div>
        </div>

        {/* Text side */}
        <div className="about__content">
          <FadeIn delay={0.1}>
            <div className="section-label">About Us</div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="section-heading">
              A hidden gem in<br /><em>downtown Easton.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="about__para">
              Suddenly Samantha is a relaxed, welcoming salon tucked in the heart
              of downtown Easton, PA. We're known for our friendly atmosphere,
              affordable prices, and stylists who genuinely listen to what you want.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="about__para">
              From a quick men's cut to a full vivid color transformation, our team
              brings skill and passion to every chair. We use trusted brands like
              Paul Mitchell and Malibu to keep your hair healthy and looking its best.
            </p>
          </FadeIn>

          <div className="about__pillars">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={0.45 + i * 0.1} direction="left">
                <motion.div
                  className="pillar"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="pillar__icon">{p.icon}</span>
                  <div>
                    <strong>{p.title}</strong>
                    <span>{p.desc}</span>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.7}>
            <motion.a
              href="#booking"
              className="btn btn-primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Book an Appointment
            </motion.a>
          </FadeIn>
        </div>
      </div>

      <style>{`
        .about__grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        .about__visuals { position: relative; height: 520px; }
        .about-img { position: absolute; border-radius: var(--radius-lg); overflow: hidden; }
        .about-img--tall {
          width: 200px; height: 340px; top: 0; left: 0;
        }
        .about-img--sq {
          width: 200px; height: 200px; bottom: 0; left: 120px;
        }
        .about-img__inner {
          width: 100%; height: 100%;
          background: linear-gradient(145deg, var(--cream-3), #d4b8a8);
          display: flex; align-items: center; justify-content: center; position: relative;
        }
        .about-img__inner--rose {
          background: linear-gradient(145deg, #ddc5cb, #c9a8a8);
        }
        .about-img__overlay {
          position: absolute; inset: 0;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 60%);
        }
        .about-img__content { position: relative; text-align: center; }
        .img-icon { font-size: 2rem; display: block; margin-bottom: 8px; }
        .about-img__content p {
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(26,22,18,0.6);
        }
        .about-stat {
          position: absolute; right: 0; top: 50%;
          transform: translateY(-50%);
          background: var(--charcoal); color: var(--cream);
          padding: 24px 28px; border-radius: var(--radius-lg);
          text-align: center; cursor: default;
          box-shadow: 0 12px 36px rgba(26,22,18,0.2);
          transition: box-shadow 0.3s;
        }
        .about-stat__num {
          font-family: var(--font-display); font-size: 2.4rem;
          font-weight: 600; display: block;
        }
        .about-stat__label {
          font-size: 0.78rem; letter-spacing: 0.08em;
          color: var(--warm-gray-2); display: block; margin-top: 4px;
        }
        .about__content { display: flex; flex-direction: column; align-items: flex-start; }
        .about__para {
          font-size: 0.97rem; color: var(--text-2);
          line-height: 1.85; margin-bottom: 16px; max-width: 480px;
        }
        .about__para em { font-style: italic; color: var(--rose-dark); }
        .about__pillars { margin: 24px 0 36px; display: flex; flex-direction: column; gap: 16px; }
        .pillar {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 18px;
          background: #fff; border: 1px solid var(--cream-3);
          border-radius: var(--radius); cursor: default;
          box-shadow: 0 2px 8px rgba(26,22,18,0.04);
        }
        .pillar__icon { font-size: 1.4rem; flex-shrink: 0; }
        .pillar strong { display: block; font-size: 0.9rem; font-weight: 600; color: var(--charcoal); }
        .pillar span { font-size: 0.82rem; color: var(--text-3); }
        @media (max-width: 900px) {
          .about__grid { grid-template-columns: 1fr; }
          .about__visuals { display: none; }
        }
      `}</style>
    </section>
  )
}
