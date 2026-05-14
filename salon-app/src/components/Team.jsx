import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const team = [
  {
    initials: 'S', name: 'Samantha',
    role: 'Owner & Lead Stylist',
    bio: 'The heart and soul of the salon. Samantha specializes in vivid color, cuts, and perms — and has built a loyal following in downtown Easton through skill and genuine care for every client.',
    specialties: ['Vivid Color', 'Perms', 'Cuts'],
    bg: 'linear-gradient(145deg,#b5838d44,#6d687522)',
    accentBg: 'linear-gradient(135deg,#b5838d,#6d6875)',
    badge: 'Owner',
  },
  {
    initials: 'B', name: 'Becky',
    role: 'Senior Stylist',
    bio: 'Known for her exceptional attention to detail and ability to listen to what clients actually want. Becky transforms damaged hair into healthy, beautiful styles.',
    specialties: ['Color', 'Treatments', 'Styling'],
    bg: 'linear-gradient(145deg,#d4a37344,#a4755122)',
    accentBg: 'linear-gradient(135deg,#d4a373,#a47551)',
  },
  {
    initials: 'SV', name: 'Steve',
    role: 'Stylist & Barber',
    bio: "Bringing precision to every cut, Steve handles men's grooming, beard trims, and classic barbering alongside full salon services.",
    specialties: ["Men's Cuts", 'Beard Trims', 'Barbering'],
    bg: 'linear-gradient(145deg,#8ecae644,#219ebc22)',
    accentBg: 'linear-gradient(135deg,#8ecae6,#219ebc)',
  },
]

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="team-section section" id="team" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Meet the Team</div>
          <h2 className="section-heading">Stylists who <em>love their craft</em></h2>
        </motion.div>

        <div className="team-grid">
          {team.map((person, i) => (
            <motion.div
              key={person.name}
              className="team-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: '0 28px 60px rgba(26,22,18,0.14)' }}
            >
              {/* Photo area */}
              <div className="team-card__photo" style={{ background: person.bg }}>
                <motion.div
                  className="team-card__initial"
                  style={{ background: person.accentBg }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {person.initials}
                </motion.div>
                {person.badge && (
                  <div className="team-card__badge">{person.badge}</div>
                )}
                {/* Decorative circle */}
                <motion.div
                  className="team-card__ring"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Info */}
              <div className="team-card__info">
                <h3 className="team-card__name">{person.name}</h3>
                <span className="team-card__role">{person.role}</span>
                <p className="team-card__bio">{person.bio}</p>
                <div className="team-card__tags">
                  {person.specialties.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
                <motion.a
                  href="#booking"
                  className="btn btn-ghost btn-sm"
                  style={{ marginTop: 'auto' }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book with {person.name.split(' ')[0]}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .team-section { background: var(--cream-2); }
        .team-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .team-card {
          background: #fff; border: 1px solid var(--cream-3);
          border-radius: var(--radius-lg); overflow: hidden;
          display: flex; flex-direction: column;
          cursor: default; transition: box-shadow 0.3s;
        }
        .team-card__photo {
          height: 200px; position: relative;
          display: flex; align-items: center; justify-content: center;
        }
        .team-card__initial {
          width: 72px; height: 72px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem; font-weight: 700; color: #fff;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          position: relative; z-index: 1;
        }
        .team-card__badge {
          position: absolute; top: 14px; right: 14px;
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--gold);
          padding: 4px 10px;
          background: rgba(201,168,76,0.12);
          border: 1px solid rgba(201,168,76,0.3);
          border-radius: 100px;
        }
        .team-card__ring {
          position: absolute; width: 120px; height: 120px;
          border-radius: 50%;
          border: 1px dashed rgba(255,255,255,0.25);
          pointer-events: none;
        }
        .team-card__info {
          padding: 24px; display: flex;
          flex-direction: column; gap: 8px; flex: 1;
        }
        .team-card__name {
          font-family: var(--font-display);
          font-size: 1.2rem; font-weight: 600; color: var(--charcoal);
        }
        .team-card__role {
          font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.06em; color: var(--rose-dark);
          text-transform: uppercase;
        }
        .team-card__bio {
          font-size: 0.85rem; color: var(--text-2);
          line-height: 1.7; margin-top: 4px;
        }
        .team-card__tags {
          display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px;
        }
        .tag {
          font-size: 0.72rem; font-weight: 600;
          color: var(--rose-dark); padding: 4px 10px;
          background: rgba(181,131,141,0.1);
          border-radius: 100px;
        }
        @media (max-width: 768px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .team-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
