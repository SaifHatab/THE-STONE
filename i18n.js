// ============================================================
// STONE SECURITY — EN / AR translations & language switching
// ============================================================

const STONE_I18N = (() => {

  const dict = {
    en: {
      nav: {
        home: "Home", about: "About", services: "Services",
        gallery: "Gallery", testimonials: "Testimonials", contact: "Contact"
      },
      common: {
        requestQuote: "Request a Quote",
        viewServices: "View Services",
        moreAboutUs: "More About Us",
        seeAllServices: "See All Services",
        callOpsLine: "Call the Ops Line",
        close: "Close ✕",
        langToggle: "AR"
      },
      footer: {
        blurb: "Manned guarding, patrols, and protection services for businesses and private clients. Replace this copy with your own company details.",
        blurbShort: "Manned guarding, patrols, and protection services for businesses and private clients.",
        company: "Company",
        contact: "Contact",
        getQuote: "Get a Quote",
        officeHours: "Always Open — 24/7",
        copyright: "The Stone Security. All rights reserved.",
        sample: "Sample content — replace with your licensing & registration details."
      },
      home: {
        eyebrow: "24 / 7 Coverage · Licensed & Insured",
        h1: "Security that stands its ground.",
        lead: "The Stone Security provides manned guarding, mobile patrols, event security, and executive protection to businesses and private clients who need a team that doesn't clock out.",
        tag1: "Manned Guarding", tag2: "Mobile Patrols", tag3: "Event Security", tag4: "CCTV Monitoring",
        currentShift: "CURRENT SHIFT",
        opsOnDuty: "On Duty", opsSites: "Sites Protected", opsResponse: "Avg. Response", opsYears: "In Operation",
        whatWeDo: "What We Do",
        whatWeDoH2: "Coverage built around your risk, not a template.",
        card1Idx: "01 — Guarding", card1H3: "Manned Guarding",
        card1P: "Uniformed officers stationed at entry points, lobbies, and perimeters — trained to de-escalate before problems reach your staff or guests.",
        card2Idx: "02 — Patrols", card2H3: "Mobile Patrols",
        card2P: "Marked vehicles run randomized routes across your properties overnight, with logged checkpoints and instant alerts on anything out of place.",
        card3Idx: "03 — Monitoring", card3H3: "CCTV & Alarm Response",
        card3P: "Live-monitored camera feeds and alarm lines, backed by an on-call unit that can be on-site fast when a sensor trips.",
        whyStone: "Why Stone",
        whyH2: "Every officer is vetted, licensed, and briefed on your site — not a rotating stranger.",
        whyLead: "We keep account teams small and consistent, so the guard on your door tonight is the same one who was there last week and knows your building.",
        value1: "Licensed officers & supervisors",
        value2: "Logged, verifiable patrol routes",
        value3: "Dedicated account manager per client",
        sectorsEyebrow: "Sectors We Cover",
        sector1: "Corporate offices & business parks",
        sector2: "Retail & shopping centres",
        sector3: "Construction & vacant sites",
        sector4: "Private events & VIP protection",
        sector5: "Residential & gated communities",
        ctaEyebrow: "Ready When You Are",
        ctaH2: "Get a site assessment this week.",
        ctaLead: "Tell us about your property or event and we'll put together coverage options within one business day.",
        title: "The Stone Security — Protection, Patrols & Peace of Mind",
        desc: "The Stone Security provides manned guarding, mobile patrols, event and executive protection, and CCTV monitoring for commercial and private clients."
      },
      about: {
        eyebrow: "About The Stone Security",
        h1: "Built by people who've stood the post themselves.",
        lead: "Replace this section with your company's real founding story, licensing history, and mission.",
        storyH2: "Our Story",
        storyP1: "The Stone Security started as a two-person guarding contract and grew into a full-service protection provider by keeping every promise we made to that first client: show up, stay alert, and never treat a post as routine.",
        storyP2: "Today our officers and patrol teams cover corporate campuses, retail sites, construction yards, and private residences — but the standard hasn't changed. (Swap in your real history, founding year, and milestones here.)",
        numbersEyebrow: "By The Numbers",
        num1: "Years in operation", num2: "Active client sites", num3: "Licensed, vetted officers",
        principlesEyebrow: "What We Stand On",
        principlesH2: "Our operating principles",
        p1H3: "Consistency", p1P: "The same officers return to the same sites, so they know your building, your staff, and your risk points by name.",
        p2H3: "Accountability", p2P: "Every patrol is logged, every incident is reported same-day, and every client has a direct line to their account manager.",
        p3H3: "De-escalation First", p3P: "Our officers are trained to defuse situations calmly before they need to intervene physically.",
        leadershipEyebrow: "Leadership",
        leadershipH2: "The team behind the badge",
        leadershipLead: "Add real team photos and bios here — this is placeholder structure only.",
        role1H3: "Founder & Director", role1P: "Name Placeholder — background in [your founder's experience].",
        role2H3: "Operations Manager", role2P: "Name Placeholder — oversees patrol scheduling and site audits.",
        role3H3: "Client Relations Lead", role3P: "Name Placeholder — your first call for contract or coverage changes.",
        ctaEyebrow: "Work With Us",
        ctaH2: "Let's talk about your site.",
        title: "About — The Stone Security",
        desc: "Learn about The Stone Security's history, values, and the team behind our guarding, patrol, and protection services."
      },
      services: {
        eyebrow: "Our Services",
        h1: "Coverage for every kind of exposure.",
        lead: "From a single lobby desk to a multi-site patrol contract — here's what we run.",
        srHeading: "Our Services",
        s1H3: "Manned Guarding", s1P: "Uniformed, licensed officers stationed at your entrances, lobbies, and perimeters — day shifts, night shifts, or full 24/7 coverage.",
        s2H3: "Mobile Patrols", s2P: "Marked patrol vehicles run randomized routes across your properties, with GPS-logged checkpoints and instant alerts on anomalies.",
        s3H3: "CCTV & Alarm Response", s3P: "Live-monitored camera feeds and alarm lines, backed by a rapid-response unit that can reach your site fast when a sensor trips.",
        s4H3: "Event Security", s4P: "Crowd management, access control, and bag checks for concerts, private functions, and corporate events of any size.",
        s5H3: "Executive & VIP Protection", s5P: "Discreet close-protection teams for executives, dignitaries, and public figures, on-site or travelling.",
        s6H3: "Construction & Vacant Site Security", s6P: "Overnight guarding and patrol for job sites and empty properties, reducing theft, vandalism, and unauthorized access.",
        howEyebrow: "How It Works",
        howH2: "From first call to first shift.",
        step1: "STEP 1", step1P: "Free site walk-through and risk assessment.",
        step2: "STEP 2", step2P: "Custom coverage proposal within one business day.",
        step3: "STEP 3", step3P: "Officer briefing on your site's specific procedures.",
        step4: "STEP 4", step4P: "Coverage begins, with a dedicated account manager on call.",
        ctaEyebrow: "Not Sure What You Need?",
        ctaH2: "Tell us about the site — we'll recommend coverage.",
        title: "Services — The Stone Security",
        desc: "Manned guarding, mobile patrols, event security, executive protection, and CCTV monitoring from The Stone Security."
      },
      gallery: {
        eyebrow: "Gallery",
        h1: "Officers, vehicles & coverage in the field.",
        lead: "These tiles are placeholders — swap in real photos of your team, vehicles, and events. Click any tile to preview the lightbox behavior.",
        srHeading: "Gallery",
        tile1: "Manned Guarding — Corporate Lobby",
        tile2: "Mobile Patrol Vehicle",
        tile3: "Event Access Control",
        tile4: "CCTV Monitoring Room",
        tile5: "Officer Briefing",
        tile6: "Construction Site Patrol",
        tile7: "Night Shift Checkpoint",
        tile8: "Team Training Day",
        tile9: "Executive Protection Detail",
        ctaEyebrow: "See Us In Action",
        ctaH2: "Want a walk-through of a live site?",
        title: "Gallery — The Stone Security",
        desc: "A look at The Stone Security's officers, patrol vehicles, and event coverage."
      },
      testimonials: {
        eyebrow: "Testimonials",
        h1: "What clients say.",
        lead: "Sample quotes below — replace with real feedback from your clients (with their permission).",
        srHeading: "Client Testimonials",
        q1: "“Stone's patrol team caught an issue at our warehouse at 3am and had it resolved before our morning shift even arrived. That's the kind of coverage we were missing before.”",
        m1: "Operations Director — Regional Logistics Company",
        q2: "“We switched providers twice before Stone. The difference is the officers actually know our building — same faces every week, not a new guard every shift.”",
        m2: "Property Manager — Downtown Office Tower",
        q3: "“Booked them for a 400-guest gala with two weeks' notice. Access control was smooth, professional, and completely unobtrusive to our guests.”",
        m3: "Event Producer — Private Client",
        q4: "“Their account manager answers the phone at midnight if we need her to. That responsiveness alone is worth the contract.”",
        m4: "General Manager — Retail Shopping Centre",
        dotLabel: "Show testimonial {n}",
        sectorsEyebrow: "Trusted By",
        sectorsH2: "Sectors we've protected",
        sec1H3: "Commercial Real Estate", sec1P: "Office towers, business parks, and mixed-use developments.",
        sec2H3: "Retail & Hospitality", sec2P: "Shopping centres, hotels, and restaurant groups.",
        sec3H3: "Private Clients", sec3P: "Residences, family offices, and event hosts.",
        ctaEyebrow: "Join Them",
        ctaH2: "Ready to see what consistent coverage feels like?",
        title: "Testimonials — The Stone Security",
        desc: "What clients say about working with The Stone Security."
      },
      contact: {
        eyebrow: "Get In Touch",
        h1: "Let's put together a coverage plan.",
        lead: "Fill out the form and our team will respond within one business day — or call the ops line directly for urgent requests.",
        sendRequest: "Send a Request",
        fullName: "Full Name", namePlaceholder: "Jane Doe",
        email: "Email", emailPlaceholder: "jane@company.com",
        phone: "Phone", phonePlaceholder: "012 8500 6333",
        serviceNeeded: "Service Needed",
        opt1: "Manned Guarding", opt2: "Mobile Patrols", opt3: "CCTV & Alarm Response",
        opt4: "Event Security", opt5: "Executive Protection", opt6: "Construction / Vacant Site", opt7: "Not Sure",
        messageLabel: "Tell us about your site or event",
        messagePlaceholder: "Location, hours needed, number of officers, timeline...",
        send: "Send Request",
        directLines: "Direct Lines",
        opsLineLabel: "Ops Line (24/7)",
        emailLabel: "Email",
        addressLabel: "Office Address",
        officeHoursLabel: "Office Hours",
        officeHoursValue: "Always Open — 24/7",
        messengerLabel: "Messenger",
        mapNote: "Map placeholder — embed Google Maps or your preferred map provider here",
        formFillFields: "Please fill in your name, email, and message before sending.",
        formBadEmail: "That email address doesn't look right — please double check it.",
        formSuccess: "Request received. This is a demo form — connect it to your email or CRM to go live.",
        title: "Contact — The Stone Security",
        desc: "Request a quote or get in touch with The Stone Security."
      }
    },

    ar: {
      nav: {
        home: "الرئيسية", about: "من نحن", services: "خدماتنا",
        gallery: "معرض الصور", testimonials: "آراء العملاء", contact: "اتصل بنا"
      },
      common: {
        requestQuote: "اطلب عرض سعر",
        viewServices: "عرض الخدمات",
        moreAboutUs: "المزيد عنا",
        seeAllServices: "عرض كل الخدمات",
        callOpsLine: "اتصل بخط العمليات",
        close: "إغلاق ✕",
        langToggle: "EN"
      },
      footer: {
        blurb: "خدمات الحراسة، الدوريات، والحماية للشركات والعملاء الخاصين. استبدل هذا النص ببيانات شركتك.",
        blurbShort: "خدمات الحراسة، الدوريات، والحماية للشركات والعملاء الخاصين.",
        company: "الشركة",
        contact: "اتصل بنا",
        getQuote: "اطلب عرض سعر",
        officeHours: "متاح دائمًا — على مدار الساعة",
        copyright: "ذا ستون للأمن. جميع الحقوق محفوظة.",
        sample: "محتوى تجريبي — استبدله ببيانات الترخيص والتسجيل الخاصة بك."
      },
      home: {
        eyebrow: "تغطية على مدار الساعة · مرخصة ومؤمّنة",
        h1: "أمن يثبت في موقعه.",
        lead: "توفر ذا ستون للأمن خدمات الحراسة الثابتة، الدوريات المتنقلة، أمن الفعاليات، والحماية التنفيذية للشركات والعملاء الخاصين الذين يحتاجون فريقًا لا يغادر موقعه.",
        tag1: "حراسة ثابتة", tag2: "دوريات متنقلة", tag3: "أمن الفعاليات", tag4: "مراقبة الكاميرات",
        currentShift: "الوردية الحالية",
        opsOnDuty: "في الخدمة", opsSites: "موقع محمي", opsResponse: "متوسط الاستجابة", opsYears: "سنوات العمل",
        whatWeDo: "ماذا نقدم",
        whatWeDoH2: "تغطية مبنية على مخاطرك، وليست نموذجًا جاهزًا.",
        card1Idx: "٠١ — الحراسة", card1H3: "حراسة ثابتة",
        card1P: "ضباط بالزي الرسمي في نقاط الدخول والبهو والمحيط الخارجي — مدرّبون على تهدئة المواقف قبل وصولها لموظفيك أو ضيوفك.",
        card2Idx: "٠٢ — الدوريات", card2H3: "دوريات متنقلة",
        card2P: "مركبات مميزة تجوب مسارات عشوائية في ممتلكاتك ليلاً، مع نقاط تفتيش مسجلة وتنبيهات فورية عند أي خلل.",
        card3Idx: "٠٣ — المراقبة", card3H3: "الكاميرات والإنذار",
        card3P: "بث مراقب مباشرة وخطوط إنذار، مدعومة بفريق جاهز للوصول السريع عند تفعيل أي جهاز استشعار.",
        whyStone: "لماذا ذا ستون",
        whyH2: "كل ضابط تم فحصه وترخيصه وتدريبه على موقعك — وليس غريبًا متغيرًا باستمرار.",
        whyLead: "نحافظ على فرق صغيرة وثابتة لكل عميل، فالحارس على بابك الليلة هو نفسه الذي كان هناك الأسبوع الماضي ويعرف مبناك جيدًا.",
        value1: "ضباط ومشرفون مرخصون",
        value2: "مسارات دوريات مسجلة وقابلة للتحقق",
        value3: "مدير حساب مخصص لكل عميل",
        sectorsEyebrow: "القطاعات التي نغطيها",
        sector1: "المكاتب والمجمعات التجارية",
        sector2: "المتاجر والمراكز التجارية",
        sector3: "مواقع الإنشاءات والعقارات الشاغرة",
        sector4: "الفعاليات الخاصة وحماية كبار الشخصيات",
        sector5: "المجمعات السكنية المغلقة",
        ctaEyebrow: "نحن جاهزون عندما تكون جاهزًا",
        ctaH2: "احصل على تقييم لموقعك هذا الأسبوع.",
        ctaLead: "أخبرنا عن ممتلكاتك أو فعاليتك وسنقوم بإعداد خيارات التغطية خلال يوم عمل واحد.",
        title: "ذا ستون للأمن — حماية، دوريات، وراحة بال",
        desc: "توفر ذا ستون للأمن خدمات الحراسة الثابتة، الدوريات المتنقلة، أمن الفعاليات، الحماية التنفيذية، ومراقبة الكاميرات للعملاء التجاريين والخاصين."
      },
      about: {
        eyebrow: "عن ذا ستون للأمن",
        h1: "بناها أشخاص وقفوا في الموقع بأنفسهم.",
        lead: "استبدل هذا القسم بقصة تأسيس شركتك الحقيقية وتاريخ الترخيص والرسالة.",
        storyH2: "قصتنا",
        storyP1: "بدأت ذا ستون للأمن بعقد حراسة لشخصين ونمت لتصبح مزودًا متكاملاً لخدمات الحماية من خلال الوفاء بكل وعد قطعناه لأول عميل: الحضور، اليقظة، وعدم التعامل مع أي موقع كأمر روتيني.",
        storyP2: "اليوم يغطي ضباطنا وفرق الدوريات المجمعات المؤسسية والمواقع التجارية وساحات الإنشاءات والمساكن الخاصة — لكن المعيار لم يتغير. (استبدل هذا بتاريخك الحقيقي وسنة التأسيس والإنجازات.)",
        numbersEyebrow: "بالأرقام",
        num1: "سنوات في الخدمة", num2: "موقع عميل نشط", num3: "ضباط مرخصون وموثقون",
        principlesEyebrow: "ما نؤمن به",
        principlesH2: "مبادئ عملنا",
        p1H3: "الثبات", p1P: "نفس الضباط يعودون لنفس المواقع، فهم يعرفون مبناك وموظفيك ونقاط الخطر باسمها.",
        p2H3: "المساءلة", p2P: "كل دورية مسجلة، وكل حادث يُبلَّغ عنه في نفس اليوم، ولكل عميل خط مباشر مع مدير حسابه.",
        p3H3: "التهدئة أولاً", p3P: "ضباطنا مدربون على تهدئة المواقف بهدوء قبل الحاجة للتدخل الجسدي.",
        leadershipEyebrow: "القيادة",
        leadershipH2: "الفريق وراء الشارة",
        leadershipLead: "أضف صورًا وسيرًا حقيقية لفريقك هنا — هذا هيكل تجريبي فقط.",
        role1H3: "المؤسس والمدير", role1P: "اسم افتراضي — خبرة في [خبرة مؤسسك].",
        role2H3: "مدير العمليات", role2P: "اسم افتراضي — يشرف على جدولة الدوريات وتدقيق المواقع.",
        role3H3: "مسؤول علاقات العملاء", role3P: "اسم افتراضي — أول من تتصل به لتغييرات العقد أو التغطية.",
        ctaEyebrow: "اعمل معنا",
        ctaH2: "لنتحدث عن موقعك.",
        title: "من نحن — ذا ستون للأمن",
        desc: "تعرف على تاريخ ذا ستون للأمن وقيمها والفريق وراء خدمات الحراسة والدوريات والحماية."
      },
      services: {
        eyebrow: "خدماتنا",
        h1: "تغطية لكل نوع من المخاطر.",
        lead: "من مكتب استقبال واحد إلى عقد دوريات متعدد المواقع — إليك ما نقدمه.",
        srHeading: "خدماتنا",
        s1H3: "حراسة ثابتة", s1P: "ضباط مرخصون بالزي الرسمي في مداخلك وبهوك ومحيطك — نوبات نهارية أو ليلية أو تغطية كاملة على مدار الساعة.",
        s2H3: "دوريات متنقلة", s2P: "مركبات دورية مميزة تجوب مسارات عشوائية في ممتلكاتك، مع نقاط تفتيش مسجلة عبر GPS وتنبيهات فورية عند أي خلل.",
        s3H3: "الكاميرات والإنذار", s3P: "بث مراقب مباشرة وخطوط إنذار، مدعومة بفريق استجابة سريع يصل لموقعك بسرعة عند تفعيل أي جهاز استشعار.",
        s4H3: "أمن الفعاليات", s4P: "إدارة الحشود، التحكم بالدخول، وتفتيش الحقائب للحفلات والمناسبات الخاصة وفعاليات الشركات بأي حجم.",
        s5H3: "حماية تنفيذية وكبار الشخصيات", s5P: "فرق حماية شخصية سرية للمدراء التنفيذيين والشخصيات العامة، في الموقع أو أثناء السفر.",
        s6H3: "أمن مواقع الإنشاءات والعقارات الشاغرة", s6P: "حراسة ودوريات ليلية لمواقع العمل والعقارات الشاغرة، للحد من السرقة والتخريب والدخول غير المصرح به.",
        howEyebrow: "كيف نعمل",
        howH2: "من أول اتصال إلى أول وردية.",
        step1: "الخطوة ١", step1P: "معاينة مجانية للموقع وتقييم للمخاطر.",
        step2: "الخطوة ٢", step2P: "عرض تغطية مخصص خلال يوم عمل واحد.",
        step3: "الخطوة ٣", step3P: "إحاطة الضباط بإجراءات موقعك الخاصة.",
        step4: "الخطوة ٤", step4P: "بدء التغطية، مع مدير حساب مخصص جاهز للاتصال.",
        ctaEyebrow: "غير متأكد مما تحتاجه؟",
        ctaH2: "أخبرنا عن الموقع — وسنوصي بالتغطية المناسبة.",
        title: "خدماتنا — ذا ستون للأمن",
        desc: "حراسة ثابتة، دوريات متنقلة، أمن الفعاليات، حماية تنفيذية، ومراقبة كاميرات من ذا ستون للأمن."
      },
      gallery: {
        eyebrow: "معرض الصور",
        h1: "ضباط، مركبات، وتغطية ميدانية.",
        lead: "هذه البلاطات مؤقتة — استبدلها بصور حقيقية لفريقك ومركباتك وفعالياتك. اضغط على أي بلاطة لمعاينة صندوق العرض.",
        srHeading: "معرض الصور",
        tile1: "حراسة ثابتة — بهو مؤسسي",
        tile2: "مركبة دورية متنقلة",
        tile3: "التحكم بدخول الفعاليات",
        tile4: "غرفة مراقبة الكاميرات",
        tile5: "إحاطة الضباط",
        tile6: "دورية موقع إنشاءات",
        tile7: "نقطة تفتيش الوردية الليلية",
        tile8: "يوم تدريب الفريق",
        tile9: "تفاصيل الحماية التنفيذية",
        ctaEyebrow: "شاهدنا في العمل",
        ctaH2: "تريد جولة في موقع فعلي؟",
        title: "معرض الصور — ذا ستون للأمن",
        desc: "نظرة على ضباط ذا ستون للأمن، مركبات الدوريات، وتغطية الفعاليات."
      },
      testimonials: {
        eyebrow: "آراء العملاء",
        h1: "ماذا يقول عملاؤنا.",
        lead: "اقتباسات تجريبية أدناه — استبدلها بآراء حقيقية من عملائك (بعد الحصول على إذنهم).",
        srHeading: "آراء العملاء",
        q1: "“اكتشف فريق دوريات ستون مشكلة في مستودعنا الساعة ٣ فجرًا وحلّها قبل وصول الوردية الصباحية. هذا هو نوع التغطية الذي كنا نفتقده.”",
        m1: "مدير العمليات — شركة لوجستيات إقليمية",
        q2: "“غيّرنا مزودين قبل ستون مرتين. الفرق أن الضباط يعرفون مبنانا فعلاً — نفس الوجوه كل أسبوع، وليس حارسًا جديدًا كل وردية.”",
        m2: "مدير عقاري — برج مكاتب وسط المدينة",
        q3: "“حجزناهم لحفل بحضور ٤٠٠ ضيف بإخطار أسبوعين فقط. كان التحكم بالدخول سلسًا واحترافيًا وغير مزعج لضيوفنا إطلاقًا.”",
        m3: "منتج فعاليات — عميل خاص",
        q4: "“مدير حسابنا يرد على الهاتف في منتصف الليل إن احتجنا لذلك. هذه الاستجابة وحدها تستحق قيمة العقد.”",
        m4: "مدير عام — مركز تسوق",
        dotLabel: "عرض رأي العميل {n}",
        sectorsEyebrow: "موثوقون من قِبل",
        sectorsH2: "القطاعات التي حمَيناها",
        sec1H3: "العقارات التجارية", sec1P: "أبراج مكاتب، مجمعات تجارية، ومشاريع متعددة الاستخدام.",
        sec2H3: "التجزئة والضيافة", sec2P: "مراكز تسوق، فنادق، ومجموعات مطاعم.",
        sec3H3: "العملاء الخاصون", sec3P: "مساكن، مكاتب عائلية، ومضيفو فعاليات.",
        ctaEyebrow: "انضم إليهم",
        ctaH2: "مستعد لتجربة تغطية ثابتة وموثوقة؟",
        title: "آراء العملاء — ذا ستون للأمن",
        desc: "ماذا يقول العملاء عن العمل مع ذا ستون للأمن."
      },
      contact: {
        eyebrow: "تواصل معنا",
        h1: "لنضع معًا خطة تغطية.",
        lead: "املأ النموذج وسيرد فريقنا خلال يوم عمل واحد — أو اتصل بخط العمليات مباشرة للطلبات العاجلة.",
        sendRequest: "أرسل طلبًا",
        fullName: "الاسم الكامل", namePlaceholder: "محمد أحمد",
        email: "البريد الإلكتروني", emailPlaceholder: "name@company.com",
        phone: "الهاتف", phonePlaceholder: "٠١٢ ٨٥٠٠ ٦٣٣٣",
        serviceNeeded: "الخدمة المطلوبة",
        opt1: "حراسة ثابتة", opt2: "دوريات متنقلة", opt3: "الكاميرات والإنذار",
        opt4: "أمن الفعاليات", opt5: "حماية تنفيذية", opt6: "موقع إنشاءات / عقار شاغر", opt7: "غير متأكد",
        messageLabel: "أخبرنا عن موقعك أو فعاليتك",
        messagePlaceholder: "الموقع، الساعات المطلوبة، عدد الضباط، الجدول الزمني...",
        send: "إرسال الطلب",
        directLines: "خطوط مباشرة",
        opsLineLabel: "خط العمليات (٢٤/٧)",
        emailLabel: "البريد الإلكتروني",
        addressLabel: "عنوان المكتب",
        officeHoursLabel: "ساعات العمل",
        officeHoursValue: "متاح دائمًا — على مدار الساعة",
        messengerLabel: "ماسنجر",
        mapNote: "مكان الخريطة — أضف خرائط جوجل أو مزود الخرائط الذي تفضله هنا",
        formFillFields: "يرجى إدخال الاسم والبريد الإلكتروني والرسالة قبل الإرسال.",
        formBadEmail: "عنوان البريد الإلكتروني غير صحيح — يرجى التحقق منه.",
        formSuccess: "تم استلام الطلب. هذا نموذج تجريبي — قم بربطه ببريدك الإلكتروني أو نظام إدارة العملاء لتفعيله.",
        title: "اتصل بنا — ذا ستون للأمن",
        desc: "اطلب عرض سعر أو تواصل مع ذا ستون للأمن."
      }
    }
  };

  const STORAGE_KEY = "stone-lang";

  function get(lang, key) {
    return key.split(".").reduce((o, k) => (o ? o[k] : undefined), dict[lang]);
  }

  function t(key, vars) {
    const lang = getLang();
    let str = get(lang, key);
    if (str === undefined) str = get("en", key);
    if (str === undefined) return key;
    if (vars) {
      Object.keys(vars).forEach(k => { str = str.replace(`{${k}}`, vars[k]); });
    }
    return str;
  }

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || "en";
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
    });

    const page = document.body.getAttribute("data-page");
    if (page) {
      const title = t(`${page}.title`);
      const desc = t(`${page}.desc`);
      if (title) document.title = title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && desc) metaDesc.setAttribute("content", desc);
    }

    const toggleLabel = document.querySelector("[data-lang-toggle]");
    if (toggleLabel) toggleLabel.textContent = t("common.langToggle");

    document.dispatchEvent(new CustomEvent("stone:langchange", { detail: { lang } }));
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function init() {
    applyLang(getLang());
    const toggle = document.querySelector(".lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        setLang(getLang() === "en" ? "ar" : "en");
      });
    }
  }

  return { t, getLang, setLang, init };
})();

document.addEventListener("DOMContentLoaded", () => STONE_I18N.init());
