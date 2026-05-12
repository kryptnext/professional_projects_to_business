export default function Expenses() {
  const despesas = [
    {
      titulo: "Energia Elétrica",
      categoria: "Contas",
      valor: "R$ 480,00",
      data: "12/05/2026",
    },
    {
      titulo: "Fornecedor Cofap",
      categoria: "Peças",
      valor: "R$ 1.280,00",
      data: "11/05/2026",
    },
    {
      titulo: "Combustível",
      categoria: "Operacional",
      valor: "R$ 120,00",
      data: "10/05/2026",
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
            Controle de Despesas
          </h1>

        </div>

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition">
          + Nova Despesa
        </button>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Despesas Hoje
          </p>

          <h2 className="text-4xl font-black text-red-300">
            R$ 1.880
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Despesas do Mês
          </p>

          <h2 className="text-4xl font-black text-yellow-300">
            R$ 18.420
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Total Registros
          </p>

          <h2 className="text-4xl font-black text-green-300">
            284
          </h2>

        </div>

      </div>

      {/* FORM */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] p-8 mb-10">

        <h2 className="text-3xl font-black mb-8">
          Registrar Despesa
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <div>

            <label className="block text-zinc-400 mb-3">
              Título
            </label>

            <input
              type="text"
              placeholder="Nome da despesa"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Valor
            </label>

            <input
              type="text"
              placeholder="R$ 0,00"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Categoria
            </label>

            <select
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            >
              <option>Fornecedor</option>
              <option>Operacional</option>
              <option>Combustível</option>
              <option>Energia</option>
              <option>Outros</option>
            </select>

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Data
            </label>

            <input
              type="date"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

        </div>

        <div className="mt-6">

          <label className="block text-zinc-400 mb-3">
            Observação
          </label>

          <textarea
            rows="4"
            placeholder="Detalhes da despesa..."
            className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition resize-none"
          ></textarea>

        </div>

        <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition">
          Salvar Despesa
        </button>

      </div>

      {/* TABLE */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Histórico
          </p>

          <h2 className="text-3xl font-black">
            Últimas Despesas
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-black text-zinc-400">

              <tr>

                <th className="text-left px-8 py-5">
                  Título
                </th>

                <th className="text-left px-8 py-5">
                  Categoria
                </th>

                <th className="text-left px-8 py-5">
                  Valor
                </th>

                <th className="text-left px-8 py-5">
                  Data
                </th>

              </tr>

            </thead>

            <tbody>

              {despesas.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-white/5 hover:bg-black/40 transition"
                >

                  <td className="px-8 py-6 font-medium">
                    {item.titulo}
                  </td>

                  <td className="px-8 py-6">
                    {item.categoria}
                  </td>

                  <td className="px-8 py-6 text-red-300 font-bold">
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

    </div>
  );
}