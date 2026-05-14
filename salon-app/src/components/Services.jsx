import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const tabs = [
  { id: 'cuts', label: 'Haircuts & Styling' },
  { id: 'color', label: 'Color & Vivids' },
  { id: 'treatments', label: 'Treatments & Perms' },
]

const services = {
  cuts: [
    { icon: '✂', name: "Women's Haircut", desc: '', price: '$50' },
    { icon: '✂', name: "Men's Haircut", desc: '', price: '$25' },
    { icon: '✂', name: "Men's Cut & Beard Trim", desc: '', price: '$45' },
    { icon: '✂', name: "Child's Haircut", desc: '', price: '$20' },
    { icon: '💇', name: 'Cut + Wash + Style', desc: 'A haircut, luxury wash, and style of your choice. Usually a 60-minute service.', price: '$80' },
    { icon: '✂', name: 'Haircut, No Wash', desc: 'Just a cut and dry style — usually 30 minutes.', price: '$40' },
    { icon: '💆', name: 'Wash & Style', desc: 'No cut — just a refresh! Usually 40–60 minutes depending on your goal look.', price: '$60' },
    { icon: '🚿', name: 'Shampoo & Blow Dry', desc: 'Shampoo and blow dry to your liking.', price: '$30' },
    { icon: '🔥', name: 'Flat Iron Add-On', desc: 'Added to any service.', price: '+$25' },
    { icon: '💨', name: 'Wash, Blow Dry & Flat Iron', desc: '', price: '$75' },
    { icon: '👑', name: 'Special Occasions / Up-Dos', desc: '', price: '$60' },
  ],
  color: [
    { icon: '🌈', name: 'Vivid Color', desc: 'Custom vivid color. Price is on a sliding scale based on length and product used — call for accurate pricing!', price: '$100+' },
    { icon: '🎨', name: 'Partial Vivid', desc: '', price: '$200' },
    { icon: '✨', name: 'Full Vivid', desc: 'Mobile service available.', price: 'from $300' },
    { icon: '🎨', name: 'Bayalage', desc: 'Hand-painted, sun-kissed colour for a natural, lived-in look.', price: 'Call for pricing' },
    { icon: '💛', name: 'Partial Highlights', desc: '', price: 'Call for pricing' },
    { icon: '🌟', name: 'Full Highlights', desc: '', price: 'Call for pricing' },
    { icon: '🌅', name: 'Hair Color', desc: '', price: 'Call for pricing' },
    { icon: '🪄', name: 'Hair Touch-Up', desc: '', price: 'Call for pricing' },
  ],
  treatments: [
    { icon: '🌿', name: 'Paul Mitchell Conditioning Treatment', desc: '', price: '$25' },
    { icon: '🌊', name: "Malibu Treatment", desc: '', price: '$50' },
    { icon: '💎', name: 'Paul Mitchell Keratriplex Treatment', desc: '', price: '$40' },
    { icon: '🌀', name: 'Perm', desc: 'Creates curls and waves to enhance body and volume in your style.', price: '$130' },
    { icon: '✨', name: 'Specialty Perm', desc: '', price: '$225' },
  ],
}

export default function Services() {
  const [active, setActive] = useState('cuts')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="services-section section" id="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label">Our Menu</div>
          <h2 className="section-heading">Services & <em>Pricing</em></h2>
          <p className="section-sub">
            All services are by appointment. Call or book online to reserve your spot!
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="svc-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`svc-tab${active === tab.id ? ' active' : ''}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
              {active === tab.id && (
                <motion.div
                  className="tab-underline"
                  layoutId="tabUnderline"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Service list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="svc-list"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {services[active].map((svc, i) => (
              <motion.div
                key={svc.name}
                className="svc-item"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.055, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 5, backgroundColor: '#fff' }}
              >
                <div className="svc-item__left">
                  <span className="svc-item__icon">{svc.icon}</span>
                  <div>
                    <h4 className="svc-item__name">{svc.name}</h4>
                    {svc.desc && <p className="svc-item__desc">{svc.desc}</p>}
                  </div>
                </div>
                <div className="svc-item__right">
                  <span className="svc-item__price">{svc.price}</span>
                  <motion.a
                    href="#booking"
                    className="btn btn-ghost btn-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Also offer note */}
        <motion.div
          className="svc-also"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <span>Also offering:</span>
          {['Barbering', 'Waxing', 'Makeup'].map(s => (
            <span key={s} className="svc-also__tag">{s}</span>
          ))}
          <span className="svc-also__note">— call for pricing</span>
        </motion.div>
      </div>

      <style>{`
        .services-section { background: var(--cream-2); }
        .svc-tabs {
          display: flex; gap: 0; flex-wrap: wrap;
          border-bottom: 1px solid var(--cream-3);
          margin-bottom: 48px;
          justify-content: center;
        }
        .svc-tab {
          position: relative; padding: 14px 28px;
          font-family: var(--font-body); font-size: 0.86rem;
          font-weight: 600; letter-spacing: 0.05em;
          color: var(--text-3); cursor: pointer;
          transition: color 0.3s; background: none; border: none;
        }
        .svc-tab.active { color: var(--charcoal); }
        .tab-underline {
          position: absolute; bottom: -1px; left: 0; right: 0;
          height: 2px; background: var(--charcoal); border-radius: 2px;
        }
        .svc-list {
          display: flex; flex-direction: column; gap: 10px;
          max-width: 860px; margin: 0 auto;
        }
        .svc-item {
          display: flex; justify-content: space-between; align-items: center;
          padding: 20px 24px;
          background: var(--cream); border: 1px solid var(--cream-3);
          border-radius: var(--radius-lg);
          cursor: default; transition: background 0.25s;
          gap: 16px;
        }
        .svc-item__left {
          display: flex; align-items: center; gap: 16px;
        }
        .svc-item__icon {
          font-size: 1.5rem; flex-shrink: 0;
          width: 44px; height: 44px;
          background: var(--cream-2); border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }
        .svc-item__name {
          font-size: 0.95rem; font-weight: 600;
          color: var(--charcoal); margin-bottom: 2px;
        }
        .svc-item__desc {
          font-size: 0.82rem; color: var(--text-3); line-height: 1.5;
          max-width: 400px;
        }
        .svc-item__right {
          display: flex; align-items: center; gap: 16px; flex-shrink: 0;
        }
        .svc-item__price {
          font-family: var(--font-display); font-size: 1.15rem;
          font-weight: 600; color: var(--charcoal); white-space: nowrap;
        }
        .svc-also {
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
          max-width: 860px; margin: 24px auto 0;
          padding: 16px 24px;
          background: rgba(201,168,76,0.07);
          border: 1px dashed rgba(201,168,76,0.4);
          border-radius: var(--radius);
          font-size: 0.85rem; color: var(--text-2);
        }
        .svc-also > span:first-child { font-weight: 600; color: var(--charcoal); }
        .svc-also__tag {
          padding: 4px 12px;
          background: rgba(201,168,76,0.15);
          border-radius: 100px;
          font-weight: 600; font-size: 0.78rem;
          color: #8a6a1a;
        }
        .svc-also__note { color: var(--text-3); font-style: italic; }
        @media (max-width: 640px) {
          .svc-item { flex-direction: column; align-items: flex-start; }
          .svc-tab { padding: 10px 16px; font-size: 0.78rem; }
        }
      `}</style>
    </section>
  )
}
