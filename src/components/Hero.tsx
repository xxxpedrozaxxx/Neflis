import { Play, Info } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={imageUrl}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414] to-transparent" />
      </div>
      <div className="relative h-full flex items-center px-4 md:px-12">
        <div className="max-w-xl space-y-4">
          <h2 className="text-white">Serie Original de Neflis</h2>
          <h1 className="text-white">Ciudad Nocturna</h1>
          <p className="text-white">
            Una historia épica sobre secretos, traición y redención en las calles más oscuras de la ciudad. 
            Cuando el pasado regresa, nada volverá a ser lo mismo.
          </p>
          <div className="flex gap-3">
            <Button className="bg-white text-black hover:bg-white/90 gap-2 px-8">
              <Play className="w-5 h-5 fill-current" />
              Reproducir
            </Button>
            <Button className="bg-gray-500/70 text-white hover:bg-gray-500/50 gap-2 px-8">
              <Info className="w-5 h-5" />
              Más información
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
