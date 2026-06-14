import { useState } from "react";
import Icon from "@/components/ui/icon";

const FACADE_IMG = "https://cdn.poehali.dev/projects/75fd0bbd-2c32-47da-a5fe-4778bf7b119c/bucket/09935c9d-4b64-4aab-9703-f303a92fc178.png";
const GROOMING_ACTION = "https://cdn.poehali.dev/projects/75fd0bbd-2c32-47da-a5fe-4778bf7b119c/bucket/grooming-hero-v2.jpg";

const CDN = "https://cdn.poehali.dev/projects/75fd0bbd-2c32-47da-a5fe-4778bf7b119c/bucket";

const GALLERY_PHOTOS = [
  { url: `${CDN}/gallery-1.jpg`, name: "Бишон Фризе", label: "Модельная стрижка" },
  { url: `${CDN}/gallery-2.jpg`, name: "Пудель", label: "Show-грум" },
  { url: `${CDN}/gallery-3.jpg`, name: "Йоркширский терьер", label: "Puppy cut" },
  { url: `${CDN}/gallery-4.jpg`, name: "Шпиц", label: "Round cut" },
];

const SPECIALISTS = [
  { name: "Екатерина М.", exp: "7 лет", spec: "Пудели, шпицы, йорки", photo: `${CDN}/specialist-1.jpg` },
  { name: "Алексей П.", exp: "5 лет", spec: "Крупные породы, хаски", photo: `${CDN}/specialist-2.jpg` },
  { name: "Наталья С.", exp: "9 лет", spec: "Кошки всех пород", photo: `${CDN}/specialist-3.jpg` },
];

const SERVICES = [
  { icon: "Scissors", title: "Стрижка и груминг", desc: "Профессиональная стрижка под породу или ваши пожелания", price: "от 1 200 ₽", tag: "Хит" },
  { icon: "Droplets", title: "Мытьё и сушка", desc: "Купание с профессиональной косметикой, сушка и расчёска", price: "от 800 ₽", tag: "" },
  { icon: "Star", title: "SPA-уход", desc: "Маски для шерсти, увлажнение кожи, ароматерапия", price: "от 1 800 ₽", tag: "Премиум" },
  { icon: "Heart", title: "Педикюр", desc: "Стрижка когтей, шлифовка, обработка подушечек лап", price: "от 400 ₽", tag: "" },
  { icon: "Eye", title: "Уход за ушами", desc: "Чистка ушей, удаление шерсти, профилактика воспалений", price: "от 300 ₽", tag: "" },
  { icon: "Sparkles", title: "Комплекс Люкс", desc: "Купание, стрижка, педикюр, уши, зубы и ароматизация", price: "от 3 500 ₽", tag: "Всё включено" },
];

const REVIEWS = [
  { name: "Анна К.", pet: "Пудель Жан-Поль", text: "Потрясающий результат! Жан-Поль выглядит как с выставки. Мастера — настоящие профессионалы.", stars: 5 },
  { name: "Михаил Д.", pet: "Шпиц Апельсин", text: "Ходим сюда уже год. Качество стабильное, цены разумные. Пёс чувствует себя спокойно.", stars: 5 },
  { name: "Елена В.", pet: "Кот Барон", text: "Первый раз повела кота — думала будет катастрофа. Всё прошло идеально! Теперь только сюда.", stars: 5 },
  { name: "Светлана Р.", pet: "Йоркшир Малышка", text: "Лучший груминг в Волгограде! Уютная атмосфера и внимательный персонал.", stars: 5 },
];

const FAQ = [
  { q: "Нужна ли предварительная запись?", a: "Да, рекомендуем записываться заранее. Принимаем онлайн или по телефону. В срочных случаях звоните — постараемся принять." },
  { q: "Как подготовить питомца к груммингу?", a: "Приходите в чистое место, слегка расчешите шерсть. Кормить за 2 часа до процедуры. Животное должно быть привито." },
  { q: "Какие породы вы обслуживаете?", a: "Работаем со всеми породами собак и кошек — от йоркширских терьеров до мастиффов, от сфинксов до мейн-кунов." },
  { q: "Сколько времени занимает процедура?", a: "Зависит от размера питомца и набора услуг. Стрижка мелкой собаки — 1.5–2 часа, крупной — 3–4 часа." },
  { q: "Используете ли вы безопасную косметику?", a: "Только сертифицированная профессиональная косметика ведущих брендов. Гипоаллергенные серии для чувствительной кожи." },
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
    <div style={{ background: "var(--dark-base)", color: "var(--white)", minHeight: "100vh" }}>

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass" style={{ borderBottom: "1px solid rgba(255,122,0,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={FACADE_IMG} alt="Dog & Cat" className="w-9 h-9 rounded-xl object-cover object-top" style={{ border: "1px solid rgba(255,122,0,0.4)" }} />
            <div>
              <div style={{ fontFamily: "Oswald", fontSize: "1.3rem", fontWeight: 700, letterSpacing: "0.08em", lineHeight: 1 }}>
                MAKET<span style={{ color: "var(--orange)" }}>GRUM</span>
              </div>
              <div style={{ fontFamily: "Rubik", fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Груминг · Волгоград</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[["Услуги", "#услуги"], ["Работы", "#галерея"], ["Мастера", "#мастера"], ["Отзывы", "#отзывы"], ["FAQ", "#faq"]].map(([label, href]) => (
              <a key={label} href={href} className="nav-link">{label}</a>
            ))}
          </div>

          <a href="#запись" className="orange-glow-btn px-5 py-2.5 rounded-xl text-sm" style={{ fontFamily: "Oswald", letterSpacing: "0.08em" }}>
            ЗАПИСАТЬСЯ
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative flex items-center overflow-hidden" style={{ paddingTop: "80px", minHeight: "100svh" }}>
        {/* Blur background */}
        <div className="hero-bg-blur" style={{ backgroundImage: `url(${GROOMING_ACTION})` }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30 z-[1]" />

        {/* Orange orbs */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute animate-orb-pulse" style={{ top: "20%", right: "8%", width: 350, height: 350, background: "radial-gradient(circle, rgba(255,122,0,0.2) 0%, transparent 70%)", borderRadius: "50%" }} />
          <div className="absolute animate-orb-pulse stagger-3" style={{ bottom: "15%", left: "5%", width: 280, height: 280, background: "radial-gradient(circle, rgba(255,149,0,0.12) 0%, transparent 70%)", borderRadius: "50%" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 orange-border">
              <span className="animate-paw">🐾</span>
              <span style={{ color: "var(--orange)", fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.18em" }}>ГРУМИНГ-САЛОН · ВОЛГОГРАД</span>
            </div>

            <h1 style={{ fontFamily: "Oswald", fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1, marginBottom: 20 }}>
              ГРУМИНГ<br />
              <span className="orange-text">ДЛЯ ТВОИХ</span><br />
              ЛЮБИМЦЕВ
            </h1>

            <p className="section-subtitle mb-4" style={{ fontSize: "1.1rem", maxWidth: 460 }}>
              Maketgrum — профессиональная стрижка и уход за животными в самом сердце Волгограда. Мы любим каждого питомца как своего.
            </p>

            <div className="flex items-center gap-2 mb-10">
              <Icon name="MapPin" size={15} style={{ color: "var(--orange)" }} />
              <span style={{ fontFamily: "Rubik", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)" }}>ул. Мира, 14, Волгоград</span>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#запись" className="orange-glow-btn px-8 py-4 rounded-2xl text-lg inline-flex items-center gap-2" style={{ fontFamily: "Oswald", letterSpacing: "0.06em" }}>
                <Icon name="Calendar" size={20} />
                ЗАПИСАТЬСЯ ОНЛАЙН
              </a>
              <a href="tel:+79000000000" className="glass text-white px-8 py-4 rounded-2xl text-lg inline-flex items-center gap-2 orange-border transition-all hover:bg-orange-500/10" style={{ fontFamily: "Oswald", letterSpacing: "0.06em" }}>
                <Icon name="Phone" size={20} style={{ color: "var(--orange)" }} />
                ПОЗВОНИТЬ
              </a>
            </div>

            <div className="flex items-end gap-0" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}>
              {[["500+", "клиентов"], ["5★", "рейтинг"], ["3", "мастера"]].map(([num, label], i) => (
                <div key={label} className="flex-1" style={{ paddingRight: 24, borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none", paddingLeft: i > 0 ? 24 : 0 }}>
                  <div style={{ fontFamily: "Oswald", fontSize: "2.2rem", fontWeight: 700, color: "var(--orange)", lineHeight: 1 }}>{num}</div>
                  <div style={{ fontFamily: "Rubik", color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D photo card */}
          <div className="relative flex justify-center animate-slide-up stagger-3">
            <div className="relative card-3d animate-float3d" style={{ maxWidth: 460, width: "100%" }}>
              <div className="absolute animate-spin-slow" style={{ inset: -28, border: "1px solid rgba(255,122,0,0.22)", borderRadius: "50%", zIndex: 0 }} />
              <div className="absolute animate-spin-slow stagger-4" style={{ inset: -52, border: "1px dashed rgba(255,122,0,0.12)", borderRadius: "50%", zIndex: 0, animationDirection: "reverse" }} />

              <div className="relative rounded-3xl overflow-hidden z-10" style={{ border: "1px solid rgba(255,122,0,0.35)", boxShadow: "0 30px 80px rgba(255,122,0,0.25), 0 0 0 1px rgba(255,255,255,0.04)" }}>
                <img src={GROOMING_ACTION} alt="Груминг" className="w-full object-cover" style={{ height: 440 }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 55%)" }} />

                <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full orange-border">
                  <span style={{ color: "var(--orange)", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.1em" }}>✦ ПРОФИ ГРУМИНГ</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="glass rounded-2xl p-4 orange-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div style={{ fontFamily: "Oswald", fontSize: "1rem", fontWeight: 600 }}>MAKETGRUM</div>
                        <div style={{ fontFamily: "Rubik", color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>📍 ул. Мира, 14</div>
                      </div>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(s => <span key={s} style={{ color: "var(--orange)", fontSize: "0.85rem" }}>★</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-40">
          <span style={{ fontFamily: "Oswald", fontSize: "0.65rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)" }}>СКРОЛЛ</span>
          <Icon name="ChevronDown" size={15} style={{ color: "var(--orange)" }} />
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="услуги" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,122,0,0.07) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 orange-border">
              <Icon name="Scissors" size={13} style={{ color: "var(--orange)" }} />
              <span style={{ color: "var(--orange)", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.18em" }}>ЧТО МЫ ДЕЛАЕМ</span>
            </div>
            <h2 className="section-title mb-4">НАШИ <span className="orange-text">УСЛУГИ</span></h2>
            <p className="section-subtitle max-w-lg mx-auto">Полный спектр груминг-услуг — от базового купания до премиального SPA</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="service-card relative rounded-2xl p-6" style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}>
                {svc.tag && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full" style={{ background: "var(--orange)", color: "#000", fontFamily: "Oswald", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                    {svc.tag}
                  </div>
                )}
                <div className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center" style={{ background: "rgba(255,122,0,0.12)", border: "1px solid rgba(255,122,0,0.22)" }}>
                  <Icon name={svc.icon} fallback="Sparkles" size={20} style={{ color: "var(--orange)" }} />
                </div>
                <h3 style={{ fontFamily: "Oswald", fontSize: "1.2rem", fontWeight: 600, marginBottom: 8, color: "var(--white)" }}>{svc.title}</h3>
                <p style={{ fontFamily: "Rubik", color: "rgba(245,245,245,0.5)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 16 }}>{svc.desc}</p>
                <div className="flex items-center justify-between">
                  <span style={{ color: "var(--orange)", fontFamily: "Oswald", fontSize: "1.05rem", fontWeight: 600 }}>{svc.price}</span>
                  <a href="#запись" style={{ background: "rgba(255,122,0,0.1)", border: "1px solid rgba(255,122,0,0.25)", color: "var(--orange)", fontFamily: "Oswald", fontSize: "0.7rem", letterSpacing: "0.08em", padding: "5px 13px", borderRadius: 9 }}>
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
        <div className="absolute inset-0 grid-pattern opacity-35" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(255,122,0,0.08) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 orange-border">
              <Icon name="Camera" size={13} style={{ color: "var(--orange)" }} />
              <span style={{ color: "var(--orange)", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.18em" }}>ПРИМЕРЫ РАБОТ</span>
            </div>
            <h2 className="section-title mb-4">НАШИ <span className="orange-text">РАБОТЫ</span></h2>
            <p className="section-subtitle max-w-lg mx-auto">Каждый питомец уходит от нас красивым и ухоженным</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY_PHOTOS.map((item, i) => (
              <div key={i} className="photo-card rounded-2xl overflow-hidden" style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}>
                <div className="relative" style={{ height: 240 }}>
                  <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 50%)" }} />
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-lg" style={{ background: "var(--orange)", color: "#000", fontFamily: "Oswald", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                    {item.label}
                  </div>
                </div>
                <div className="p-4">
                  <div style={{ fontFamily: "Oswald", fontSize: "0.95rem", fontWeight: 600, color: "var(--white)" }}>{item.name}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <div className="glass inline-flex items-center gap-3 px-6 py-3 rounded-full orange-border">
              <span style={{ fontFamily: "Rubik", color: "rgba(255,255,255,0.45)", fontSize: "0.875rem" }}>Больше работ в</span>
              <a href="#" style={{ color: "var(--orange)", fontFamily: "Oswald", letterSpacing: "0.08em", fontSize: "0.82rem" }}>INSTAGRAM →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPECIALISTS ===== */}
      <section id="мастера" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(255,122,0,0.06) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 orange-border">
              <Icon name="Users" size={13} style={{ color: "var(--orange)" }} />
              <span style={{ color: "var(--orange)", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.18em" }}>КОМАНДА ПРОФЕССИОНАЛОВ</span>
            </div>
            <h2 className="section-title mb-4">НАШИ <span className="orange-text">МАСТЕРА</span></h2>
            <p className="section-subtitle max-w-lg mx-auto">Опытные грумеры, которые любят животных и знают своё дело</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SPECIALISTS.map((sp) => (
              <div key={sp.name} className="service-card rounded-2xl overflow-hidden" style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}>
                <div className="relative" style={{ height: 300 }}>
                  <img src={sp.photo} alt={sp.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.9) 0%, rgba(13,13,13,0.1) 60%, transparent 100%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 style={{ fontFamily: "Oswald", fontSize: "1.3rem", fontWeight: 700, color: "var(--white)", marginBottom: 2 }}>{sp.name}</h3>
                    <p style={{ fontFamily: "Rubik", color: "rgba(255,255,255,0.55)", fontSize: "0.82rem" }}>{sp.spec}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: "rgba(255,122,0,0.12)", border: "1px solid rgba(255,122,0,0.22)" }}>
                    <Icon name="Award" size={12} style={{ color: "var(--orange)" }} />
                    <span style={{ color: "var(--orange)", fontFamily: "Oswald", fontSize: "0.7rem", letterSpacing: "0.06em" }}>ОПЫТ {sp.exp}</span>
                  </div>
                  <a href="#запись" style={{ color: "var(--orange)", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.08em" }}>ЗАПИСАТЬСЯ →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section id="отзывы" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, rgba(255,122,0,0.04) 50%, transparent)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 orange-border">
              <Icon name="MessageSquare" size={13} style={{ color: "var(--orange)" }} />
              <span style={{ color: "var(--orange)", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.18em" }}>ОТЗЫВЫ КЛИЕНТОВ</span>
            </div>
            <h2 className="section-title mb-4">ЧТО ГОВОРЯТ <span className="orange-text">О НАС</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {REVIEWS.map((r, i) => (
              <div key={i} className="service-card rounded-2xl p-6 flex flex-col" style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: "var(--orange)", fontSize: "0.85rem" }}>★</span>)}
                </div>
                <p style={{ fontFamily: "Rubik", color: "rgba(245,245,245,0.65)", fontSize: "0.875rem", lineHeight: 1.7, fontStyle: "italic", flex: 1 }}>"{r.text}"</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12, marginTop: 16 }}>
                  <div style={{ fontFamily: "Oswald", fontWeight: 600, fontSize: "0.95rem", color: "var(--white)" }}>{r.name}</div>
                  <div style={{ fontFamily: "Rubik", color: "var(--orange)", fontSize: "0.72rem" }}>{r.pet}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOOKING ===== */}
      <section id="запись" className="relative py-24 overflow-hidden">
        <div className="max-w-xl mx-auto px-6 relative z-10">
          <div className="mb-10">
            <h2 className="section-title mb-2">ЗАПИСЬ <span className="orange-text">ОНЛАЙН</span></h2>
            <p className="section-subtitle">Оставьте заявку — мы перезвоним и подберём удобное время</p>
          </div>

          {bookingSubmitted ? (
            <div className="py-16 text-center">
              <div className="text-5xl mb-5">🐾</div>
              <h3 style={{ fontFamily: "Oswald", fontSize: "1.8rem", color: "var(--white)", marginBottom: 8 }}>ЗАЯВКА <span className="orange-text">ПРИНЯТА</span></h3>
              <p style={{ fontFamily: "Rubik", color: "rgba(255,255,255,0.45)", fontSize: "0.9rem" }}>Свяжемся с вами в течение часа</p>
              <button onClick={() => setBookingSubmitted(false)} className="mt-8 orange-glow-btn px-6 py-3 rounded-xl text-sm" style={{ fontFamily: "Oswald", letterSpacing: "0.06em" }}>
                НОВАЯ ЗАПИСЬ
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4">
              {[
                { key: "name", placeholder: "Ваше имя", type: "text" },
                { key: "phone", placeholder: "Телефон", type: "tel" },
                { key: "pet", placeholder: "Имя питомца", type: "text" },
              ].map(field => (
                <input
                  key={field.key}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  value={booking[field.key as keyof typeof booking]}
                  onChange={e => setBooking(prev => ({ ...prev, [field.key]: e.target.value }))}
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.12)", borderRadius: 0, padding: "14px 0", color: "var(--white)", outline: "none", fontFamily: "Rubik", fontSize: "1rem" }}
                />
              ))}

              <select value={booking.service} onChange={e => setBooking(prev => ({ ...prev, service: e.target.value }))}
                style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.12)", borderRadius: 0, padding: "14px 0", color: booking.service ? "var(--white)" : "rgba(255,255,255,0.35)", outline: "none", fontFamily: "Rubik", fontSize: "1rem" }}>
                <option value="" style={{ background: "#1A1A1A" }}>Услуга</option>
                {SERVICES.map(s => <option key={s.title} value={s.title} style={{ background: "#1A1A1A" }}>{s.title} — {s.price}</option>)}
              </select>

              <div className="grid grid-cols-2 gap-4">
                <select value={booking.specialist} onChange={e => setBooking(prev => ({ ...prev, specialist: e.target.value }))}
                  style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.12)", borderRadius: 0, padding: "14px 0", color: booking.specialist ? "var(--white)" : "rgba(255,255,255,0.35)", outline: "none", fontFamily: "Rubik", fontSize: "1rem" }}>
                  <option value="" style={{ background: "#1A1A1A" }}>Мастер</option>
                  {SPECIALISTS.map(s => <option key={s.name} value={s.name} style={{ background: "#1A1A1A" }}>{s.name}</option>)}
                </select>
                <input type="date" value={booking.date} onChange={e => setBooking(prev => ({ ...prev, date: e.target.value }))}
                  style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.12)", borderRadius: 0, padding: "14px 0", color: booking.date ? "var(--white)" : "rgba(255,255,255,0.35)", outline: "none", fontFamily: "Rubik", fontSize: "1rem", colorScheme: "dark" }} />
              </div>

              <div style={{ paddingTop: 12 }}>
                <button type="submit" className="w-full orange-glow-btn py-4 rounded-xl text-base flex items-center justify-center gap-2 mt-2" style={{ fontFamily: "Oswald", letterSpacing: "0.1em" }}>
                  ОТПРАВИТЬ ЗАЯВКУ
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 orange-border">
              <Icon name="HelpCircle" size={13} style={{ color: "var(--orange)" }} />
              <span style={{ color: "var(--orange)", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.18em" }}>ЧАСТЫЕ ВОПРОСЫ</span>
            </div>
            <h2 className="section-title">FAQ</h2>
          </div>

          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden transition-all duration-300" style={{ background: "var(--dark-card)", border: faqOpen === i ? "1px solid rgba(255,122,0,0.4)" : "1px solid var(--dark-border)" }}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span style={{ fontFamily: "Oswald", fontSize: "1rem", fontWeight: 500, color: faqOpen === i ? "var(--orange)" : "var(--white)" }}>{item.q}</span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300" style={{ background: faqOpen === i ? "var(--orange)" : "rgba(255,255,255,0.07)", transform: faqOpen === i ? "rotate(45deg)" : "none" }}>
                    <Icon name="Plus" size={13} style={{ color: faqOpen === i ? "#000" : "rgba(255,255,255,0.5)" }} />
                  </div>
                </button>
                {faqOpen === i && (
                  <div className="px-6 pb-6" style={{ fontFamily: "Rubik", color: "rgba(245,245,245,0.55)", lineHeight: 1.7, fontSize: "0.9rem" }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAP + CONTACTS ===== */}
      <section id="контакты" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,122,0,0.06) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 orange-border">
              <Icon name="MapPin" size={13} style={{ color: "var(--orange)" }} />
              <span style={{ color: "var(--orange)", fontFamily: "Oswald", fontSize: "0.72rem", letterSpacing: "0.18em" }}>КАК НАС НАЙТИ</span>
            </div>
            <h2 className="section-title mb-4">КОНТАКТЫ <span className="orange-text">И АДРЕС</span></h2>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { icon: "MapPin", title: "Адрес", val: "ул. Мира, 14", sub: "Волгоград" },
              { icon: "Phone", title: "Телефон", val: "+7 (900) 000-00-00", sub: "Пн–Вс: 10:00–20:00" },
              { icon: "Instagram", title: "Соцсети", val: "@maketgrum", sub: "Наши работы каждый день" },
            ].map(c => (
              <div key={c.title} className="service-card glass-orange rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,122,0,0.15)", border: "1px solid rgba(255,122,0,0.3)" }}>
                  <Icon name={c.icon} fallback="MapPin" size={22} style={{ color: "var(--orange)" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "Oswald", fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em", marginBottom: 2 }}>{c.title.toUpperCase()}</div>
                  <div style={{ fontFamily: "Oswald", fontSize: "1rem", fontWeight: 600, color: "var(--white)" }}>{c.val}</div>
                  <div style={{ fontFamily: "Rubik", color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Map iframe */}
          <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,122,0,0.25)", boxShadow: "0 0 40px rgba(255,122,0,0.1)", height: 420 }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=44.5133%2C48.5244&z=16&pt=44.5133,48.5244,pm2orgm&text=%D1%83%D0%BB.%20%D0%9C%D0%B8%D1%80%D0%B0%2C%2014%2C%20%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B3%D1%80%D0%B0%D0%B4"
              width="100%"
              height="100%"
              style={{ border: "none", filter: "invert(0.9) hue-rotate(180deg) saturate(0.5) brightness(0.85)" }}
              title="Карта Dog & Cat Рыжуля"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10" style={{ borderTop: "1px solid rgba(255,122,0,0.12)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span style={{ fontFamily: "Oswald", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--white)" }}>
              MAKET<span style={{ color: "var(--orange)" }}>GRUM</span>
            </span>
          </div>
          <p style={{ fontFamily: "Rubik", color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}>
            © 2024 Maketgrum — Груминг-салон в Волгограде
          </p>
          <div className="flex gap-5">
            {[["Услуги","#услуги"],["Запись","#запись"],["Контакты","#контакты"]].map(([l,h]) => (
              <a key={l} href={h} style={{ fontFamily: "Oswald", fontSize: "0.75rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--orange)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}