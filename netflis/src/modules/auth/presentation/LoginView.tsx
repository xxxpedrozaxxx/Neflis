import { useState } from 'react';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { Checkbox } from '../../../components/ui/checkbox';
import { useAuth } from '../application/useAuth';

interface LoginProps {
  onLoginSuccess: () => void;
  onSwitchToSignUp: () => void;
}

export function LoginView({ onLoginSuccess, onSwitchToSignUp }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      onLoginSuccess();
    } catch (err) {
      // Error manejado por el hook
    }
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
      </div>

      {/* Header */}
      <div className="relative z-10 px-4 md:px-12 py-6">
        <h1 className="text-[#E50914] text-4xl font-bold tracking-wide">NEFLIS</h1>
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-black/75 rounded p-8 md:p-16">
          <h2 className="text-white text-3xl mb-8 font-semibold">Inicia sesión</h2>
          
          {error && (
            <div className="bg-red-600 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email o número de teléfono"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#333] border-0 text-white placeholder:text-gray-400 h-12 rounded"
                required
                disabled={loading}
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
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#E50914] hover:bg-[#f6121d] text-white h-12 rounded font-semibold"
              disabled={loading}
            >
              {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
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
                className="text-white hover:underline font-semibold"
                disabled={loading}
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
