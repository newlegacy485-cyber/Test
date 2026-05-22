/* ===================================================
   BUSINESS SCOUT — Riley & Casey Lead Engine
   =================================================== */

/* ── Business Seed Data ───────────────────────────── */
const BIZ_POOL = [
  { name: "Mario's Pizza & Subs",   industry: 'restaurant', icon: '🍕', location: 'Austin, TX',     phone: '+1 (512) 555-0121', score: 5 },
  { name: "Bella's Hair Studio",    industry: 'salon',      icon: '💇', location: 'Miami, FL',      phone: '+1 (305) 555-0234', score: 4 },
  { name: "Ace Auto Repair",        industry: 'auto',       icon: '🔧', location: 'Dallas, TX',     phone: '+1 (214) 555-0345', score: 4 },
  { name: "Green Leaf Landscaping", industry: 'contractor', icon: '🌿', location: 'Phoenix, AZ',    phone: '+1 (602) 555-0456', score: 5 },
  { name: "The Cupcake Corner",     industry: 'restaurant', icon: '🧁', location: 'Nashville, TN',  phone: '+1 (615) 555-0567', score: 3 },
  { name: "Luxe Nail Bar",          industry: 'salon',      icon: '💅', location: 'Houston, TX',    phone: '+1 (713) 555-0678', score: 4 },
  { name: "ProFix Plumbing Co",     industry: 'contractor', icon: '🔩', location: 'Denver, CO',     phone: '+1 (720) 555-0789', score: 5 },
  { name: "Paws & Tails Grooming",  industry: 'pet',        icon: '🐾', location: 'Seattle, WA',    phone: '+1 (206) 555-0890', score: 4 },
  { name: "Harbor View Diner",      industry: 'restaurant', icon: '🍽', location: 'San Diego, CA',  phone: '+1 (619) 555-0901', score: 3 },
  { name: "Sunrise Yoga Studio",    industry: 'fitness',    icon: '🧘', location: 'Portland, OR',   phone: '+1 (503) 555-0012', score: 5 },
  { name: "QuickFix Electrics",     industry: 'contractor', icon: '⚡', location: 'Chicago, IL',    phone: '+1 (312) 555-0123', score: 4 },
  { name: "Fresh Cuts Barbershop",  industry: 'salon',      icon: '✂', location: 'Atlanta, GA',    phone: '+1 (404) 555-0234', score: 3 },
  { name: "Taco Fiesta Express",    industry: 'restaurant', icon: '🌮', location: 'San Antonio,TX', phone: '+1 (210) 555-0345', score: 4 },
  { name: "Iron & Lift Gym",        industry: 'fitness',    icon: '🏋', location: 'Las Vegas, NV',  phone: '+1 (702) 555-0456', score: 5 },
  { name: "Valley Dental Care",     industry: 'medical',    icon: '🦷', location: 'Sacramento,CA',  phone: '+1 (916) 555-0567', score: 5 },
  { name: "Sparkle Clean Co.",      industry: 'contractor', icon: '🧹', location: 'Columbus, OH',   phone: '+1 (614) 555-0678', score: 3 },
  { name: "Bark Avenue Pet Spa",    industry: 'pet',        icon: '🐕', location: 'Austin, TX',     phone: '+1 (512) 555-0789', score: 4 },
  { name: "The Thai Kitchen",       industry: 'restaurant', icon: '🍜', location: 'Boston, MA',     phone: '+1 (617) 555-0890', score: 3 },
  { name: "Radiant Skin Clinic",    industry: 'medical',    icon: '✨', location: 'Tampa, FL',      phone: '+1 (813) 555-0901', score: 5 },
  { name: "PowerPro Roofing",       industry: 'contractor', icon: '🏠', location: 'Charlotte, NC',  phone: '+1 (704) 555-0012', score: 4 },
  { name: "Sips & Brews Café",      industry: 'restaurant', icon: '☕', location: 'Denver, CO',     phone: '+1 (720) 555-0123', score: 3 },
  { name: "GlowUp Beauty Lounge",   industry: 'salon',      icon: '💋', location: 'Los Angeles,CA', phone: '+1 (323) 555-0234', score: 5 },
  { name: "Elite HVAC Services",    industry: 'contractor', icon: '❄', location: 'Phoenix, AZ',    phone: '+1 (602) 555-0345', score: 4 },
  { name: "PetCare Plus Vet",       industry: 'pet',        icon: '🐈', location: 'Raleigh, NC',    phone: '+1 (919) 555-0456', score: 4 },
  { name: "Smoke & Fire BBQ",       industry: 'restaurant', icon: '🔥', location: 'Memphis, TN',    phone: '+1 (901) 555-0567', score: 5 },
  { name: "CrossFit Redline",       industry: 'fitness',    icon: '💪', location: 'Detroit, MI',    phone: '+1 (313) 555-0678', score: 4 },
  { name: "SmilePro Dentistry",     industry: 'medical',    icon: '😁', location: 'Minneapolis,MN', phone: '+1 (612) 555-0789', score: 5 },
  { name: "Prime Window Tinting",   industry: 'auto',       icon: '🚗', location: 'Orlando, FL',    phone: '+1 (407) 555-0890', score: 3 },
  { name: "The Flower Pot Shop",    industry: 'retail',     icon: '🌸', location: 'Kansas City,MO', phone: '+1 (816) 555-0901', score: 3 },
  { name: "Rocky Road Ice Cream",   industry: 'restaurant', icon: '🍦', location: 'Salt Lake City,UT',phone: '+1 (801) 555-0012', score: 2 },
  { name: "Urban Ink Tattoo",       industry: 'retail',     icon: '🎨', location: 'Louisville, KY', phone: '+1 (502) 555-0123', score: 4 },
  { name: "Swift Tire & Lube",      industry: 'auto',       icon: '🛞', location: 'Indianapolis,IN', phone: '+1 (317) 555-0234', score: 4 },
  { name: "Bliss Spa & Massage",    industry: 'salon',      icon: '🧖', location: 'Scottsdale, AZ', phone: '+1 (480) 555-0345', score: 5 },
  { name: "First Class Moving Co",  industry: 'contractor', icon: '📦', location: 'Baltimore, MD',  phone: '+1 (410) 555-0456', score: 3 },
  { name: "Lucky Dragon Chinese",   industry: 'restaurant', icon: '🥡', location: 'New Orleans,LA', phone: '+1 (504) 555-0567', score: 3 },
  { name: "Pure Life Wellness",     industry: 'fitness',    icon: '🌱', location: 'Richmond, VA',   phone: '+1 (804) 555-0678', score: 5 },
  { name: "ProPaint & Drywall",     industry: 'contractor', icon: '🖌', location: 'Fresno, CA',     phone: '+1 (559) 555-0789', score: 3 },
  { name: "Happy Paws Dog Hotel",   industry: 'pet',        icon: '🐶', location: 'Oklahoma City,OK',phone: '+1 (405) 555-0890', score: 4 },
  { name: "Olive Garden Florist",   industry: 'retail',     icon: '🌺', location: 'Tucson, AZ',     phone: '+1 (520) 555-0901', score: 3 },
  { name: "NightOwl Security",      industry: 'contractor', icon: '🔐', location: 'Long Beach, CA', phone: '+1 (562) 555-0012', score: 4 },
  { name: "Grill Master Burgers",   industry: 'restaurant', icon: '🍔', location: 'Albuquerque,NM', phone: '+1 (505) 555-0123', score: 3 },
  { name: "Vision Care Optometry",  industry: 'medical',    icon: '👁', location: 'Omaha, NE',      phone: '+1 (402) 555-0234', score: 5 },
  { name: "LashLux Studio",         industry: 'salon',      icon: '👁', location: 'Baton Rouge,LA', phone: '+1 (225) 555-0345', score: 4 },
  { name: "BrightSmile Pediatrics", industry: 'medical',    icon: '👶', location: 'Anchorage, AK',  phone: '+1 (907) 555-0456', score: 5 },
  { name: "TruckMaster Diesel",     industry: 'auto',       icon: '🚛', location: 'El Paso, TX',    phone: '+1 (915) 555-0567', score: 4 },
  { name: "Summit Trail Guides",    industry: 'fitness',    icon: '🏔', location: 'Boise, ID',      phone: '+1 (208) 555-0678', score: 4 },
  { name: "Crafted Wood & Steel",   industry: 'retail',     icon: '🪵', location: 'Knoxville, TN',  phone: '+1 (865) 555-0789', score: 4 },
  { name: "Metro Pest Control",     industry: 'contractor', icon: '🐛', location: 'Wichita, KS',    phone: '+1 (316) 555-0890', score: 3 },
  { name: "Casa Blanca Mexican",    industry: 'restaurant', icon: '🌯', location: 'Spokane, WA',    phone: '+1 (509) 555-0901', score: 3 },
  { name: "PowerShot Photography",  industry: 'retail',     icon: '📸', location: 'Madison, WI',    phone: '+1 (608) 555-0012', score: 5 },
];

/* ── Pitch Templates ──────────────────────────────── */
const SMS_PITCHES = [
  (b) => `Hi ${b.name.split(' ')[0]}! 👋 I noticed ${b.name} doesn't have a website yet — you could be missing hundreds of local customers searching online. We build stunning, affordable websites for ${b.industry} businesses. Check us out: founderos.com — I'd love to get you online this week! — Riley @ Luminary`,
  (b) => `Hey there! Riley here from Luminary 🌐 I was looking for a great ${b.industry.replace('contractor','local')} business in ${b.location.split(',')[0]} and found ${b.name} — but couldn't find your website! We specialise in exactly this. Quick, beautiful, affordable. Visit founderos.com to see our work. Can I send over a free mockup?`,
  (b) => `Hi! 👋 This is Riley from Luminary. ${b.name} came up in our local business search but you don't have a website yet. Did you know 81% of customers research online before visiting? We can fix that — fast & affordable. See what we've built at founderos.com. Interested in a free quote?`,
  (b) => `Hi ${b.name}! Riley here 🔍 I spotted your business but couldn't find you online. Customers are searching "${b.industry} near ${b.location.split(',')[0]}" right now and missing you! We build professional sites for businesses like yours starting from just $799. See examples at founderos.com — reply YES for a free consult!`,
];

const CALL_SCRIPTS = [
  (b) => `<strong>Opening:</strong> "Hi, is this ${b.name}? My name is Aria calling from Luminary — do you have 2 minutes?"<br/><br/><strong>Hook:</strong> "I was searching for ${b.industry} businesses in ${b.location.split(',')[0]} and came across your business — but I couldn't find you online. Are you currently on Google or have a website?"<br/><br/><em>[If no]</em> "That's actually why I'm calling. We help ${b.industry} businesses get online fast — I'm talking a beautiful, professional website up in as little as 5 days. We've helped over 120 businesses just like yours."<br/><br/><strong>CTA:</strong> "I'd love to send you a free mockup of what your site could look like. Could I get your email? And you can see our portfolio at <em>founderos.com</em> — no obligation at all."<br/><br/><strong>Objection — 'Too expensive':</strong> "Totally understand. Our plans start at $799 which is a one-time cost — and most of our clients see that paid back in new customers within the first month."`,
];

const EMAIL_SUBJECTS = [
  (b) => `${b.name} — You're missing customers online (free mockup inside)`,
  (b) => `Quick question for ${b.name.split(' ')[0]}`,
  (b) => `We found ${b.name} — but your customers can't 🌐`,
];

const EMAIL_BODIES = [
  (b) => `Hi ${b.name} Team,\n\nMy name is Riley, I'm on the business development team at Luminary (founderos.com).\n\nI was researching ${b.industry} businesses in ${b.location.split(',')[0]} today and came across ${b.name} — but when I went to find your website, I couldn't locate one.\n\nWith 81% of consumers researching businesses online before making contact, not having a website is costing you real customers every single day.\n\nWe build fast, beautiful, mobile-optimised websites for ${b.industry} businesses. Here's what you get:\n\n✓ Custom design that matches your brand\n✓ Google-optimised (SEO ready)\n✓ Mobile-first — looks great on any device\n✓ Live in as little as 5 days\n✓ Starting from $799\n\nI'd love to send you a free, no-obligation mockup of what your site could look like. Just reply to this email and I'll have something over to you within 24 hours.\n\nYou can also see our work at: founderos.com\n\nLooking forward to hearing from you,\n\nRiley\nLuminary / Founderos\nhello@founderos.com`,
];

/* ── State ────────────────────────────────────────── */
const PIPELINE_COLS = ['scouted','contacted','replied','interested','booked','won'];
const PIPELINE_LABELS = {
  scouted:    { title: '🔍 Scouted',   color: '#94a3b8' },
  contacted:  { title: '📤 Texted',    color: '#38bdf8' },
  replied:    { title: '↩ Replied',    color: '#fbbf24' },
  interested: { title: '⭐ Interested', color: '#a78bfa' },
  booked:     { title: '📅 Booked',    color: '#818cf8' },
  won:        { title: '🎉 Won',        color: '#22c55e' },
};

let businesses = [];
let selectedBizId = null;
let scoutActive = false;
let scoutInterval = null;
let currentPitchTab = 'sms';

const pipeline = {
  scouted:    [],
  contacted:  [],
  replied:    [],
  interested: [],
  booked:     [],
  won:        [],
};

let stats = { scouted: 0, contacted: 0, replied: 0, interested: 0, booked: 0, won: 0 };

/* ── Init ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderPipelineBoard();
  seedPipeline();
  updateStats();
  animateAgentCards();
});

/* ── Scouting Engine ──────────────────────────────── */
function startScout() {
  if (scoutActive) {
    stopScout();
    return;
  }
  scoutActive = true;
  const btn = document.getElementById('startScoutBtn');
  const icon = document.getElementById('scoutBtnIcon');
  const text = document.getElementById('scoutBtnText');
  btn.style.opacity = '0.9';
  icon.textContent = '⏳';
  text.textContent = 'Scouting… (click to stop)';

  const pool = [...BIZ_POOL].sort(() => Math.random() - 0.5);
  let idx = 0;

  scoutInterval = setInterval(() => {
    if (idx >= pool.length) {
      idx = 0;
    }
    const raw = pool[idx++];
    if (!businesses.find(b => b.name === raw.name)) {
      const biz = {
        ...raw,
        id: Date.now() + Math.random(),
        status: 'scouted',
        addedAt: new Date(),
        pitchSent: false,
      };
      businesses.unshift(biz);
      pipeline.scouted.push(biz);
      stats.scouted++;
      updateStats();
      applyFilters();
      renderPipelineBoard();
      updateLiveCount(stats.scouted);

      // auto-simulate progression after delay
      setTimeout(() => autoProgressLead(biz), 6000 + Math.random() * 12000);
    }
    // stop at 100
    if (stats.scouted >= 100) stopScout();
  }, 600);
}

function stopScout() {
  scoutActive = false;
  clearInterval(scoutInterval);
  const icon = document.getElementById('scoutBtnIcon');
  const text = document.getElementById('scoutBtnText');
  icon.textContent = '🔍';
  text.textContent = stats.scouted >= 100 ? '✓ 100 Found! Scout Again' : 'Resume Scouting';
  showToast(`✅ Scout paused — ${stats.scouted} businesses found`);
}

function updateLiveCount(n) {
  const el = document.getElementById('scoutLiveCount');
  if (el) el.textContent = n;
}

/* ── Auto lead progression (simulate replies & interest) */
function autoProgressLead(biz) {
  const roll = Math.random();
  if (roll < 0.72) {
    // Auto-send text
    sendPitchToBiz(biz, false);
    setTimeout(() => {
      if (Math.random() < 0.38) progressToReplied(biz);
    }, 5000 + Math.random() * 10000);
  }
}

function progressToReplied(biz) {
  if (biz.status === 'contacted') {
    movePipeline(biz, 'replied');
    setTimeout(() => {
      if (Math.random() < 0.5) progressToInterested(biz);
    }, 4000 + Math.random() * 8000);
  }
}

function progressToInterested(biz) {
  if (biz.status === 'replied') {
    movePipeline(biz, 'interested');
    showToast(`⭐ ${biz.name} is interested in Founderos!`);
    setTimeout(() => {
      if (Math.random() < 0.45) progressToBooked(biz);
    }, 5000 + Math.random() * 10000);
  }
}

function progressToBooked(biz) {
  if (biz.status === 'interested') {
    movePipeline(biz, 'booked');
    showToast(`📅 ${biz.name} booked a discovery call!`);
    setTimeout(() => {
      if (Math.random() < 0.6) progressToWon(biz);
    }, 6000 + Math.random() * 12000);
  }
}

function progressToWon(biz) {
  if (biz.status === 'booked') {
    movePipeline(biz, 'won');
    showToast(`🎉 ${biz.name} signed up with Founderos!`);
    updateConversionMetrics();
  }
}

function movePipeline(biz, newStatus) {
  const oldStatus = biz.status;
  pipeline[oldStatus] = pipeline[oldStatus].filter(b => b.id !== biz.id);
  biz.status = newStatus;
  pipeline[newStatus].push(biz);
  stats[newStatus] = (stats[newStatus] || 0) + 1;
  updateStats();
  renderPipelineBoard();
  applyFilters();
}

/* ── Pitch Generation ─────────────────────────────── */
function selectBusiness(id) {
  selectedBizId = id;
  const biz = businesses.find(b => b.id === id);
  if (!biz) return;

  document.querySelectorAll('.scout-biz-item').forEach(el => {
    el.classList.toggle('scout-biz-item--active', el.dataset.id == id);
  });

  document.getElementById('pitchEmpty').style.display = 'none';
  document.getElementById('pitchComposer').style.display = 'block';

  // Biz info header
  document.getElementById('pitchBizInfo').innerHTML = `
    <div class="scout-pitch-biz__icon">${biz.icon}</div>
    <div>
      <div class="scout-pitch-biz__name">${biz.name}</div>
      <div class="scout-pitch-biz__meta">${industryLabel(biz.industry)} · ${biz.location} · ${biz.phone}</div>
    </div>
    <div class="scout-pitch-biz__no-site">🚫 No Website</div>
  `;

  generatePitches(biz);
  switchPitchTab(document.querySelector('.scout-pitch-tab--active'), currentPitchTab);
}

function generatePitches(biz) {
  const smsFn   = SMS_PITCHES[Math.floor(Math.random() * SMS_PITCHES.length)];
  const emailSubFn = EMAIL_SUBJECTS[Math.floor(Math.random() * EMAIL_SUBJECTS.length)];

  document.getElementById('smsPitch').value = smsFn(biz);
  updateSmsCharCount();

  document.getElementById('callScript').innerHTML = CALL_SCRIPTS[0](biz);
  document.getElementById('emailSubject').value = emailSubFn(biz);
  document.getElementById('emailBody').value = EMAIL_BODIES[0](biz);
}

function updateSmsCharCount() {
  const len = document.getElementById('smsPitch')?.value?.length || 0;
  const el  = document.getElementById('smsCharCount');
  if (el) el.textContent = `${len} / 160 chars`;
}

document.addEventListener('input', (e) => {
  if (e.target.id === 'smsPitch') updateSmsCharCount();
});

function regeneratePitch(type) {
  const biz = businesses.find(b => b.id === selectedBizId);
  if (!biz) return;
  if (type === 'sms') {
    const fn = SMS_PITCHES[Math.floor(Math.random() * SMS_PITCHES.length)];
    document.getElementById('smsPitch').value = fn(biz);
    updateSmsCharCount();
    showToast('✦ New pitch generated!');
  }
}

function switchPitchTab(btn, tab) {
  currentPitchTab = tab;
  document.querySelectorAll('.scout-pitch-tab').forEach(b => b.classList.remove('scout-pitch-tab--active'));
  btn.classList.add('scout-pitch-tab--active');
  document.querySelectorAll('.scout-pitch-pane').forEach(p => (p.style.display = 'none'));
  document.getElementById('pane-' + tab).style.display = 'block';
}

function copyPitch(type) {
  let text = '';
  if (type === 'sms')   text = document.getElementById('smsPitch').value;
  if (type === 'call')  text = document.getElementById('callScript').innerText;
  if (type === 'email') text = document.getElementById('emailSubject').value + '\n\n' + document.getElementById('emailBody').value;
  navigator.clipboard?.writeText(text).catch(() => {});
  showToast('✓ Copied to clipboard!');
}

function sendPitch(type) {
  const biz = businesses.find(b => b.id === selectedBizId);
  if (!biz) return;
  sendPitchToBiz(biz, true);
}

function sendPitchToBiz(biz, showNotif = true) {
  if (biz.pitchSent) return;
  biz.pitchSent = true;
  movePipeline(biz, 'contacted');
  if (showNotif) {
    const channel = currentPitchTab === 'sms' ? 'SMS' : currentPitchTab === 'call' ? 'phone call' : 'email';
    showToast(`📤 Pitch sent to ${biz.name} via ${channel} — lead in pipeline`);
  }
  applyFilters();
}

/* ── Bulk Send ────────────────────────────────────── */
function sendBulkPitches() {
  const untouched = businesses.filter(b => b.status === 'scouted');
  if (!untouched.length) { showToast('No untouched businesses to text'); return; }
  untouched.forEach((biz, i) => {
    setTimeout(() => {
      sendPitchToBiz(biz, false);
    }, i * 120);
  });
  showToast(`📤 Bulk texting ${untouched.length} businesses — pitches going out now`);
}

/* ── Business List Render ─────────────────────────── */
function renderBizList(list) {
  const el = document.getElementById('bizList');
  const count = document.getElementById('bizCount');
  if (!el) return;

  if (count) count.textContent = list.length;

  if (!list.length) {
    el.innerHTML = `<div class="scout-empty-state">
      <span>🔍</span>
      <p>${businesses.length === 0 ? 'Click <strong>Start Scouting</strong> to find businesses.' : 'No businesses match your filters.'}</p>
    </div>`;
    return;
  }

  el.innerHTML = list.map(b => `
    <div class="scout-biz-item ${b.id === selectedBizId ? 'scout-biz-item--active' : ''}"
         onclick="selectBusiness(${b.id})" data-id="${b.id}">
      <div class="scout-biz-icon">${b.icon}</div>
      <div class="scout-biz-info">
        <div class="scout-biz-name">${b.name}</div>
        <div class="scout-biz-meta">
          <span>${industryLabel(b.industry)}</span>
          <span>·</span>
          <span>${b.location}</span>
          <span>·</span>
          <span>🚫 No website</span>
        </div>
      </div>
      <div class="scout-biz-right">
        <span class="scout-status-badge scout-status-badge--${b.status}">${statusLabel(b.status)}</span>
        <div class="scout-score">${Array.from({length:5}).map((_,i) =>
          `<div class="scout-score-dot ${i < b.score ? 'scout-score-dot--filled' : ''}"></div>`
        ).join('')}</div>
      </div>
    </div>
  `).join('');
}

function applyFilters() {
  const industry = document.getElementById('filterIndustry')?.value || '';
  const location = (document.getElementById('filterLocation')?.value || '').toLowerCase();
  const status   = document.getElementById('filterStatus')?.value || '';

  let filtered = businesses;
  if (industry) filtered = filtered.filter(b => b.industry === industry);
  if (location) filtered = filtered.filter(b => b.location.toLowerCase().includes(location));
  if (status)   filtered = filtered.filter(b => b.status === status);
  renderBizList(filtered);
}

function sortBusinesses(by) {
  if (by === 'newest')   businesses.sort((a,b) => b.id - a.id);
  if (by === 'industry') businesses.sort((a,b) => a.industry.localeCompare(b.industry));
  if (by === 'status')   businesses.sort((a,b) => PIPELINE_COLS.indexOf(a.status) - PIPELINE_COLS.indexOf(b.status));
  if (by === 'score')    businesses.sort((a,b) => b.score - a.score);
  applyFilters();
}

/* ── Pipeline Board ───────────────────────────────── */
function renderPipelineBoard() {
  const board = document.getElementById('pipelineBoard');
  if (!board) return;
  board.innerHTML = PIPELINE_COLS.map(col => {
    const items = pipeline[col];
    const label = PIPELINE_LABELS[col];
    return `
      <div class="pipeline-col ${col === 'won' ? 'pipeline-col--won' : ''}" id="pcol-${col}">
        <div class="pipeline-col__header">
          <div class="pipeline-col__title" style="color:${label.color}">${label.title}</div>
          <div class="pipeline-col__count">${items.length}</div>
        </div>
        <div class="pipeline-col__body" id="pcol-body-${col}">
          ${items.slice(-8).reverse().map(b => `
            <div class="pipeline-card" onclick="selectBusiness(${b.id});switchTab && switchTab('')">
              <span class="pipeline-card__icon">${b.icon}</span>
              <div class="pipeline-card__name">${b.name}</div>
              <div class="pipeline-card__meta">${b.location.split(',')[0]}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
  updateConversionMetrics();
}

function seedPipeline() {
  const seed = [
    { ...BIZ_POOL[0], id: 1001, status: 'won',        pitchSent: true },
    { ...BIZ_POOL[1], id: 1002, status: 'won',        pitchSent: true },
    { ...BIZ_POOL[2], id: 1003, status: 'booked',     pitchSent: true },
    { ...BIZ_POOL[3], id: 1004, status: 'interested', pitchSent: true },
    { ...BIZ_POOL[4], id: 1005, status: 'interested', pitchSent: true },
    { ...BIZ_POOL[5], id: 1006, status: 'replied',    pitchSent: true },
    { ...BIZ_POOL[6], id: 1007, status: 'replied',    pitchSent: true },
    { ...BIZ_POOL[7], id: 1008, status: 'contacted',  pitchSent: true },
    { ...BIZ_POOL[8], id: 1009, status: 'contacted',  pitchSent: true },
    { ...BIZ_POOL[9], id: 1010, status: 'contacted',  pitchSent: true },
  ];
  seed.forEach(b => {
    businesses.unshift(b);
    pipeline[b.status].push(b);
    stats.scouted++;
    stats[b.status] = (stats[b.status] || 0) + 1;
  });
  updateStats();
  renderPipelineBoard();
  applyFilters();
}

/* ── Stats ────────────────────────────────────────── */
function updateStats() {
  setEl('statScouted',   stats.scouted || 0);
  setEl('statContacted', stats.contacted || 0);
  setEl('statReplied',   stats.replied || 0);
  setEl('statInterested',stats.interested || 0);
  setEl('statBooked',    stats.booked || 0);
  setEl('statWon',       stats.won || 0);

  const pct = Math.min(Math.round((stats.scouted / 100) * 100), 100);
  const fill = document.getElementById('progressFill');
  if (fill) fill.style.width = pct + '%';
  const lbl = document.getElementById('progressLabel');
  if (lbl) lbl.textContent = `${stats.scouted} / 100 businesses`;

  updateLiveCount(stats.scouted);
  updateConversionMetrics();

  // Riley & Casey cards
  setEl('rileyScouted', stats.scouted);
  setEl('rileyTexted',  stats.contacted || 0);
  const replyRate = stats.contacted > 0 ? Math.round((stats.replied / stats.contacted) * 100) : 0;
  setEl('rileyRate',    replyRate);
  setEl('caseyManaged', (stats.scouted || 0));
  setEl('caseyBooked',  stats.booked || 0);
  setEl('caseyWon',     stats.won || 0);
}

function updateConversionMetrics() {
  const contacted = stats.contacted || 0;
  const won = stats.won || 0;
  const rate = contacted > 0 ? Math.round((won / contacted) * 100) : 0;
  const revenue = won * 1200;

  setEl('convRate',   rate + '%');
  setEl('projRevenue','$' + revenue.toLocaleString());
  setEl('todayWon',   won);
}

function setEl(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

/* ── Helpers ──────────────────────────────────────── */
function industryLabel(key) {
  const map = {
    restaurant: '🍽 Restaurant', salon: '✂ Salon & Spa', auto: '🚗 Auto',
    contractor: '🔧 Contractor', retail: '🛍 Retail', medical: '🏥 Medical',
    fitness: '💪 Fitness', pet: '🐾 Pet Services',
  };
  return map[key] || key;
}

function statusLabel(s) {
  const map = { scouted:'Scouted', contacted:'Texted', replied:'Replied', interested:'Interested', booked:'Booked', won:'Won 🎉' };
  return map[s] || s;
}

/* Agent card counter animations */
function animateAgentCards() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.r-mini-num[data-target]').forEach(el => {
        const t = parseInt(el.dataset.target, 10);
        animNumEl(el, t, 1400);
      });
      obs.unobserve(e.target);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.r-agent-card').forEach(c => obs.observe(c));
}

function animNumEl(el, target, dur) {
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ── Toast ────────────────────────────────────────── */
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 3200);
}
