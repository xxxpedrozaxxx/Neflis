import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus, Trash2, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  type?: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onSelectMovie?: (movie: Movie) => void;
  onAddToList?: (movie: Movie) => void;
  onRemoveFromList?: (movieId: number) => void;
  myList?: Movie[];
  isMyListView?: boolean;
}

export function MovieRow({ title, movies, onSelectMovie, onAddToList, onRemoveFromList, myList = [], isMyListView = false }: MovieRowProps) {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
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

  const isInList = (movieId: number) => {
    return myList.some(item => item.id === movieId);
  };

  const handleAddClick = (e: React.MouseEvent, movie: Movie) => {
    e.stopPropagation();
    if (onAddToList) {
      onAddToList(movie);
    }
  };

  const handleRemoveClick = (e: React.MouseEvent, movieId: number) => {
    e.stopPropagation();
    if (onRemoveFromList) {
      onRemoveFromList(movieId);
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
              onClick={() => onSelectMovie && onSelectMovie(movie)}
              onMouseEnter={() => setHoveredId(movie.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="min-w-[200px] md:min-w-[280px] cursor-pointer transition-transform duration-300 hover:scale-105 relative group/card"
            >
              <ImageWithFallback
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-[120px] md:h-[160px] object-cover rounded"
              />
              {hoveredId === movie.id && (
                <div className="absolute top-2 right-2 z-20">
                  {isMyListView ? (
                    <button
                      onClick={(e) => handleRemoveClick(e, movie.id)}
                      className="w-8 h-8 rounded-full border-2 border-gray-400 bg-black/80 hover:border-white flex items-center justify-center transition-all"
                      title="Quitar de Mi lista"
                    >
                      <Trash2 className="w-4 h-4 text-white" />
                    </button>
                  ) : isInList(movie.id) ? (
                    <button
                      className="w-8 h-8 rounded-full border-2 border-white bg-black/80 flex items-center justify-center"
                      title="Ya está en Mi lista"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </button>
                  ) : (
                    <button
                      onClick={(e) => handleAddClick(e, movie)}
                      className="w-8 h-8 rounded-full border-2 border-gray-400 bg-black/80 hover:border-white flex items-center justify-center transition-all"
                      title="Agregar a Mi lista"
                    >
                      <Plus className="w-5 h-5 text-white" />
                    </button>
                  )}
                </div>
              )}
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
