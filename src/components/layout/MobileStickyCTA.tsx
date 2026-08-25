import { Phone, MessageCircle } from 'lucide-react';
import { contacts } from '../../data/contacts';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export default function MobileStickyCTA() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-graphite/10 px-4 py-3 flex justify-around items-center z-40 shadow-lg">
      <a
        href={`tel:${contacts.phone}`}
        className="flex flex-col items-center text-graphite/70 hover:text-brass transition-colors"
      >
        <Phone size={22} />
        <span className="text-xs mt-1">Позвонить</span>
      </a>
      <a
        href={contacts.max.includes('REPLACE_WITH_YOUR_MAX_LINK') ? undefined : contacts.max}
        target={contacts.max.includes('REPLACE_WITH_YOUR_MAX_LINK') ? undefined : '_blank'}
        rel="noopener noreferrer"
        aria-disabled={contacts.max.includes('REPLACE_WITH_YOUR_MAX_LINK')}
        title={contacts.max.includes('REPLACE_WITH_YOUR_MAX_LINK') ? 'Ссылка на MAX будет добавлена позже' : 'Написать в MAX'}
        onClick={(event) => {
          if (contacts.max.includes('REPLACE_WITH_YOUR_MAX_LINK')) event.preventDefault();
        }}
        className={`flex flex-col items-center transition-colors ${contacts.max.includes('REPLACE_WITH_YOUR_MAX_LINK') ? 'text-graphite/40' : 'text-graphite/70 hover:text-brass'}`}
      >
        <MessageCircle size={22} />
        <span className="text-xs mt-1">MAX</span>
      </a>
    </div>
  );
}