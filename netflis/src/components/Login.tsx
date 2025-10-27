import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

interface LoginProps {
  onLogin: () => void;
  onSwitchToSignUp: () => void;
}

export function Login({ onLogin, onSwitchToSignUp }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
      </div>

      {/* Header */}
      <div className="relative z-10 px-4 md:px-12 py-6">
        <h1 className="text-[#E50914] tracking-wide">NEFLIS</h1>
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-black/75 rounded p-8 md:p-16">
          <h2 className="text-white mb-8">Inicia sesión</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email o número de teléfono"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#333] border-0 text-white placeholder:text-gray-400 h-12 rounded"
                required
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#333] border-0 text-white placeholder:text-gray-400 h-12 rounded"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#E50914] hover:bg-[#f6121d] text-white h-12 rounded"
            >
              Iniciar sesión
            </Button>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" className="border-gray-500" />
                <label htmlFor="remember" className="text-gray-400 cursor-pointer">
                  Recuérdame
                </label>
              </div>
              <a href="#" className="text-gray-400 hover:underline">
                ¿Necesitas ayuda?
              </a>
            </div>
          </form>

          <div className="mt-16 text-gray-400">
            <p>
              ¿Primera vez en Neflis?{' '}
              <button
                onClick={onSwitchToSignUp}
                className="text-white hover:underline"
              >
                Suscríbete ahora
              </button>
              .
            </p>
            <p className="mt-4 text-xs text-gray-500">
              Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
