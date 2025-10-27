import { Play, Plus, ThumbsUp, X, Check } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ContentDetailProps {
  content: {
    id: number;
    title: string;
    imageUrl: string;
    type?: string;
  };
  onClose: () => void;
  onPlay: () => void;
  onAddToList?: (content: any) => void;
  isInList?: boolean;
}

export function ContentDetail({ content, onClose, onPlay, onAddToList, isInList = false }: ContentDetailProps) {
  const isMovie = content.type !== 'series';
  
  const handleAddToList = () => {
    if (onAddToList && !isInList) {
      onAddToList(content);
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 bg-black/90 overflow-y-auto">
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full">
          <ImageWithFallback
            src={content.imageUrl}
            alt={content.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#141414] hover:bg-[#141414]/80 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Content Info */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-white">{content.title}</h1>
              
              <div className="flex gap-3">
                <Button
                  onClick={onPlay}
                  className="bg-white text-black hover:bg-white/90 gap-2 px-8"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Reproducir
                </Button>
                <button 
                  onClick={handleAddToList}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isInList 
                      ? 'border-white bg-white/20' 
                      : 'border-gray-400 hover:border-white'
                  }`}
                  title={isInList ? 'Ya está en Mi lista' : 'Agregar a Mi lista'}
                >
                  {isInList ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <Plus className="w-6 h-6 text-white" />
                  )}
                </button>
                <button className="w-12 h-12 rounded-full border-2 border-gray-400 hover:border-white flex items-center justify-center transition-colors">
                  <ThumbsUp className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-[#141414] px-8 md:px-12 py-8">
          <div className="max-w-4xl space-y-6">
            <div className="flex gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <span className="text-green-500">2025</span>
                  <span>{isMovie ? '2h 15min' : '3 temporadas'}</span>
                  <span className="border border-gray-500 px-2 py-0.5 text-xs">HD</span>
                </div>

                <p className="text-white">
                  {isMovie 
                    ? 'Una emocionante historia llena de acción y suspenso que te mantendrá al borde de tu asiento. Con actuaciones magistrales y efectos visuales impresionantes, esta película es imperdible.'
                    : 'Sus fans las conocen como estrellas del pop, pero las integrantes de HUNTR/X son más que eso: son poderosas guerreras que usan su música para salvar al mundo.'}
                </p>

                {!isMovie && (
                  <div className="space-y-2">
                    <h3 className="text-white">Temporada 1</h3>
                    <div className="space-y-2">
                      <div className="bg-[#2a2a2a] p-4 rounded hover:bg-[#333] transition-colors cursor-pointer">
                        <div className="flex gap-4">
                          <div className="w-32 h-20 bg-gray-700 rounded flex items-center justify-center">
                            <span className="text-4xl text-white">1</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white mb-1">Episodio 1</h4>
                            <p className="text-sm text-gray-400">El inicio de la aventura</p>
                          </div>
                          <span className="text-gray-400">45 min</span>
                        </div>
                      </div>
                      <div className="bg-[#2a2a2a] p-4 rounded hover:bg-[#333] transition-colors cursor-pointer">
                        <div className="flex gap-4">
                          <div className="w-32 h-20 bg-gray-700 rounded flex items-center justify-center">
                            <span className="text-4xl text-white">2</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white mb-1">Episodio 2</h4>
                            <p className="text-sm text-gray-400">El conflicto se intensifica</p>
                          </div>
                          <span className="text-gray-400">48 min</span>
                        </div>
                      </div>
                      <div className="bg-[#2a2a2a] p-4 rounded hover:bg-[#333] transition-colors cursor-pointer">
                        <div className="flex gap-4">
                          <div className="w-32 h-20 bg-gray-700 rounded flex items-center justify-center">
                            <span className="text-4xl text-white">3</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white mb-1">Episodio 3</h4>
                            <p className="text-sm text-gray-400">Revelaciones inesperadas</p>
                          </div>
                          <span className="text-gray-400">43 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-64 space-y-4">
                <div>
                  <span className="text-gray-400">Elenco: </span>
                  <span className="text-white">María García, Juan Pérez, Ana López</span>
                </div>
                <div>
                  <span className="text-gray-400">Géneros: </span>
                  <span className="text-white">Acción, Aventura, Drama</span>
                </div>
                <div>
                  <span className="text-gray-400">Este título es: </span>
                  <span className="text-white">Emocionante, Imaginativo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
