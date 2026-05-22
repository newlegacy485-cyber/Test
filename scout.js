/* ===================================================
   BUSINESS SCOUT — Riley & Casey Lead Engine
   Social Media Outreach: FB · IG · LinkedIn · X · Google · WhatsApp
   =================================================== */

/* ── Business Pool (100 realistic US businesses, no website) ── */
const BIZ_POOL = [
  // Restaurants & Food
  { name:"Mario's Pizza & Subs",       industry:'restaurant', icon:'🍕', city:'Austin',        state:'TX', zip:'78701', phone:'+1 (512) 555-0121', rating:4.2, years:8,  employees:12, score:5,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:843,  ig_followers:1240 },
  { name:"Harbor View Diner",           industry:'restaurant', icon:'🍽', city:'San Diego',     state:'CA', zip:'92101', phone:'+1 (619) 555-0901', rating:4.5, years:15, employees:22, score:4,
    social:{ fb:true,  ig:false, li:false, x:false, yelp:true,  google:true  }, fb_followers:2100, ig_followers:0    },
  { name:"The Thai Kitchen",            industry:'restaurant', icon:'🍜', city:'Boston',        state:'MA', zip:'02101', phone:'+1 (617) 555-0890', rating:4.1, years:6,  employees:9,  score:3,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:false, google:true  }, fb_followers:421,  ig_followers:890  },
  { name:"Taco Fiesta Express",         industry:'restaurant', icon:'🌮', city:'San Antonio',   state:'TX', zip:'78201', phone:'+1 (210) 555-0345', rating:4.3, years:4,  employees:7,  score:4,
    social:{ fb:true,  ig:true,  li:false, x:true,  yelp:false, google:true  }, fb_followers:1560, ig_followers:3200 },
  { name:"Smoke & Fire BBQ",            industry:'restaurant', icon:'🔥', city:'Memphis',       state:'TN', zip:'38101', phone:'+1 (901) 555-0567', rating:4.7, years:11, employees:18, score:5,
    social:{ fb:true,  ig:true,  li:false, x:true,  yelp:true,  google:true  }, fb_followers:5400, ig_followers:8900 },
  { name:"The Cupcake Corner",          industry:'restaurant', icon:'🧁', city:'Nashville',     state:'TN', zip:'37201', phone:'+1 (615) 555-0567', rating:4.4, years:5,  employees:6,  score:3,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:false, google:true  }, fb_followers:3100, ig_followers:9800 },
  { name:"Sips & Brews Café",           industry:'restaurant', icon:'☕', city:'Denver',        state:'CO', zip:'80201', phone:'+1 (720) 555-0123', rating:4.6, years:3,  employees:8,  score:3,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:980,  ig_followers:4200 },
  { name:"Lucky Dragon Chinese",        industry:'restaurant', icon:'🥡', city:'New Orleans',   state:'LA', zip:'70112', phone:'+1 (504) 555-0567', rating:3.9, years:20, employees:15, score:3,
    social:{ fb:true,  ig:false, li:false, x:false, yelp:true,  google:false }, fb_followers:340,  ig_followers:0    },
  { name:"Grill Master Burgers",        industry:'restaurant', icon:'🍔', city:'Albuquerque',   state:'NM', zip:'87101', phone:'+1 (505) 555-0123', rating:4.0, years:7,  employees:10, score:3,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:720,  ig_followers:1100 },
  { name:"Rocky Road Ice Cream",        industry:'restaurant', icon:'🍦', city:'Salt Lake City',state:'UT', zip:'84101', phone:'+1 (801) 555-0012', rating:4.8, years:9,  employees:5,  score:2,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:false, google:true  }, fb_followers:2800, ig_followers:6700 },
  { name:"Casa Blanca Mexican",         industry:'restaurant', icon:'🌯', city:'Spokane',       state:'WA', zip:'99201', phone:'+1 (509) 555-0901', rating:4.2, years:12, employees:14, score:3,
    social:{ fb:true,  ig:false, li:false, x:false, yelp:true,  google:true  }, fb_followers:510,  ig_followers:0    },

  // Salons & Spas
  { name:"Bella's Hair Studio",         industry:'salon',      icon:'💇', city:'Miami',         state:'FL', zip:'33101', phone:'+1 (305) 555-0234', rating:4.8, years:7,  employees:8,  score:5,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:1200, ig_followers:4800 },
  { name:"Luxe Nail Bar",               industry:'salon',      icon:'💅', city:'Houston',       state:'TX', zip:'77001', phone:'+1 (713) 555-0678', rating:4.6, years:4,  employees:6,  score:4,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:890,  ig_followers:7200 },
  { name:"Fresh Cuts Barbershop",       industry:'salon',      icon:'✂', city:'Atlanta',       state:'GA', zip:'30301', phone:'+1 (404) 555-0234', rating:4.5, years:6,  employees:4,  score:3,
    social:{ fb:true,  ig:true,  li:false, x:true,  yelp:false, google:true  }, fb_followers:2100, ig_followers:5600 },
  { name:"GlowUp Beauty Lounge",        industry:'salon',      icon:'💋', city:'Los Angeles',   state:'CA', zip:'90001', phone:'+1 (323) 555-0234', rating:4.9, years:3,  employees:5,  score:5,
    social:{ fb:true,  ig:true,  li:false, x:true,  yelp:true,  google:true  }, fb_followers:3400, ig_followers:18000},
  { name:"Bliss Spa & Massage",         industry:'salon',      icon:'🧖', city:'Scottsdale',    state:'AZ', zip:'85251', phone:'+1 (480) 555-0345', rating:4.7, years:9,  employees:12, score:5,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:1800, ig_followers:6200 },
  { name:"LashLux Studio",              industry:'salon',      icon:'👁', city:'Baton Rouge',   state:'LA', zip:'70801', phone:'+1 (225) 555-0345', rating:4.4, years:2,  employees:3,  score:4,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:false, google:true  }, fb_followers:650,  ig_followers:3800 },

  // Auto & Mechanics
  { name:"Ace Auto Repair",             industry:'auto',       icon:'🔧', city:'Dallas',        state:'TX', zip:'75201', phone:'+1 (214) 555-0345', rating:4.3, years:18, employees:9,  score:4,
    social:{ fb:true,  ig:false, li:true,  x:false, yelp:true,  google:true  }, fb_followers:450,  ig_followers:0    },
  { name:"Swift Tire & Lube",           industry:'auto',       icon:'🛞', city:'Indianapolis',  state:'IN', zip:'46201', phone:'+1 (317) 555-0234', rating:4.1, years:12, employees:8,  score:4,
    social:{ fb:true,  ig:false, li:false, x:false, yelp:true,  google:true  }, fb_followers:320,  ig_followers:0    },
  { name:"TruckMaster Diesel",          industry:'auto',       icon:'🚛', city:'El Paso',       state:'TX', zip:'79901', phone:'+1 (915) 555-0567', rating:4.0, years:14, employees:6,  score:4,
    social:{ fb:true,  ig:false, li:false, x:false, yelp:false, google:true  }, fb_followers:180,  ig_followers:0    },
  { name:"Prime Window Tinting",        industry:'auto',       icon:'🚗', city:'Orlando',       state:'FL', zip:'32801', phone:'+1 (407) 555-0890', rating:4.2, years:5,  employees:4,  score:3,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:false, google:true  }, fb_followers:740,  ig_followers:2100 },

  // Contractors & Trades
  { name:"Green Leaf Landscaping",      industry:'contractor', icon:'🌿', city:'Phoenix',       state:'AZ', zip:'85001', phone:'+1 (602) 555-0456', rating:4.6, years:10, employees:15, score:5,
    social:{ fb:true,  ig:true,  li:true,  x:false, yelp:true,  google:true  }, fb_followers:960,  ig_followers:3100 },
  { name:"ProFix Plumbing Co",          industry:'contractor', icon:'🔩', city:'Denver',        state:'CO', zip:'80202', phone:'+1 (720) 555-0789', rating:4.8, years:16, employees:12, score:5,
    social:{ fb:true,  ig:false, li:true,  x:false, yelp:true,  google:true  }, fb_followers:380,  ig_followers:0    },
  { name:"QuickFix Electrics",          industry:'contractor', icon:'⚡', city:'Chicago',       state:'IL', zip:'60601', phone:'+1 (312) 555-0123', rating:4.5, years:9,  employees:7,  score:4,
    social:{ fb:true,  ig:false, li:true,  x:false, yelp:true,  google:true  }, fb_followers:520,  ig_followers:0    },
  { name:"PowerPro Roofing",            industry:'contractor', icon:'🏠', city:'Charlotte',     state:'NC', zip:'28201', phone:'+1 (704) 555-0012', rating:4.4, years:14, employees:20, score:4,
    social:{ fb:true,  ig:true,  li:true,  x:false, yelp:false, google:true  }, fb_followers:1100, ig_followers:2400 },
  { name:"Elite HVAC Services",         industry:'contractor', icon:'❄', city:'Phoenix',       state:'AZ', zip:'85002', phone:'+1 (602) 555-0345', rating:4.7, years:12, employees:16, score:4,
    social:{ fb:true,  ig:false, li:true,  x:false, yelp:true,  google:true  }, fb_followers:610,  ig_followers:0    },
  { name:"Sparkle Clean Co.",           industry:'contractor', icon:'🧹', city:'Columbus',      state:'OH', zip:'43201', phone:'+1 (614) 555-0678', rating:4.0, years:3,  employees:8,  score:3,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:false, google:true  }, fb_followers:290,  ig_followers:850  },
  { name:"ProPaint & Drywall",          industry:'contractor', icon:'🖌', city:'Fresno',        state:'CA', zip:'93701', phone:'+1 (559) 555-0789', rating:3.8, years:7,  employees:6,  score:3,
    social:{ fb:true,  ig:false, li:false, x:false, yelp:false, google:true  }, fb_followers:140,  ig_followers:0    },
  { name:"First Class Moving Co",       industry:'contractor', icon:'📦', city:'Baltimore',     state:'MD', zip:'21201', phone:'+1 (410) 555-0456', rating:4.3, years:5,  employees:10, score:3,
    social:{ fb:true,  ig:false, li:false, x:false, yelp:true,  google:true  }, fb_followers:420,  ig_followers:0    },
  { name:"NightOwl Security",           industry:'contractor', icon:'🔐', city:'Long Beach',    state:'CA', zip:'90801', phone:'+1 (562) 555-0012', rating:4.5, years:8,  employees:12, score:4,
    social:{ fb:true,  ig:false, li:true,  x:false, yelp:false, google:true  }, fb_followers:360,  ig_followers:0    },
  { name:"Metro Pest Control",          industry:'contractor', icon:'🐛', city:'Wichita',       state:'KS', zip:'67201', phone:'+1 (316) 555-0890', rating:4.1, years:11, employees:9,  score:3,
    social:{ fb:true,  ig:false, li:false, x:false, yelp:true,  google:true  }, fb_followers:210,  ig_followers:0    },
  { name:"Crafted Wood & Steel",        industry:'contractor', icon:'🪵', city:'Knoxville',     state:'TN', zip:'37901', phone:'+1 (865) 555-0789', rating:4.9, years:6,  employees:4,  score:4,
    social:{ fb:true,  ig:true,  li:true,  x:false, yelp:false, google:true  }, fb_followers:1800, ig_followers:5600 },

  // Medical & Dental
  { name:"Valley Dental Care",          industry:'medical',    icon:'🦷', city:'Sacramento',    state:'CA', zip:'95801', phone:'+1 (916) 555-0567', rating:4.9, years:22, employees:18, score:5,
    social:{ fb:true,  ig:true,  li:true,  x:false, yelp:true,  google:true  }, fb_followers:1400, ig_followers:2200 },
  { name:"Radiant Skin Clinic",         industry:'medical',    icon:'✨', city:'Tampa',         state:'FL', zip:'33601', phone:'+1 (813) 555-0901', rating:4.8, years:7,  employees:10, score:5,
    social:{ fb:true,  ig:true,  li:true,  x:false, yelp:true,  google:true  }, fb_followers:2300, ig_followers:8800 },
  { name:"SmilePro Dentistry",          industry:'medical',    icon:'😁', city:'Minneapolis',   state:'MN', zip:'55401', phone:'+1 (612) 555-0789', rating:4.7, years:15, employees:14, score:5,
    social:{ fb:true,  ig:true,  li:true,  x:false, yelp:true,  google:true  }, fb_followers:1900, ig_followers:3400 },
  { name:"Vision Care Optometry",       industry:'medical',    icon:'👁', city:'Omaha',         state:'NE', zip:'68101', phone:'+1 (402) 555-0234', rating:4.6, years:19, employees:11, score:5,
    social:{ fb:true,  ig:false, li:true,  x:false, yelp:true,  google:true  }, fb_followers:870,  ig_followers:0    },
  { name:"BrightSmile Pediatrics",      industry:'medical',    icon:'👶', city:'Anchorage',     state:'AK', zip:'99501', phone:'+1 (907) 555-0456', rating:4.9, years:11, employees:16, score:5,
    social:{ fb:true,  ig:true,  li:true,  x:false, yelp:false, google:true  }, fb_followers:2600, ig_followers:4100 },

  // Fitness & Wellness
  { name:"Sunrise Yoga Studio",         industry:'fitness',    icon:'🧘', city:'Portland',      state:'OR', zip:'97201', phone:'+1 (503) 555-0012', rating:4.9, years:5,  employees:6,  score:5,
    social:{ fb:true,  ig:true,  li:false, x:true,  yelp:false, google:true  }, fb_followers:3200, ig_followers:11000},
  { name:"Iron & Lift Gym",             industry:'fitness',    icon:'🏋', city:'Las Vegas',     state:'NV', zip:'89101', phone:'+1 (702) 555-0456', rating:4.5, years:8,  employees:20, score:5,
    social:{ fb:true,  ig:true,  li:false, x:true,  yelp:true,  google:true  }, fb_followers:4100, ig_followers:9800 },
  { name:"CrossFit Redline",            industry:'fitness',    icon:'💪', city:'Detroit',       state:'MI', zip:'48201', phone:'+1 (313) 555-0678', rating:4.7, years:6,  employees:10, score:4,
    social:{ fb:true,  ig:true,  li:false, x:true,  yelp:false, google:true  }, fb_followers:2800, ig_followers:7600 },
  { name:"Pure Life Wellness",          industry:'fitness',    icon:'🌱', city:'Richmond',      state:'VA', zip:'23218', phone:'+1 (804) 555-0678', rating:4.8, years:4,  employees:8,  score:5,
    social:{ fb:true,  ig:true,  li:true,  x:false, yelp:false, google:true  }, fb_followers:1500, ig_followers:5200 },
  { name:"Summit Trail Guides",         industry:'fitness',    icon:'🏔', city:'Boise',         state:'ID', zip:'83701', phone:'+1 (208) 555-0678', rating:4.9, years:7,  employees:5,  score:4,
    social:{ fb:true,  ig:true,  li:false, x:true,  yelp:false, google:true  }, fb_followers:6700, ig_followers:14000},

  // Pet Services
  { name:"Paws & Tails Grooming",       industry:'pet',        icon:'🐾', city:'Seattle',       state:'WA', zip:'98101', phone:'+1 (206) 555-0890', rating:4.8, years:6,  employees:5,  score:4,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:2400, ig_followers:8900 },
  { name:"Bark Avenue Pet Spa",         industry:'pet',        icon:'🐕', city:'Austin',        state:'TX', zip:'78702', phone:'+1 (512) 555-0789', rating:4.7, years:4,  employees:6,  score:4,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:1800, ig_followers:7300 },
  { name:"Happy Paws Dog Hotel",        industry:'pet',        icon:'🐶', city:'Oklahoma City', state:'OK', zip:'73101', phone:'+1 (405) 555-0890', rating:4.5, years:5,  employees:8,  score:4,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:false, google:true  }, fb_followers:1100, ig_followers:3200 },
  { name:"PetCare Plus Vet",            industry:'pet',        icon:'🐈', city:'Raleigh',       state:'NC', zip:'27601', phone:'+1 (919) 555-0456', rating:4.9, years:14, employees:20, score:4,
    social:{ fb:true,  ig:true,  li:true,  x:false, yelp:true,  google:true  }, fb_followers:3100, ig_followers:5800 },

  // Retail & Boutiques
  { name:"Urban Ink Tattoo",            industry:'retail',     icon:'🎨', city:'Louisville',    state:'KY', zip:'40201', phone:'+1 (502) 555-0123', rating:4.8, years:9,  employees:4,  score:4,
    social:{ fb:true,  ig:true,  li:false, x:true,  yelp:false, google:true  }, fb_followers:3400, ig_followers:16000},
  { name:"The Flower Pot Shop",         industry:'retail',     icon:'🌸', city:'Kansas City',   state:'MO', zip:'64101', phone:'+1 (816) 555-0901', rating:4.5, years:18, employees:5,  score:3,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:1700, ig_followers:4300 },
  { name:"Olive Garden Florist",        industry:'retail',     icon:'🌺', city:'Tucson',        state:'AZ', zip:'85701', phone:'+1 (520) 555-0901', rating:4.3, years:25, employees:6,  score:3,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:false }, fb_followers:920,  ig_followers:2100 },
  { name:"PowerShot Photography",       industry:'retail',     icon:'📸', city:'Madison',       state:'WI', zip:'53701', phone:'+1 (608) 555-0012', rating:5.0, years:8,  employees:2,  score:5,
    social:{ fb:true,  ig:true,  li:true,  x:true,  yelp:false, google:true  }, fb_followers:4200, ig_followers:22000},

  // Bonus high-value leads
  { name:"Westside Auto Body",          industry:'auto',       icon:'🚙', city:'Portland',      state:'OR', zip:'97202', phone:'+1 (503) 555-0456', rating:4.4, years:13, employees:11, score:4,
    social:{ fb:true,  ig:false, li:false, x:false, yelp:true,  google:true  }, fb_followers:380,  ig_followers:0    },
  { name:"Crestwood Chiropractic",      industry:'medical',    icon:'🩺', city:'Nashville',     state:'TN', zip:'37202', phone:'+1 (615) 555-0901', rating:4.7, years:16, employees:8,  score:5,
    social:{ fb:true,  ig:true,  li:true,  x:false, yelp:true,  google:true  }, fb_followers:1600, ig_followers:3900 },
  { name:"Riverside Bakery",            industry:'restaurant', icon:'🥐', city:'Sacramento',    state:'CA', zip:'95802', phone:'+1 (916) 555-0123', rating:4.9, years:11, employees:12, score:4,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:5100, ig_followers:12000},
  { name:"Pinecrest Accounting",        industry:'contractor', icon:'📊', city:'Denver',        state:'CO', zip:'80203', phone:'+1 (720) 555-0456', rating:4.8, years:20, employees:6,  score:5,
    social:{ fb:false, ig:false, li:true,  x:false, yelp:false, google:true  }, fb_followers:0,    ig_followers:0    },
  { name:"Golden Gate Tutoring",        industry:'medical',    icon:'📚', city:'San Francisco',  state:'CA', zip:'94101', phone:'+1 (415) 555-0789', rating:4.9, years:5,  employees:8,  score:5,
    social:{ fb:true,  ig:true,  li:true,  x:false, yelp:false, google:true  }, fb_followers:2200, ig_followers:4700 },
  { name:"Harbor Lights Photography",   industry:'retail',     icon:'📷', city:'Charleston',    state:'SC', zip:'29401', phone:'+1 (843) 555-0234', rating:5.0, years:7,  employees:2,  score:5,
    social:{ fb:true,  ig:true,  li:false, x:true,  yelp:false, google:true  }, fb_followers:3800, ig_followers:19000},
  { name:"Oakwood Fence & Gate",        industry:'contractor', icon:'🌳', city:'Austin',        state:'TX', zip:'78703', phone:'+1 (512) 555-0901', rating:4.6, years:9,  employees:7,  score:4,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:720,  ig_followers:1800 },
  { name:"Coastal Hair Artistry",       industry:'salon',      icon:'🌊', city:'Virginia Beach', state:'VA', zip:'23451', phone:'+1 (757) 555-0567', rating:4.8, years:6,  employees:7,  score:5,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:2900, ig_followers:11000},
  { name:"Heritage Glass & Mirror",     industry:'contractor', icon:'🪟', city:'Columbus',      state:'OH', zip:'43202', phone:'+1 (614) 555-0012', rating:4.5, years:30, employees:9,  score:3,
    social:{ fb:true,  ig:false, li:false, x:false, yelp:true,  google:true  }, fb_followers:160,  ig_followers:0    },
  { name:"Midtown Martial Arts",        industry:'fitness',    icon:'🥋', city:'Memphis',       state:'TN', zip:'38102', phone:'+1 (901) 555-0234', rating:4.9, years:14, employees:5,  score:5,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:false, google:true  }, fb_followers:3700, ig_followers:9200 },
  { name:"Sunrise Pools & Spas",        industry:'contractor', icon:'🏊', city:'Scottsdale',    state:'AZ', zip:'85252', phone:'+1 (480) 555-0678', rating:4.7, years:18, employees:14, score:4,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:1300, ig_followers:4100 },
  { name:"King Street Coffee Co.",      industry:'restaurant', icon:'☕', city:'Charleston',    state:'SC', zip:'29402', phone:'+1 (843) 555-0901', rating:4.8, years:4,  employees:9,  score:4,
    social:{ fb:true,  ig:true,  li:false, x:true,  yelp:true,  google:true  }, fb_followers:4600, ig_followers:13000},
  { name:"BlueStar Insurance Agency",   industry:'contractor', icon:'🛡', city:'Raleigh',       state:'NC', zip:'27602', phone:'+1 (919) 555-0123', rating:4.6, years:22, employees:7,  score:5,
    social:{ fb:false, ig:false, li:true,  x:false, yelp:false, google:true  }, fb_followers:0,    ig_followers:0    },
  { name:"Desert Rose Bridal",          industry:'retail',     icon:'👰', city:'Tucson',        state:'AZ', zip:'85702', phone:'+1 (520) 555-0345', rating:4.9, years:12, employees:5,  score:5,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:true,  google:true  }, fb_followers:4800, ig_followers:17000},
  { name:"TechRepair Pro",              industry:'retail',     icon:'💻', city:'Austin',        state:'TX', zip:'78704', phone:'+1 (512) 555-0234', rating:4.5, years:6,  employees:4,  score:4,
    social:{ fb:true,  ig:true,  li:true,  x:true,  yelp:true,  google:true  }, fb_followers:1900, ig_followers:4400 },
  { name:"Lakeview Dog Training",       industry:'pet',        icon:'🦴', city:'Madison',       state:'WI', zip:'53702', phone:'+1 (608) 555-0567', rating:5.0, years:8,  employees:3,  score:5,
    social:{ fb:true,  ig:true,  li:false, x:false, yelp:false, google:true  }, fb_followers:2100, ig_followers:6300 },
  { name:"Prestige Catering Co.",       industry:'restaurant', icon:'🍱', city:'Chicago',       state:'IL', zip:'60602', phone:'+1 (312) 555-0456', rating:4.7, years:10, employees:16, score:5,
    social:{ fb:true,  ig:true,  li:true,  x:false, yelp:true,  google:true  }, fb_followers:3200, ig_followers:7800 },
  { name:"Mountain High Brewing",       industry:'restaurant', icon:'🍺', city:'Boulder',       state:'CO', zip:'80301', phone:'+1 (303) 555-0789', rating:4.8, years:5,  employees:14, score:4,
    social:{ fb:true,  ig:true,  li:false, x:true,  yelp:true,  google:true  }, fb_followers:8900, ig_followers:21000},
];

/* ── Social Platform Config ───────────────────────── */
const PLATFORMS = {
  sms:   { label:'SMS/Text',   icon:'💬', color:'#22c55e',  charLimit:160  },
  fb:    { label:'Facebook',   icon:'🔵', color:'#1877F2',  charLimit:500  },
  ig:    { label:'Instagram',  icon:'📷', color:'#E1306C',  charLimit:300  },
  li:    { label:'LinkedIn',   icon:'🔷', color:'#0A66C2',  charLimit:300  },
  x:     { label:'X / Twitter',icon:'🐦', color:'#1DA1F2',  charLimit:280  },
  google:{ label:'Google Biz', icon:'🔴', color:'#EA4335',  charLimit:750  },
  wa:    { label:'WhatsApp',   icon:'🟢', color:'#25D366',  charLimit:4096 },
};

/* ── Pitch Templates by Platform ─────────────────── */
const PITCH_TEMPLATES = {
  sms: [
    (b) => `Hi ${b.name.split(' ')[0]}! 👋 I noticed ${b.name} doesn't have a website yet — you're missing customers searching online daily. We build beautiful, fast sites for ${b.industry} businesses. See our work: founderos.com — reply YES for a free mockup! — Riley @ Luminary`,
    (b) => `Hey ${b.name}! Riley here from Luminary 🌐 I found your business in ${b.city} but couldn't find you online. 81% of customers Google before visiting. We'll get you a site in 5 days. Check us out at founderos.com — free quote, no pressure!`,
    (b) => `Hi! 👋 Spotted ${b.name} in ${b.city} — amazing ${b.rating}⭐ reviews! But no website yet. You're leaving money on the table. We specialise in exactly this. Visit founderos.com — let's fix that this week! 🚀`,
    (b) => `${b.name} came up in my search but you don't have a website! We build sites for ${b.industry} businesses starting from $799. See examples at founderos.com — reply for a free consult. Avg turnaround: 5 days ✅`,
  ],
  fb: [
    (b) => `Hey ${b.name} Team! 👋\n\nI came across your Facebook page and noticed you have some amazing reviews (${b.rating}⭐!) — but I couldn't find your website anywhere.\n\nYou're likely missing customers who search online before visiting. We build fast, beautiful websites for ${b.industry} businesses like yours — fully mobile-optimised and Google-ready.\n\n📎 See our work: founderos.com\n\nWould love to send over a free mockup of what your site could look like. Just reply here and I'll have something to you within 24 hours!\n\n— Riley, Luminary Team`,
    (b) => `Hi ${b.name}! I'm Riley from Luminary 🌐\n\nI was browsing local ${b.industry} businesses in ${b.city} and your Facebook page caught my eye — great content! But I noticed you don't have a website yet.\n\nWith ${b.fb_followers > 0 ? b.fb_followers.toLocaleString() + ' followers already' : 'your great social presence'}, a website would turn that audience into actual leads and bookings.\n\nWe've helped 120+ local businesses go from zero to fully online. Check us out at founderos.com 🚀\n\nInterested in a free website consultation?`,
  ],
  ig: [
    (b) => `Hey @${b.name.toLowerCase().replace(/[^a-z0-9]/g, '')}! 🔥\n\nYour content is looking great${b.ig_followers > 0 ? ` (${b.ig_followers.toLocaleString()} followers!)` : ''}! But I noticed you don't have a website linked in your bio 👀\n\nYou're missing tons of potential customers who want to book/order/contact you directly. We build stunning sites that match your brand — fast & affordable.\n\n🌐 See our work: founderos.com\n\nDM me back and I'll send a free mockup! 🙌`,
    (b) => `Hi ${b.name}! 👋 Love your ${b.industry} content${b.ig_followers > 1000 ? ` — ${b.ig_followers.toLocaleString()} followers is no joke!` : '!'}  \n\nOne thing I noticed: you don't have a website yet. A site would let you take bookings, showcase your work, and show up on Google. \n\nWe specialise in this at Founderos — check founderos.com and DM us for a free quote! 🚀`,
  ],
  li: [
    (b) => `Hi there,\n\nI came across ${b.name} on LinkedIn and noticed something surprising — you don't have a company website yet.\n\nGiven your ${b.rating}⭐ reputation and ${b.years} years in the ${b.industry} industry, a professional website would significantly boost your visibility and credibility with new clients.\n\nAt Founderos, we build custom, conversion-focused websites for established businesses like yours. Our sites are live in as little as 5 days.\n\n📌 Portfolio: founderos.com\n\nWould you be open to a 15-minute call to explore what we could build for ${b.name}?\n\nBest,\nRiley — Luminary / Founderos`,
    (b) => `Hello,\n\nI'm Riley from Luminary — I help local ${b.industry} businesses establish a professional online presence.\n\nI noticed ${b.name} has a strong LinkedIn presence but no website to drive inbound leads. Most of your competitors in ${b.city} are already ranking on Google — a website would help you capture that traffic.\n\nFounderos specialises in fast, beautiful websites starting at $799. We've helped 120+ businesses just like yours.\n\n🔗 founderos.com\n\nWould love to connect and share some ideas. Open to a quick chat this week?`,
  ],
  x: [
    (b) => `Hey ${b.name}! 👋 Love what you're doing in ${b.city}. Noticed you don't have a website yet — missing out on so many potential customers searching online 📲 We build fast, affordable sites for ${b.industry} businesses. founderos.com — let's get you online!`,
    (b) => `@${b.name.toLowerCase().replace(/\s/g, '')} your ${b.rating}⭐ reviews are 🔥 but where's your website?! We can fix that in 5 days. Check out founderos.com — built for ${b.industry} businesses like yours 🚀`,
  ],
  google: [
    (b) => `Hi ${b.name} Team,\n\nI found your Google Business listing and wanted to reach out. Your ${b.rating}⭐ rating and ${b.years}-year reputation are impressive — but I noticed you don't have a website linked yet.\n\nA website would:\n✓ Show up higher in Google searches\n✓ Let customers book/contact you directly\n✓ Build trust with new clients\n✓ Turn foot traffic into online revenue\n\nAt Founderos, we build professional websites for ${b.industry} businesses in ${b.city} starting from $799 — live in 5 days, no technical skills needed from you.\n\nSee our portfolio at founderos.com and reply to this message to get a free mockup.\n\nBest regards,\nRiley — Luminary / Founderos`,
  ],
  wa: [
    (b) => `Hi! 👋 Is this ${b.name}?\n\nThis is Riley from Luminary. I noticed your business in ${b.city} doesn't have a website yet — and with your amazing ${b.rating}⭐ rating, you could be getting SO many more customers online!\n\nWe build professional websites for ${b.industry} businesses like yours. Fast, beautiful, affordable (starting $799). Takes about 5 days to go live 🚀\n\nWant to see some examples? Check founderos.com\n\nOr reply here and I'll send over a free mockup of what your site could look like! 😊`,
  ],
};

const CALL_SCRIPT = (b) =>
  `<strong>Opening:</strong> "Hi, may I speak with the owner of ${b.name}? My name is Aria calling from Luminary — do you have just 2 minutes?"<br/><br/><strong>Hook:</strong> "I was looking up ${b.industry} businesses in ${b.city}, ${b.state} and came across ${b.name} — great reviews by the way, ${b.rating} stars is impressive! But I noticed you don't have a website yet. Is that right?"<br/><br/><em>[If no]</em> "That's exactly why I'm calling. Every day people in ${b.city} are Googling '${b.industry} near me' and you're invisible to them. We help businesses like yours fix that — fast and affordably."<br/><br/><strong>Value Prop:</strong> "We build beautiful, professional websites for ${b.industry} businesses. You'd be live on Google in as little as 5 days, starting from $799. We've helped over 120 local businesses."<br/><br/><strong>CTA:</strong> "I'd love to send you a free mockup — could I get your email? And you can see our work at founderos.com right now."<br/><br/><em>[Objection — "too busy"]</em> "Totally understand! That's exactly why we handle everything — you just review and approve. Takes maybe 2 hours of your time total."<br/><br/><em>[Objection — "too expensive"]</em> "Our plans start at $799 one-time — most clients earn that back in new customers within the first month. And we offer payment plans."`;

/* ── Scan Messages (makes scouting feel real) ──────── */
const SCAN_MSGS = [
  (b) => `🔍 Scanning Google My Business in ${b.city}, ${b.state}…`,
  (b) => `📋 Found listing: ${b.name} — checking website status…`,
  (b) => `🚫 No website detected for ${b.name}`,
  (b) => `📱 Cross-referencing Facebook Business Pages…`,
  (b) => `✅ Facebook page found: ${b.fb_followers > 0 ? b.fb_followers.toLocaleString()+' followers' : 'found'}`,
  (b) => `📸 Checking Instagram presence…`,
  (b) => `🔷 Verifying LinkedIn company page…`,
  (b) => `⭐ Rating confirmed: ${b.rating}/5 (${b.years} years in business)`,
  (b) => `✅ Lead scored ${b.score}/5 — adding to pipeline`,
];

/* ── State ─────────────────────────────────────────── */
const PIPELINE_COLS   = ['scouted','contacted','replied','interested','booked','won'];
const PIPELINE_LABELS = {
  scouted:    { title:'🔍 Scouted',    color:'#94a3b8' },
  contacted:  { title:'📤 Reached Out',color:'#38bdf8' },
  replied:    { title:'↩ Replied',     color:'#fbbf24' },
  interested: { title:'⭐ Interested',  color:'#a78bfa' },
  booked:     { title:'📅 Booked',     color:'#818cf8' },
  won:        { title:'🎉 Won',         color:'#22c55e' },
};

let businesses    = [];
let selectedBizId = null;
let scoutActive   = false;
let scoutInterval = null;
let currentPitchTab = 'sms';
let activePlatforms = new Set(['sms','fb','ig','li','x','wa']); // bulk send platforms

const pipeline = { scouted:[], contacted:[], replied:[], interested:[], booked:[], won:[] };
let stats = { scouted:0, contacted:0, replied:0, interested:0, booked:0, won:0 };

/* ── Init ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderPipelineBoard();
  seedPipeline();
  updateStats();
  startScanFeed();
});

/* ── Scan Feed (live-feeling ticker) ──────────────── */
function startScanFeed() {
  // initial messages
  const feed = document.getElementById('scanFeed');
  if (!feed) return;
  const generic = [
    '🔍 Initializing Google My Business scan…',
    '📡 Connecting to Facebook Business API…',
    '🔷 Authenticating LinkedIn Company Search…',
    '📸 Loading Instagram Business Directory…',
    '🐦 Scanning X/Twitter business profiles…',
    '🟢 WhatsApp Business accounts index ready',
    '📊 Loading Yelp & Google Maps data…',
    '✅ All data sources connected — ready to scout',
  ];
  let i = 0;
  const pushMsg = (msg) => {
    const line = document.createElement('div');
    line.className = 'scan-line';
    const now = new Date();
    const ts = now.toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
    line.innerHTML = `<span class="scan-ts">${ts}</span> ${msg}`;
    feed.appendChild(line);
    feed.scrollTop = feed.scrollHeight;
    // keep max 30 lines
    while (feed.children.length > 30) feed.removeChild(feed.firstChild);
  };
  generic.forEach((m, idx) => setTimeout(() => pushMsg(m), idx * 400));
}

function pushScanLine(biz) {
  const feed = document.getElementById('scanFeed');
  if (!feed) return;
  const msgs = [
    `🔍 Found: <strong>${biz.name}</strong> — ${biz.city}, ${biz.state} | No website detected 🚫`,
    `📱 Social check: ${biz.social.fb ? '🔵FB' : '❌FB'} ${biz.social.ig ? '📷IG' : '❌IG'} ${biz.social.li ? '🔷LI' : '❌LI'} ${biz.social.x ? '🐦X' : '❌X'} | Rating: ${biz.rating}⭐`,
    `✅ Lead added — Score ${biz.score}/5 | Pitch queued across ${Object.values(biz.social).filter(Boolean).length} platforms`,
  ];
  msgs.forEach((m, idx) => {
    setTimeout(() => {
      const line = document.createElement('div');
      line.className = 'scan-line scan-line--new';
      const now = new Date();
      const ts = now.toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
      line.innerHTML = `<span class="scan-ts">${ts}</span> ${m}`;
      feed.appendChild(line);
      feed.scrollTop = feed.scrollHeight;
      while (feed.children.length > 40) feed.removeChild(feed.firstChild);
    }, idx * 280);
  });
}

/* ── Scouting Engine ──────────────────────────────── */
function startScout() {
  if (scoutActive) { stopScout(); return; }
  scoutActive = true;
  const icon = document.getElementById('scoutBtnIcon');
  const text = document.getElementById('scoutBtnText');
  icon.textContent = '⏳';
  text.textContent = 'Scouting… (click to stop)';

  const pool = [...BIZ_POOL].sort(() => Math.random() - 0.5);
  let idx = 0;

  scoutInterval = setInterval(() => {
    if (idx >= pool.length) idx = 0;
    const raw = pool[idx++];
    if (!businesses.find(b => b.name === raw.name)) {
      const biz = { ...raw, id: Date.now() + Math.random(), status:'scouted', pitchSent: false };
      businesses.unshift(biz);
      pipeline.scouted.push(biz);
      stats.scouted++;
      updateStats();
      applyFilters();
      renderPipelineBoard();
      pushScanLine(biz);
      updateLiveCount(stats.scouted);
      setTimeout(() => autoProgressLead(biz), 5000 + Math.random() * 12000);
    }
    if (stats.scouted >= 100) stopScout();
  }, 700);
}

function stopScout() {
  scoutActive = false;
  clearInterval(scoutInterval);
  document.getElementById('scoutBtnIcon').textContent = '🔍';
  document.getElementById('scoutBtnText').textContent = stats.scouted >= 100 ? '✓ 100 Found! Scout Again' : 'Resume Scouting';
  showToast(`✅ Scout paused — ${stats.scouted} businesses found`);
}

function updateLiveCount(n) {
  const el = document.getElementById('scoutLiveCount');
  if (el) el.textContent = n;
}

/* ── Auto Lead Progression ────────────────────────── */
function autoProgressLead(biz) {
  if (Math.random() < 0.75) {
    sendPitchToBiz(biz, false);
    setTimeout(() => { if (Math.random() < 0.40) progressTo(biz, 'replied'); }, 5000 + Math.random() * 10000);
  }
}

function progressTo(biz, next) {
  const order = { scouted:0, contacted:1, replied:2, interested:3, booked:4, won:5 };
  if (order[biz.status] >= order[next]) return;
  movePipeline(biz, next);
  if (next === 'replied') {
    const platform = biz.social.fb ? 'Facebook' : biz.social.ig ? 'Instagram' : biz.social.li ? 'LinkedIn' : 'SMS';
    showToast(`↩ ${biz.name} replied via ${platform}!`);
    setTimeout(() => { if (Math.random() < 0.50) progressTo(biz, 'interested'); }, 4000 + Math.random() * 8000);
  }
  if (next === 'interested') {
    showToast(`⭐ ${biz.name} is interested in Founderos!`);
    setTimeout(() => { if (Math.random() < 0.48) progressTo(biz, 'booked'); }, 5000 + Math.random() * 10000);
  }
  if (next === 'booked') {
    showToast(`📅 ${biz.name} booked a discovery call with Founderos!`);
    setTimeout(() => { if (Math.random() < 0.55) progressTo(biz, 'won'); }, 6000 + Math.random() * 12000);
  }
  if (next === 'won') {
    showToast(`🎉 ${biz.name} signed up with Founderos! New client!`);
    updateConversionMetrics();
  }
}

function movePipeline(biz, newStatus) {
  pipeline[biz.status] = pipeline[biz.status].filter(b => b.id !== biz.id);
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

  document.querySelectorAll('.scout-biz-item').forEach(el =>
    el.classList.toggle('scout-biz-item--active', el.dataset.id == id));

  document.getElementById('pitchEmpty').style.display = 'none';
  document.getElementById('pitchComposer').style.display = 'block';

  // header
  const platforms = Object.entries(biz.social)
    .filter(([k,v]) => v && PLATFORMS[k])
    .map(([k]) => `<span class="sp-badge" style="background:${PLATFORMS[k].color}20;color:${PLATFORMS[k].color}">${PLATFORMS[k].icon} ${PLATFORMS[k].label}</span>`)
    .join('');

  document.getElementById('pitchBizInfo').innerHTML = `
    <div class="scout-pitch-biz__icon">${biz.icon}</div>
    <div style="flex:1;min-width:0">
      <div class="scout-pitch-biz__name">${biz.name}</div>
      <div class="scout-pitch-biz__meta">${industryLabel(biz.industry)} · ${biz.city}, ${biz.state} · ${biz.phone} · ${biz.rating}⭐ · ${biz.years}y</div>
      <div class="sp-badges">${platforms}</div>
    </div>
    <div class="scout-pitch-biz__no-site">🚫 No Website</div>
  `;

  buildPlatformTabs(biz);
  generateAllPitches(biz);

  // activate first available tab
  const firstAvail = getAvailablePlatforms(biz)[0] || 'sms';
  const tab = document.querySelector(`.scout-pitch-tab[data-platform="${firstAvail}"]`);
  if (tab) switchPitchTab(tab, firstAvail);
}

function getAvailablePlatforms(biz) {
  const order = ['sms','fb','ig','li','x','wa','google'];
  return order.filter(p => p === 'sms' || p === 'wa' || biz.social[p]);
}

function buildPlatformTabs(biz) {
  const container = document.getElementById('platformTabs');
  if (!container) return;
  const avail = getAvailablePlatforms(biz);
  container.innerHTML = avail.map(p => `
    <button class="scout-pitch-tab" data-platform="${p}"
      style="--platform-color:${PLATFORMS[p].color}"
      onclick="switchPitchTab(this,'${p}')">
      ${PLATFORMS[p].icon} ${PLATFORMS[p].label}
    </button>
  `).join('');
}

function generateAllPitches(biz) {
  // pre-generate for each platform
  Object.keys(PITCH_TEMPLATES).forEach(p => {
    const templates = PITCH_TEMPLATES[p];
    const fn = templates[Math.floor(Math.random() * templates.length)];
    const ta = document.getElementById('pitch-' + p);
    if (ta) ta.value = fn(biz);
  });
  // call script
  const cs = document.getElementById('callScript');
  if (cs) cs.innerHTML = CALL_SCRIPT(biz);
}

function switchPitchTab(btn, platform) {
  currentPitchTab = platform;
  document.querySelectorAll('.scout-pitch-tab').forEach(b => b.classList.remove('scout-pitch-tab--active'));
  btn.classList.add('scout-pitch-tab--active');
  document.querySelectorAll('.pitch-pane').forEach(p => (p.style.display = 'none'));
  const pane = document.getElementById('pane-' + platform);
  if (pane) pane.style.display = 'block';

  // update char count
  updateCharCount(platform);
}

function updateCharCount(platform) {
  const ta = document.getElementById('pitch-' + platform);
  const el = document.getElementById('charCount-' + platform);
  if (!ta || !el) return;
  const limit = PLATFORMS[platform]?.charLimit || 500;
  const len   = ta.value.length;
  el.textContent = `${len} / ${limit}`;
  el.style.color = len > limit ? '#ef4444' : 'var(--text-3)';
}

function regeneratePitch(platform) {
  const biz = businesses.find(b => b.id === selectedBizId);
  if (!biz) return;
  const templates = PITCH_TEMPLATES[platform];
  if (!templates) return;
  const fn = templates[Math.floor(Math.random() * templates.length)];
  const ta = document.getElementById('pitch-' + platform);
  if (ta) { ta.value = fn(biz); updateCharCount(platform); }
  showToast(`✦ New ${PLATFORMS[platform].label} pitch generated!`);
}

function copyPitch(platform) {
  const ta = document.getElementById('pitch-' + platform);
  if (ta) navigator.clipboard?.writeText(ta.value).catch(() => {});
  showToast(`✓ ${PLATFORMS[platform].label} pitch copied!`);
}

function sendPitch(platform) {
  const biz = businesses.find(b => b.id === selectedBizId);
  if (!biz) return;
  sendPitchToBiz(biz, true, platform);
}

function sendPitchToBiz(biz, showNotif = true, platform = 'sms') {
  if (biz.pitchSent) {
    if (showNotif) showToast(`ℹ️ Already reached out to ${biz.name}`);
    return;
  }
  biz.pitchSent = true;
  biz.sentPlatform = platform;
  movePipeline(biz, 'contacted');

  const platformLabel = PLATFORMS[platform]?.label || 'SMS';
  if (showNotif) {
    showToast(`📤 Pitch sent to ${biz.name} via ${platformLabel} — lead in pipeline`);
    const feed = document.getElementById('scanFeed');
    if (feed) {
      const line = document.createElement('div');
      line.className = 'scan-line scan-line--sent';
      const now = new Date();
      const ts = now.toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
      line.innerHTML = `<span class="scan-ts">${ts}</span> 📤 Pitch sent to <strong>${biz.name}</strong> via ${PLATFORMS[platform].icon} ${platformLabel} → <span style="color:#a78bfa">founderos.com</span>`;
      feed.appendChild(line);
      feed.scrollTop = feed.scrollHeight;
    }
  }
}

/* ── Bulk Send ────────────────────────────────────── */
function sendBulkPitches() {
  const untouched = businesses.filter(b => b.status === 'scouted');
  if (!untouched.length) { showToast('No untouched businesses — start scouting first!'); return; }
  let count = 0;
  untouched.forEach((biz, i) => {
    setTimeout(() => {
      // pick best available platform per business
      const best = ['li','fb','ig','sms'].find(p => p === 'sms' || biz.social[p]) || 'sms';
      sendPitchToBiz(biz, false, best);
      count++;
      if (count === untouched.length) showToast(`📤 Bulk outreach sent to ${count} businesses across FB, IG, LinkedIn, SMS & more!`);
    }, i * 100);
  });
}

/* ── Business List Render ─────────────────────────── */
function renderBizList(list) {
  const el    = document.getElementById('bizList');
  const count = document.getElementById('bizCount');
  if (!el) return;
  if (count) count.textContent = list.length;

  if (!list.length) {
    el.innerHTML = `<div class="scout-empty-state"><span>🔍</span><p>${businesses.length === 0 ? 'Click <strong>Start Scouting</strong> above to find businesses.' : 'No businesses match your filters.'}</p></div>`;
    return;
  }

  el.innerHTML = list.map(b => {
    const socialIcons = Object.entries(b.social)
      .filter(([k,v]) => v && PLATFORMS[k])
      .map(([k]) => `<span title="${PLATFORMS[k].label}" style="color:${PLATFORMS[k].color}">${PLATFORMS[k].icon}</span>`)
      .join('');
    return `
      <div class="scout-biz-item ${b.id === selectedBizId ? 'scout-biz-item--active' : ''}"
           onclick="selectBusiness(${b.id})" data-id="${b.id}">
        <div class="scout-biz-icon">${b.icon}</div>
        <div class="scout-biz-info">
          <div class="scout-biz-name">${b.name}</div>
          <div class="scout-biz-meta">
            <span>${b.city}, ${b.state}</span><span>·</span>
            <span>${b.rating}⭐</span><span>·</span>
            <span>${b.years}y</span><span>·</span>
            <span>🚫 No website</span>
          </div>
          <div class="scout-biz-social">${socialIcons || '—'}</div>
        </div>
        <div class="scout-biz-right">
          <span class="scout-status-badge scout-status-badge--${b.status}">${statusLabel(b.status)}</span>
          <div class="scout-score">${Array.from({length:5}).map((_,i) =>
            `<div class="scout-score-dot ${i < b.score ? 'scout-score-dot--filled' : ''}"></div>`
          ).join('')}</div>
        </div>
      </div>
    `;
  }).join('');
}

function applyFilters() {
  const industry = document.getElementById('filterIndustry')?.value || '';
  const location = (document.getElementById('filterLocation')?.value || '').toLowerCase();
  const status   = document.getElementById('filterStatus')?.value || '';
  let filtered = businesses;
  if (industry) filtered = filtered.filter(b => b.industry === industry);
  if (location) filtered = filtered.filter(b => (b.city + ' ' + b.state).toLowerCase().includes(location));
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
        <div class="pipeline-col__body">
          ${items.slice(-6).reverse().map(b => `
            <div class="pipeline-card" onclick="selectBusiness(${b.id})">
              <span class="pipeline-card__icon">${b.icon}</span>
              <div class="pipeline-card__name">${b.name}</div>
              <div class="pipeline-card__meta">${b.city}, ${b.state}</div>
              ${b.sentPlatform ? `<div class="pipeline-card__platform" style="color:${PLATFORMS[b.sentPlatform]?.color}">${PLATFORMS[b.sentPlatform]?.icon} ${PLATFORMS[b.sentPlatform]?.label}</div>` : ''}
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
    { ...BIZ_POOL[0],  id:1001, status:'won',         pitchSent:true, sentPlatform:'sms' },
    { ...BIZ_POOL[1],  id:1002, status:'won',         pitchSent:true, sentPlatform:'fb'  },
    { ...BIZ_POOL[2],  id:1003, status:'booked',      pitchSent:true, sentPlatform:'li'  },
    { ...BIZ_POOL[3],  id:1004, status:'interested',  pitchSent:true, sentPlatform:'ig'  },
    { ...BIZ_POOL[4],  id:1005, status:'interested',  pitchSent:true, sentPlatform:'fb'  },
    { ...BIZ_POOL[5],  id:1006, status:'replied',     pitchSent:true, sentPlatform:'ig'  },
    { ...BIZ_POOL[6],  id:1007, status:'replied',     pitchSent:true, sentPlatform:'x'   },
    { ...BIZ_POOL[7],  id:1008, status:'contacted',   pitchSent:true, sentPlatform:'wa'  },
    { ...BIZ_POOL[8],  id:1009, status:'contacted',   pitchSent:true, sentPlatform:'fb'  },
    { ...BIZ_POOL[9],  id:1010, status:'scouted',     pitchSent:false },
    { ...BIZ_POOL[10], id:1011, status:'scouted',     pitchSent:false },
    { ...BIZ_POOL[11], id:1012, status:'scouted',     pitchSent:false },
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
  setEl('statScouted',    stats.scouted);
  setEl('statContacted',  stats.contacted || 0);
  setEl('statReplied',    stats.replied || 0);
  setEl('statInterested', stats.interested || 0);
  setEl('statBooked',     stats.booked || 0);
  setEl('statWon',        stats.won || 0);

  const pct = Math.min(Math.round((stats.scouted / 100) * 100), 100);
  const fill = document.getElementById('progressFill');
  if (fill) fill.style.width = pct + '%';
  const lbl = document.getElementById('progressLabel');
  if (lbl) lbl.textContent = `${stats.scouted} / 100 businesses`;

  updateLiveCount(stats.scouted);
  updateConversionMetrics();
  setEl('rileyScouted', stats.scouted);
  setEl('rileyTexted',  stats.contacted || 0);
  setEl('rileyRate', stats.contacted > 0 ? Math.round((stats.replied / stats.contacted) * 100) : 0);
  setEl('caseyManaged', stats.scouted);
  setEl('caseyBooked',  stats.booked || 0);
  setEl('caseyWon',     stats.won || 0);
}

function updateConversionMetrics() {
  const won  = stats.won || 0;
  const cont = stats.contacted || 0;
  const rate = cont > 0 ? Math.round((won / cont) * 100) : 0;
  setEl('convRate',    rate + '%');
  setEl('projRevenue', '$' + (won * 1200).toLocaleString());
  setEl('todayWon',    won);
}

function setEl(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

/* ── Helpers ──────────────────────────────────────── */
function industryLabel(key) {
  const map = { restaurant:'🍽 Restaurant', salon:'✂ Salon & Spa', auto:'🚗 Auto',
                contractor:'🔧 Contractor', retail:'🛍 Retail', medical:'🏥 Medical',
                fitness:'💪 Fitness', pet:'🐾 Pet Services' };
  return map[key] || key;
}

function statusLabel(s) {
  return { scouted:'Scouted', contacted:'Reached Out', replied:'Replied',
           interested:'Interested', booked:'Booked', won:'Won 🎉' }[s] || s;
}

function copyCallScript() {
  const el = document.getElementById('callScript');
  if (el) navigator.clipboard?.writeText(el.innerText).catch(() => {});
  showToast('✓ Call script copied!');
}

function togglePlatform(btn, platform) {
  btn.classList.toggle('ptoggle--active');
  if (btn.classList.contains('ptoggle--active')) {
    activePlatforms.add(platform);
  } else {
    activePlatforms.delete(platform);
  }
}

/* ── Toast ────────────────────────────────────────── */
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 3500);
}
