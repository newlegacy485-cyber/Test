import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const team = [
  {
    initials: 'SF', name: 'Stephen Flowers',
    role: 'Stylist',
    bio: 'A skilled stylist bringing creativity and precision to every appointment at Suddenly Samantha.',
    specialties: ['Cuts', 'Styling'],
    bg: 'linear-gradient(145deg,#b5838d44,#6d687522)',
    accentBg: 'linear-gradient(135deg,#b5838d,#6d6875)',
  },
  {
    initials: 'AL', name: 'Aja Livezey',
    role: 'Stylist · ★ 5.0',
    bio: 'Top-rated stylist with a passion for transformative hair. Aja\'s clients love her attention to detail and the results she delivers every time.',
    specialties: ['Color', 'Cuts', 'Styling'],
    bg: 'linear-gradient(145deg,#d4a37344,#a4755122)',
    accentBg: 'linear-gradient(135deg,#d4a373,#a47551)',
    badge: '★ 5.0',
  },
  {
    initials: 'MR', name: 'Moon Ramirez',
    role: 'Stylist',
    bio: 'Bringing a fresh perspective and technical skill to every style. Moon is passionate about making clients feel their best.',
    specialties: ['Cuts', 'Color', 'Styling'],
    bg: 'linear-gradient(145deg,#ccd5ae44,#a2b87e22)',
    accentBg: 'linear-gradient(135deg,#a2b87e,#ccd5ae)',
  },
  {
    initials: 'AW', name: 'Ann Wiemer',
    role: 'Master Stylist',
    bio: '30 years of experience working in New York, LA, and Pennsylvania. Ann brings decades of expertise and a warm, personable touch to every client.',
    specialties: ['Cuts', 'Color', 'Treatments'],
    bg: 'linear-gradient(145deg,#8ecae644,#219ebc22)',
    accentBg: 'linear-gradient(135deg,#8ecae6,#219ebc)',
  },
  {
    initials: 'CK', name: 'Cain Killowett',
    role: 'Vivid Color & SFX Artist',
    bio: 'A Trans and Queer stylist from Bucks County specializing in vivid colors, alternative haircuts, and SFX Makeup. Also a costume designer and short film maker. Loves clowns, Halloween, cats, and David Lynch.',
    specialties: ['Vivid Color', 'Alternative Cuts', 'SFX Makeup'],
    bg: 'linear-gradient(145deg,#a78bfa44,#7c3aed22)',
    accentBg: 'linear-gradient(135deg,#a78bfa,#7c3aed)',
  },
  {
    initials: 'JM', name: 'Jordan M',
    role: 'Color Specialist',
    bio: 'Focused on color corrections and vivid hair colors. Jordan turns hair goals into reality with a specialist\'s eye for tone, depth, and vibrancy.',
    specialties: ['Color Corrections', 'Vivid Colors'],
    bg: 'linear-gradient(145deg,#f9a8d444,#ec489922)',
    accentBg: 'linear-gradient(135deg,#f9a8d4,#ec4899)',
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
          grid-template-rows: auto;
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
