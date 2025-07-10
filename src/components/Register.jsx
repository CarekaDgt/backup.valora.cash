import React, { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para tratar o cadastro (ainda pode ser integrada à API)
  const handleRegister = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com a API
    alert('Cadastro realizado! (Exemplo)');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="bg-black/90 rounded-xl shadow-xl px-10 py-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Criar Conta</h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="email">E-mail</label>
            <input
              className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition"
              id="email"
              type="email"
              required
              placeholder="Digite seu e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="password">Senha</label>
            <input
              className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition"
              id="password"
              type="password"
              required
              placeholder="Crie uma senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300"
          >
            Cadastrar
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="/login" className="text-primary hover:underline text-sm text-gray-300">Já tem conta? Faça login</a>
        </div>
      </div>
    </div>
  );
}
