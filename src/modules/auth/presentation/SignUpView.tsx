import { useState } from 'react';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { useAuth } from '../application/useAuth';

interface SignUpProps {
  onSignUpSuccess: () => void;
  onSwitchToLogin: () => void;
}

export function SignUpView({ onSignUpSuccess, onSwitchToLogin }: SignUpProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { register, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register({ email, password, name });
      alert('Registro exitoso. Por favor inicia sesión.');
      onSwitchToLogin();
    } catch (err) {
      // Error manejado por el hook
    }
  };

  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
      </div>

      <div className="relative z-10 px-4 md:px-12 py-6">
        <h1 className="text-[#E50914] text-4xl font-bold tracking-wide">NEFLIS</h1>
      </div>

      <div className="relative z-10 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-black/75 rounded p-8 md:p-16">
          <h2 className="text-white text-3xl mb-8 font-semibold">Crear cuenta</h2>
          
          {error && (
            <div className="bg-red-600 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#333] border-0 text-white placeholder:text-gray-400 h-12 rounded"
                required
                disabled={loading}
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email"
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
                minLength={6}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#E50914] hover:bg-[#f6121d] text-white h-12 rounded font-semibold"
              disabled={loading}
            >
              {loading ? 'Creando cuenta...' : 'Registrarse'}
            </Button>
          </form>

          <div className="mt-8 text-gray-400">
            <p>
              ¿Ya tienes cuenta?{' '}
              <button
                onClick={onSwitchToLogin}
                className="text-white hover:underline font-semibold"
                disabled={loading}
              >
                Inicia sesión
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
