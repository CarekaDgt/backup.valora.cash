import { Mail, Lock } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1c2331] via-[#232738] to-[#191e29]">
      <div className="bg-black/90 rounded-3xl shadow-2xl p-10 w-full max-w-md backdrop-blur-xl border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Fazer Login</h2>
        <form className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full py-3 pl-12 pr-4 bg-white/10 text-white rounded-xl border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary outline-none transition-all"
              autoComplete="email"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="password"
              placeholder="Senha"
              className="w-full py-3 pl-12 pr-4 bg-white/10 text-white rounded-xl border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary outline-none transition-all"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-pink-500 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-100"
          >
            Entrar
          </button>
          {/* Mensagem de erro/sucesso pode entrar aqui */}
        </form>
        <div className="flex justify-between items-center mt-6 text-sm text-gray-300">
          <a href="/register" className="hover:text-white transition underline underline-offset-4">Criar Conta</a>
          <a href="#" className="hover:text-white transition underline underline-offset-4">Esqueci a senha</a>
        </div>
      </div>
    </div>
  );
}
