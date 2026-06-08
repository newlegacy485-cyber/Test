import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const filters = ['All', 'Cuts', 'Colour', 'Bridal']

const items = [
  { id: 1, label: 'Balayage', cat: 'Colour', bg: 'linear-gradient(145deg,#d4a373,#a47551)', span: 'col' },
  { id: 2, label: 'Precision Cut', cat: 'Cuts', bg: 'linear-gradient(145deg,#b5838d,#6d6875)', span: 'row' },
  { id: 3, label: 'Highlights', cat: 'Colour', bg: 'linear-gradient(145deg,#e9c46a,#f4a261)', span: '' },
  { id: 4, label: 'Bridal Updo', cat: 'Bridal', bg: 'linear-gradient(145deg,#ccd5ae,#a2b87e)', span: '' },
  { id: 5, label: 'Ombré', cat: 'Colour', bg: 'linear-gradient(145deg,#8ecae6,#219ebc)', span: 'col' },
  { id: 6, label: 'Bob Cut', cat: 'Cuts', bg: 'linear-gradient(145deg,#9d8189,#c9ada7)', span: '' },
  { id: 7, label: 'Bridal Waves', cat: 'Bridal', bg: 'linear-gradient(145deg,#f2e9e4,#c9ada7)', span: '' },
  { id: 8, label: 'Fantasy Colour', cat: 'Colour', bg: 'linear-gradient(145deg,#6a994e,#a7c957)', span: '' },
  { id: 9, label: 'Textured Bob', cat: 'Cuts', bg: 'linear-gradient(145deg,#e0b4a8,#c4826e)', span: '' },
  { id: 10, label: 'Bridal Crown', cat: 'Bridal', bg: 'linear-gradient(145deg,#f5e6d3,#e2c47e)', span: 'row' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = filter === 'All' ? items : items.filter(i => i.cat === filter)

  return (
    <section className="gallery-section section" id="gallery" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Our Work</div>
          <h2 className="section-heading">Beauty, <em>beautifully done</em></h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="gallery-filters"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
              {filter === f && (
                <motion.div
                  className="filter-bg"
                  layoutId="filterBg"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="gallery-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                className={`gallery-item${item.span ? ` gallery-item--${item.span}` : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03, zIndex: 2 }}
              >
                <div className="gallery-item__img" style={{ background: item.bg }}>
                  <motion.div
                    className="gallery-item__overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="gallery-item__label">{item.label}</span>
                    <span className="gallery-item__cat">{item.cat}</span>
                  </motion.div>
                  <div className="gallery-item__shine" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .gallery-section { background: var(--cream); }
        .gallery-filters {
          display: flex; gap: 8px; justify-content: center;
          margin-bottom: 48px;
        }
        .filter-btn {
          position: relative; padding: 10px 24px;
          border-radius: 100px;
          font-family: var(--font-body); font-size: 0.85rem;
          font-weight: 600; cursor: pointer; border: none;
          background: transparent; color: var(--text-2);
          transition: color 0.25s; overflow: hidden; z-index: 0;
        }
        .filter-btn.active { color: var(--cream); }
        .filter-bg {
          position: absolute; inset: 0; z-index: -1;
          background: var(--charcoal); border-radius: 100px;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 200px;
          gap: 16px;
        }
        .gallery-item { border-radius: var(--radius-lg); overflow: hidden; cursor: pointer; }
        .gallery-item--row { grid-row: span 2; }
        .gallery-item--col { grid-column: span 2; }
        .gallery-item__img {
          width: 100%; height: 100%; position: relative;
          transition: transform 0.4s ease;
        }
        .gallery-item__overlay {
          position: absolute; inset: 0;
          background: rgba(26,22,18,0.55);
          backdrop-filter: blur(2px);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 6px;
        }
        .gallery-item__label {
          font-family: var(--font-display);
          font-size: 1.2rem; font-weight: 600;
          color: #fff; letter-spacing: 0.02em;
        }
        .gallery-item__cat {
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: rgba(255,255,255,0.7);
        }
        .gallery-item__shine {
          position: absolute; top: 0; left: -60%;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transform: skewX(-20deg);
          transition: left 0.6s ease;
          pointer-events: none;
        }
        .gallery-item:hover .gallery-item__shine { left: 130%; }
        @media (max-width: 900px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .gallery-item--col { grid-column: span 1; }
        }
        @media (max-width: 540px) {
          .gallery-grid { grid-template-columns: 1fr 1fr; grid-auto-rows: 140px; }
        }
      `}</style>
    </section>
  )
}
