import { useRef } from 'react';
import { X, Check } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import SectionHeading from '../ui/SectionHeading';

const pairs = [
  {
    problem: 'Ребёнок пошёл в музыкальную школу, но пока непонятно, надолго ли ему это увлечение.',
    solution: 'Возьмите пианино в аренду и посмотрите, как ребёнок втянется в занятия. Если полюбит музыку — потом можно купить инструмент.',
  },
  {
    problem: 'Давно хотите научиться играть или вернуться к занятиям, но не уверены, что будете заниматься регулярно.',
    solution: 'Начните с аренды. Если занятия войдут в привычку — тогда уже решите, нужен ли свой инструмент.',
  },
  {
    problem: 'Хотите купить пианино, но не понимаете, какая модель подойдёт именно вам.',
    solution: 'Попробуйте разные модели вживую и выберите ту, на которой вам действительно комфортно играть.',
  },
  {
    problem: 'Вы приехали в Уфу ненадолго и не хотите прерывать занятия.',
    solution: 'Арендуйте пианино на нужный срок — не нужно покупать, перевозить или хранить инструмент после отъезда.',
  },
];

export default function WhyRent() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="why-rent" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={
            <>
              Когда стоит сначала <span className="text-brass">арендовать?</span>
            </>
          }
          subtitle="Есть ситуации, когда лучше сначала попробовать инструмент, а уже потом принимать решение о покупке."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 lg:gap-y-14">
          <div className="hidden lg:flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-graphite/40">
            <X size={16} /> Когда лучше не спешить с покупкой
          </div>
          <div className="hidden lg:flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brass">
            <Check size={16} /> Что даёт аренда
          </div>

          {pairs.map((pair, idx) => (
            <div key={idx} className="contents">
              <div
                className={`flex items-start gap-3 transition-all duration-700 ease-premium ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-graphite/5 text-graphite/40 flex items-center justify-center mt-0.5">
                  <X size={14} />
                </span>
                <p className="text-base sm:text-lg text-graphite/60 leading-relaxed">{pair.problem}</p>
              </div>
              <div
                className={`flex items-start gap-3 bg-white rounded-2xl px-5 py-4 ring-1 ring-brass/10 shadow-sm transition-all duration-700 ease-premium hover:ring-brass/30 hover:-translate-y-0.5 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                }`}
                style={{ transitionDelay: `${idx * 120 + 80}ms` }}
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brass/15 text-brass flex items-center justify-center mt-0.5">
                  <Check size={14} />
                </span>
                <p className="text-base sm:text-lg text-graphite font-medium leading-relaxed">{pair.solution}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 rounded-3xl bg-cream/80 p-6 sm:p-8 ring-1 ring-graphite/5 transition-all duration-700 ease-premium delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-graphite">Что вы получаете с арендой</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Экономию денег — платите только за время использования',
              'Свободу выбора — можно попробовать разные модели',
              'Меньше забот — не нужно сразу покупать, хранить и продавать инструмент',
              'Гибкость — согласуем нужный срок и при желании продлим аренду',
              'Доставку и установку — при необходимости привезём, соберём и объясним',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-graphite/70 leading-relaxed">
                <Check size={17} className="mt-0.5 shrink-0 text-brass" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 ease-premium delay-300 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-heading font-light text-graphite/90 tracking-wide">
            Сначала попробуйте. <span className="font-bold text-brass">Потом решайте.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
