import { useRef, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { reviews } from '../../data/reviews';
import type { Review } from '../../data/reviews';
import SectionHeading from '../ui/SectionHeading';
import ImageLightbox from '../ui/ImageLightbox';

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [activeReview, setActiveReview] = useState<Review | null>(null);

  if (reviews.length === 0) {
    return (
      <section id="reviews" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="Отзывы" subtitle="Скоро здесь появятся отзывы наших клиентов" />
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Отзывы"
          subtitle="Нажмите на отзыв, чтобы посмотреть его полностью"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reviews.map((review, idx) => (
            <button
              key={review.id}
              type="button"
              disabled={!review.avatar}
              onClick={() => review.avatar && setActiveReview(review)}
              className={`group relative overflow-hidden rounded-2xl bg-white p-2 text-left shadow-sm ring-1 ring-graphite/5 transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-xl hover:shadow-graphite/10 ${
                review.avatar ? 'cursor-pointer' : 'cursor-default'
              } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-xl bg-cream/70 p-3 sm:min-h-[300px]">
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt="Скриншот отзыва клиента"
                    className="block max-h-[420px] w-auto max-w-full object-contain transition-transform duration-700 ease-premium group-hover:scale-[1.015]"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <span className="text-sm text-graphite/40">Отзыв пока недоступен</span>
                )}

                {review.avatar && (
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-graphite/75 px-3 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn size={14} />
                    Открыть полностью
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeReview?.avatar && (
        <ImageLightbox
          src={activeReview.avatar}
          alt="Скриншот отзыва клиента"
          onClose={() => setActiveReview(null)}
        />
      )}
    </section>
  );
}
