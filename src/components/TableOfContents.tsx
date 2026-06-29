import { useState, useEffect } from 'react';
import { TableOfContentsItem } from '../data/navigation';

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (items.length === 0) return null;

  return (
    <aside className="py-8 pl-8">
      <h3 className="text-[10px] font-medium text-blue-muted mb-3 tracking-wider uppercase">
        On this page
      </h3>
      <nav className="space-y-1.5">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block text-xs text-left transition-colors w-full ${
              activeId === item.id
                ? 'text-yellow-accent font-medium'
                : 'text-blue-muted hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
