import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export function MovieRow({ title, movies }: MovieRowProps) {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -800 : 800;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      setTimeout(() => {
        if (rowRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
          setShowLeftArrow(scrollLeft > 0);
          setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
      }, 300);
    }
  };

  return (
    <div className="space-y-2 px-4 md:px-12 mb-8">
      <h3 className="text-white mb-4">{title}</h3>
      <div className="relative group">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-10 w-12 bg-black/50 hover:bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
        )}
        <div
          ref={rowRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="min-w-[200px] md:min-w-[280px] cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <ImageWithFallback
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-[120px] md:h-[160px] object-cover rounded"
              />
            </div>
          ))}
        </div>
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 z-10 w-12 bg-black/50 hover:bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        )}
      </div>
    </div>
  );
}
