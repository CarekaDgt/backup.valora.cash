// src/components/Dashboard.jsx
import React from 'react';
import { BarChart3, CreditCard, Users, Activity } from 'lucide-react';

function StatCard({ icon: Icon, label, value, color = 'text-white' }) {
  return (
    <div className="flex flex-col bg-black/80 rounded-xl p-6 shadow-lg min-w-[180px]">
      <div className={`mb-2 flex items-center justify-between`}>
        <Icon className={`w-6 h-6 ${color}`} />
        <span className="text-sm font-medium text-gray-400">{label}</span>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Dashboard ValoraPay</h1>

      {/* Estatísticas rápidas */}
      <div className="flex flex-wrap gap-6 justify-center mb-10">
        <StatCard icon={CreditCard} label="Vendas" value="R$ 12.300,00" color="text-purple-400" />
        <StatCard icon={Users} label="Clientes" value="247" color="text-blue-400" />
        <StatCard icon={Activity} label="Ativo agora" value="15" color="text-green-400" />
        <StatCard icon={BarChart3} label="Mês atual" value="R$ 7.850,00" color="text-pink-400" />
      </div>

      {/* Últimos pedidos (exemplo) */}
      <div className="w-full max-w-2xl bg-black/70 rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg text-white font-semibold">Últimos pedidos</span>
          <button className="text-blue-400 hover:underline text-sm">Ver todos</button>
        </div>
        <ul>
          <li className="flex justify-between py-3 border-b border-gray-800">
            <span className="text-white">#1011 João Silva</span>
            <span className="text-green-400 font-semibold">R$ 450,00</span>
            <span className="text-xs text-gray-400">Hoje, 12:45</span>
          </li>
          <li className="flex justify-between py-3 border-b border-gray-800">
            <span className="text-white">#1010 Maria Oliveira</span>
            <span className="text-green-400 font-semibold">R$ 299,90</span>
            <span className="text-xs text-gray-400">Ontem, 17:55</span>
          </li>
          <li className="flex justify-between py-3">
            <span className="text-white">#1009 Pedro Matos</span>
            <span className="text-green-400 font-semibold">R$ 150,00</span>
            <span className="text-xs text-gray-400">Ontem, 14:12</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
