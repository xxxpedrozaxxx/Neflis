import { ArrowLeft, Maximize2, MessageSquare, RotateCw, Pause, Play, Volume2 } from 'lucide-react';
import { useState } from 'react';

interface VideoPlayerProps {
  content: {
    id: number;
    title: string;
    imageUrl: string;
    type?: string;
  };
  onClose: () => void;
}

export function VideoPlayer({ content, onClose }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className="relative w-full h-full flex flex-col">
        {/* Video Area */}
        <div 
          className="flex-1 relative bg-black cursor-pointer"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Back Button */}
          <button
            onClick={onClose}
            className="absolute top-6 left-6 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          {/* Video placeholder - In a real app, this would be a video element */}
          <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto rounded-full bg-[#E50914] flex items-center justify-center">
                {isPlaying ? (
                  <Pause className="w-16 h-16 text-white fill-current" />
                ) : (
                  <Play className="w-16 h-16 text-white fill-current ml-2" />
                )}
              </div>
              <p className="text-white text-lg">
                Reproduciendo: {content.title}
              </p>
              <p className="text-gray-400 text-sm">
                (Vista previa del reproductor)
              </p>
            </div>
          </div>

          {/* Video Controls */}
          {showControls && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
              {/* Progress Bar */}
              <div className="relative mb-4">
                <div className="w-full h-1 bg-gray-600 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E50914] rounded-full" style={{ width: '35%' }} />
                </div>
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#E50914] rounded-full"
                  style={{ left: '35%' }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8" />
                    )}
                  </button>
                  <button className="text-white hover:text-gray-300 transition-colors">
                    <RotateCw className="w-6 h-6" />
                  </button>
                  <button className="text-white hover:text-gray-300 transition-colors">
                    <RotateCw className="w-6 h-6 rotate-180" />
                  </button>
                  <button className="text-white hover:text-gray-300 transition-colors">
                    <Volume2 className="w-6 h-6" />
                  </button>
                  <div className="text-white">
                    <span className="text-sm">1:56:53</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-white text-sm">{content.title}</span>
                </div>

                <div className="flex items-center gap-4">
                  <button className="text-white hover:text-gray-300 transition-colors">
                    <MessageSquare className="w-6 h-6" />
                  </button>
                  <button className="text-white hover:text-gray-300 transition-colors">
                    <RotateCw className="w-6 h-6" />
                  </button>
                  <button className="text-white hover:text-gray-300 transition-colors">
                    <Maximize2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
