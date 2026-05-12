export default function CashFlow() {
  const movimentacoes = [
    {
      tipo: "Venda",
      descricao: "Venda Balcão",
      valor: "+ R$ 520,00",
      status: "Entrada",
      data: "12/05/2026",
    },
    {
      tipo: "Sangria",
      descricao: "Troco",
      valor: "- R$ 200,00",
      status: "Saída",
      data: "12/05/2026",
    },
    {
      tipo: "Fornecedor",
      descricao: "Compra de peças",
      valor: "- R$ 480,00",
      status: "Saída",
      data: "11/05/2026",
    },
    {
      tipo: "PIX",
      descricao: "Pagamento cliente",
      valor: "+ R$ 850,00",
      status: "Entrada",
      data: "11/05/2026",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Financeiro
          </p>

          <h1 className="text-5xl font-black">
            Fluxo de Caixa
          </h1>

        </div>

        <div className="flex gap-4 flex-wrap">

          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition">
            + Nova Entrada
          </button>

          <button className="border border-yellow-500/20 hover:border-yellow-400 px-6 py-4 rounded-2xl transition">
            Exportar
          </button>

        </div>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Caixa Atual
          </p>

          <h2 className="text-4xl font-black text-yellow-300">
            R$ 3.820
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Entradas
          </p>

          <h2 className="text-4xl font-black text-green-300">
            + R$ 5.130
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Saídas
          </p>

          <h2 className="text-4xl font-black text-red-300">
            - R$ 1.240
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Lucro Diário
          </p>

          <h2 className="text-4xl font-black text-blue-300">
            R$ 3.890
          </h2>

        </div>

      </div>

      {/* FILTERS */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-6 mb-10">

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">

          <input
            type="date"
            className="bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition"
          />

          <select className="bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition">

            <option>Todos</option>
            <option>Entradas</option>
            <option>Saídas</option>

          </select>

          <input
            type="text"
            placeholder="Pesquisar movimentação..."
            className="bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition"
          />

          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-2xl transition">
            Buscar
          </button>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Histórico Financeiro
          </p>

          <h2 className="text-3xl font-black">
            Movimentações do Caixa
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-black text-zinc-400">

              <tr>

                <th className="text-left px-8 py-5">
                  Tipo
                </th>

                <th className="text-left px-8 py-5">
                  Descrição
                </th>

                <th className="text-left px-8 py-5">
                  Valor
                </th>

                <th className="text-left px-8 py-5">
                  Status
                </th>

                <th className="text-left px-8 py-5">
                  Data
                </th>

              </tr>

            </thead>

            <tbody>

              {movimentacoes.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-white/5 hover:bg-black/40 transition"
                >

                  <td className="px-8 py-6 font-medium">
                    {item.tipo}
                  </td>

                  <td className="px-8 py-6 text-zinc-400">
                    {item.descricao}
                  </td>

                  <td
                    className={`px-8 py-6 font-bold ${
                      item.status === "Entrada"
                        ? "text-green-300"
                        : "text-red-300"
                    }`}
                  >
                    {item.valor}
                  </td>

                  <td className="px-8 py-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm border ${
                        item.status === "Entrada"
                          ? "bg-green-500/10 text-green-300 border-green-500/20"
                          : "bg-red-500/10 text-red-300 border-red-500/20"
                      }`}
                    >
                      {item.status}
                    </span>

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

    </div>
  );
}