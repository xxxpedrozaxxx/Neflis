import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

interface SignUpProps {
  onSignUp: () => void;
  onSwitchToLogin: () => void;
}

export function SignUp({ onSignUp, onSwitchToLogin }: SignUpProps) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignUp();
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <div className="border-b px-4 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-[#E50914] tracking-wide">NEFLIS</h1>
          <Button
            onClick={onSwitchToLogin}
            variant="outline"
            className="border-gray-300 text-black hover:bg-gray-50"
          >
            Iniciar sesión
          </Button>
        </div>
      </div>

      {step === 1 && (
        <div className="max-w-md mx-auto px-4 py-12 md:py-24 text-center">
          <div className="space-y-4 mb-8">
            <p className="text-black">PASO 1 DE 3</p>
            <h1 className="text-black">Bienvenido a Neflis</h1>
            <p className="text-black text-lg">
              Crea una contraseña para empezar tu membresía.
            </p>
            <p className="text-black">
              Solo unos pasos más y listo. ¡Casi terminamos!
            </p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 text-lg"
              required
            />
            <Button
              type="submit"
              className="w-full bg-[#E50914] hover:bg-[#f6121d] text-white h-14 text-lg"
            >
              Siguiente
            </Button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-md mx-auto px-4 py-12 md:py-24 text-center">
          <div className="space-y-4 mb-8">
            <p className="text-black">PASO 2 DE 3</p>
            <h1 className="text-black">Crea una contraseña</h1>
            <p className="text-black text-lg">
              Crea una contraseña para acceder a Neflis en cualquier momento.
            </p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <Input
              type="email"
              value={email}
              disabled
              className="h-14 text-lg bg-gray-100"
            />
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 text-lg"
              required
              minLength={6}
            />
            <Button
              type="submit"
              className="w-full bg-[#E50914] hover:bg-[#f6121d] text-white h-14 text-lg"
            >
              Siguiente
            </Button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="max-w-md mx-auto px-4 py-12 md:py-24">
          <div className="space-y-4 mb-8">
            <p className="text-black">PASO 3 DE 3</p>
            <h1 className="text-black">¿Cómo te llamamos?</h1>
            <p className="text-black text-lg">
              Agrega tu nombre para personalizar tu experiencia.
            </p>
          </div>

          <form onSubmit={handleFinalSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-14 text-lg"
              required
            />
            
            <div className="bg-gray-100 p-4 rounded space-y-2 text-left">
              <div className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-700">
                  Acceso ilimitado a películas, series y mucho más
                </p>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-700">
                  Disfruta de Neflis en tu celular, tablet, laptop y TV
                </p>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-700">
                  Cancela cuando quieras
                </p>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#E50914] hover:bg-[#f6121d] text-white h-14 text-lg"
            >
              Empezar a ver
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
