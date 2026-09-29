/* ===== THE MINDSET — Landing Page Script ===== */

const i18n = {
  ar: {
    meta_title: "THE MINDSET | تعلّم أكثر، تشتّت أقل",
    nav_inside: "من الداخل",
    nav_cats: "المجالات",
    nav_avis: "آراء المستخدمين",
    nav_faq: "الأسئلة",
    nav_cta: "جرّب الآن",
    top_ribbon: "عرض خاص بـ 990 دج فقط لأول 100 مشترك معنا",

    hero_badge: "قناة تعليمية منظمة، الأولى من نوعها في الجزائر على التلغرام",
    hero_title_1: "كل ما تحتاجه لتتعلم وتطور من نفسك…",
    hero_title_2: "في مكان واحد.",
    hero_r1: "تعلّم أكثر.",
    hero_r2: "تشتّت أقل.",
    hero_r3: "وابدأ بطريقة أوضح.",
    hero_sub: "ما هي فكرة The Mindset؟",
    hero_cta_1: "🚀 جرّب The Mindset الآن 🚀",
    hero_cta_2: "👀 شوف واش تلقى داخلها 👀",
    hero_note: "جرّب قبل ما تدفع.",
    hero_stars: "آراء من مستخدمين حقيقيين",

    ms_title: "The Mindset",
    ms_slogan: "تعلّم أكثر • تشتّت أقل",
    ms_row1: "مدرسة ومصادر منظمة",
    ms_row2: "مكتبة رقمية مختارة",
    ms_row3: "قنوات تعليمية مرتبة",
    ms_cta: "ادخل وجرّب",

    qv_title: "3 أجزاء في منظومة واحدة.",
    qv_s1: "تعلّم بطريقة أوضح.",
    qv_s2: "كتب ومصادر مختارة بعناية.",
    qv_s3: "أفضل القنوات التعليمية مرتبة حسب المجال.",
    qv_s4: "مجهزين ومصنفين ليك.",

    pv_title: "أجمل ثقة هي ثقة شخص دخل، جرّب، وعجباتو.",
    pv_badge: "الثقة أساس عملنا",
    pv_sub: "مكان واحد بدل عشرات المصادر.",
    pv_f: "المجالات",
    pv_fd: "مصنفة حسب تخصصك",
    pv_r: "مصادر",
    pv_rd: "كل شيء في مكان واحد",
    pv_cap: "لقطة من داخل The Mindset",
    pv_fb: "جربوها، عجبتهم، وخلّاو تجربتهم تحكي علينا.",
    pf_t1: "المدرسة",
    pf_t2: "المكتبة",
    pf_t3: "القنوات",
    pf_t4: "المجالات",
    pf_t5: "المصادر",
    pf_b1: "تعلّم بطريقة أوضح",
    pf_b2: "بدايتك الأولى في التعلم",
    pf_b3: "كتب ومصادر مختارة بعناية",
    pf_b4: "مكتبة مرتبة حسب مجالها",
    pf_b5: "أفضل القنوات مرتبة حسب المجال",
    pf_b6: "بدون بحث يضيع وقتك",
    pf_b7: "حسب تخصصك بالضبط",
    pf_b8: "مجالات تتوسّع دائمًا",
    pf_b9: "مصادر موثوقة ومنظمة",
    pf_b10: "محدّثة باستمرار",

    soc_label: "آراء حقيقية تثبت قيمة قناتنا",
    soc_title: "ما نحتاجوش نقولولك واش نقدمو… الناس اللي جربو يقدرو يحكولك.",
    soc_text: "القيمة الحقيقية تبان في تجربة الناس اللي جربوا.",
    soc_hint: "اضغط على أي رأي لتكبيره — و اسحب جانبا لرؤية المزيد",
    soc_cta: "جرّب The Mindset الآن 🚀",

    p_badge: "المشكل",
    p_title: "مشكلتك ماشي أنك ما لقيتش واش تتعلم، المشكل أنك لقيت بزاف.",
    p_text: "كي تنقص التشتّت، يزيد التركيز.",
    p1_t: "البحث ما يخلصش",
    p1_d: "كل مرة تحوس على المصدر المناسب.",
    p2_t: "المصادر تشتتك",
    p2_d: "كل يوم فيديو، كتاب، قناة أو كورس جديد.",
    p3_t: "ما تعرفش منين تبدأ",
    p3_d: "الرغبة موجودة، بصح الطريق مش واضح.",
    p4_t: "تجمع أكثر مما تطبق",
    p4_d: "معلومات كثيرة، لكن بدون تنظيم واضح.",
    pr_close: "لهذا جات The Mindset: باش ترتّبلك الطريق وتخليك تركز أكثر على التعلم.",

    s_title: "كل شيء منظم في مكان واحد.",
    s_badge: "محتوى قناتنا من الداخل",
    s_text: "بدل التنقل بين عشرات المصادر، عندك مكان واحد ترجعله.",
    s1_t: "THE MINDSET SCHOOL",
    s1_d: "محتوى ومصادر تساعدك تتعلم وتبني مهاراتك.",
    s1_b1: "دورات في أكثر من 12 مجال",
    s1_b2: "10 دروس كدورة في كل مجال",
    s1_b3: "فيديوهات تعتبر زبدة من اليوتيوب لها كفاءة علمية جد عالية",
    s2_t: "THE MINDSET LIBRARY",
    s2_d: "مكتبة رقمية فيها كتب ومصادر مختارة بعناية.",
    s2_stat: "+60 كتاب ومصدر مختار في كل مجال",
    s2_b1: "بوت مكتبة بضغطة زر",
    s2_b2: "+60 كتاب ومصدر في كل مجال سريع التحميل PDF",
    s2_b3: "كتب في مجالات مختلفة",
    s3_t: "THE MINDSET CHANNELS",
    s3_d: "قنوات تعليمية مختارة ومنظمة حسب المجال.",
    s3_b1: "بوت قنوات بضغطة زر",
    s3_b2: "يخليك توصل لأفضل قنوات اليوتيوب في المجال اللي راك حاب",
    s3_b3: "أكثر من 100 قناة مصفاة ومفيدة من اليوتيوب",

    f_title: "تعلم في المجالات اللي تهمك.",
    field_1: "اللغة الإنجليزية",
    field_2: "ريادة الأعمال",
    field_3: "اللغة الألمانية",
    field_4: "التسويق الرقمي",
    field_5: "التمويل الشخصي",
    field_6: "الاستثمار",
    field_7: "الذكاء الاصطناعي",
    field_8: "العمل الحر",
    field_9: "المبيعات",
    field_10: "عقليتك",
    field_11: "ابني شخصيتك",
    field_12: "الكتب الإسلامية",
    field_13: "اشحن طاقتك",

    cmp_badge: "رتّب مصادرَك، يترتّب معاك طريقك.",
    cmp_title: "نفس الهدف… لكن بطريقة أوضح.",
    cmp_before: "قبل The Mindset",
    b1: "مصادر متفرقة",
    b2: "بحث طويل",
    b3: "تشتّت",
    b4: "قنوات كثيرة",
    b5: "كتب كثيرة",
    b6: "ما تعرفش منين تبدأ",
    cmp_after: "مع The Mindset",
    a1: "مكان واحد",
    a2: "مصادر منظمة",
    a3: "مجالات واضحة",
    a4: "Books + Channels + School",
    a5: "وقت أقل في البحث",
    a6: "نقطة بداية أوضح",

    tr_badge: "ما تحتاجش تشترك معانا أو انت مازال متردد",
    tr_eyebrow: "ما تحتاجش تشري وأنت مازال متردد.",
    tr_title: "اتبع هذه الخطوات",
    tr_text: "ادخل، شوف المحتوى، اكتشف التنظيم والمصادر بنفسك، وبعدها قرر.",
    st1: "تواصل معنا",
    st1_d: "واصلنا على الواتساب أو الإنستغرام أو الميسنجر",
    st2: "نعطوك مدة محدودة لتتجول داخل القناة",
    st2_d: "بعد التسجيل نعطوك مدة وجيزة تجرب القناة",
    st3: "عجباتك كمل استثمارك",
    st3_d: "هنا تقدر تدفع وتستغل العرض الموجود الآن قبل فواته",
    tr_cta: "جرّب The Mindset الآن 🚀",
    tr_note: "القرار يبقى عندك.",

    o_title: "ابدأ رحلتك اليوم.",
    o_price: "990 دج",
    o_life: "اشتراك مدى الحياة",
    o_badge: "🔥 العرض لأول 100 مشترك فقط",
    ob1: "School",
    ob2: "Library",
    ob3: "Channels",
    ob4: "مجالات متعددة",
    ob5: "+60 كتاب ومصدر في كل مجال",
    ob6: "تجربة قبل الدفع",
    ob7: "اشتراك مدى الحياة",
    o_cta: "أريد تجربة The Mindset 🚀",
    o_note: "جرّب أولًا… وقرر بنفسك.",

    wh_badge: "القناة موجهة",
    wh_title: "The Mindset موجهة للي حاب يتطور، بصح تعب من التشتّت وما عرفش منين يبدأ.",
    wh1_t: "للطالب",
    wh1_d: "للطالب اللي حاب يستثمر في علمو ووقتو.",
    wh2_t: "للمهتم بالذكاء الاصطناعي",
    wh2_d: "إذا حاب تتعلم أدوات وتقنيات جديدة.",
    wh3_t: "لرائد الأعمال",
    wh3_d: "اللي حاب يزيد معارفو ويطور مشروعو.",
    wh4_t: "للمهتم بالتطوير",
    wh4_d: "للي حاب يطور شخصيتو وعقليتو كل يوم.",
    wh5_t: "للي تعب من التشتت",
    wh5_d: "للي تعب من كثرة المصادر وحاب كلش يكون منظم قدامو.",

    t_badge: "اعرف طريقك",
    t_title: "الطريق الواضح أسرع من ألف طريق مفتوح.",
    t_sub: "The Mindset\u00A0—\u00A0تخليك ترسم طريق نجاحك وتسهّلك الوصول لأهدافك",
    t1: "محتوى تعليمي عالي الكفاءة",
    t2: "خطّة منظّمة خطوة بخطوة",
    t3: "كل مصادرك في مكان واحد",
    t4: "تعلّم بخطّة",
    t5: "استثمار دائم",
    t6: "تركيز أعلى",

    faq_title: "أغلبية الناس واش يسقسو؟",
    q1: "هل نقدر نجرب قبل ما ندفع؟",
    fa1: "نعم، تقدر تدخل وتجرب The Mindset وتشوف المحتوى والمصادر بنفسك قبل الاشتراك.",
    q2: "هل الاشتراك مدى الحياة؟",
    fa2: "نعم، العرض الحالي هو اشتراك مدى الحياة.",
    q3: "وش هي المجالات الموجودة؟",
    fa3: "اللغة الإنجليزية واللغة الألمانية، ريادة الأعمال، التسويق الرقمي، التمويل الشخصي والاستثمار، الذكاء الاصطناعي، العمل الحر والمبيعات، عقليتك، ابني شخصيتك، الكتب الإسلامية، اشحن طاقتك.",
    q4: "بشحال الاشتراك؟",
    fa4: "990 دج فقط، والعرض لأول 100 مشترك.",
    q5: "هل The Mindset تضمنلي نتائج أو ربح؟",
    fa5: "لا. The Mindset توفّر موارد وتنظيمًا وأدوات تعلم. النتائج مرتبطة باستمراريتك وتعلمك وتطبيقك.",
    q6: "وين نلقى The Mindset؟",
    fa6: "الوصول يتم عبر Telegram بعد إتمام خطوات الاشتراك.",
    fq_callout: "ما نبيعوش وعود. نعطيك أدوات ومصادر أوضح، والنتائج تبقى مرتبطة بكيفاش تستعملها.",

    fin_title: "واش خصك باش تكون جاهز للانضمام؟",
    fin_sub: "اختر الرسالة اللي تناسبك وراسلنا بها على الواتساب",
    fin_msg1: "كيف يمكنني الاشتراك مباشرة؟",
    fin_msg2: "لدي استفسار بسيط",
    fin_cta: "راسلنا على الواتساب",
    fc_pv_tag: "📩 رسالتك راهي واجدة",
    fc_pv_empty: "لم تختر رسالة بعد",

    f_contact_title: "تواصل معنا",
    f_rights: "كل الحقوق محفوظة",
    f_nav_title: "روابط سريعة",
    f_follow_title: "تابعنا",
    f_desc: "منظومة رقمية تجمعلك مصادر التعلم والتطوير في مكان واحد.",
    f_location: "الجزائر 🇩🇿",
    f_copy: "© 2026 THE MINDSET",

    sb_text: "The Mindset — 990 دج",
    sb_cta: "💬 تواصل معنا للتجريب مجانا"
  },

  en: {
    meta_title: "THE MINDSET | Learn more, distract less",
    nav_inside: "Inside",
    nav_cats: "Categories",
    nav_avis: "Testimonials",
    nav_faq: "FAQ",
    nav_cta: "Try now",
    top_ribbon: "Special offer: 990 DZD only — for the first 100 subscribers with us",

    hero_badge: "An organized educational channel — the first of its kind in Algeria on Telegram",
    hero_title_1: "Everything you need to learn and grow…",
    hero_title_2: "in one place.",
    hero_r1: "Learn more.",
    hero_r2: "Get less scattered.",
    hero_r3: "And start more clearly.",
    hero_sub: "What is the idea behind The Mindset?",
    hero_cta_1: "🚀 Try The Mindset now 🚀",
    hero_cta_2: "👀 See what's inside 👀",
    hero_note: "Try before you pay.",
    hero_stars: "Reviews from real users",

    ms_title: "The Mindset",
    ms_slogan: "Learn more • Distract less",
    ms_row1: "School & organized sources",
    ms_row2: "Curated digital library",
    ms_row3: "Educational channels ordered by field",
    ms_cta: "Enter & try",

    qv_title: "3 parts in one system.",
    qv_s1: "Learn in a clearer way.",
    qv_s2: "Carefully curated books & sources.",
    qv_s3: "Best educational channels ordered by field.",
    qv_s4: "Ready and sorted for you.",

    pv_title: "The most beautiful trust is someone who entered, tried, and loved it.",
    pv_badge: "Trust is the foundation of our work",
    pv_sub: "One place instead of dozens of sources.",
    pv_f: "Fields",
    pv_fd: "Sorted by your focus",
    pv_r: "Resources",
    pv_rd: "Everything in one place",
    pv_cap: "A look inside The Mindset",
    pv_fb: "They tried it, loved it, and let their experience speak for us.",
    pf_t1: "School",
    pf_t2: "Library",
    pf_t3: "Channels",
    pf_t4: "Fields",
    pf_t5: "Resources",
    pf_b1: "Learn in a clearer way",
    pf_b2: "Your first step into learning",
    pf_b3: "Carefully curated books & sources",
    pf_b4: "A library sorted by its field",
    pf_b5: "Best channels sorted by field",
    pf_b6: "No endless searching",
    pf_b7: "Exactly by your focus",
    pf_b8: "Fields that keep growing",
    pf_b9: "Trusted and organized resources",
    pf_b10: "Constantly updated",

    soc_label: "Real reviews that prove our channel's value",
    soc_title: "We don't need to tell you what we offer… the people who tried it can tell you.",
    soc_text: "The real value shows in the experience of people who tried it.",
    soc_hint: "Tap any review to enlarge it — swipe for more",
    soc_cta: "Try The Mindset now 🚀",

    p_badge: "The Problem",
    p_title: "Your problem isn't finding something to learn — it's that you found too much.",
    p_text: "Less distraction, more focus.",
    p1_t: "The search never ends",
    p1_d: "You look for the right source every time.",
    p2_t: "Sources distract you",
    p2_d: "Every day a new video, book, channel or course.",
    p3_t: "You don't know where to start",
    p3_d: "The will is there, but the path isn't clear.",
    p4_t: "You collect more than you apply",
    p4_d: "Lots of information, but without clear organization.",
    pr_close: "That's why The Mindset exists: to organize your path and help you focus more on learning.",

    s_title: "Everything organized in one place.",
    s_badge: "Our channel's content from the inside",
    s_text: "Instead of jumping between dozens of sources, you have one place to go back to.",
    s1_t: "THE MINDSET SCHOOL",
    s1_d: "Content and resources that help you learn and build your skills.",
    s1_b1: "Courses in more than 12 fields",
    s1_b2: "10 lessons per course in every field",
    s1_b3: "Videos that are the cream of YouTube with very high scientific quality",
    s2_t: "THE MINDSET LIBRARY",
    s2_d: "A digital library with carefully curated books and sources.",
    s2_stat: "60+ curated books & resources in each field",
    s2_b1: "Library bot at the press of a button",
    s2_b2: "60+ books & sources per field, fast PDF download",
    s2_b3: "Books from different fields",
    s3_t: "THE MINDSET CHANNELS",
    s3_d: "Curated educational channels, organized by field.",
    s3_b1: "Channels bot at the press of a button",
    s3_b2: "Get to the best YouTube channels in the field you want",
    s3_b3: "100+ filtered and useful YouTube channels",

    f_title: "Learn in the fields that matter to you.",
    field_1: "English",
    field_2: "Entrepreneurship",
    field_3: "German",
    field_4: "Digital Marketing",
    field_5: "Personal Finance",
    field_6: "Investing",
    field_7: "Artificial Intelligence",
    field_8: "Freelancing",
    field_9: "Sales",
    field_10: "Hone Your Mindset",
    field_11: "Build Your Character",
    field_12: "Islamic Books",
    field_13: "Recharge Your Energy",

    cmp_badge: "Sort your sources, and your path will organize itself.",
    cmp_title: "Same goal… but a clearer way.",
    cmp_before: "Before The Mindset",
    b1: "Scattered sources",
    b2: "Long searching",
    b3: "Distraction",
    b4: "Too many channels",
    b5: "Too many books",
    b6: "Not knowing where to start",
    cmp_after: "With The Mindset",
    a1: "One place",
    a2: "Organized sources",
    a3: "Clear fields",
    a4: "Books + Channels + School",
    a5: "Less time searching",
    a6: "A clearer starting point",

    tr_badge: "You don't need to subscribe while still unsure",
    tr_eyebrow: "No need to buy while you're still unsure.",
    tr_title: "Follow these steps",
    tr_text: "Enter, see the content, discover the organization and sources yourself, then decide.",
    st1: "Contact us",
    st1_d: "Reach us on WhatsApp, Instagram, or Messenger",
    st2: "We give you a limited time to explore the channel",
    st2_d: "After registering, you'll get a short time to try the channel",
    st3: "Like it? Go ahead and invest",
    st3_d: "Here you can pay and grab the current offer before it's gone",
    tr_cta: "Try The Mindset now 🚀",
    tr_note: "The decision stays with you.",

    o_title: "Start your journey today.",
    o_price: "990 DZD",
    o_life: "Lifetime access",
    o_badge: "🔥 Offer for the first 100 subscribers only",
    ob1: "School",
    ob2: "Library",
    ob3: "Channels",
    ob4: "Multiple fields",
    ob5: "60+ books & sources per field",
    ob6: "Try before paying",
    ob7: "Lifetime access",
    o_cta: "I want to try The Mindset 🚀",
    o_note: "Try first… then decide yourself.",

    wh_badge: "The channel is directed",
    wh1_t: "Students",
    wh1_d: "For the student who wants to invest in their knowledge and time.",
    wh2_t: "AI enthusiasts",
    wh2_d: "If you want to learn new tools and technologies.",
    wh3_t: "Entrepreneurs",
    wh3_d: "For those who want to grow their knowledge and develop their project.",
    wh4_t: "Self-development lovers",
    wh4_d: "For those who want to develop their personality and mindset every day.",
    wh5_t: "Those tired of overload",
    wh5_d: "For those tired of the many sources who want everything organized in front of them.",

    t_badge: "Know your path",
    t_title: "A clear path is faster than a thousand open ones.",
    t_sub: "It helps you draw your path to success and make reaching your goals easier.",
    t1: "High-quality educational content",
    t2: "A clear step-by-step plan",
    t3: "All your resources in one place",
    t4: "Learn with a plan",
    t5: "A lasting investment",
    t6: "Focus on what matters",

    faq_title: "What do most people ask?",
    q1: "Can we try before paying?",
    fa1: "Yes. You can enter and try The Mindset and see the content and sources yourself before subscribing.",
    q2: "Is the subscription lifetime?",
    fa2: "Yes. The current offer is a lifetime subscription.",
    q3: "Which fields are available?",
    fa3: "English and German, entrepreneurship, digital marketing, personal finance and investing, artificial intelligence, freelancing and sales, your mindset, building your character, Islamic books, and recharging your energy.",
    q4: "How much is the subscription?",
    fa4: "Only 990 DZD, and the offer is for the first 100 subscribers.",
    q5: "Does The Mindset guarantee results or profit?",
    fa5: "No. The Mindset provides resources, organization, and learning tools. Results depend on your consistency and application.",
    q6: "Where do I find The Mindset?",
    fa6: "Access happens via Telegram after completing the subscription steps.",
    fq_callout: "We don't sell promises. We give you clearer tools and sources — results depend on how you use them.",

    fin_title: "What do you need to be ready to join?",
    fin_sub: "Choose the message that suits you and send it to us on WhatsApp",
    fin_msg1: "How can I subscribe directly?",
    fin_msg2: "I have a simple question",
    fin_cta: "Contact us on WhatsApp",
    fc_pv_tag: "📩 Your message is ready",
    fc_pv_empty: "No message selected yet",

    f_contact_title: "Contact us",
    f_nav_title: "Quick links",
    f_follow_title: "Follow us",
    f_rights: "All rights reserved.",
    f_desc: "A digital ecosystem that gathers learning and self-development sources in one place.",
    f_location: "Algeria 🇩🇿",
    f_copy: "© 2026 THE MINDSET",

    sb_text: "The Mindset — 990 DZD",
    sb_cta: "💬 Contact us for a free trial"
  }
};

/* ===== واتساب + UTM + تتبع ===== */
const WA_NUMBER = "213564343058";
const WA_MESSAGES = {
  1: { ar: "سلام، شفت The Mindset وحاب نجرب المنصة قبل ما نشترك. ممكن تبعثولي التفاصيل؟", en: "Hi, I saw The Mindset and I'd like to try the platform before subscribing. Could you send me the details?" },
  2: { ar: "سلام، حاب نعرف أكثر على عرض The Mindset بـ990 دج والاشتراك مدى الحياة.", en: "Hi, I'd like to know more about The Mindset offer — 990 DZD lifetime access." },
  3: { ar: "سلام، حاب نجرب The Mindset ونشوف واش كاين داخلها قبل ما ندفع.", en: "Hi, I'd like to try The Mindset and see what's inside before paying." },
  4: { ar: "السلام عليكم أخي، أعطني معلومات الاشتراك من فضلك", en: "How can I subscribe directly?" },
  5: { ar: "السلام عليكم استصعب علي بعض الأمر في القناة أريد المساعدة", en: "I have a simple question" }
};

function getUtm() {
  const q = new URLSearchParams(window.location.search);
  const allowed = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  const out = [];
  allowed.forEach(function (k) {
    const v = q.get(k);
    if (v) out.push(k + "=" + encodeURIComponent(v));
  });
  return out.join("&");
}

function buildWaLinks() {
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    const idx = el.getAttribute("data-wa");
    const msg = WA_MESSAGES[idx] ? WA_MESSAGES[idx][currentLang] : "";
    const url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg) + (getUtm() ? "&" + getUtm() : "");
    el.setAttribute("href", url);
  });
}

function trackCta(el) {
  const cta = el.getAttribute("data-cta") || "unknown";
  const wa = el.getAttribute("data-wa") || "";
  if (window.dataLayer) dataLayer.push({ event: "cta_click", cta: cta, wa_index: wa, utm: getUtm() });
  if (window.fbq) fbq("trackCustom", "CTAClick", { cta: cta, wa_index: wa });
  if (typeof gtag === "function") gtag("event", "cta_click", { cta: cta, wa_index: wa });
}

document.querySelectorAll("[data-wa]").forEach(function (el) {
  el.addEventListener("click", function () { trackCta(el); });
});

/* ===== بطاقة الختام: اختيار الرسالة ثم الإرسال ===== */
const fcMsgs = document.querySelectorAll(".fc-msg");
const fcPreview = document.getElementById("fcPreview");
const fcPvText = document.getElementById("fcPvText");
const fcSend = document.getElementById("fcSend");
let fcSelected = null;

function fcSetHref(idx) {
  const msg = WA_MESSAGES[idx] ? WA_MESSAGES[idx][currentLang] : "";
  const url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg) + (getUtm() ? "&" + getUtm() : "");
  fcSend.setAttribute("href", url);
  fcSend.setAttribute("data-wa", idx);
}

function syncFc() {
  if (fcSelected) {
    fcPvText.textContent = WA_MESSAGES[fcSelected][currentLang];
    fcPreview.hidden = false;
    fcSetHref(fcSelected);
  } else {
    fcPreview.hidden = false;
    fcPvText.textContent = (i18n[currentLang] && i18n[currentLang].fc_pv_empty) || "";
    fcSetHref("0");
  }
}

fcMsgs.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const idx = btn.getAttribute("data-fc-wa");
    const isSame = fcSelected === idx;
    fcSelected = isSame ? null : idx;
    fcMsgs.forEach(function (b) {
      const on = b === btn && !isSame;
      b.classList.toggle("selected", on);
      b.setAttribute("aria-pressed", String(on));
    });
    syncFc();
  });
});

/* ===== التبديل بين اللغتين ===== */
let currentLang = localStorage.getItem("mindset_lang") || "ar";
const langToggles = document.querySelectorAll(".lang-toggle");

function applyLang(lang) {
  const dict = i18n[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = dict.meta_title;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  langToggles.forEach(function (btn) {
    btn.textContent = lang === "ar" ? "English" : "عربي";
  });
  localStorage.setItem("mindset_lang", lang);
  currentLang = lang;
  buildWaLinks();
}

langToggles.forEach(function (btn) {
  btn.addEventListener("click", function () {
    applyLang(currentLang === "ar" ? "en" : "ar");
    syncFc();
  });
});

if (!i18n[currentLang]) currentLang = "ar";
applyLang(currentLang);

/* ===== Lightbox الآراء ===== */
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");

function openLb(src) {
  lbImg.setAttribute("src", src);
  lightbox.hidden = false;
  lbClose.focus();
}

function closeLb() {
  lightbox.hidden = true;
  lbImg.setAttribute("src", "");
}

document.querySelectorAll(".evidence-card, .fb-card").forEach(function (card) {
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", "تكبير الرأي");
  card.addEventListener("click", function () {
    const src = card.getAttribute("data-src") || "";
    if (src) openLb(src);
  });
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const src = card.getAttribute("data-src") || "";
      if (src) openLb(src);
    }
  });
});

lbClose.addEventListener("click", closeLb);
lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) closeLb();
});
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !lightbox.hidden) closeLb();
});

/* ===== فيديو HERO التوضيحي ===== */
const heroVideo = document.getElementById("heroVideo");
const heroPlay = document.getElementById("heroPlay");

if (heroVideo && heroPlay) {
  heroPlay.addEventListener("click", function () {
    heroVideo.play();
  });
  heroVideo.addEventListener("click", function () {
    if (heroVideo.paused) heroVideo.play();
    else heroVideo.pause();
  });
  heroVideo.addEventListener("play", function () {
    heroPlay.classList.add("hidden");
  });
  heroVideo.addEventListener("pause", function () {
    if (heroVideo.currentTime > 0) heroPlay.classList.add("hidden");
  });
}

/* ===== تبويبات "من الداخل" ===== */
(function () {
  const tabs = document.querySelectorAll(".ftab");
  const panels = document.querySelectorAll(".ftab-panel");
  if (!tabs.length || !panels.length) return;

  function activate(tab) {
    const idx = tab.getAttribute("data-tab");
    tabs.forEach(function (t) {
      const on = t === tab;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", String(on));
    });
    panels.forEach(function (p) {
      p.classList.toggle("is-active", p.getAttribute("data-panel") === idx);
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () { activate(tab); });
  });
})();

/* ===== الأكورديون ===== */
document.querySelectorAll(".acc-item").forEach(function (item) {
  const head = item.querySelector(".acc-q");
  const ans = item.querySelector(".acc-a");
  head.addEventListener("click", function () {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".acc-item.open").forEach(function (o) {
      o.classList.remove("open");
      o.querySelector(".acc-a").style.maxHeight = null;
      o.querySelector(".acc-q").setAttribute("aria-expanded", "false");
    });
    if (!isOpen) {
      item.classList.add("open");
      ans.style.maxHeight = ans.scrollHeight + "px";
      head.setAttribute("aria-expanded", "true");
    }
  });
  window.addEventListener("resize", function () {
    if (item.classList.contains("open")) {
      ans.style.maxHeight = ans.scrollHeight + "px";
    }
  });
});

/* ===== ظهور تدريجي عند التمرير ===== */
const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(function (el) {
  revealObserver.observe(el);
});

/* ===== شريط CTA الثابت ===== */
const stickyBar = document.getElementById("stickyBar");
const finalSec = document.getElementById("final");

function updateSticky() {
  if (!stickyBar) return;
  const pastHero = window.scrollY > 650;
  let nearFinal = false;
  if (finalSec) {
    const r = finalSec.getBoundingClientRect();
    if (r.top < window.innerHeight * 1.15) nearFinal = true;
  }
  stickyBar.classList.toggle("show", pastHero && !nearFinal);
}

window.addEventListener("scroll", updateSticky, { passive: true });
updateSticky();