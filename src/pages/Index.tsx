import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/d6d732d7-c971-47ef-8230-26889331d0b3/files/cfa62ec9-e996-4158-9067-2579c6de0d73.jpg';

const TG_SUPPORT = 'https://t.me/FindAdSupp';
const TG_CHANNEL = 'https://t.me/findadcomm';
const EMAIL = 'findad@fundd.ru';

const tasks = [
  {
    icon: 'MessagesSquare',
    title: 'Общение с клиентами',
    text: 'Быстрые и вежливые ответы в Telegram, помощь на каждом этапе.',
  },
  {
    icon: 'Lightbulb',
    title: 'Консультации',
    text: 'Объясняете возможности сервиса и подсказываете лучшие решения.',
  },
  {
    icon: 'CircleCheck',
    title: 'Решение вопросов',
    text: 'Разбираете текущие обращения и доводите каждое до результата.',
  },
];

const directions = [
  { icon: 'Search', title: 'Анализ данных' },
  { icon: 'Megaphone', title: 'Продвижение бренда' },
  { icon: 'Users', title: 'Привлечение клиентов' },
  { icon: 'TrendingUp', title: 'Оптимизация продаж' },
];

const perks = [
  { icon: 'Wifi', title: 'Полная удалёнка', text: 'Работайте из любой точки — офис не нужен.' },
  { icon: 'Laptop', title: 'Минимум техники', text: 'Компьютер и стабильный интернет — вот и всё.' },
  { icon: 'Send', title: 'Работа в Telegram', text: 'Вся коммуникация идёт через удобный мессенджер.' },
  { icon: 'TrendingUp', title: 'Растущий проект', text: 'Присоединяйтесь к сервису на этапе активного роста.' },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Liquid metal background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="liquid-blob animate-liquid"
          style={{ width: 620, height: 620, top: '-10%', left: '-8%', background: 'hsl(265 85% 55%)' }}
        />
        <div
          className="liquid-blob animate-liquid"
          style={{ width: 520, height: 520, bottom: '-12%', right: '-6%', background: 'hsl(280 80% 55%)', animationDelay: '-7s' }}
        />
        <div
          className="liquid-blob animate-liquid"
          style={{ width: 460, height: 460, top: '40%', left: '55%', background: 'hsl(250 85% 50%)', animationDelay: '-14s' }}
        />
        <div className="absolute inset-0 bg-background/60" />
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
              Написать
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
              Открыта вакансия · Удалённо
            </span>
            <h1 className="mt-6 font-display text-5xl font-700 leading-[1.05] tracking-tight md:text-7xl">
              Менеджер по <br />
              <span className="text-gradient">поддержке клиентов</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Присоединяйтесь к команде FindAd — помогайте клиентам, консультируйте и
              решайте вопросы. Полностью удалённый формат.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full text-base font-600 hover:scale-105 transition-transform">
                <a href={TG_SUPPORT} target="_blank" rel="noreferrer">
                  Откликнуться
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass rounded-full text-base">
                <a href="#tasks">Узнать о задачах</a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
            <div className="glass-strong relative overflow-hidden rounded-3xl p-2">
              <img
                src={HERO_IMG}
                alt="FindAd"
                className="h-[380px] w-full rounded-2xl object-cover md:h-[460px]"
              />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Moon" size={14} className="text-primary" />
                  Помогаем бизнесу расти осознанно
                </p>
                <p className="font-display text-xl font-600">Удалённо · через Telegram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="relative z-10">
        <div className="container pb-8">
          <div className="glass-strong rounded-3xl p-8 md:p-10">
            <p className="mb-8 text-center text-sm text-muted-foreground">
              FindAd помогает бизнесу расти через аналитику, стратегию и современные цифровые инструменты
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {directions.map((d) => (
                <div key={d.title} className="flex items-center gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={d.icon} size={22} />
                  </span>
                  <span className="font-display text-lg font-600">{d.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tasks */}
      <section id="tasks" className="relative z-10">
        <div className="container py-16 md:py-24">
          <div className="mb-12 max-w-xl">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Задачи</p>
            <h2 className="mt-3 font-display text-4xl font-700 md:text-5xl">Чем предстоит заниматься</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {tasks.map((t) => (
              <div key={t.title} className="glass group rounded-3xl p-8 transition-all hover:-translate-y-1 hover:border-primary/40">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name={t.icon} size={26} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-600">{t.title}</h3>
                <p className="mt-3 text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks / Conditions */}
      <section className="relative z-10">
        <div className="container py-16 md:py-24">
          <div className="mb-12 max-w-xl">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Условия</p>
            <h2 className="mt-3 font-display text-4xl font-700 md:text-5xl">Комфортный формат работы</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <div key={p.title} className="glass rounded-3xl p-7 transition-all hover:-translate-y-1">
                <Icon name={p.icon} size={28} className="text-accent" />
                <h3 className="mt-5 font-display text-xl font-600">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
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
                аналитики, стратегии и современных цифровых инструментов. С ростом числа клиентов
                ищем человека, который возьмёт на себя общение с ними — чтобы каждый получал быстрый
                и качественный ответ.
              </p>
              <a
                href={TG_CHANNEL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Icon name="Send" size={18} />
                Наш Telegram-канал: новости и обучение
              </a>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name="UserRound" size={22} />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Контактное лицо</p>
                  <p className="font-display text-lg font-600">Арутюн Арутюнян</p>
                </div>
              </div>
              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon name="Rocket" size={22} />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Этап</p>
                  <p className="font-display text-lg font-600">Активный рост сервиса</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts / CTA */}
      <section className="relative z-10">
        <div className="container py-16 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-700 md:text-6xl">
              Готовы <span className="text-gradient">присоединиться</span>?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Напишите нам в Telegram или на почту — расскажите о себе, и мы свяжемся с вами.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <a
                href={TG_SUPPORT}
                target="_blank"
                rel="noreferrer"
                className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <Icon name="Send" size={26} className="mx-auto text-primary" />
                <p className="mt-4 font-display text-lg font-600">Написать в Telegram</p>
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
                Откликнуться на вакансию
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/60">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
          <p className="font-display text-lg font-600 text-foreground">FindAd</p>
          <p>© {new Date().getFullYear()} · Вакансия: менеджер по поддержке клиентов</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;