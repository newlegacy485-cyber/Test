import { motion } from 'framer-motion'

const items = ['Cuts', 'Balayage', 'Color', 'Highlights', 'Keratin', 'Extensions', 'Blowouts', 'Treatments', 'Bridal', 'Ombré']
const doubled = [...items, ...items, ...items]

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <motion.div
        className="marquee-track"
        animate={{ x: [0, '-33.333%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-orn">✦</span>
          </span>
        ))}
      </motion.div>

      <style>{`
        .marquee-wrap {
          overflow: hidden;
          border-top: 1px solid var(--cream-3);
          border-bottom: 1px solid var(--cream-3);
          background: var(--cream-2);
          padding: 18px 0;
        }
        .marquee-track {
          display: flex; gap: 0; width: max-content; white-space: nowrap;
          will-change: transform;
        }
        .marquee-item {
          display: inline-flex; align-items: center; gap: 16px;
          font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--text-2); padding: 0 12px;
        }
        .marquee-orn { color: var(--gold); font-size: 0.65rem; }
      `}</style>
    </div>
  )
}
