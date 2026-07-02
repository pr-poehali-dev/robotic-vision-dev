import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const BRAND_IMG = 'https://cdn.poehali.dev/projects/d6d732d7-c971-47ef-8230-26889331d0b3/bucket/a52dc7e5-5fb7-40f1-925c-089c8e7aa8c6.png';

const TG_SUPPORT = 'https://t.me/FindAdSupp';
const TG_CHANNEL = 'https://t.me/findadcomm';
const EMAIL = 'findad@fundd.ru';

const services = [
  {
    icon: 'Search',
    title: 'Анализ данных',
    text: 'Изучаем вашу аудиторию, конкурентов и рынок — чтобы решения были основаны на реальных цифрах.',
  },
  {
    icon: 'Megaphone',
    title: 'Продвижение бренда',
    text: 'Создаём стратегию присутствия в digital: от контента до рекламных кампаний.',
  },
  {
    icon: 'Users',
    title: 'Привлечение клиентов',
    text: 'Настраиваем каналы трафика и воронки, которые приводят целевых покупателей.',
  },
  {
    icon: 'TrendingUp',
    title: 'Оптимизация продаж',
    text: 'Находим узкие места в процессе продаж и помогаем их устранить — результат виден в выручке.',
  },
];

const benefits = [
  { icon: 'Target', title: 'Без воды', text: 'Только практические идеи и реальные задачи бизнеса.' },
  { icon: 'BarChart2', title: 'Опора на аналитику', text: 'Каждое решение подкреплено данными, а не интуицией.' },
  { icon: 'Zap', title: 'Быстрый старт', text: 'Начинаем работу сразу — без долгих брифингов и бюрократии.' },
  { icon: 'ShieldCheck', title: 'Прозрачность', text: 'Объясняем, что и зачем делаем на каждом этапе.' },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">

      {/* Liquid background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="liquid-blob animate-liquid" style={{ width: 620, height: 620, top: '-10%', left: '-8%', background: 'hsl(265 85% 55%)' }} />
        <div className="liquid-blob animate-liquid" style={{ width: 520, height: 520, bottom: '-12%', right: '-6%', background: 'hsl(280 80% 55%)', animationDelay: '-7s' }} />
        <div className="liquid-blob animate-liquid" style={{ width: 460, height: 460, top: '40%', left: '55%', background: 'hsl(250 85% 50%)', animationDelay: '-14s' }} />
        <div className="absolute inset-0 bg-background/65" />
      </div>

      {/* Nav */}
      <header className="relative z-20">
        <div className="container flex items-center justify-between py-6">
          <div className="flex items-center gap-2 font-display text-2xl font-700 tracking-wide">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/40">
              <Icon name="Moon" size={18} />
            </span>
            FindAd
          </div>
          <Button asChild variant="secondary" className="glass rounded-full">
            <a href={TG_SUPPORT} target="_blank" rel="noreferrer">
              <Icon name="Send" size={16} className="mr-2" />
              Связаться
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-up">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Аналитика · Стратегия · Рост
            </span>
            <h1 className="mt-6 font-display text-5xl font-700 leading-[1.05] tracking-tight md:text-7xl">
              Помогаем бизнесу<br />
              <span className="text-gradient">расти осознанно</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              FindAd — команда специалистов по аналитике, стратегии и цифровому маркетингу.
              Работаем с реальными задачами, даём измеримый результат.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full text-base font-600 hover:scale-105 transition-transform">
                <a href={TG_SUPPORT} target="_blank" rel="noreferrer">
                  Обсудить проект
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass rounded-full text-base">
                <a href={TG_CHANNEL} target="_blank" rel="noreferrer">
                  <Icon name="Send" size={16} className="mr-2" />
                  Наш канал
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
            <div className="glass-strong relative overflow-hidden rounded-3xl p-2">
              <img
                src={BRAND_IMG}
                alt="FindAd — помогаем бизнесу расти"
                className="h-[380px] w-full rounded-2xl object-cover md:h-[460px]"
                style={{ objectPosition: '75% center' }}
              />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Moon" size={14} className="text-primary" />
                  FindAd
                </p>
                <p className="font-display text-xl font-600">Аналитика и стратегия для роста</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10">
        <div className="container py-16 md:py-24">
          <div className="mb-12 max-w-xl">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Что мы делаем</p>
            <h2 className="mt-3 font-display text-4xl font-700 md:text-5xl">Направления работы</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="glass group rounded-3xl p-8 transition-all hover:-translate-y-1 hover:border-primary/40">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name={s.icon} size={26} />
                </span>
                <h3 className="mt-6 font-display text-xl font-600">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FindAd */}
      <section className="relative z-10">
        <div className="container py-16 md:py-24">
          <div className="mb-12 max-w-xl">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Почему FindAd</p>
            <h2 className="mt-3 font-display text-4xl font-700 md:text-5xl">Наш подход</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="glass rounded-3xl p-7 transition-all hover:-translate-y-1">
                <Icon name={b.icon} size={28} className="text-accent" />
                <h3 className="mt-5 font-display text-xl font-600">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative z-10">
        <div className="container py-16 md:py-24">
          <div className="glass-strong grid gap-10 rounded-3xl p-8 md:grid-cols-2 md:p-14">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">О компании</p>
              <h2 className="mt-3 font-display text-4xl font-700 md:text-5xl">FindAd</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Мы — небольшая команда специалистов, которая помогает бизнесу расти за счёт
                аналитики, стратегии и современных цифровых инструментов.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                В нашем Telegram-канале делимся полезными материалами по маркетингу и продажам,
                кейсами, новостями проекта и рабочими инструментами.
              </p>
              <a
                href={TG_CHANNEL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-primary hover:underline font-600"
              >
                <Icon name="Send" size={18} />
                Подписаться на канал
              </a>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name="UserRound" size={22} />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Руководитель</p>
                  <p className="font-display text-lg font-600">Арутюн Арутюнян</p>
                </div>
              </div>
              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon name="BookOpen" size={22} />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Контент</p>
                  <p className="font-display text-lg font-600">Кейсы, инструменты, советы</p>
                </div>
              </div>
              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name="Globe" size={22} />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Формат</p>
                  <p className="font-display text-lg font-600">Полностью онлайн</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contacts */}
      <section className="relative z-10">
        <div className="container py-16 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-700 md:text-6xl">
              Готовы <span className="text-gradient">обсудить проект</span>?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Напишите нам — расскажите о своём бизнесе и задаче, и мы предложим решение.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <a
                href={TG_SUPPORT}
                target="_blank"
                rel="noreferrer"
                className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <Icon name="Send" size={26} className="mx-auto text-primary" />
                <p className="mt-4 font-display text-lg font-600">Telegram</p>
                <p className="mt-1 text-sm text-muted-foreground">@FindAdSupp</p>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <Icon name="Mail" size={26} className="mx-auto text-accent" />
                <p className="mt-4 font-display text-lg font-600">Почта</p>
                <p className="mt-1 text-sm text-muted-foreground">{EMAIL}</p>
              </a>
              <a
                href={TG_CHANNEL}
                target="_blank"
                rel="noreferrer"
                className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <Icon name="Newspaper" size={26} className="mx-auto text-primary" />
                <p className="mt-4 font-display text-lg font-600">Наш канал</p>
                <p className="mt-1 text-sm text-muted-foreground">t.me/findadcomm</p>
              </a>
            </div>
            <Button asChild size="lg" className="mt-10 rounded-full text-base font-600 hover:scale-105 transition-transform">
              <a href={TG_SUPPORT} target="_blank" rel="noreferrer">
                Написать нам
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/60">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2 font-display text-lg font-600 text-foreground">
            <Icon name="Moon" size={16} className="text-primary" />
            FindAd
          </div>
          <p>© {new Date().getFullYear()} · Аналитика, стратегия и рост для бизнеса</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;