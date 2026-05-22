/* ===================================================
   OWNER ADMIN — Full Command Center Logic
   =================================================== */

/* ── PIN Gate ─────────────────────────────────────── */
let pinBuffer = '';
let ownerPin  = localStorage.getItem('ownerPin') || '1234';
let pinAttempts = 0;

function pinKey(key) {
  if (key === 'clr') { pinBuffer = pinBuffer.slice(0, -1); }
  else if (key === 'ok' || pinBuffer.length >= 4) {
    if (key !== 'ok' && key !== 'clr') pinBuffer += key;
    verifyPin();
    return;
  } else { pinBuffer += key; }
  updatePinDisplay();
}

function updatePinDisplay() {
  for (let i = 1; i <= 4; i++) {
    const dot = document.getElementById('p' + i);
    if (dot) dot.classList.toggle('pin-dot--filled', i <= pinBuffer.length);
  }
}

function verifyPin() {
  if (pinBuffer === ownerPin) {
    document.getElementById('accessGate').style.display = 'none';
    document.getElementById('adminShell').style.display = 'flex';
    initAdmin();
    logAccess('✅ Owner login successful');
  } else {
    pinAttempts++;
    for (let i = 1; i <= 4; i++) {
      const dot = document.getElementById('p' + i);
      if (dot) { dot.classList.remove('pin-dot--filled'); dot.classList.add('pin-dot--error'); }
    }
    setTimeout(() => {
      for (let i = 1; i <= 4; i++) {
        const dot = document.getElementById('p' + i);
        if (dot) dot.classList.remove('pin-dot--error');
      }
    }, 600);
    pinBuffer = '';
    showToast(`❌ Incorrect PIN${pinAttempts >= 3 ? ' — Hint: 1234' : ''}`);
  }
}

function lockAdmin() {
  document.getElementById('adminShell').style.display = 'none';
  document.getElementById('accessGate').style.display = 'flex';
  pinBuffer = '';
  updatePinDisplay();
  logAccess('🔒 Owner logged out');
}

/* ── Theme ────────────────────────────────────────── */
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  const themeIcon = themeToggle.querySelector('.theme-toggle__icon');
  const applyTheme = (t) => {
    document.documentElement.setAttribute('data-theme', t);
    if (themeIcon) themeIcon.textContent = t === 'light' ? '☽' : '☀';
    localStorage.setItem('theme', t);
  };
  applyTheme(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme:light)').matches ? 'light' : 'dark'));
  themeToggle.addEventListener('click', () => {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });
}

/* ── Init Admin ───────────────────────────────────── */
function initAdmin() {
  startClock();
  animateOverviewStats();
  renderAgentStatus();
  renderPipelineSnapshot();
  renderChannelBreakdown();
  startAdminFeed();
  renderAgentsGrid();
  renderLeadsTable();
  renderClientsWon();
  renderChannelConfig();
  renderApiGrid();
  renderPitchTemplates();
  renderAnalytics();
  renderRevenue();
  renderIndustryChecks();
  renderNotifToggles();
  renderAccessLog();
  renderRevenueTable();
}

/* ── Clock ────────────────────────────────────────── */
function startClock() {
  const tick = () => {
    const el = document.getElementById('adminTime');
    if (el) el.textContent = new Date().toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
  };
  tick();
  setInterval(tick, 1000);
}

/* ── Section Navigation ───────────────────────────── */
function showSection(id) {
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('admin-section--active'));
  document.querySelectorAll('.admin-nav__item').forEach(i => i.classList.remove('admin-nav__item--active'));

  const sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('admin-section--active');

  document.querySelectorAll('.admin-nav__item').forEach(item => {
    if (item.getAttribute('onclick')?.includes(`'${id}'`)) item.classList.add('admin-nav__item--active');
  });

  const titles = {
    overview:'Dashboard', analytics:'Analytics & Performance', revenue:'Revenue Tracker',
    agents:'Manage Agents', leads:'All Leads', clients:'Clients Won',
    channels:'Channel Config', apis:'API Connections', pitches:'Pitch Templates',
    business:'Business Settings', targets:'Scout Targets',
    notifications:'Notifications', security:'Security & PIN',
  };
  const el = document.getElementById('topbarTitle');
  if (el) el.textContent = titles[id] || id;

  // Close mobile sidebar
  document.getElementById('adminSidebar')?.classList.remove('mobile-open');
}

function toggleSidebar() {
  const sb = document.getElementById('adminSidebar');
  if (!sb) return;
  if (window.innerWidth <= 900) {
    sb.classList.toggle('mobile-open');
  } else {
    sb.classList.toggle('collapsed');
  }
}

/* ── Overview Stats ───────────────────────────────── */
const OV_TARGETS = { calls:47, texts:124, social:89, scouted:12, won:2 };

function animateOverviewStats() {
  animNum('ov-calls',   OV_TARGETS.calls,   1600);
  animNum('ov-texts',   OV_TARGETS.texts,   1800);
  animNum('ov-social',  OV_TARGETS.social,  1400);
  animNum('ov-scouted', OV_TARGETS.scouted, 1200);
  animNum('ov-won',     OV_TARGETS.won,     1000);
  setTimeout(() => {
    setEl('ov-revenue', `$${(OV_TARGETS.won * 1200).toLocaleString()} revenue`);
    setEl('rev-today',  `$${(OV_TARGETS.won * 1200).toLocaleString()}`);
    setEl('rev-month',  `$${(OV_TARGETS.won * 1200 * 8).toLocaleString()}`);
    setEl('rev-pipeline','$' + (7 * 1200).toLocaleString());
  }, 1200);
  // live increment
  setInterval(() => {
    OV_TARGETS.texts += Math.random() < 0.5 ? 1 : 0;
    OV_TARGETS.social += Math.random() < 0.4 ? 1 : 0;
    setEl('ov-texts',  OV_TARGETS.texts);
    setEl('ov-social', OV_TARGETS.social);
  }, 5000);
}

function animNum(id, target, dur) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ── Agent Status ─────────────────────────────────── */
const AGENTS_DATA = [
  { initials:'AR', name:'Aria',   role:'Lead Receptionist',  grad:'linear-gradient(135deg,#7c3aed,#a855f7)', metric:'47 calls',   today:'47 calls today'  },
  { initials:'JO', name:'Jordan', role:'Text Specialist',     grad:'linear-gradient(135deg,#0ea5e9,#06b6d4)', metric:'124 texts',  today:'124 texts today' },
  { initials:'SA', name:'Sam',    role:'Outreach Coordinator',grad:'linear-gradient(135deg,#f59e0b,#ef4444)', metric:'31 reached', today:'31 outreach'     },
  { initials:'MA', name:'Maya',   role:'Appointment Scheduler',grad:'linear-gradient(135deg,#22c55e,#16a34a)',metric:'19 booked',  today:'19 booked'       },
  { initials:'AL', name:'Alex',   role:'After-Hours Agent',   grad:'linear-gradient(135deg,#6366f1,#8b5cf6)', metric:'24/7',       today:'Always on'       },
  { initials:'MO', name:'Morgan', role:'Social DM Specialist',grad:'linear-gradient(135deg,#E1306C,#F77737)', metric:'89 DMs',     today:'89 DMs today'    },
  { initials:'DR', name:'Drew',   role:'LinkedIn Outreach',   grad:'linear-gradient(135deg,#0A66C2,#0ea5e9)', metric:'34 msgs',    today:'34 LI msgs'      },
  { initials:'RI', name:'Riley',  role:'Business Scout',      grad:'linear-gradient(135deg,#f59e0b,#ec4899)', metric:'12 scouted', today:'12 scouted'      },
  { initials:'CA', name:'Casey',  role:'Pipeline Manager',    grad:'linear-gradient(135deg,#06b6d4,#3b82f6)', metric:'2 won',      today:'2 closed'        },
];

function renderAgentStatus() {
  const el = document.getElementById('agentStatusList');
  if (!el) return;
  el.innerHTML = AGENTS_DATA.map((a, i) => `
    <div class="agent-status-item">
      <div class="agent-status-item__avatar" style="background:${a.grad}">
        ${a.initials}
        <div class="agent-status-item__dot agent-status-item__dot--online"></div>
      </div>
      <div class="agent-status-item__info">
        <div class="agent-status-item__name">${a.name}</div>
        <div class="agent-status-item__role">${a.role}</div>
      </div>
      <div class="agent-status-item__metric">${a.metric}</div>
      <button class="agent-toggle" id="toggle-ov-${i}" onclick="toggleAgentOv(${i},this)" title="Enable/Disable"></button>
    </div>
  `).join('');
}

function toggleAgentOv(i, btn) {
  btn.classList.toggle('agent-toggle--off');
  const name = AGENTS_DATA[i].name;
  const on = !btn.classList.contains('agent-toggle--off');
  showToast(`${on ? '✅' : '⏸'} ${name} ${on ? 'activated' : 'paused'}`);
}

/* ── Pipeline Snapshot ────────────────────────────── */
const PIPE_DATA = [
  { label:'Scouted',   count:12, max:100, color:'#94a3b8' },
  { label:'Reached',   count:9,  max:100, color:'#38bdf8' },
  { label:'Replied',   count:5,  max:100, color:'#fbbf24' },
  { label:'Interested',count:4,  max:100, color:'#a78bfa' },
  { label:'Booked',    count:2,  max:100, color:'#818cf8' },
  { label:'Won',       count:2,  max:100, color:'#22c55e' },
];

function renderPipelineSnapshot() {
  const el = document.getElementById('pipelineSnapshot');
  if (!el) return;
  el.innerHTML = PIPE_DATA.map(p => `
    <div class="pipeline-snap-item">
      <div class="pipeline-snap-item__label" style="color:${p.color}">${p.label}</div>
      <div class="pipeline-snap-item__bar">
        <div class="pipeline-snap-item__fill" style="width:${(p.count/p.max)*100}%;background:${p.color}"></div>
      </div>
      <div class="pipeline-snap-item__count" style="color:${p.color}">${p.count}</div>
    </div>
  `).join('');
}

/* ── Channel Breakdown ────────────────────────────── */
const CHANNEL_DATA = [
  { icon:'💬', label:'SMS / Text',  count:124, pct:82, color:'#22c55e' },
  { icon:'🔵', label:'Facebook',    count:89,  pct:68, color:'#1877F2' },
  { icon:'📷', label:'Instagram',   count:67,  pct:55, color:'#E1306C' },
  { icon:'🔷', label:'LinkedIn',    count:34,  pct:40, color:'#0A66C2' },
  { icon:'🐦', label:'X / Twitter', count:28,  pct:35, color:'#1DA1F2' },
  { icon:'🟢', label:'WhatsApp',    count:21,  pct:30, color:'#25D366' },
  { icon:'📞', label:'Phone Calls', count:47,  pct:72, color:'#a78bfa' },
];

function renderChannelBreakdown() {
  const el = document.getElementById('channelBreakdown');
  if (!el) return;
  el.innerHTML = CHANNEL_DATA.map(c => `
    <div class="channel-bar-item">
      <div class="channel-bar-item__icon">${c.icon}</div>
      <div class="channel-bar-item__label">${c.label}</div>
      <div class="channel-bar-item__bar">
        <div class="channel-bar-item__fill" style="width:${c.pct}%;background:${c.color}"></div>
      </div>
      <div class="channel-bar-item__num" style="color:${c.color}">${c.count}</div>
    </div>
  `).join('');
}

/* ── Admin Feed ───────────────────────────────────── */
const FEED_SEED = [
  { icon:'📞', text:'<strong>Aria</strong> answered inbound call from <strong>David Kim</strong> — 4m 12s', time:'2m ago' },
  { icon:'💬', text:'<strong>Jordan</strong> replied to <strong>Sarah Lindqvist</strong> in 4 seconds', time:'3m ago' },
  { icon:'🔵', text:'<strong>Morgan</strong> sent Facebook DM to <strong>Bella\'s Hair Studio</strong> — replied ✓', time:'8m ago' },
  { icon:'🔍', text:'<strong>Riley</strong> scouted <strong>Smoke & Fire BBQ</strong> — No website detected', time:'12m ago' },
  { icon:'🎉', text:'<strong>Casey</strong> closed <strong>Radiant Skin Clinic</strong> — New Founderos client!', time:'25m ago' },
  { icon:'🔷', text:'<strong>Drew</strong> sent LinkedIn message to <strong>Valley Dental Care</strong>', time:'32m ago' },
  { icon:'📅', text:'<strong>Maya</strong> booked appointment for <strong>James Torres</strong> — Thu 2 PM', time:'45m ago' },
  { icon:'📷', text:'<strong>Morgan</strong> replied Instagram DM from <strong>@glowupbeautylounge</strong>', time:'1h ago' },
];

let adminFeedItems = [...FEED_SEED];

function renderAdminFeed() {
  const el = document.getElementById('adminFeed');
  if (!el) return;
  el.innerHTML = adminFeedItems.slice(0, 12).map(f => `
    <div class="admin-feed-item">
      <div class="admin-feed-item__icon">${f.icon}</div>
      <div class="admin-feed-item__text">${f.text}</div>
      <div class="admin-feed-item__time">${f.time}</div>
    </div>
  `).join('');
}

function startAdminFeed() {
  renderAdminFeed();
  const autoFeed = [
    () => ({ icon:'💬', text:'<strong>Jordan</strong> replied to new inbound text in <strong>6 seconds</strong>', time:'Just now' }),
    () => ({ icon:'📞', text:'<strong>Aria</strong> answered call from a new prospect', time:'Just now' }),
    () => ({ icon:'🔵', text:'<strong>Morgan</strong> received Facebook reply from a business lead', time:'Just now' }),
    () => ({ icon:'🔍', text:`<strong>Riley</strong> scouted a new business — score 5/5`, time:'Just now' }),
    () => ({ icon:'🟢', text:'<strong>Morgan</strong> sent WhatsApp pitch via Founderos template', time:'Just now' }),
    () => ({ icon:'📤', text:'<strong>Sam</strong> sent follow-up reminder to 3 leads', time:'Just now' }),
  ];
  setInterval(() => {
    const fn = autoFeed[Math.floor(Math.random() * autoFeed.length)];
    adminFeedItems.unshift(fn());
    if (adminFeedItems.length > 30) adminFeedItems.pop();
    renderAdminFeed();
  }, 6000);
}

/* ── Agent Management Grid ────────────────────────── */
function renderAgentsGrid() {
  const el = document.getElementById('adminAgentsGrid');
  if (!el) return;
  el.innerHTML = AGENTS_DATA.map((a, i) => `
    <div class="admin-agent-card">
      <div class="admin-agent-card__top">
        <div class="admin-agent-card__av" style="background:${a.grad}">${a.initials}</div>
        <div class="admin-agent-card__info">
          <h4>${a.name}</h4>
          <span>${a.role}</span>
        </div>
        <button class="agent-toggle" id="toggle-ag-${i}" onclick="toggleAgent(${i},this)"></button>
      </div>
      <div class="admin-agent-card__stats">
        <div class="admin-agent-card__stat">
          <span class="admin-agent-card__stat-num">${a.metric.split(' ')[0]}</span>
          <span class="admin-agent-card__stat-label">Today</span>
        </div>
        <div class="admin-agent-card__stat">
          <span class="admin-agent-card__stat-num">100%</span>
          <span class="admin-agent-card__stat-label">Uptime</span>
        </div>
        <div class="admin-agent-card__stat">
          <span class="admin-agent-card__stat-num">8s</span>
          <span class="admin-agent-card__stat-label">Avg reply</span>
        </div>
      </div>
      <div class="admin-agent-card__controls">
        <button class="btn-on">● Online</button>
        <button onclick="showToast('${a.name} configuration panel coming soon')">⚙ Configure</button>
        <button onclick="showToast('${a.name} full log loaded')">📋 Log</button>
      </div>
    </div>
  `).join('');
}

function toggleAgent(i, btn) {
  btn.classList.toggle('agent-toggle--off');
  const name = AGENTS_DATA[i].name;
  const on = !btn.classList.contains('agent-toggle--off');
  showToast(`${on ? '✅' : '⏸'} ${name} ${on ? 'activated' : 'paused'}`);
}

/* ── Leads Table ─────────────────────────────────── */
const LEADS_DATA = [
  { name:"Mario's Pizza",     industry:'Restaurant', city:'Austin, TX',     phone:'+1(512)555-0121', platform:'💬 SMS',   status:'won',        score:5 },
  { name:'Bella Hair Studio',  industry:'Salon',      city:'Miami, FL',      phone:'+1(305)555-0234', platform:'🔵 Facebook', status:'won',      score:5 },
  { name:'Ace Auto Repair',    industry:'Auto',       city:'Dallas, TX',     phone:'+1(214)555-0345', platform:'🔷 LinkedIn', status:'booked',   score:4 },
  { name:'Green Leaf Land.',   industry:'Contractor', city:'Phoenix, AZ',    phone:'+1(602)555-0456', platform:'📷 Instagram',status:'interested',score:5 },
  { name:'Smoke & Fire BBQ',   industry:'Restaurant', city:'Memphis, TN',    phone:'+1(901)555-0567', platform:'🐦 X',       status:'interested',score:5 },
  { name:'Valley Dental',      industry:'Medical',    city:'Sacramento, CA', phone:'+1(916)555-0567', platform:'🔷 LinkedIn', status:'replied',  score:5 },
  { name:'Sunrise Yoga',       industry:'Fitness',    city:'Portland, OR',   phone:'+1(503)555-0012', platform:'📷 Instagram',status:'replied',  score:5 },
  { name:'ProFix Plumbing',    industry:'Contractor', city:'Denver, CO',     phone:'+1(720)555-0789', platform:'🔷 LinkedIn', status:'contacted',score:5 },
  { name:'GlowUp Beauty',      industry:'Salon',      city:'Los Angeles, CA',phone:'+1(323)555-0234', platform:'📷 Instagram',status:'contacted',score:5 },
  { name:'Radiant Skin',       industry:'Medical',    city:'Tampa, FL',      phone:'+1(813)555-0901', platform:'🟢 WhatsApp',  status:'won',      score:5 },
  { name:'Iron & Lift Gym',    industry:'Fitness',    city:'Las Vegas, NV',  phone:'+1(702)555-0456', platform:'🔵 Facebook', status:'scouted',  score:5 },
  { name:'Crafted Wood Steel', industry:'Contractor', city:'Knoxville, TN',  phone:'+1(865)555-0789', platform:'🔷 LinkedIn', status:'scouted',  score:4 },
];

const STATUS_COLORS = {
  scouted:'#94a3b8', contacted:'#38bdf8', replied:'#fbbf24',
  interested:'#a78bfa', booked:'#818cf8', won:'#22c55e',
};

function renderLeadsTable(filter = '') {
  const el  = document.getElementById('leadsTableBody');
  const cnt = document.getElementById('leadCount');
  if (!el) return;
  const rows = filter ? LEADS_DATA.filter(l => l.status.toLowerCase() === filter.toLowerCase()) : LEADS_DATA;
  if (cnt) cnt.textContent = rows.length + ' leads';
  el.innerHTML = rows.map(l => `
    <tr>
      <td>${l.name}</td>
      <td>${l.industry}</td>
      <td>${l.city}</td>
      <td style="font-family:'JetBrains Mono',monospace;font-size:0.76rem">${l.phone}</td>
      <td>${l.platform}</td>
      <td><span class="lead-status-badge" style="background:${STATUS_COLORS[l.status]}18;color:${STATUS_COLORS[l.status]}">${l.status}</span></td>
      <td>${'⭐'.repeat(l.score)}</td>
      <td>
        <button class="lead-action-btn" onclick="showToast('Opening ${l.name.replace("'","\'")} pitch composer…')">Pitch</button>
        <button class="lead-action-btn" style="margin-left:4px" onclick="showToast('Calling ${l.name}…')">Call</button>
      </td>
    </tr>
  `).join('');
}

function filterLeads() {
  const val = document.getElementById('leadFilterStatus')?.value || '';
  renderLeadsTable(val);
}

function exportLeads() {
  const headers = 'Business,Industry,City,Phone,Platform,Status,Score\n';
  const rows = LEADS_DATA.map(l => `${l.name},${l.industry},${l.city},${l.phone},${l.platform},${l.status},${l.score}`).join('\n');
  const blob = new Blob([headers + rows], { type: 'text/csv' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = 'founderos_leads.csv';
  a.click();
  URL.revokeObjectURL(url);
  showToast('⬇ Leads exported as CSV');
}

/* ── Clients Won ─────────────────────────────────── */
const CLIENTS_DATA = [
  { icon:'🍕', name:"Mario's Pizza & Subs",  detail:'Austin, TX · $799 · via SMS',        platform:'💬', date:'Today',      value:'$799'  },
  { icon:'💇', name:"Bella's Hair Studio",    detail:'Miami, FL · $999 · via Facebook',    platform:'🔵', date:'Today',      value:'$999'  },
  { icon:'✨', name:'Radiant Skin Clinic',    detail:'Tampa, FL · $1,499 · via WhatsApp',  platform:'🟢', date:'Yesterday',  value:'$1,499'},
  { icon:'🏠', name:'PowerPro Roofing',       detail:'Charlotte, NC · $1,200 · via LinkedIn',platform:'🔷',date:'2 days ago', value:'$1,200'},
  { icon:'🦷', name:'Valley Dental Care',     detail:'Sacramento, CA · $1,800 · via LinkedIn',platform:'🔷',date:'3 days ago',value:'$1,800'},
  { icon:'🧘', name:'Sunrise Yoga Studio',    detail:'Portland, OR · $899 · via Instagram', platform:'📷', date:'4 days ago', value:'$899'  },
];

function renderClientsWon() {
  const el  = document.getElementById('clientsList');
  const cnt = document.getElementById('clientCount');
  if (!el) return;
  if (cnt) cnt.textContent = CLIENTS_DATA.length + ' clients';
  el.innerHTML = CLIENTS_DATA.map(c => `
    <div class="client-row">
      <div class="client-row__icon">${c.icon}</div>
      <div class="client-row__info">
        <div class="client-row__name">${c.name}</div>
        <div class="client-row__detail">${c.detail}</div>
      </div>
      <div class="client-row__platform">${c.platform}</div>
      <div class="client-row__value">${c.value}</div>
      <div style="font-size:0.74rem;color:var(--text-3);min-width:70px;text-align:right">${c.date}</div>
    </div>
  `).join('');
}

/* ── Channel Config ──────────────────────────────── */
const CHANNELS_CONFIG = [
  { icon:'💬', name:'SMS / Text',  color:'#22c55e', enabled:true,  fields:[{ label:'Twilio From Number', ph:'+1 (555) 000-0000' },{ label:'Daily SMS Limit', ph:'100' }] },
  { icon:'📞', name:'Phone Calls', color:'#a78bfa', enabled:true,  fields:[{ label:'Twilio Voice Number', ph:'+1 (555) 000-0000' },{ label:'Max Concurrent Calls', ph:'5' }] },
  { icon:'🔵', name:'Facebook DM', color:'#1877F2', enabled:true,  fields:[{ label:'Page ID', ph:'your-page-id' },{ label:'Daily DM Limit', ph:'50' }] },
  { icon:'📷', name:'Instagram DM',color:'#E1306C', enabled:true,  fields:[{ label:'Business Account', ph:'@yourbusiness' },{ label:'Daily DM Limit', ph:'50' }] },
  { icon:'🔷', name:'LinkedIn',    color:'#0A66C2', enabled:true,  fields:[{ label:'LinkedIn Page URL', ph:'linkedin.com/company/…' },{ label:'Daily Message Limit', ph:'40' }] },
  { icon:'🐦', name:'X / Twitter', color:'#1DA1F2', enabled:true,  fields:[{ label:'Twitter Handle', ph:'@founderos' },{ label:'Daily DM Limit', ph:'50' }] },
  { icon:'🟢', name:'WhatsApp',    color:'#25D366', enabled:true,  fields:[{ label:'WhatsApp Business Number', ph:'+1 (555) 000-0000' },{ label:'Daily Limit', ph:'80' }] },
  { icon:'🔴', name:'Google Biz',  color:'#EA4335', enabled:false, fields:[{ label:'Google Business Profile ID', ph:'ABCdef123…' }] },
];

function renderChannelConfig() {
  const el = document.getElementById('channelConfigGrid');
  if (!el) return;
  el.innerHTML = CHANNELS_CONFIG.map((c, i) => `
    <div class="channel-config-card">
      <div class="channel-config-card__header">
        <div class="channel-config-card__title">
          <span class="channel-config-card__icon">${c.icon}</span>
          <span style="color:${c.color}">${c.name}</span>
        </div>
        <button class="channel-enabled-toggle ${c.enabled ? 'channel-enabled-toggle--on' : 'channel-enabled-toggle--off'}"
          onclick="toggleChannel(${i},this)"></button>
      </div>
      ${c.fields.map(f => `
        <div class="r-form-group">
          <label>${f.label}</label>
          <input type="text" placeholder="${f.ph}" />
        </div>
      `).join('')}
      <button class="btn btn--primary" style="width:100%;justify-content:center;padding:9px" onclick="showToast('${c.name} settings saved')">Save</button>
    </div>
  `).join('');
}

function toggleChannel(i, btn) {
  btn.classList.toggle('channel-enabled-toggle--on');
  btn.classList.toggle('channel-enabled-toggle--off');
  const on = btn.classList.contains('channel-enabled-toggle--on');
  CHANNELS_CONFIG[i].enabled = on;
  showToast(`${on ? '✅' : '⏸'} ${CHANNELS_CONFIG[i].name} ${on ? 'enabled' : 'disabled'}`);
}

/* ── API Grid ────────────────────────────────────── */
const APIS = [
  { icon:'📞', name:'Twilio', desc:'SMS, Voice, WhatsApp',  status:'pending',      hint:'Get your API key at twilio.com',    field:'Account SID',    ph:'ACxxxxxxxxxxxxxxxx' },
  { icon:'🔵', name:'Meta Business', desc:'Facebook & Instagram DMs', status:'pending', hint:'Create a Meta App at developers.facebook.com', field:'Access Token', ph:'EAAxxxxxxxxxxxxxxxx' },
  { icon:'🔷', name:'LinkedIn API', desc:'LinkedIn messages & InMail', status:'pending', hint:'Apply at linkedin.com/developers', field:'Client ID', ph:'86xxxxxxxxxxxxxxxx' },
  { icon:'🐦', name:'X / Twitter API', desc:'Twitter DMs & mentions', status:'pending', hint:'Apply at developer.x.com', field:'Bearer Token', ph:'AAAAAAAAAAAAAxxxxxxxxxx' },
  { icon:'🟢', name:'WhatsApp Business', desc:'WhatsApp Cloud API', status:'pending', hint:'Setup at business.whatsapp.com', field:'Phone Number ID', ph:'1234567890' },
  { icon:'🔴', name:'Google My Business', desc:'Business Messages & listings', status:'pending', hint:'Enable at console.cloud.google.com', field:'API Key', ph:'AIzaSyxxxxxxxxxxxxxxxx' },
  { icon:'🌟', name:'Yelp Fusion', desc:'Business search & leads', status:'pending', hint:'Get key at yelp.com/developers', field:'API Key', ph:'xxxxxxxxxxxxxxxxxxxxxxxx' },
  { icon:'📊', name:'Google Analytics', desc:'Traffic & conversion tracking', status:'pending', hint:'Setup at analytics.google.com', field:'Measurement ID', ph:'G-XXXXXXXXXX' },
  { icon:'🔔', name:'Slack Webhooks', desc:'Team notifications', status:'pending', hint:'Create at api.slack.com/apps', field:'Webhook URL', ph:'https://hooks.slack.com/services/…' },
  { icon:'📧', name:'SendGrid', desc:'Email outreach & alerts', status:'pending', hint:'Get key at sendgrid.com', field:'API Key', ph:'SG.xxxxxxxxxxxxxxxxxxxxxxxx' },
  { icon:'🗓', name:'Calendly', desc:'Meeting booking integration', status:'pending', hint:'Connect at developer.calendly.com', field:'API Key', ph:'eyJxxxxxxxxxxxxxxxx' },
  { icon:'📦', name:'HubSpot CRM', desc:'CRM & pipeline sync', status:'pending', hint:'Connect at developers.hubspot.com', field:'Private App Token', ph:'pat-naxxxxxxxxxxxxxxxx' },
];

function renderApiGrid() {
  const el = document.getElementById('apiGrid');
  if (!el) return;
  el.innerHTML = APIS.map((api, i) => `
    <div class="api-card ${api.status === 'connected' ? 'api-card--connected' : ''}" id="api-card-${i}">
      <div class="api-card__header">
        <div class="api-card__icon">${api.icon}</div>
        <div>
          <div class="api-card__name">${api.name}</div>
          <div class="api-card__desc">${api.desc}</div>
        </div>
        <span class="api-card__status api-card__status--${api.status}">${api.status}</span>
      </div>
      <input class="api-card__input" type="password" placeholder="${api.field}: ${api.ph}" id="api-key-${i}" />
      <div class="api-card__hint" style="font-size:0.72rem;color:var(--text-3);margin-bottom:10px">${api.hint}</div>
      <div class="api-card__actions">
        <button onclick="testApiConnection(${i})">Test</button>
        <button class="btn-connect" onclick="saveApiKey(${i})">Connect</button>
      </div>
    </div>
  `).join('');
}

function saveApiKey(i) {
  const input = document.getElementById('api-key-' + i);
  if (!input?.value.trim()) { showToast('⚠️ Enter your API key first'); return; }
  APIS[i].status = 'connected';
  const badge = document.querySelector(`#api-card-${i} .api-card__status`);
  if (badge) { badge.textContent = 'connected'; badge.className = 'api-card__status api-card__status--connected'; }
  document.getElementById('api-card-' + i)?.classList.add('api-card--connected');
  showToast(`✅ ${APIS[i].name} connected successfully!`);
}

function testApiConnection(i) {
  showToast(`🔄 Testing ${APIS[i].name} connection…`);
  setTimeout(() => showToast(`✅ ${APIS[i].name} — Connection successful`), 1500);
}

/* ── Pitch Templates ─────────────────────────────── */
const PITCH_TPL = [
  { icon:'💬', name:'SMS — Standard',   platform:'sms', tpl:'Hi {business_name}! 👋 I noticed you don\'t have a website yet — you could be missing customers every day. We build fast, beautiful sites for {industry} businesses starting from $799. Check us out: founderos.com — reply YES for a free mockup! — {agent_name}' },
  { icon:'🔵', name:'Facebook DM',      platform:'fb',  tpl:'Hey {business_name} Team! 👋\n\nI came across your Facebook page and noticed you have some great reviews (⭐!) — but couldn\'t find your website anywhere.\n\nAt Founderos, we build professional, mobile-ready websites for {industry} businesses. Live in 5 days, starting from $799.\n\n📎 See our work: founderos.com\n\nWould love to send over a free mockup! — {agent_name}' },
  { icon:'📷', name:'Instagram DM',     platform:'ig',  tpl:'Hey {ig_handle}! 🔥\n\nYour content is looking amazing! But I noticed you don\'t have a website linked in your bio 👀\n\nYou\'re missing tons of customers who want to book/order directly. We build stunning sites at Founderos — fast & affordable.\n\n🌐 founderos.com — DM back for a free quote! 🚀' },
  { icon:'🔷', name:'LinkedIn',         platform:'li',  tpl:'Hi {contact_name},\n\nI came across {business_name} on LinkedIn and noticed you don\'t have a company website yet.\n\nGiven your strong reputation and {years} years in the {industry} industry, a professional site would significantly boost your inbound leads.\n\nAt Founderos, we\'re live in 5 days, starting from $799.\n\n📌 founderos.com\n\nOpen to a 15-minute call?\n\nBest,\n{agent_name}' },
  { icon:'🐦', name:'X / Twitter DM',  platform:'x',   tpl:'Hey {business_name}! 👋 Love what you\'re doing. Noticed you don\'t have a website yet — missing out on so many customers 📲\n\nWe build fast, affordable sites for {industry} businesses. founderos.com — let\'s get you online!' },
  { icon:'🟢', name:'WhatsApp',         platform:'wa',  tpl:'Hi! 👋 Is this {business_name}?\n\nThis is {agent_name} from Founderos. I noticed your business in {city} doesn\'t have a website yet — with your great reputation you could get SO many more customers online!\n\nWe build professional websites for {industry} businesses. Fast, beautiful, starting from $799. Live in 5 days 🚀\n\nCheck founderos.com or reply for a free mockup! 😊' },
];

function renderPitchTemplates() {
  const el = document.getElementById('pitchEditor');
  if (!el) return;
  el.innerHTML = PITCH_TPL.map((t, i) => `
    <div class="pitch-template-card">
      <div class="pitch-template-card__header">
        <span class="pitch-template-card__icon">${t.icon}</span>
        <span class="pitch-template-card__name">${t.name}</span>
        <button class="btn btn--ghost" style="padding:5px 12px;font-size:0.78rem" onclick="showToast('${t.name} template saved!')">Save</button>
      </div>
      <textarea rows="5" oninput="this.style.height='auto';this.style.height=this.scrollHeight+'px'">${t.tpl}</textarea>
      <div class="pitch-template-card__footer">
        <span>Variables: {business_name} {industry} {city} {contact_name} {agent_name} {ig_handle} {years}</span>
        <button onclick="showToast('Preview generated for ${t.name}')" style="font-size:0.76rem;color:var(--accent-2);font-weight:600">Preview →</button>
      </div>
    </div>
  `).join('');
}

/* ── Analytics ───────────────────────────────────── */
function renderAnalytics() {
  // Platform stats
  const platforms = [
    { icon:'💬', label:'SMS',       count:124, replyRate:'38%', color:'#22c55e' },
    { icon:'🔵', label:'Facebook',  count:89,  replyRate:'32%', color:'#1877F2' },
    { icon:'📷', label:'Instagram', count:67,  replyRate:'41%', color:'#E1306C' },
    { icon:'🔷', label:'LinkedIn',  count:34,  replyRate:'28%', color:'#0A66C2' },
    { icon:'🐦', label:'X/Twitter', count:28,  replyRate:'22%', color:'#1DA1F2' },
    { icon:'🟢', label:'WhatsApp',  count:21,  replyRate:'55%', color:'#25D366' },
    { icon:'📞', label:'Calls',     count:47,  replyRate:'100%',color:'#a78bfa' },
  ];
  const maxCount = Math.max(...platforms.map(p => p.count));

  const pEl = document.getElementById('platformBreakdown');
  if (pEl) {
    pEl.innerHTML = platforms.map(p => `
      <div class="platform-stat-bar">
        <div class="platform-stat-bar__icon">${p.icon}</div>
        <div class="platform-stat-bar__label">${p.label}</div>
        <div class="platform-stat-bar__bar">
          <div class="platform-stat-bar__fill" style="width:${(p.count/maxCount)*100}%;background:${p.color}"></div>
        </div>
        <div class="platform-stat-bar__num">${p.count}</div>
        <div class="platform-stat-bar__rate">${p.replyRate}</div>
      </div>
    `).join('');
  }

  // Weekly chart
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const counts = [48, 62, 55, 74, 81, 43, 37];
  const wEl = document.getElementById('weeklyChart');
  if (wEl) {
    const maxC = Math.max(...counts);
    wEl.innerHTML = `<div class="weekly-chart">${days.map((d,i) => `
      <div class="weekly-bar">
        <div class="weekly-bar__num">${counts[i]}</div>
        <div class="weekly-bar__fill" style="height:${(counts[i]/maxC)*100}%"></div>
        <div class="weekly-bar__label">${d}</div>
      </div>
    `).join('')}</div>`;
  }

  // Industry breakdown
  const industries = [
    { name:'Medical & Dental', count:12, reply:'45%', color:'#a78bfa' },
    { name:'Fitness & Wellness',count:10, reply:'42%', color:'#22c55e' },
    { name:'Salon & Spa',       count:9,  reply:'38%', color:'#E1306C' },
    { name:'Restaurant',        count:8,  reply:'28%', color:'#f59e0b' },
    { name:'Contractor',        count:7,  reply:'35%', color:'#38bdf8' },
    { name:'Retail',            count:5,  reply:'30%', color:'#fb7185' },
    { name:'Auto',              count:4,  reply:'25%', color:'#64748b' },
    { name:'Pet Services',      count:3,  reply:'50%', color:'#4ade80' },
  ];
  const iEl = document.getElementById('industryBreakdown');
  if (iEl) {
    const maxI = Math.max(...industries.map(i => i.count));
    iEl.innerHTML = `<div style="padding:4px 0">${industries.map(i => `
      <div class="platform-stat-bar">
        <div class="platform-stat-bar__label" style="width:130px">${i.name}</div>
        <div class="platform-stat-bar__bar">
          <div class="platform-stat-bar__fill" style="width:${(i.count/maxI)*100}%;background:${i.color}"></div>
        </div>
        <div class="platform-stat-bar__num">${i.count}</div>
        <div class="platform-stat-bar__rate">${i.reply}</div>
      </div>
    `).join('')}</div>`;
  }
}

/* ── Revenue Table ───────────────────────────────── */
function renderRevenueTable() {
  const el = document.getElementById('revenueTable');
  if (!el) return;
  const revRows = [
    { icon:'✨', client:'Radiant Skin Clinic',  detail:'Website Build · Tampa, FL',         amount:'$1,499', date:'Today',      platform:'🟢' },
    { icon:'💇', client:"Bella's Hair Studio",  detail:'Website Build · Miami, FL',          amount:'$999',   date:'Today',      platform:'🔵' },
    { icon:'🍕', client:"Mario's Pizza",         detail:'Website Build · Austin, TX',         amount:'$799',   date:'Yesterday',  platform:'💬' },
    { icon:'🏠', client:'PowerPro Roofing',      detail:'Website + SEO · Charlotte, NC',      amount:'$1,200', date:'2 days ago', platform:'🔷' },
    { icon:'🦷', client:'Valley Dental Care',    detail:'Premium Build · Sacramento, CA',     amount:'$1,800', date:'3 days ago', platform:'🔷' },
    { icon:'🧘', client:'Sunrise Yoga Studio',   detail:'Website + Booking · Portland, OR',   amount:'$899',   date:'4 days ago', platform:'📷' },
  ];
  el.innerHTML = revRows.map(r => `
    <div class="rev-row">
      <div class="rev-row__icon">${r.icon}</div>
      <div class="rev-row__info">
        <div class="rev-row__client">${r.client} <span style="color:var(--text-3)">${r.platform}</span></div>
        <div class="rev-row__detail">${r.detail}</div>
      </div>
      <div class="rev-row__amount">${r.amount}</div>
      <div class="rev-row__date">${r.date}</div>
    </div>
  `).join('');
}

function renderRevenue() {
  const total = [1499, 999, 799, 1200, 1800, 899];
  const todayRev = total.slice(0,2).reduce((a,b) => a+b, 0);
  const monthRev = total.reduce((a,b) => a+b, 0) * 2;
  setEl('rev-today', '$' + todayRev.toLocaleString());
  setEl('rev-month', '$' + monthRev.toLocaleString());
  setEl('rev-pipeline', '$' + (5 * 1200).toLocaleString());
}

/* ── Industry checks ─────────────────────────────── */
const INDUSTRIES = [
  { label:'🍽 Restaurants & Food', checked:true, leads:11 },
  { label:'✂ Salons & Spas',      checked:true, leads:9  },
  { label:'🔧 Contractors',        checked:true, leads:8  },
  { label:'🏥 Medical & Dental',   checked:true, leads:12 },
  { label:'💪 Fitness',            checked:true, leads:10 },
  { label:'🚗 Auto Services',      checked:true, leads:4  },
  { label:'🛍 Retail',             checked:true, leads:5  },
  { label:'🐾 Pet Services',       checked:true, leads:3  },
];

function renderIndustryChecks() {
  const el = document.getElementById('industryChecks');
  if (!el) return;
  el.innerHTML = INDUSTRIES.map((ind, i) => `
    <label class="admin-industry-check">
      <input type="checkbox" ${ind.checked ? 'checked' : ''} onchange="showToast('${ind.label} targets updated')" />
      <span>${ind.label}</span>
      <strong>${ind.leads} leads</strong>
    </label>
  `).join('');
}

/* ── Notification Toggles ────────────────────────── */
const NOTIFS = [
  'A new client signs up with Founderos',
  'A lead replies to a pitch',
  'An agent detects a hot lead (score 5/5)',
  'Daily scout goal of 100 businesses reached',
  'A discovery call is booked',
  'Riley sends 100th outreach of the day',
  'A lead goes cold (no reply in 48h)',
  'Agent goes offline unexpectedly',
];

function renderNotifToggles() {
  const el = document.getElementById('notifToggles');
  if (!el) return;
  el.innerHTML = NOTIFS.map((n, i) => `
    <div class="admin-notif-toggle">
      <span>${n}</span>
      <button class="channel-enabled-toggle ${i < 5 ? 'channel-enabled-toggle--on' : 'channel-enabled-toggle--off'}"
        onclick="this.classList.toggle('channel-enabled-toggle--on');this.classList.toggle('channel-enabled-toggle--off')"></button>
    </div>
  `).join('');
}

/* ── Access Log ──────────────────────────────────── */
const accessLogs = [];
function logAccess(msg) {
  const now = new Date();
  const ts = now.toLocaleString('en-US', { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
  accessLogs.unshift({ icon: msg.startsWith('✅') ? '✅' : msg.startsWith('🔒') ? '🔒' : '🔐', text: msg, time: ts });
  renderAccessLog();
}

function renderAccessLog() {
  const el = document.getElementById('accessLog');
  if (!el) return;
  el.innerHTML = (accessLogs.length ? accessLogs : [
    { icon:'✅', text:'Owner login successful', time:'Today, 5:07 AM' },
    { icon:'🔒', text:'Auto-lock after 30 minutes', time:'Yesterday, 11:00 PM' },
    { icon:'✅', text:'Owner login successful', time:'Yesterday, 10:30 PM' },
  ]).map(l => `
    <div class="access-log-item">
      <div class="access-log-item__icon">${l.icon}</div>
      <div class="access-log-item__text">${l.text}</div>
      <div class="access-log-item__time">${l.time}</div>
    </div>
  `).join('');
}

/* ── Settings saves ──────────────────────────────── */
function saveBizSettings(e) {
  e.preventDefault();
  const name = document.getElementById('biz-name')?.value;
  showToast(`✅ Business settings saved for ${name}`);
}

function saveTargets(e) {
  e.preventDefault();
  showToast('✅ Scout targets saved');
}

function saveLocations() {
  showToast('✅ Target locations saved');
}

function saveNotifications(e) {
  e.preventDefault();
  showToast('✅ Notification settings saved');
}

function changePIN(e) {
  e.preventDefault();
  const cur = document.getElementById('pin-current')?.value;
  const nw  = document.getElementById('pin-new')?.value;
  const cf  = document.getElementById('pin-confirm')?.value;
  if (cur !== ownerPin) { showToast('❌ Incorrect current PIN'); return; }
  if (nw.length !== 4 || !/^\d{4}$/.test(nw)) { showToast('⚠️ PIN must be exactly 4 digits'); return; }
  if (nw !== cf) { showToast('⚠️ New PINs do not match'); return; }
  ownerPin = nw;
  localStorage.setItem('ownerPin', nw);
  e.target.reset();
  showToast('🔐 PIN updated successfully');
  logAccess('🔐 Owner PIN changed');
}

/* ── Toast ───────────────────────────────────────── */
function showToast(msg) {
  let el = document.getElementById('toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'r-toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 3200);
}

/* ── Helpers ─────────────────────────────────────── */
function setEl(id, val) { const e = document.getElementById(id); if (e) e.textContent = val; }
