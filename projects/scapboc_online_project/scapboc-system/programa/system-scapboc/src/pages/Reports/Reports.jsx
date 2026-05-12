export default function Reports() {
  const reports = [
    {
      title: "Vendas do Dia",
      value: "R$ 4.280",
      desc: "Movimentação registrada hoje.",
    },
    {
      title: "Lucro Mensal",
      value: "R$ 18.540",
      desc: "Estimativa de lucro atual.",
    },
    {
      title: "Produtos Vendidos",
      value: "1.284",
      desc: "Itens vendidos este mês.",
    },
    {
      title: "Baixo Estoque",
      value: "124",
      desc: "Produtos precisando reposição.",
    },
  ];

  const movements = [
    {
      produto: "Coxim Motor Focus",
      tipo: "Saída",
      valor: "R$ 255,00",
      data: "12/05/2026",
    },
    {
      produto: "Silencioso Ecosport",
      tipo: "Entrada",
      valor: "R$ 156,06",
      data: "12/05/2026",
    },
    {
      produto: "Sapata de Freio Siena",
      tipo: "Saída",
      valor: "R$ 103,39",
      data: "11/05/2026",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Relatórios
          </p>

          <h1 className="text-5xl font-black">
            Painel Financeiro
          </h1>

        </div>

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10">
          Exportar Relatório
        </button>

      </div>

      {/* REPORT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7 hover:border-yellow-400/30 transition"
          >

            <div className="flex items-center justify-between mb-6">

              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10"></div>

              <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>

            </div>

            <p className="text-zinc-400 mb-3">
              {report.title}
            </p>

            <h2 className="text-4xl font-black mb-3">
              {report.value}
            </h2>

            <p className="text-zinc-500 text-sm">
              {report.desc}
            </p>

          </div>
        ))}

      </div>

      {/* CHART AREA */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] p-8 mb-10">

        <div className="mb-8">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Estatísticas
          </p>

          <h2 className="text-3xl font-black">
            Desempenho de Vendas
          </h2>

        </div>

        {/* SIMPLE BARS */}
        <div className="space-y-6">

          {[
            { month: "Janeiro", value: "65%" },
            { month: "Fevereiro", value: "80%" },
            { month: "Março", value: "45%" },
            { month: "Abril", value: "92%" },
          ].map((item, index) => (
            <div key={index}>

              <div className="flex justify-between mb-3 text-sm">

                <span className="text-zinc-400">
                  {item.month}
                </span>

                <span className="text-yellow-300">
                  {item.value}
                </span>

              </div>

              <div className="w-full h-4 bg-black rounded-full overflow-hidden">

                <div
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ width: item.value }}
                ></div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Histórico
          </p>

          <h2 className="text-3xl font-black">
            Últimas Movimentações
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

              {movements.map((movement, index) => (
                <tr
                  key={index}
                  className="border-t border-white/5 hover:bg-black/40 transition"
                >

                  <td className="px-8 py-6 font-medium">
                    {movement.produto}
                  </td>

                  <td className="px-8 py-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm border ${
                        movement.tipo === "Saída"
                          ? "bg-red-500/10 text-red-300 border-red-500/20"
                          : "bg-green-500/10 text-green-300 border-green-500/20"
                      }`}
                    >
                      {movement.tipo}
                    </span>

                  </td>

                  <td className="px-8 py-6 text-yellow-300 font-bold">
                    {movement.valor}
                  </td>

                  <td className="px-8 py-6 text-zinc-400">
                    {movement.data}
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