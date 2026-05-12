export default function Dashboard() {
  const categories = [
  "Dashboard",
  "Produtos",
  "Categorias",
  "Estoque",
  "Movimentações",
  "Financeiro",
  "Fluxo de Caixa",
  "Retiradas",
  "Pedidos",
  "Clientes",
  "Relatórios",
  "Chatbot",
  "Configurações",
];

  const stats = [
    {
      title: "Produtos",
      value: "9.863",
      color: "text-yellow-300",
    },
    {
      title: "Vendas Hoje",
      value: "R$ 4.280",
      color: "text-green-300",
    },
    {
      title: "Baixo Estoque",
      value: "124",
      color: "text-red-300",
    },
    {
      title: "Clientes",
      value: "1.540",
      color: "text-blue-300",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-80 bg-[#18181b] border-r border-yellow-500/10 p-6 hidden lg:flex flex-col">

        {/* LOGO */}
        <div className="mb-10">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Sistema ERP
          </p>

          <h1 className="text-5xl font-black">
            SCAP<span className="text-yellow-400">BOC</span>
          </h1>

        </div>

        {/* MENU */}
        <div className="space-y-3 flex-1">

          {categories.map((item, index) => (
            <button
              key={index}
              className="w-full text-left bg-black hover:bg-yellow-400 hover:text-black border border-yellow-500/10 px-5 py-4 rounded-2xl transition font-semibold"
            >
              {item}
            </button>
          ))}

        </div>

        {/* FOOTER */}
        <div className="mt-10 pt-6 border-t border-white/10">

          <p className="text-zinc-500 text-sm">
            © 2026 SCAPBOC ERP
          </p>

        </div>

      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
              Dashboard
            </p>

            <h2 className="text-5xl font-black">
              Painel Administrativo
            </h2>

          </div>

          <div className="flex gap-4 flex-wrap">

            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10">
              + Novo Produto
            </button>

            <button className="border border-yellow-500/20 hover:border-yellow-400 px-6 py-4 rounded-2xl transition">
              Exportar Dados
            </button>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          {stats.map((card, index) => (
            <div
              key={index}
              className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7 hover:border-yellow-400/30 transition"
            >

              <div className="flex items-center justify-between mb-6">

                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10"></div>

                <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>

              </div>

              <p className="text-zinc-400 mb-3">
                {card.title}
              </p>

              <h3 className={`text-4xl font-black ${card.color}`}>
                {card.value}
              </h3>

            </div>
          ))}

        </div>

        {/* QUICK ACTIONS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">

          <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] p-8">

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
              Ações
            </p>

            <h2 className="text-3xl font-black mb-8">
              Acesso Rápido
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <button className="bg-black hover:bg-yellow-400 hover:text-black border border-yellow-500/10 rounded-2xl p-5 text-left transition">
                Produtos
              </button>

              <button className="bg-black hover:bg-yellow-400 hover:text-black border border-yellow-500/10 rounded-2xl p-5 text-left transition">
                Estoque
              </button>

              <button className="bg-black hover:bg-yellow-400 hover:text-black border border-yellow-500/10 rounded-2xl p-5 text-left transition">
                Relatórios
              </button>

              <button className="bg-black hover:bg-yellow-400 hover:text-black border border-yellow-500/10 rounded-2xl p-5 text-left transition">
                Financeiro
              </button>

            </div>

          </div>

          {/* CATEGORIES */}
          <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] p-8">

            <div className="flex items-center justify-between mb-8">

              <div>
                <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
                  Categorias
                </p>

                <h2 className="text-3xl font-black">
                  Gerenciar Categorias
                </h2>
              </div>

              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-5 py-3 rounded-2xl transition">
                + Adicionar
              </button>

            </div>

            <div className="space-y-4">

              {[
                "Motor",
                "Freios",
                "Suspensão",
                "Escape",
                "Transmissão",
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 flex items-center justify-between"
                >

                  <span className="font-semibold">
                    {category}
                  </span>

                  <div className="flex gap-3">

                    <button className="text-yellow-300 hover:text-yellow-200 text-sm transition">
                      Editar
                    </button>

                    <button className="text-red-300 hover:text-red-200 text-sm transition">
                      Excluir
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* RECENT MOVEMENTS */}
        <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] overflow-hidden">

          <div className="p-8 border-b border-white/10">

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
              Movimentações
            </p>

            <h2 className="text-3xl font-black">
              Últimas Atividades
            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-black text-zinc-400">
                <tr>
                  <th className="text-left px-8 py-5">Produto</th>
                  <th className="text-left px-8 py-5">Tipo</th>
                  <th className="text-left px-8 py-5">Valor</th>
                  <th className="text-left px-8 py-5">Data</th>
                </tr>
              </thead>

              <tbody>

                {[
                  {
                    produto: "Coxim Motor Focus",
                    tipo: "Venda",
                    valor: "R$ 255,00",
                    data: "12/05/2026",
                  },
                  {
                    produto: "Silencioso Ecosport",
                    tipo: "Venda",
                    valor: "R$ 156,06",
                    data: "12/05/2026",
                  },
                ].map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-white/5 hover:bg-black/40 transition"
                  >

                    <td className="px-8 py-6 font-medium">
                      {item.produto}
                    </td>

                    <td className="px-8 py-6">
                      <span className="px-4 py-2 rounded-full text-sm bg-yellow-500/10 border border-yellow-500/20 text-yellow-300">
                        {item.tipo}
                      </span>
                    </td>

                    <td className="px-8 py-6 text-yellow-300 font-bold">
                      {item.valor}
                    </td>

                    <td className="px-8 py-6 text-zinc-400">
                      {item.data}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </main>

    </div>
  );
}
