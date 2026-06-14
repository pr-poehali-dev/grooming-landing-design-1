import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/75fd0bbd-2c32-47da-a5fe-4778bf7b119c/files/78f32698-62cb-47c0-86bb-554d93e998ff.jpg";

const SERVICES = [
  { icon: "Scissors", title: "Стрижка и груминг", desc: "Профессиональная стрижка любой сложности под породу или ваши пожелания", price: "от 1 200 ₽", tag: "Хит" },
  { icon: "Droplets", title: "Мытьё и сушка", desc: "Купание с профессиональной косметикой, сушка и расчёска", price: "от 800 ₽", tag: "" },
  { icon: "Star", title: "SPA-уход", desc: "Маски для шерсти, увлажнение кожи, ароматерапия и релакс-процедуры", price: "от 1 800 ₽", tag: "Премиум" },
  { icon: "Heart", title: "Педикюр", desc: "Стрижка когтей, шлифовка, обработка подушечек лап", price: "от 400 ₽", tag: "" },
  { icon: "Eye", title: "Уход за ушами", desc: "Чистка ушей, удаление шерсти, профилактика воспалений", price: "от 300 ₽", tag: "" },
  { icon: "Sparkles", title: "Комплекс Люкс", desc: "Полный уход: купание, стрижка, педикюр, уши, зубы и ароматизация", price: "от 3 500 ₽", tag: "Всё включено" },
];

const GALLERY = [
  { before: "🐩", after: "✨🐩", breed: "Пудель", name: "Бублик" },
  { before: "🐕", after: "✨🐕", breed: "Шпиц", name: "Персик" },
  { before: "🐈", after: "✨🐈", breed: "Мейн-кун", name: "Маркиз" },
  { before: "🐶", after: "✨🐶", breed: "Йоркшир", name: "Малыш" },
];

const REVIEWS = [
  { name: "Анна К.", pet: "Пудель Жан-Поль", text: "Потрясающий результат! Жан-Поль выглядит как с выставки. Мастера — настоящие профессионалы, всё чисто и аккуратно.", stars: 5 },
  { name: "Михаил Д.", pet: "Шпиц Апельсин", text: "Ходим сюда уже год. Качество стабильное, цены разумные. Пёс не боится — чувствует себя спокойно. Рекомендую!", stars: 5 },
  { name: "Елена В.", pet: "Кот Барон", text: "Первый раз повела кота — думала будет катастрофа. Всё прошло идеально! Теперь только сюда. Спасибо мастеру Кате!", stars: 5 },
  { name: "Светлана Р.", pet: "Йоркшир Малышка", text: "Лучший груминг-салон в Волгограде! Всегда довольны результатом. Уютная атмосфера и внимательный персонал.", stars: 5 },
];

const FAQ = [
  { q: "Нужна ли предварительная запись?", a: "Да, рекомендуем записываться заранее. Принимаем онлайн или по телефону. В срочных случаях звоните — постараемся принять." },
  { q: "Как подготовить питомца к груммингу?", a: "Приходите в чистое место, слегка расчешите шерсть. Кормить за 2 часа до процедуры. Животное должно быть привито." },
  { q: "Какие породы вы обслуживаете?", a: "Работаем со всеми породами собак и кошек — от йоркширских терьеров до мастиффов, от сфинксов до мейн-кунов." },
  { q: "Сколько времени занимает процедура?", a: "Зависит от размера питомца и набора услуг. Стрижка мелкой собаки — 1.5–2 часа, крупной — 3–4 часа." },
  { q: "Используете ли вы безопасную косметику?", a: "Только сертифицированная профессиональная косметика ведущих брендов. Гипоаллергенные серии для чувствительной кожи." },
];

const SPECIALISTS = [
  { name: "Екатерина М.", exp: "7 лет", spec: "Пудели, шпицы, йорки", emoji: "👩‍🎨" },
  { name: "Алексей П.", exp: "5 лет", spec: "Крупные породы, хаски", emoji: "👨‍🎨" },
  { name: "Наталья С.", exp: "9 лет", spec: "Кошки всех пород", emoji: "👩‍🔬" },
];

export default function Index() {
  const [booking, setBooking] = useState({ name: "", phone: "", pet: "", service: "", specialist: "", date: "", time: "" });
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--dark-base)", color: "white" }}>

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass" style={{ borderBottom: "1px solid rgba(255,45,155,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl neon-glow-btn flex items-center justify-center text-lg">🐾</div>
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.06em" }}>
              MAKET<span style={{ color: "var(--neon-pink)" }}>GRUM</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[["Услуги", "#услуги"], ["Галерея", "#галерея"], ["О нас", "#о-нас"], ["Отзывы", "#отзывы"], ["FAQ", "#faq"]].map(([label, href]) => (
              <a key={label} href={href} className="nav-link">{label}</a>
            ))}
          </div>

          <a href="#запись" className="neon-glow-btn text-white px-5 py-2.5 rounded-xl text-sm font-medium" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.06em" }}>
            ЗАПИСАТЬСЯ
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden grid-pattern" style={{ paddingTop: "80px" }}>
        {/* BG orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute animate-orb-pulse" style={{ top: "15%", left: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(255,45,155,0.18) 0%, transparent 70%)", borderRadius: "50%" }} />
          <div className="absolute animate-orb-pulse stagger-3" style={{ bottom: "10%", right: "5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(155,45,255,0.15) 0%, transparent 70%)", borderRadius: "50%" }} />
          <div className="absolute animate-orb-pulse stagger-5" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, background: "radial-gradient(circle, rgba(45,255,238,0.04) 0%, transparent 70%)", borderRadius: "50%" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6" style={{ border: "1px solid rgba(255,45,155,0.3)" }}>
              <span className="animate-paw text-lg">🐾</span>
              <span style={{ color: "var(--neon-pink)", fontFamily: "Oswald", fontSize: "0.8rem", letterSpacing: "0.15em" }}>ВОЛГОГРАД — ПРОФЕССИОНАЛЬНЫЙ ГРУМИНГ</span>
            </div>

            <h1 className="section-title mb-6" style={{ fontSize: "clamp(3rem,7vw,5.5rem)", lineHeight: 1.05 }}>
              ТВОЙ ПИТОМЕЦ<br />
              <span className="neon-text animate-neon-flicker">ЗАСЛУЖИВАЕТ</span><br />
              ЛУЧШЕГО
            </h1>

            <p className="section-subtitle mb-10 max-w-lg" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
              Груминг-салон Maketgrum — место, где профессионализм встречается с любовью к животным. Современное оборудование, премиальная косметика, нежный подход.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#запись" className="neon-glow-btn text-white px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2" style={{ fontFamily: "Oswald", letterSpacing: "0.06em" }}>
                <Icon name="Calendar" size={20} />
                ЗАПИСАТЬСЯ ОНЛАЙН
              </a>
              <a href="tel:+79000000000" className="glass text-white px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2 transition-colors" style={{ fontFamily: "Oswald", letterSpacing: "0.06em", border: "1px solid rgba(255,45,155,0.4)" }}>
                <Icon name="Phone" size={20} />
                ПОЗВОНИТЬ
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {[["500+", "клиентов"], ["5★", "рейтинг"], ["3", "мастера"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "Oswald", fontSize: "2rem", fontWeight: 700, color: "var(--neon-pink)", lineHeight: 1 }}>{num}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Card */}
          <div className="relative flex justify-center animate-slide-up stagger-3">
            <div className="relative card-3d animate-float3d" style={{ maxWidth: 500, width: "100%" }}>
              {/* Rotating rings */}
              <div className="absolute animate-spin-slow" style={{ inset: -30, border: "1px solid rgba(255,45,155,0.2)", borderRadius: "50%", zIndex: 0 }} />
              <div className="absolute animate-spin-slow stagger-3" style={{ inset: -55, border: "1px dashed rgba(155,45,255,0.15)", borderRadius: "50%", zIndex: 0, animationDirection: "reverse" }} />

              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,45,155,0.3)", boxShadow: "0 30px 80px rgba(255,45,155,0.3), 0 0 0 1px rgba(255,255,255,0.05)" }}>
                <img src={HERO_IMG} alt="Груминг-салон Maketgrum" className="w-full object-cover" style={{ height: 460 }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)" }} />

                <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full" style={{ border: "1px solid rgba(255,45,155,0.4)" }}>
                  <span style={{ color: "var(--neon-pink)", fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.1em" }}>✦ ПРОФИ ГРУМИНГ</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass rounded-2xl p-4" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div style={{ fontFamily: "Oswald", fontSize: "1.1rem", fontWeight: 600 }}>Maketgrum Studio</div>
                        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem" }}>📍 Волгоград</div>
                      </div>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(s => <span key={s} style={{ color: "var(--neon-pink)" }}>★</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
          <span style={{ fontFamily: "Oswald", fontSize: "0.7rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)" }}>СКРОЛЛ</span>
          <Icon name="ChevronDown" size={16} style={{ color: "var(--neon-pink)" }} />
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="услуги" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,45,155,0.08) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4" style={{ border: "1px solid rgba(255,45,155,0.25)" }}>
              <Icon name="Scissors" size={14} style={{ color: "var(--neon-pink)" }} />
              <span style={{ color: "var(--neon-pink)", fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.15em" }}>ЧТО МЫ ДЕЛАЕМ</span>
            </div>
            <h2 className="section-title mb-4">НАШИ <span className="neon-text">УСЛУГИ</span></h2>
            <p className="section-subtitle max-w-xl mx-auto">Полный спектр груминг-услуг для вашего питомца — от базового купания до премиального SPA</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="service-card relative rounded-2xl p-6"
                style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}>

                {svc.tag && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full" style={{ background: "linear-gradient(135deg, var(--neon-pink), var(--neon-purple))", fontFamily: "Oswald", letterSpacing: "0.05em", fontSize: "0.65rem", color: "white" }}>
                    {svc.tag}
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(255,45,155,0.15), rgba(155,45,255,0.15))", border: "1px solid rgba(255,45,155,0.2)" }}>
                  <Icon name={svc.icon} fallback="Sparkles" size={22} style={{ color: "var(--neon-pink)" }} />
                </div>

                <h3 style={{ fontFamily: "Oswald", fontSize: "1.25rem", fontWeight: 600, marginBottom: 8, color: "white" }}>{svc.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 16 }}>{svc.desc}</p>

                <div className="flex items-center justify-between">
                  <span style={{ color: "var(--neon-pink)", fontFamily: "Oswald", fontSize: "1.1rem", fontWeight: 600 }}>{svc.price}</span>
                  <a href="#запись" style={{ background: "rgba(255,45,155,0.1)", border: "1px solid rgba(255,45,155,0.2)", color: "var(--neon-pink)", fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.08em", padding: "6px 14px", borderRadius: 10 }}>
                    ЗАПИСАТЬСЯ →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="галерея" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(155,45,255,0.1) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4" style={{ border: "1px solid rgba(155,45,255,0.3)" }}>
              <Icon name="Camera" size={14} style={{ color: "#9B2DFF" }} />
              <span style={{ color: "#9B2DFF", fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.15em" }}>ДО И ПОСЛЕ</span>
            </div>
            <h2 className="section-title mb-4">НАШИ <span style={{ color: "#9B2DFF", textShadow: "0 0 20px rgba(155,45,255,0.6)" }}>РАБОТЫ</span></h2>
            <p className="section-subtitle max-w-xl mx-auto">Посмотрите на трансформацию наших пушистых клиентов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY.map((item, i) => (
              <div key={i} className="service-card rounded-2xl overflow-hidden" style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}>
                <div className="p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(255,45,155,0.08), rgba(155,45,255,0.08))" }}>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-5xl">{item.before}</div>
                    <Icon name="ArrowRight" size={16} style={{ color: "var(--neon-pink)" }} />
                    <div className="text-5xl">{item.after}</div>
                  </div>
                </div>
                <div className="p-4">
                  <div style={{ fontFamily: "Oswald", fontSize: "1rem", fontWeight: 600, color: "white" }}>{item.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem" }}>{item.breed}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <div className="glass inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{ border: "1px solid rgba(255,45,155,0.2)" }}>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>Смотреть больше работ в</span>
              <a href="#" style={{ color: "var(--neon-pink)", fontFamily: "Oswald", letterSpacing: "0.06em", fontSize: "0.85rem" }}>INSTAGRAM →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="о-нас" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(255,45,155,0.07) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6" style={{ border: "1px solid rgba(255,45,155,0.25)" }}>
                <Icon name="Award" size={14} style={{ color: "var(--neon-pink)" }} />
                <span style={{ color: "var(--neon-pink)", fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.15em" }}>О САЛОНЕ</span>
              </div>
              <h2 className="section-title mb-6">МЫ ЛЮБИМ<br /><span className="neon-text">ЖИВОТНЫХ</span><br />ТАК ЖЕ КАК ВЫ</h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.8, marginBottom: 16 }}>
                Maketgrum — это не просто груминг. Это место, где каждый питомец чувствует себя в безопасности и комфорте. Мы используем только безопасную косметику и работаем с любовью.
              </p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.8, marginBottom: 32 }}>
                Наши мастера прошли профессиональное обучение и регулярно повышают квалификацию. Мы знаем всё о породных стандартах и индивидуальных потребностях каждого животного.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Shield", text: "Безопасная косметика" },
                  { icon: "Clock", text: "Работаем ежедневно" },
                  { icon: "MapPin", text: "Волгоград, центр" },
                  { icon: "Heart", text: "Любовь к животным" },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-3 glass p-3 rounded-xl" style={{ border: "1px solid rgba(255,45,155,0.15)" }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,45,155,0.15)" }}>
                      <Icon name={item.icon} fallback="Check" size={15} style={{ color: "var(--neon-pink)" }} />
                    </div>
                    <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialists */}
            <div className="space-y-4">
              <h3 style={{ fontFamily: "Oswald", fontSize: "1.5rem", fontWeight: 600, marginBottom: 20, color: "white" }}>НАШИ <span style={{ color: "var(--neon-pink)" }}>МАСТЕРА</span></h3>
              {SPECIALISTS.map((sp) => (
                <div key={sp.name} className="service-card glass-strong rounded-2xl p-5 flex items-center gap-5" style={{ border: "1px solid rgba(255,45,155,0.15)" }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0" style={{ background: "linear-gradient(135deg, rgba(255,45,155,0.2), rgba(155,45,255,0.2))", border: "1px solid rgba(255,45,155,0.3)" }}>
                    {sp.emoji}
                  </div>
                  <div className="flex-1">
                    <div style={{ fontFamily: "Oswald", fontSize: "1.1rem", fontWeight: 600, color: "white" }}>{sp.name}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", marginBottom: 8 }}>{sp.spec}</div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: "rgba(255,45,155,0.12)", border: "1px solid rgba(255,45,155,0.2)" }}>
                      <Icon name="Star" size={11} style={{ color: "var(--neon-pink)" }} />
                      <span style={{ color: "var(--neon-pink)", fontSize: "0.7rem", fontFamily: "Oswald", letterSpacing: "0.05em" }}>ОПЫТ {sp.exp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section id="отзывы" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(255,45,155,0.04) 50%, transparent 100%)" }} />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4" style={{ border: "1px solid rgba(255,45,155,0.25)" }}>
              <Icon name="MessageSquare" size={14} style={{ color: "var(--neon-pink)" }} />
              <span style={{ color: "var(--neon-pink)", fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.15em" }}>ОТЗЫВЫ КЛИЕНТОВ</span>
            </div>
            <h2 className="section-title mb-4">ЧТО ГОВОРЯТ <span className="neon-text">О НАС</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="service-card rounded-2xl p-6" style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: "var(--neon-pink)", fontSize: "0.9rem" }}>★</span>)}
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>"{r.text}"</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12 }}>
                  <div style={{ fontFamily: "Oswald", fontWeight: 600, fontSize: "0.95rem", color: "white" }}>{r.name}</div>
                  <div style={{ color: "var(--neon-pink)", fontSize: "0.75rem" }}>{r.pet}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOOKING ===== */}
      <section id="запись" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute animate-orb-pulse" style={{ top: "50%", left: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(255,45,155,0.12) 0%, transparent 70%)", borderRadius: "50%", transform: "translateY(-50%)" }} />
          <div className="absolute animate-orb-pulse stagger-4" style={{ top: "50%", right: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(155,45,255,0.1) 0%, transparent 70%)", borderRadius: "50%", transform: "translateY(-50%)" }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4" style={{ border: "1px solid rgba(255,45,155,0.25)" }}>
              <Icon name="Calendar" size={14} style={{ color: "var(--neon-pink)" }} />
              <span style={{ color: "var(--neon-pink)", fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.15em" }}>ОНЛАЙН-ЗАПИСЬ</span>
            </div>
            <h2 className="section-title mb-4">ЗАПИШИТЕСЬ <span className="neon-text">ПРЯМО СЕЙЧАС</span></h2>
            <p className="section-subtitle">Заполните форму и мы свяжемся с вами для подтверждения</p>
          </div>

          <div className="glass-strong rounded-3xl p-8 md:p-10" style={{ border: "1px solid rgba(255,45,155,0.2)" }}>
            {bookingSubmitted ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-6 animate-paw">🐾</div>
                <h3 style={{ fontFamily: "Oswald", fontSize: "2rem", marginBottom: 12, color: "white" }}>ЗАЯВКА <span className="neon-text">ОТПРАВЛЕНА!</span></h3>
                <p style={{ color: "rgba(255,255,255,0.6)" }}>Мы свяжемся с вами в ближайшее время для подтверждения записи</p>
                <button onClick={() => setBookingSubmitted(false)} className="mt-8 neon-glow-btn text-white px-6 py-3 rounded-xl" style={{ fontFamily: "Oswald", letterSpacing: "0.06em" }}>
                  НОВАЯ ЗАПИСЬ
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="grid md:grid-cols-2 gap-5">
                {[
                  { key: "name", label: "Ваше имя", placeholder: "Иван Иванов", type: "text" },
                  { key: "phone", label: "Телефон", placeholder: "+7 (900) 000-00-00", type: "tel" },
                  { key: "pet", label: "Имя питомца", placeholder: "Бублик", type: "text" },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 6 }}>{field.label.toUpperCase()}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={booking[field.key as keyof typeof booking]}
                      onChange={e => setBooking(prev => ({ ...prev, [field.key]: e.target.value }))}
                      style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,45,155,0.2)", borderRadius: 12, padding: "12px 16px", color: "white", outline: "none", fontFamily: "Rubik", fontSize: "0.95rem" }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 6 }}>УСЛУГА</label>
                  <select value={booking.service} onChange={e => setBooking(prev => ({ ...prev, service: e.target.value }))}
                    style={{ width: "100%", background: "#111", border: "1px solid rgba(255,45,155,0.2)", borderRadius: 12, padding: "12px 16px", color: "white", outline: "none", fontFamily: "Rubik", fontSize: "0.95rem" }}>
                    <option value="">Выберите услугу</option>
                    {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title} — {s.price}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 6 }}>МАСТЕР</label>
                  <select value={booking.specialist} onChange={e => setBooking(prev => ({ ...prev, specialist: e.target.value }))}
                    style={{ width: "100%", background: "#111", border: "1px solid rgba(255,45,155,0.2)", borderRadius: 12, padding: "12px 16px", color: "white", outline: "none", fontFamily: "Rubik", fontSize: "0.95rem" }}>
                    <option value="">Любой мастер</option>
                    {SPECIALISTS.map(s => <option key={s.name} value={s.name}>{s.name} ({s.spec})</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 6 }}>ДАТА</label>
                  <input type="date" value={booking.date} onChange={e => setBooking(prev => ({ ...prev, date: e.target.value }))}
                    style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,45,155,0.2)", borderRadius: 12, padding: "12px 16px", color: "white", outline: "none", fontFamily: "Rubik", fontSize: "0.95rem", colorScheme: "dark" }} />
                </div>

                <div>
                  <label style={{ fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 6 }}>ВРЕМЯ</label>
                  <select value={booking.time} onChange={e => setBooking(prev => ({ ...prev, time: e.target.value }))}
                    style={{ width: "100%", background: "#111", border: "1px solid rgba(255,45,155,0.2)", borderRadius: 12, padding: "12px 16px", color: "white", outline: "none", fontFamily: "Rubik", fontSize: "0.95rem" }}>
                    <option value="">Выберите время</option>
                    {["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"].map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>

                <div className="md:col-span-2 mt-2">
                  <button type="submit" className="w-full neon-glow-btn text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3" style={{ fontFamily: "Oswald", letterSpacing: "0.08em" }}>
                    <Icon name="Calendar" size={20} />
                    ОТПРАВИТЬ ЗАЯВКУ
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4" style={{ border: "1px solid rgba(255,45,155,0.25)" }}>
              <Icon name="HelpCircle" size={14} style={{ color: "var(--neon-pink)" }} />
              <span style={{ color: "var(--neon-pink)", fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.15em" }}>ЧАСТЫЕ ВОПРОСЫ</span>
            </div>
            <h2 className="section-title mb-4">FAQ</h2>
          </div>

          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden transition-all duration-300" style={{ background: "var(--dark-card)", border: faqOpen === i ? "1px solid rgba(255,45,155,0.4)" : "1px solid var(--dark-border)" }}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span style={{ fontFamily: "Oswald", fontSize: "1rem", fontWeight: 500, color: faqOpen === i ? "var(--neon-pink)" : "white" }}>{item.q}</span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300" style={{ background: faqOpen === i ? "var(--neon-pink)" : "rgba(255,255,255,0.07)", transform: faqOpen === i ? "rotate(45deg)" : "none" }}>
                    <Icon name="Plus" size={14} style={{ color: faqOpen === i ? "white" : "rgba(255,255,255,0.6)" }} />
                  </div>
                </button>
                {faqOpen === i && (
                  <div className="px-6 pb-6 animate-slide-up" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section id="контакты" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, rgba(255,45,155,0.06) 50%, transparent)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-title mb-2">КАК НАС <span className="neon-text">НАЙТИ</span></h2>
          </div>
          <div className="glass-strong rounded-3xl p-10 md:p-16" style={{ border: "1px solid rgba(255,45,155,0.2)" }}>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              {[
                { icon: "MapPin", title: "Адрес", val: "Волгоград, ул. Примерная, 1", sub: "Пн–Вс: 10:00–20:00" },
                { icon: "Phone", title: "Телефон", val: "+7 (900) 000-00-00", sub: "Запись и консультации" },
                { icon: "Instagram", title: "Соцсети", val: "@maketgrum", sub: "Наши работы каждый день" },
              ].map(c => (
                <div key={c.title} className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, rgba(255,45,155,0.2), rgba(155,45,255,0.2))", border: "1px solid rgba(255,45,155,0.3)" }}>
                    <Icon name={c.icon} fallback="MapPin" size={24} style={{ color: "var(--neon-pink)" }} />
                  </div>
                  <div style={{ fontFamily: "Oswald", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", marginBottom: 4 }}>{c.title.toUpperCase()}</div>
                  <div style={{ fontFamily: "Oswald", fontSize: "1.1rem", fontWeight: 600, color: "white", marginBottom: 4 }}>{c.val}</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem" }}>{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 text-center" style={{ borderTop: "1px solid rgba(255,45,155,0.1)" }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-xl">🐾</span>
          <span style={{ fontFamily: "Oswald", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.06em", color: "white" }}>
            MAKET<span style={{ color: "var(--neon-pink)" }}>GRUM</span>
          </span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
          © 2024 Maketgrum — Груминг-салон в Волгограде. Все права защищены.
        </p>
      </footer>

    </div>
  );
}