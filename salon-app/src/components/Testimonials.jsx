import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const reviews = [
  {
    name: 'Amelia W.', since: 'Regular client',
    avatar: 'AW', avatarBg: 'linear-gradient(135deg,#b5838d,#6d6875)',
    text: '"Suddenly Samantha is a hidden gem in downtown Easton. The stylists are so attentive and really take the time to listen. I walked out with the best cut I\'ve had in years!"',
  },
  {
    name: 'Marcus P.', since: 'Regular client',
    avatar: 'MP', avatarBg: 'linear-gradient(135deg,#d4a373,#a47551)',
    text: '"Becky did an amazing job with my color correction. She transformed my damaged hair into something healthy and beautiful. Absolutely trustworthy — I\'ll never go anywhere else."',
  },
  {
    name: 'Claire R.', since: 'Happy customer',
    avatar: 'CR', avatarBg: 'linear-gradient(135deg,#a2b87e,#6a994e)',
    text: '"The atmosphere is so calm and relaxed. Easy parking, affordable prices, and genuinely great work. Samantha really cares about making you feel good when you leave."',
  },
  {
    name: 'Jordan T.', since: 'New client',
    avatar: 'JT', avatarBg: 'linear-gradient(135deg,#8ecae6,#219ebc)',
    text: '"Got a perm and I am obsessed. Steve was so patient explaining the process and the result is exactly what I wanted. Booking my next appointment before I even left!"',
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const go = (next) => {
    setDir(next > idx ? 1 : -1)
    setIdx(next)
  }
  const prev = () => go((idx - 1 + reviews.length) % reviews.length)
  const next = () => go((idx + 1) % reviews.length)

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1)
      setIdx(i => (i + 1) % reviews.length)
    }, 5500)
    return () => clearInterval(t)
  }, [])

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  }

  return (
    <section className="reviews-section section" id="reviews" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Client Love</div>
          <h2 className="section-heading">What people <em>are saying</em></h2>
        </motion.div>

        <motion.div
          className="reviews-wrap"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.15 }}
        >
          {/* Big quote */}
          <div className="reviews-quote-mark">"</div>

          <div className="reviews-stage">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={idx}
                className="review-card"
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="review-card__stars">★★★★★</div>
                <p className="review-card__text">{reviews[idx].text}</p>
                <div className="review-card__author">
                  <div className="review-avatar" style={{ background: reviews[idx].avatarBg }}>
                    {reviews[idx].avatar}
                  </div>
                  <div>
                    <strong>{reviews[idx].name}</strong>
                    <span>{reviews[idx].since}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="reviews-controls">
            <motion.button
              className="rev-btn" onClick={prev}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            >←</motion.button>

            <div className="rev-dots">
              {reviews.map((_, i) => (
                <motion.button
                  key={i}
                  className={`rev-dot${i === idx ? ' active' : ''}`}
                  onClick={() => go(i)}
                  animate={{ width: i === idx ? 28 : 8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              ))}
            </div>

            <motion.button
              className="rev-btn" onClick={next}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            >→</motion.button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .reviews-section { background: var(--cream-2); }
        .reviews-wrap {
          max-width: 680px; margin: 0 auto;
          position: relative; text-align: center;
        }
        .reviews-quote-mark {
          font-family: var(--font-display); font-size: 8rem;
          line-height: 1; color: var(--cream-3);
          position: absolute; top: -40px; left: 50%;
          transform: translateX(-50%);
          pointer-events: none; user-select: none;
        }
        .reviews-stage {
          position: relative; min-height: 260px;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .review-card {
          width: 100%; padding: 40px;
          background: #fff; border: 1px solid var(--cream-3);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 32px rgba(26,22,18,0.06);
        }
        .review-card__stars {
          color: var(--gold); font-size: 1.1rem;
          letter-spacing: 3px; margin-bottom: 20px;
        }
        .review-card__text {
          font-family: var(--font-display); font-size: 1.25rem;
          font-weight: 400; font-style: italic;
          color: var(--charcoal); line-height: 1.65;
          margin-bottom: 28px;
        }
        .review-card__author {
          display: inline-flex; align-items: center; gap: 14px;
        }
        .review-avatar {
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.85rem; font-weight: 700; color: #fff;
          flex-shrink: 0;
        }
        .review-card__author strong {
          display: block; font-size: 0.92rem; font-weight: 700;
          color: var(--charcoal); text-align: left;
        }
        .review-card__author span {
          font-size: 0.78rem; color: var(--text-3);
        }
        .reviews-controls {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; margin-top: 28px;
        }
        .rev-btn {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1.5px solid var(--cream-3); background: #fff;
          font-size: 1rem; color: var(--text-2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: border-color 0.25s;
        }
        .rev-btn:hover { border-color: var(--rose-2); color: var(--rose-dark); }
        .rev-dots { display: flex; gap: 6px; align-items: center; }
        .rev-dot {
          height: 8px; border-radius: 100px;
          background: var(--cream-3); cursor: pointer;
          border: none; padding: 0;
          transition: background 0.25s;
        }
        .rev-dot.active { background: var(--charcoal); }
      `}</style>
    </section>
  )
}
