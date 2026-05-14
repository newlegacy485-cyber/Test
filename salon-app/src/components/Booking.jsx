import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const hours = [
  { day: 'Monday – Wednesday', time: '12:00 PM – 8:00 PM' },
  { day: 'Thursday – Friday',  time: '10:00 AM – 8:00 PM' },
  { day: 'Saturday',           time: '9:00 AM – 4:00 PM' },
  { day: 'Sunday',             time: 'Closed' },
]

export default function Booking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const required = form.querySelectorAll('[required]')
    let valid = true
    required.forEach(f => {
      f.classList.remove('error')
      if (!f.value.trim()) { f.classList.add('error'); valid = false }
    })
    if (!valid) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1400)
  }

  return (
    <section className="booking-section section" id="booking" ref={ref}>
      <div className="booking-bg" />
      <div className="container booking-inner">

        {/* Info panel */}
        <motion.div
          className="booking-info"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label">Reserve Your Seat</div>
          <h2 className="section-heading">Book an<br /><em>appointment</em></h2>
          <p className="booking-blurb">
            Fill out the form and we'll confirm your booking within a few hours.
            All services are by appointment only.
          </p>

          <div className="booking-hours">
            <h4>Hours</h4>
            <ul>
              {hours.map(h => (
                <li key={h.day} className={h.time === 'Closed' ? 'closed' : ''}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="booking-contacts">
            {[
              { icon: '📞', text: '(484) 347-0093', href: 'tel:+14843470093' },
              { icon: '📍', text: '140 Northampton St, Ste E, Easton, PA 18042', href: 'https://maps.google.com/?q=140+Northampton+St+Easton+PA' },
              { icon: '📸', text: '@suddenlysamantha', href: 'https://instagram.com/suddenlysamantha' },
            ].map(c => (
              <motion.a
                key={c.icon}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="booking-contact"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="booking-contact__icon">{c.icon}</span>
                <span>{c.text}</span>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://www.vagaro.com/suddenlysamantha/services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary vagaro-btn"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Book on Vagaro →
          </motion.a>
        </motion.div>

        {/* Form */}
        <motion.form
          id="bookingForm"
          className="booking-form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="bName">Full Name</label>
              <input type="text" id="bName" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="bPhone">Phone</label>
              <input type="tel" id="bPhone" placeholder="(484) 000-0000" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="bEmail">Email</label>
            <input type="email" id="bEmail" placeholder="you@email.com" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="bService">Service</label>
              <select id="bService">
                <option value="" disabled defaultValue="">Choose a service</option>
                <optgroup label="Haircuts & Styling">
                  <option>Women's Haircut – $50</option>
                  <option>Men's Haircut – $25</option>
                  <option>Men's Cut & Beard Trim – $45</option>
                  <option>Child's Haircut – $20</option>
                  <option>Cut + Wash + Style – $80</option>
                  <option>Haircut, No Wash – $40</option>
                  <option>Wash & Style – $60</option>
                  <option>Shampoo & Blow Dry – $30</option>
                  <option>Wash, Blow Dry & Flat Iron – $75</option>
                  <option>Special Occasions / Up-Dos – $60</option>
                </optgroup>
                <optgroup label="Color & Vivids">
                  <option>Vivid Color – from $100</option>
                  <option>Partial Vivid – $200</option>
                  <option>Full Vivid – from $300</option>
                  <option>Bayalage</option>
                  <option>Highlights</option>
                  <option>Hair Color</option>
                  <option>Hair Touch-Up</option>
                </optgroup>
                <optgroup label="Treatments & Perms">
                  <option>Paul Mitchell Conditioning Treatment – $25</option>
                  <option>Malibu Treatment – $50</option>
                  <option>Paul Mitchell Keratriplex Treatment – $40</option>
                  <option>Perm – $130</option>
                  <option>Specialty Perm – $225</option>
                </optgroup>
                <optgroup label="Other">
                  <option>Waxing</option>
                  <option>Makeup</option>
                  <option>Barbering</option>
                </optgroup>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bDate">Preferred Date</label>
              <input type="date" id="bDate" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="bNotes">Notes (optional)</label>
            <textarea id="bNotes" rows={3} placeholder="Any special requests, inspo pics, or hair concerns…" />
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary btn-full"
            disabled={loading || sent}
            whileHover={!sent ? { scale: 1.02 } : {}}
            whileTap={!sent ? { scale: 0.98 } : {}}
          >
            {loading ? 'Sending…' : sent ? '✓ Request Sent!' : 'Request Appointment →'}
          </motion.button>

          {sent && (
            <motion.div
              className="form-success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span>✓</span> We received your request and will confirm within a few hours!
            </motion.div>
          )}
        </motion.form>
      </div>

      <style>{`
        .booking-section { position: relative; background: var(--cream); }
        .booking-bg {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 70% 60% at 0% 100%, rgba(201,168,154,0.18), transparent 70%),
                      radial-gradient(ellipse 50% 50% at 100% 0%, rgba(201,184,76,0.1), transparent 70%);
        }
        .booking-inner {
          display: grid; grid-template-columns: 1fr 1.3fr;
          gap: 80px; align-items: start; position: relative; z-index: 1;
        }
        .booking-blurb {
          font-size: 0.97rem; color: var(--text-2);
          line-height: 1.8; margin: 12px 0 32px;
        }
        .booking-hours {
          margin-bottom: 28px;
          padding: 20px 24px;
          background: var(--cream-2); border: 1px solid var(--cream-3);
          border-radius: var(--radius);
        }
        .booking-hours h4 {
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--text-3); margin-bottom: 14px;
        }
        .booking-hours ul { display: flex; flex-direction: column; gap: 8px; }
        .booking-hours li {
          display: flex; justify-content: space-between;
          font-size: 0.88rem; color: var(--text-2);
        }
        .booking-hours li.closed { color: var(--text-3); }
        .booking-hours li span:first-child { font-weight: 500; }
        .booking-contacts {
          display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px;
        }
        .booking-contact {
          display: flex; align-items: center; gap: 12px;
          font-size: 0.88rem; color: var(--text-2);
          cursor: pointer; transition: color 0.2s;
        }
        .booking-contact:hover { color: var(--charcoal); }
        .booking-contact__icon {
          width: 34px; height: 34px; border-radius: var(--radius-sm);
          background: var(--cream-2); border: 1px solid var(--cream-3);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; flex-shrink: 0;
        }
        .vagaro-btn { margin-top: 4px; }
        .booking-form {
          background: #fff; border: 1px solid var(--cream-3);
          border-radius: var(--radius-lg); padding: 40px;
          box-shadow: 0 8px 40px rgba(26,22,18,0.07);
        }
        @media (max-width: 900px) {
          .booking-inner { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 480px) {
          .booking-form { padding: 28px 20px; }
        }
      `}</style>
    </section>
  )
}
