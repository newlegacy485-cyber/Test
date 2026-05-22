/* ===================================================
   RECEPTIONIST TEAM — Interactive Dashboard
   =================================================== */

/* ── Data ─────────────────────────────────────────── */
const AGENTS = {
  aria:   { name: 'Aria',   initials: 'AR', color: 'linear-gradient(135deg,#7c3aed,#a855f7)', role: 'Lead Receptionist' },
  jordan: { name: 'Jordan', initials: 'JO', color: 'linear-gradient(135deg,#0ea5e9,#06b6d4)', role: 'Text Specialist' },
  sam:    { name: 'Sam',    initials: 'SA', color: 'linear-gradient(135deg,#f59e0b,#ef4444)', role: 'Outreach Coordinator' },
  maya:   { name: 'Maya',   initials: 'MA', color: 'linear-gradient(135deg,#22c55e,#16a34a)', role: 'Appointment Scheduler' },
  alex:   { name: 'Alex',   initials: 'AL', color: 'linear-gradient(135deg,#6366f1,#8b5cf6)', role: 'After-Hours Agent' },
};

const CLIENT_COLORS = [
  'linear-gradient(135deg,#667eea,#764ba2)',
  'linear-gradient(135deg,#f093fb,#f5576c)',
  'linear-gradient(135deg,#4facfe,#00f2fe)',
  'linear-gradient(135deg,#43e97b,#38f9d7)',
  'linear-gradient(135deg,#fa709a,#fee140)',
  'linear-gradient(135deg,#a18cd1,#fbc2eb)',
  'linear-gradient(135deg,#fda085,#f6d365)',
];

const CONVOS = [
  {
    id: 1, name: 'Sarah Lindqvist', initials: 'SL', colorIdx: 0,
    phone: '+1 (415) 555-0192', time: '2m ago', unread: true,
    preview: 'When can we schedule a call?',
    agent: 'jordan',
    messages: [
      { dir: 'in',  text: 'Hi! I saw your website and I\'m interested in a project.', time: '9:12 AM' },
      { dir: 'out', text: 'Hi Sarah! Thanks for reaching out. I\'m Jordan, your dedicated text receptionist. I\'d be happy to help! What kind of project are you thinking?', time: '9:12 AM', sender: 'Jordan' },
      { dir: 'in',  text: 'We need a complete brand refresh and new website for our fintech company.', time: '9:14 AM' },
      { dir: 'out', text: 'That sounds exciting! We specialize in exactly that. Our team has delivered several fintech rebrands. When can we schedule a discovery call with our strategist?', time: '9:14 AM', sender: 'Jordan' },
      { dir: 'in',  text: 'When can we schedule a call?', time: '9:18 AM' },
    ],
  },
  {
    id: 2, name: 'Marcus Reid', initials: 'MR', colorIdx: 1,
    phone: '+1 (646) 555-0274', time: '15m ago', unread: true,
    preview: 'Got it, I\'ll be there. Thanks!',
    agent: 'jordan',
    messages: [
      { dir: 'out', text: 'Hi Marcus! This is Jordan from Luminary. Just a reminder that your project review is tomorrow at 2 PM PST. See you then!', time: '8:45 AM', sender: 'Jordan' },
      { dir: 'in',  text: 'Oh right, thanks for the reminder!', time: '8:50 AM' },
      { dir: 'out', text: 'Of course! I\'ve sent a calendar invite to your email as well. Is there anything you\'d like to prepare for the meeting?', time: '8:51 AM', sender: 'Jordan' },
      { dir: 'in',  text: 'Got it, I\'ll be there. Thanks!', time: '9:03 AM' },
    ],
  },
  {
    id: 3, name: 'Anna Nakamura', initials: 'AN', colorIdx: 2,
    phone: '+1 (323) 555-0381', time: '1h ago', unread: true,
    preview: 'Can you send me the quote?',
    agent: 'jordan',
    messages: [
      { dir: 'in',  text: 'Hello, I\'m looking into getting an e-commerce site built. Do you work with Shopify?', time: '8:05 AM' },
      { dir: 'out', text: 'Hi Anna! Absolutely — Shopify is one of our specialties. We\'ve built premium stores with custom themes and optimized checkout flows. Can I ask what you\'re selling?', time: '8:06 AM', sender: 'Jordan' },
      { dir: 'in',  text: 'Scandinavian furniture. High end, around $50k+ average cart.', time: '8:10 AM' },
      { dir: 'out', text: 'Perfect match for our premium e-commerce work! I\'ll loop in our project team and have a proposal ready within 24 hours.', time: '8:11 AM', sender: 'Jordan' },
      { dir: 'in',  text: 'Can you send me the quote?', time: '8:30 AM' },
    ],
  },
  {
    id: 4, name: 'James Torres', initials: 'JT', colorIdx: 3,
    phone: '+1 (512) 555-0498', time: '3h ago', unread: false,
    preview: 'Sounds perfect, let\'s do it.',
    agent: 'jordan',
    messages: [
      { dir: 'out', text: 'Hi James! Sam here from Luminary. Following up on your SaaS dashboard project — are you still looking to kick off in Q1?', time: '6:00 AM', sender: 'Sam' },
      { dir: 'in',  text: 'Yes! We got the board approval. Ready to move.', time: '6:45 AM' },
      { dir: 'out', text: 'Amazing news! I\'ll have Aria call you this afternoon to kick things off. Does 3 PM work?', time: '6:46 AM', sender: 'Sam' },
      { dir: 'in',  text: 'Sounds perfect, let\'s do it.', time: '7:02 AM' },
    ],
  },
  {
    id: 5, name: 'Elena Vasquez', initials: 'EV', colorIdx: 4,
    phone: '+1 (305) 555-0521', time: '5h ago', unread: false,
    preview: 'Thank you so much!',
    agent: 'alex',
    messages: [
      { dir: 'in',  text: 'Hi, I need to reschedule my consultation. It\'s currently for tomorrow at 10 AM.', time: '2:00 AM' },
      { dir: 'out', text: 'Hi Elena! This is Alex — I\'m here even at 2 AM to help. No problem at all. What time works better for you?', time: '2:00 AM', sender: 'Alex' },
      { dir: 'in',  text: 'Could we do Thursday at 2 PM instead?', time: '2:03 AM' },
      { dir: 'out', text: 'Done! I\'ve rescheduled you to Thursday at 2 PM. You\'ll receive a confirmation text and Maya will send a reminder 24 hours before.', time: '2:03 AM', sender: 'Alex' },
      { dir: 'in',  text: 'Thank you so much!', time: '2:05 AM' },
    ],
  },
];

const CALL_LOG = [
  { icon: '📞', name: 'David Kim',       detail: 'Inbound — 4m 12s',  time: '9:15 AM',  agent: 'Aria',   type: 'in' },
  { icon: '📲', name: 'Priya Sharma',    detail: 'Outbound — 2m 48s', time: '8:58 AM',  agent: 'Aria',   type: 'out' },
  { icon: '📞', name: 'Tom Eriksson',    detail: 'Inbound — 6m 01s',  time: '8:30 AM',  agent: 'Alex',   type: 'in' },
  { icon: '📵', name: 'Unknown Caller',  detail: 'Missed — Voicemail',time: '8:12 AM',  agent: 'Aria',   type: 'missed' },
  { icon: '📲', name: 'Sarah Lindqvist', detail: 'Outbound — 1m 23s', time: 'Yesterday',agent: 'Aria',   type: 'out' },
  { icon: '📞', name: 'James Torres',    detail: 'Inbound — 11m 47s', time: 'Yesterday',agent: 'Aria',   type: 'in' },
];

const LIVE_CALLS = [
  { name: 'Michael Chen',  initials: 'MC', colorIdx: 5, detail: 'Inbound · Aria handling', duration: 134 },
  { name: 'Rachel Osei',   initials: 'RO', colorIdx: 6, detail: 'Inbound · Alex handling', duration: 42 },
];

const OUTREACH_HISTORY = [
  { to: 'Sarah Lindqvist', time: '9:10 AM', msg: 'Following up on your brand refresh inquiry from last week — are you still interested?', status: 'replied' },
  { to: 'Tom Eriksson',    time: '8:45 AM', msg: 'Your monthly project report is ready. Book a 15-min review call at your convenience.', status: 'read' },
  { to: 'Priya Sharma',    time: 'Yesterday', msg: 'New client welcome! Here\'s what to expect in the next 48 hours from our team.', status: 'sent' },
  { to: 'David Kim',       time: 'Yesterday', msg: 'Appointment reminder: Your consultation is tomorrow at 10 AM PST.', status: 'sent' },
];

const APPOINTMENTS = [
  { time: '9:00', period: 'AM', client: 'David Kim',       service: 'Brand Strategy Session',         status: 'confirmed', sms: true },
  { time: '10:30', period: 'AM', client: 'Priya Sharma',   service: 'UI/UX Design Consultation',       status: 'confirmed', sms: true },
  { time: '12:00', period: 'PM', client: 'Tom Eriksson',   service: 'Web Development Kickoff',         status: 'pending',   sms: false },
  { time: '2:00', period: 'PM', client: 'James Torres',    service: 'Project Review',                  status: 'confirmed', sms: true },
  { time: '3:30', period: 'PM', client: 'Elena Vasquez',   service: 'General Enquiry Call',            status: 'confirmed', sms: true },
];

const ACTIVITY_FEED_SEED = [
  { type: 'call',     icon: '📞', desc: '<strong>Aria</strong> answered inbound call from <strong>Michael Chen</strong>', agent: 'Aria',   time: 'Just now' },
  { type: 'sms',      icon: '💬', desc: '<strong>Jordan</strong> replied to <strong>Sarah Lindqvist</strong> in 4 seconds', agent: 'Jordan', time: '2m ago' },
  { type: 'sms',      icon: '💬', desc: 'New inbound text from <strong>Anna Nakamura</strong> assigned to <strong>Jordan</strong>', agent: 'Jordan', time: '5m ago' },
  { type: 'appt',     icon: '📅', desc: '<strong>Maya</strong> booked appointment for <strong>Elena Vasquez</strong> — Thu 2 PM', agent: 'Maya',   time: '12m ago' },
  { type: 'outreach', icon: '📤', desc: '<strong>Sam</strong> sent follow-up to <strong>James Torres</strong> — replied ✓', agent: 'Sam',    time: '18m ago' },
  { type: 'call',     icon: '📞', desc: '<strong>Aria</strong> answered inbound call from <strong>David Kim</strong> — 4m 12s', agent: 'Aria',   time: '25m ago' },
  { type: 'outreach', icon: '📤', desc: '<strong>Sam</strong> sent appointment reminder to <strong>Tom Eriksson</strong>', agent: 'Sam',    time: '32m ago' },
  { type: 'sms',      icon: '💬', desc: '<strong>Alex</strong> replied to <strong>Elena Vasquez</strong> at 2 AM', agent: 'Alex',   time: '7h ago' },
  { type: 'call',     icon: '📲', desc: '<strong>Aria</strong> initiated outbound call to <strong>Priya Sharma</strong>', agent: 'Aria',   time: '8h ago' },
  { type: 'appt',     icon: '📅', desc: '<strong>Maya</strong> sent confirmation & reminder to <strong>James Torres</strong>', agent: 'Maya',   time: '9h ago' },
];

const TEMPLATES = {
  followup:  'Hi {name}! This is {agent} from Luminary. I wanted to follow up after our recent conversation — do you have any questions or would you like to schedule a quick call?',
  reminder:  'Hi {name}! A friendly reminder that your appointment is scheduled for {date} at {time}. Reply CONFIRM to confirm or RESCHEDULE to change it.',
  welcome:   'Welcome to Luminary, {name}! 🎉 I\'m {agent}, your dedicated receptionist. I\'m here to help with anything you need — calls, texts, or scheduling. Don\'t hesitate to reach out!',
  checkin:   'Hi {name}! It\'s {agent} from Luminary. Just checking in this month — how\'s everything going? Is there anything our team can help you with?',
  promo:     'Hi {name}! {agent} here from Luminary. We\'re running a special this month for existing clients — 15% off any new project scope. Interested in learning more?',
};

/* ── State ───────────────────────────────────────── */
let activeConvoId = null;
let callTimerIntervals = {};
let activityTimerInterval = null;
let currentFeedFilter = 'all';
let activityLog = [...ACTIVITY_FEED_SEED];
let liveCallTimers = {};
let callModalTimer = null;
let callModalSeconds = 0;
let isOnCall = false;

/* ── Init ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  animateHeroCounters();
  animateAgentCounters();
  renderConvos();
  renderCallLog();
  renderLiveCalls();
  renderOutreachHistory();
  renderAppointments();
  renderActivityFeed();
  startLiveCallTimers();
  startActivityStream();
  startHeroCounterIncrement();

  const outMsg = document.getElementById('outMessage');
  if (outMsg) outMsg.addEventListener('input', updateCharCount);
});

/* ── Hero Counters ───────────────────────────────── */
function animateHeroCounters() {
  animateNum('cntCalls',    47,  1800);
  animateNum('cntTexts',    124, 2000);
  animateNum('cntOutreach', 31,  1600);
}

function animateNum(id, target, duration) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* Agent card mini-counters */
function animateAgentCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.r-mini-num').forEach(el => {
        const t = parseInt(el.dataset.target, 10);
        animateNumEl(el, t, 1400);
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.r-agent-card').forEach(card => observer.observe(card));
}

function animateNumEl(el, target, duration) {
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function startHeroCounterIncrement() {
  let calls = 47, texts = 124, outreach = 31;
  setInterval(() => {
    if (Math.random() < 0.3) {
      calls++;
      const el = document.getElementById('cntCalls');
      if (el) { el.textContent = calls; flash(el); }
    }
    if (Math.random() < 0.5) {
      texts++;
      const el = document.getElementById('cntTexts');
      if (el) { el.textContent = texts; flash(el); }
    }
    if (Math.random() < 0.2) {
      outreach++;
      const el = document.getElementById('cntOutreach');
      if (el) { el.textContent = outreach; flash(el); }
    }
  }, 4000);
}

function flash(el) {
  el.style.transition = 'opacity 0.15s';
  el.style.opacity = '0.4';
  setTimeout(() => { el.style.opacity = '1'; }, 150);
}

/* ── Tabs ────────────────────────────────────────── */
function switchTab(tab) {
  document.querySelectorAll('.r-tab').forEach(t => {
    t.classList.toggle('r-tab--active', t.dataset.tab === tab);
  });
  document.querySelectorAll('.r-panel').forEach(p => {
    p.style.display = 'none';
    p.classList.remove('r-panel--active');
  });
  const panel = document.getElementById('panel-' + tab);
  if (panel) {
    panel.style.display = tab === 'texts' ? 'flex' : (tab === 'activity' ? 'flex' : 'flex');
    panel.classList.add('r-panel--active');
  }
}

/* ── Text Inbox ──────────────────────────────────── */
function renderConvos(filter = '') {
  const el = document.getElementById('convos');
  if (!el) return;
  const lower = filter.toLowerCase();
  const filtered = CONVOS.filter(c =>
    !lower || c.name.toLowerCase().includes(lower) || c.preview.toLowerCase().includes(lower)
  );
  el.innerHTML = filtered.map(c => `
    <div class="r-convo ${c.id === activeConvoId ? 'r-convo--active' : ''}"
         onclick="openConvo(${c.id})" id="convo-${c.id}">
      <div class="r-convo__avatar" style="background:${CLIENT_COLORS[c.colorIdx]}">${c.initials}</div>
      <div class="r-convo__body">
        <div class="r-convo__name">
          ${c.name}
          <span class="r-convo__time">${c.time}</span>
        </div>
        <div class="r-convo__preview">${c.preview}</div>
      </div>
      ${c.unread ? '<div class="r-convo__unread"></div>' : ''}
    </div>
  `).join('');
}

function filterConvos(val) {
  renderConvos(val);
}

function openConvo(id) {
  activeConvoId = id;
  const c = CONVOS.find(x => x.id === id);
  if (!c) return;

  c.unread = false;
  renderConvos(document.getElementById('searchTexts')?.value || '');

  document.getElementById('chatAvatar').style.background = CLIENT_COLORS[c.colorIdx];
  document.getElementById('chatAvatar').textContent = c.initials;
  document.getElementById('chatName').textContent = c.name;
  document.getElementById('chatSub').textContent = c.phone + ' · Handled by ' + AGENTS[c.agent].name;
  document.getElementById('chatHeaderActions').style.display = 'flex';
  document.getElementById('chatCompose').style.display = 'block';

  renderMessages(c);

  const badge = document.getElementById('badge-texts');
  const unreadCount = CONVOS.filter(x => x.unread).length;
  if (badge) badge.textContent = unreadCount || '';
  if (badge) badge.style.display = unreadCount ? 'inline-flex' : 'none';
}

function renderMessages(convo) {
  const el = document.getElementById('chatMessages');
  if (!el) return;
  el.innerHTML = convo.messages.map(m => `
    <div class="r-msg r-msg--${m.dir === 'in' ? 'inbound' : 'outbound'}">
      ${m.dir === 'out' ? `<div class="r-msg__sender">${m.sender}</div>` : ''}
      <div class="r-msg__bubble">${m.text}</div>
      <div class="r-msg__meta">${m.time}</div>
    </div>
  `).join('');
  el.scrollTop = el.scrollHeight;
}

function sendMessage(e) {
  e.preventDefault();
  const input = document.getElementById('msgInput');
  const text = input.value.trim();
  if (!text || activeConvoId === null) return;

  const convo = CONVOS.find(c => c.id === activeConvoId);
  if (!convo) return;

  const agent = AGENTS[convo.agent];
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

  convo.messages.push({ dir: 'out', text, time, sender: agent.name });
  convo.preview = text;
  convo.time = 'Just now';
  renderMessages(convo);
  renderConvos(document.getElementById('searchTexts')?.value || '');
  input.value = '';

  addFeedItem({ type: 'sms', icon: '💬',
    desc: `<strong>${agent.name}</strong> replied to <strong>${convo.name}</strong>`,
    agent: agent.name, time: 'Just now' });

  showToast(`✓ Sent by ${agent.name}`);

  setTimeout(() => simulateInboundReply(convo), 3000 + Math.random() * 3000);
}

function simulateInboundReply(convo) {
  const replies = [
    'Thank you, that\'s really helpful!',
    'Sounds great, looking forward to it.',
    'Could you also send me your portfolio?',
    'Perfect. I\'ll get back to you shortly.',
    'Awesome! Let\'s move forward.',
  ];
  const text = replies[Math.floor(Math.random() * replies.length)];
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  convo.messages.push({ dir: 'in', text, time });
  convo.preview = text;
  convo.unread = true;
  convo.time = 'Just now';

  if (activeConvoId === convo.id) {
    renderMessages(convo);
  }
  renderConvos(document.getElementById('searchTexts')?.value || '');

  const badge = document.getElementById('badge-texts');
  const unreadCount = CONVOS.filter(x => x.unread).length;
  if (badge) { badge.textContent = unreadCount; badge.style.display = 'inline-flex'; }

  showToast(`📩 New reply from ${convo.name}`);
}

function quickReply(text) {
  document.getElementById('msgInput').value = text;
  document.getElementById('msgInput').focus();
}

function aiSuggest() {
  const convo = CONVOS.find(c => c.id === activeConvoId);
  if (!convo) return;
  const suggestions = [
    `Hi ${convo.name.split(' ')[0]}! I\'d be happy to help with that. Could you share a bit more about your timeline and budget?`,
    `Absolutely! Let me check our availability and get back to you within the hour.`,
    `Great question! I\'ll loop in the right person from our team and we\'ll be in touch shortly.`,
    `Thanks for your patience! I\'ve noted your request and our team will follow up today.`,
  ];
  document.getElementById('msgInput').value = suggestions[Math.floor(Math.random() * suggestions.length)];
  document.getElementById('msgInput').focus();
  showToast('✦ AI suggestion ready — review and send!');
}

/* ── Calls ───────────────────────────────────────── */
function renderCallLog() {
  const el = document.getElementById('callLog');
  if (!el) return;
  el.innerHTML = CALL_LOG.map(c => `
    <div class="r-call-entry">
      <div class="r-call-entry__icon">${c.icon}</div>
      <div class="r-call-entry__info">
        <div class="r-call-entry__name">${c.name}</div>
        <div class="r-call-entry__detail">${c.detail}</div>
      </div>
      <span class="r-call-entry__time">${c.time}</span>
      <span class="r-call-entry__agent">${c.agent}</span>
    </div>
  `).join('');
}

function renderLiveCalls() {
  const el = document.getElementById('liveCalls');
  if (!el) return;
  if (LIVE_CALLS.length === 0) {
    el.innerHTML = '<p style="font-size:0.85rem;color:var(--text-3);padding:8px 0">No active calls right now.</p>';
    return;
  }
  el.innerHTML = LIVE_CALLS.map((c, i) => `
    <div class="r-live-call" id="liveCall-${i}">
      <div class="r-live-call__avatar" style="background:${CLIENT_COLORS[c.colorIdx]}">${c.initials}</div>
      <div class="r-live-call__info">
        <div class="r-live-call__name">${c.name}</div>
        <div class="r-live-call__detail">${c.detail}</div>
      </div>
      <div class="r-live-call__timer" id="liveTimer-${i}">${formatTime(c.duration)}</div>
      <div class="r-live-call__actions">
        <button onclick="joinCall(${i})">Join</button>
        <button onclick="transferCall(${i})">Transfer</button>
      </div>
    </div>
  `).join('');
}

function startLiveCallTimers() {
  LIVE_CALLS.forEach((c, i) => {
    liveCallTimers[i] = setInterval(() => {
      c.duration++;
      const el = document.getElementById('liveTimer-' + i);
      if (el) el.textContent = formatTime(c.duration);
    }, 1000);
  });
}

function formatTime(secs) {
  const m = Math.floor(secs / 60).toString().padStart(2, '0');
  const s = (secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function initiateCall() {
  const num  = document.getElementById('dialNumber').value.trim();
  const name = document.getElementById('dialName').value.trim() || num;
  if (!num) { showToast('⚠️ Please enter a phone number'); return; }
  openCallModal(name, num, 'Aria is dialling…', 'linear-gradient(135deg,#7c3aed,#a855f7)', 'AR');
  document.getElementById('dialNumber').value = '';
  document.getElementById('dialName').value = '';
}

function simulateCall() {
  const convo = CONVOS.find(c => c.id === activeConvoId);
  if (!convo) return;
  openCallModal(convo.name, convo.phone, 'Aria is connecting…', CLIENT_COLORS[convo.colorIdx], convo.initials);
}

function joinCall(idx) {
  const c = LIVE_CALLS[idx];
  openCallModal(c.name, 'Live call', 'Joining call…', CLIENT_COLORS[c.colorIdx], c.initials);
}

function transferCall(idx) {
  showToast(`📲 Transferring ${LIVE_CALLS[idx].name}'s call to voicemail…`);
}

function openCallModal(name, sub, statusText, color, initials) {
  document.getElementById('callModalName').textContent = name;
  document.getElementById('callModalSub').textContent = statusText;
  const av = document.getElementById('callModalAvatar');
  av.style.background = color;
  av.textContent = initials;
  document.getElementById('callModal').style.display = 'flex';
  document.getElementById('callTimer').style.display = 'none';
  isOnCall = false;
  callModalSeconds = 0;

  setTimeout(() => {
    document.getElementById('callModalSub').textContent = 'Connected — call in progress';
    document.getElementById('callTimer').style.display = 'block';
    isOnCall = true;
    callModalTimer = setInterval(() => {
      callModalSeconds++;
      document.getElementById('callTimer').textContent = formatTime(callModalSeconds);
    }, 1000);
  }, 1500);
}

function closeCallModal() {
  clearInterval(callModalTimer);
  document.getElementById('callModal').style.display = 'none';
}

function endCall() {
  const name = document.getElementById('callModalName').textContent;
  const dur  = formatTime(callModalSeconds);
  clearInterval(callModalTimer);
  document.getElementById('callModal').style.display = 'none';
  showToast(`📵 Call ended with ${name} — ${dur}`);
  CALL_LOG.unshift({ icon: '📞', name, detail: `Inbound — ${dur}`, time: 'Just now', agent: 'Aria', type: 'in' });
  renderCallLog();
  addFeedItem({ type: 'call', icon: '📞',
    desc: `<strong>Aria</strong> finished call with <strong>${name}</strong> — ${dur}`,
    agent: 'Aria', time: 'Just now' });
}

function toggleMute(btn) {
  btn.classList.toggle('r-call-btn--active');
  btn.textContent = btn.classList.contains('r-call-btn--active') ? '🔇 Muted' : '🎙 Mute';
}

function toggleHold(btn) {
  btn.classList.toggle('r-call-btn--active');
  btn.textContent = btn.classList.contains('r-call-btn--active') ? '▶ Resume' : '⏸ Hold';
}

/* ── Outreach ─────────────────────────────────────── */
function selectChannel(btn, ch) {
  document.querySelectorAll('.r-ch-btn').forEach(b => b.classList.remove('r-ch-btn--active'));
  btn.classList.add('r-ch-btn--active');
}

function removeChip(btn) {
  btn.closest('.r-chip').remove();
}

function addRecipient(e) {
  if (e.key !== 'Enter' && e.key !== ',') return;
  e.preventDefault();
  const val = e.target.value.trim().replace(/,$/, '');
  if (!val) return;
  const chip = document.createElement('span');
  chip.className = 'r-chip';
  chip.innerHTML = `${val} <button onclick="removeChip(this)">×</button>`;
  document.getElementById('recipientsList').insertBefore(chip, e.target);
  e.target.value = '';
}

function loadTemplate(key) {
  if (!key) return;
  const tpl = TEMPLATES[key] || '';
  document.getElementById('outMessage').value = tpl;
  updateCharCount();
}

function updateCharCount() {
  const len = (document.getElementById('outMessage')?.value || '').length;
  const el  = document.getElementById('charCount');
  if (el) el.textContent = `${len} / 160`;
}

function toggleSched(radio) {
  const schedTime = document.getElementById('schedTime');
  if (schedTime) schedTime.style.display = radio.value === 'later' ? 'block' : 'none';
}

function aiOutreach() {
  const msgs = [
    'Hi {name}! Following up on our recent conversation — any questions I can help answer? We\'d love to move forward on your project.',
    'Hey {name}! Just checking in. Our team has some exciting ideas for your brand — would love to share them on a quick call this week.',
    'Hi {name}! Your project proposal is ready. I\'d love to walk you through it — can we find 20 minutes this week?',
  ];
  document.getElementById('outMessage').value = msgs[Math.floor(Math.random() * msgs.length)];
  updateCharCount();
  showToast('✦ AI-written message ready — personalize and send!');
}

function previewMessage() {
  const msg = document.getElementById('outMessage').value.trim();
  if (!msg) { showToast('⚠️ Write a message first'); return; }
  showToast(`Preview: "${msg.substring(0, 80)}${msg.length > 80 ? '…' : ''}"`);
}

function sendOutreach() {
  const msg = document.getElementById('outMessage').value.trim();
  const chips = document.querySelectorAll('#recipientsList .r-chip');
  if (!msg) { showToast('⚠️ Please write a message'); return; }
  if (!chips.length) { showToast('⚠️ Please add at least one recipient'); return; }

  const recipients = Array.from(chips).map(c => c.textContent.replace('×', '').trim());
  const ch = document.querySelector('.r-ch-btn--active')?.dataset.ch || 'sms';
  const channelLabel = ch === 'sms' ? '💬 SMS' : ch === 'call' ? '📞 Call' : '✉ Email';

  recipients.forEach(name => {
    OUTREACH_HISTORY.unshift({
      to: name, time: 'Just now',
      msg: msg.substring(0, 100) + (msg.length > 100 ? '…' : ''),
      status: 'sent',
    });
    addFeedItem({ type: 'outreach', icon: '📤',
      desc: `<strong>Sam</strong> sent ${channelLabel} outreach to <strong>${name}</strong>`,
      agent: 'Sam', time: 'Just now' });
  });

  renderOutreachHistory();
  document.getElementById('outMessage').value = '';
  updateCharCount();
  showToast(`✓ Outreach sent to ${recipients.length} client${recipients.length > 1 ? 's' : ''} via ${channelLabel}`);
}

function renderOutreachHistory() {
  const el = document.getElementById('outreachHistory');
  if (!el) return;
  el.innerHTML = OUTREACH_HISTORY.slice(0, 8).map(h => `
    <div class="r-history-item">
      <div class="r-history-item__header">
        <span class="r-history-item__to">${h.to}</span>
        <span class="r-history-item__time">${h.time}</span>
      </div>
      <div class="r-history-item__msg">${h.msg}</div>
      <span class="r-history-item__status r-history-item__status--${h.status}">
        ${h.status === 'sent' ? '✓ Sent' : h.status === 'read' ? '👁 Read' : '↩ Replied'}
      </span>
    </div>
  `).join('');
}

/* ── Appointments ────────────────────────────────── */
function renderAppointments() {
  const el = document.getElementById('apptList');
  if (!el) return;
  el.innerHTML = APPOINTMENTS.map((a, i) => `
    <div class="r-appt-item">
      <div class="r-appt-item__time">
        <div class="r-appt-item__hour">${a.time}</div>
        <div class="r-appt-item__period">${a.period}</div>
      </div>
      <div class="r-appt-item__div"></div>
      <div class="r-appt-item__info">
        <div class="r-appt-item__client">${a.client}</div>
        <div class="r-appt-item__service">${a.service}</div>
      </div>
      <div class="r-appt-item__badges">
        <span class="r-appt-badge r-appt-badge--${a.status}">${a.status === 'confirmed' ? '✓ Confirmed' : '⏳ Pending'}</span>
        ${a.sms ? '<span class="r-appt-badge r-appt-badge--sms">💬 SMS</span>' : ''}
      </div>
      <div class="r-appt-item__actions">
        <button onclick="callAppt(${i})">📞 Call</button>
        <button onclick="textAppt(${i})">💬 Text</button>
        <button onclick="reschedAppt(${i})">↻ Resched</button>
      </div>
    </div>
  `).join('');
}

function bookAppt(e) {
  e.preventDefault();
  const name    = document.getElementById('bookName').value.trim();
  const timeVal = document.getElementById('bookTime').value;
  const service = document.getElementById('bookService').value;
  if (!name || !timeVal) return;

  const dt = new Date(timeVal);
  const hr = dt.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  const [t, p] = hr.split(' ');

  APPOINTMENTS.push({ time: t, period: p, client: name, service, status: 'confirmed', sms: true });
  renderAppointments();

  addFeedItem({ type: 'appt', icon: '📅',
    desc: `<strong>Maya</strong> booked <strong>${name}</strong> for ${service}`,
    agent: 'Maya', time: 'Just now' });

  showToast(`✓ Appointment booked for ${name} — SMS confirmation sent`);
  e.target.reset();
}

function callAppt(idx) {
  const a = APPOINTMENTS[idx];
  openCallModal(a.client, 'Calling client…', 'Aria is dialling…', CLIENT_COLORS[idx % CLIENT_COLORS.length], a.client.split(' ').map(w => w[0]).join('').substring(0, 2));
}

function textAppt(idx) {
  const a = APPOINTMENTS[idx];
  switchTab('texts');
  showToast(`💬 Opening text to ${a.client}`);
}

function reschedAppt(idx) {
  const a = APPOINTMENTS[idx];
  a.status = 'pending';
  renderAppointments();
  showToast(`↻ Reschedule request sent to ${a.client}`);
}

/* ── Activity Feed ───────────────────────────────── */
function renderActivityFeed(filter) {
  const el = document.getElementById('activityFeed');
  if (!el) return;
  const items = filter && filter !== 'all' ? activityLog.filter(i => i.type === filter) : activityLog;
  el.innerHTML = items.slice(0, 20).map(item => `
    <div class="r-feed-item" data-type="${item.type}">
      <div class="r-feed-item__icon r-feed-item__icon--${item.type}">${item.icon}</div>
      <div class="r-feed-item__body">
        <div class="r-feed-item__desc">${item.desc}</div>
        <div class="r-feed-item__agent">by ${item.agent}</div>
      </div>
      <div class="r-feed-item__time">${item.time}</div>
    </div>
  `).join('');
}

function filterFeed(btn, filter) {
  currentFeedFilter = filter;
  document.querySelectorAll('.r-filter-btn').forEach(b => b.classList.remove('r-filter-btn--active'));
  btn.classList.add('r-filter-btn--active');
  renderActivityFeed(filter);
}

function addFeedItem(item) {
  activityLog.unshift(item);
  if (activityLog.length > 50) activityLog.pop();
  if (document.getElementById('panel-activity')?.classList.contains('r-panel--active')) {
    renderActivityFeed(currentFeedFilter);
  }
}

function startActivityStream() {
  const autoEvents = [
    () => ({ type: 'sms',      icon: '💬', desc: `<strong>Jordan</strong> replied to an inbound text in <strong>6 seconds</strong>`, agent: 'Jordan', time: 'Just now' }),
    () => ({ type: 'call',     icon: '📞', desc: `<strong>Aria</strong> answered inbound call from a new prospect`, agent: 'Aria', time: 'Just now' }),
    () => ({ type: 'outreach', icon: '📤', desc: `<strong>Sam</strong> sent a follow-up reminder to a client`, agent: 'Sam', time: 'Just now' }),
    () => ({ type: 'appt',     icon: '📅', desc: `<strong>Maya</strong> confirmed an appointment via SMS`, agent: 'Maya', time: 'Just now' }),
    () => ({ type: 'call',     icon: '📲', desc: `<strong>Alex</strong> handled an after-hours enquiry`, agent: 'Alex', time: 'Just now' }),
  ];

  setInterval(() => {
    const fn = autoEvents[Math.floor(Math.random() * autoEvents.length)];
    addFeedItem(fn());
  }, 7000);
}

/* ── Panel quick-open from agent cards ──────────── */
function openPanel(tab, agent) {
  document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => switchTab(tab), 500);
}

/* ── Toast ───────────────────────────────────────── */
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('show'), 3200);
}
