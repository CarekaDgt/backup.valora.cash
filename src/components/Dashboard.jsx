import React from "react";
// Exemplo de icons do Heroicons, use qualquer biblioteca de ícones
import { ChartBarIcon, UserGroupIcon, ShoppingBagIcon, CreditCardIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

const user = { name: "Gabriel" }; // Depois troque por dados reais

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#191d24] via-[#22242a] to-[#10131b] text-white font-sans">
      {/* Header fixo */}
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-white/10 fixed top-0 bg-[#181a20]/90 z-50 backdrop-blur">
        <div className="flex items-center gap-3">
          <img src="/favicon.ico" alt="ValoraPay" className="w-8 h-8 rounded" />
          <span className="text-2xl font-bold tracking-tight">ValoraPay</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-lg font-medium opacity-80">Olá, <b>{user.name}</b></span>
          <button className="p-2 rounded-full hover:bg-red-600 transition-colors" title="Sair">
            <ArrowRightOnRectangleIcon className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Espaço para o header fixo */}
      <div className="h-20" />

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-6">
        {/* Grid de cards de métricas */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card icon={<CreditCardIcon className="w-7 h-7 text-green-400" />} title="Total de Vendas" value="R$ 7.200,00" />
          <Card icon={<ShoppingBagIcon className="w-7 h-7 text-blue-400" />} title="Pedidos" value="21" />
          <Card icon={<UserGroupIcon className="w-7 h-7 text-purple-400" />} title="Clientes" value="8" />
          <Card icon={<ChartBarIcon className="w-7 h-7 text-pink-400" />} title="Produtos" value="15" />
        </section>

        {/* Gráfico/resumo (placeholder, depois conecta o real) */}
        <section className="bg-white/5 rounded-xl p-8 shadow-lg mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
            <ChartBarIcon className="w-6 h-6 text-blue-400" /> Relatório Diário
          </h2>
          <div className="text-gray-200 text-base">
            Em breve você verá gráficos e análises automáticas aqui! <br />
            <span className="text-xs opacity-60">(Conecte com seu backend ou Google Charts/ChartJS para mais dados)</span>
          </div>
        </section>

        {/* Lista de pedidos recentes (MVP, estático, substitua depois) */}
        <section className="bg-white/5 rounded-xl p-8 shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Pedidos Recentes</h2>
          <ul className="divide-y divide-gray-700/30">
            <li className="py-3 flex items-center justify-between">
              <span>#0012 – João Silva</span>
              <span className="font-semibold text-green-400">R$ 400,00</span>
              <span className="text-xs text-gray-400">Hoje, 08:20</span>
            </li>
            <li className="py-3 flex items-center justify-between">
              <span>#0011 – Maria Oliveira</span>
              <span className="font-semibold text-green-400">R$ 299,90</span>
              <span className="text-xs text-gray-400">Ontem, 17:55</span>
            </li>
            <li className="py-3 flex items-center justify-between">
              <span>#0010 – Pedro Matos</span>
              <span className="font-semibold text-green-400">R$ 150,00</span>
              <span className="text-xs text-gray-400">Ontem, 14:12</span>
            </li>
          </ul>
          <div className="mt-4 text-right">
            <button className="text-blue-400 hover:underline">Ver todos os pedidos</button>
          </div>
        </section>
      </main>
    </div>
  );
}

// Componente de Card reutilizável
function Card({ icon, title, value }) {
  return (
    <div className="flex flex-col items-start bg-white/10 rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <div className="mb-2">{icon}</div>
      <div className="text-lg font-medium opacity-90">{title}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
}
