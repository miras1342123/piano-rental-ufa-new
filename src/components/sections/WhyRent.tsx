import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const situations = [
  {
    title: 'Ребёнок начал заниматься',
    description:
      'Пока неясно, насколько надолго его увлечёт музыка. Возьмите инструмент в аренду и посмотрите, как ребёнок втянется в занятия.',
  },
  {
    title: 'Хотите научиться играть',
    description:
      'Не уверены, хватит ли времени и желания заниматься регулярно? Начните с аренды и решите позже, нужен ли собственный инструмент.',
  },
  {
    title: 'Не знаете, какую модель выбрать',
    description:
      'Попробуйте Yamaha и Casio в реальных условиях и сравните, на каком инструменте вам комфортнее играть.',
  },
  {
    title: 'Приехали в Уфу ненадолго',
    description:
      'Не нужно покупать или перевозить инструмент. Арендуйте его на тот срок, который вам действительно нужен.',
  },
  {
    title: 'Нужен инструмент на короткий срок',
    description:
      'Для подготовки к экзамену, выступлению или мероприятию можно взять пианино ровно на необходимый срок.',
  },
];

export default function WhyRent() {
  return (
    <section id="why-rent" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white/50 overflow-hidden">
      {/* Декоративные пятна — та же визуальная логика, что и в Hero */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-72 h-72 bg-brass/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-80 h-80 bg-graphite/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading
          title="Когда стоит сначала арендовать?"
          subtitle="Покупать пианино сразу хочется не всегда. Иногда гораздо разумнее сначала попробовать."
        />

        <div className="mt-16 md:mt-20">
          {situations.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 90} y={22}>
              <div
                className={`group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 py-8 md:py-10 border-b border-graphite/10 ${
                  idx % 2 === 1 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <span className="shrink-0 font-heading font-light text-[3.25rem] sm:text-[4.5rem] leading-none text-brass/20 group-hover:text-brass/40 transition-colors duration-500 select-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className={`flex-1 ${idx % 2 === 1 ? 'sm:text-right' : ''}`}>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-graphite">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 max-w-xl text-graphite/65 leading-relaxed ${
                      idx % 2 === 1 ? 'sm:ml-auto' : ''
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={situations.length * 90} className="mt-20 md:mt-28 text-center">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light text-graphite/90 tracking-wide max-w-3xl mx-auto">
            Аренда — это <span className="font-bold text-brass">свобода попробовать</span>, прежде чем
            покупать.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
