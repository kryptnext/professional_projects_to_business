export default function Stock() {
  const stock = [
    {
      codigo: "005659",
      produto: "Coxim Motor Focus",
      quantidade: 1,
      status: "Baixo",
      local: "A1",
    },
    {
      codigo: "062063",
      produto: "Coxim Câmbio Palio",
      quantidade: 8,
      status: "Normal",
      local: "B3",
    },
    {
      codigo: "090139",
      produto: "Sapata de Freio Siena",
      quantidade: 14,
      status: "Normal",
      local: "C2",
    },
    {
      codigo: "10150",
      produto: "Silencioso Ecosport",
      quantidade: 2,
      status: "Baixo",
      local: "D1",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Estoque
          </p>

          <h1 className="text-5xl font-black">
            Controle de Estoque
          </h1>

        </div>

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10">
          + Nova Entrada
        </button>

      </div>

      {/* SEARCH */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-4 flex gap-4 mb-10">

        <input
          type="text"
          placeholder="Pesquisar produto no estoque..."
          className="bg-transparent outline-none flex-1 text-white placeholder:text-zinc-500"
        />

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-2xl transition">
          Buscar
        </button>

      </div>

      {/* STOCK TABLE */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] overflow-hidden">

        <div className="p-8 border-b border-white/10 flex items-center justify-between">

          <div>

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
              Produtos
            </p>

            <h2 className="text-3xl font-black">
              Estoque Atual
            </h2>

          </div>

          <button className="border border-yellow-500/20 hover:border-yellow-400 px-6 py-3 rounded-2xl transition">
            Exportar
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-black text-zinc-400">

              <tr>

                <th className="text-left px-8 py-5">
                  Código
                </th>

                <th className="text-left px-8 py-5">
                  Produto
                </th>

                <th className="text-left px-8 py-5">
                  Quantidade
                </th>

                <th className="text-left px-8 py-5">
                  Local
                </th>

                <th className="text-left px-8 py-5">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {stock.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-white/5 hover:bg-black/40 transition"
                >

                  <td className="px-8 py-6 text-zinc-400">
                    {item.codigo}
                  </td>

                  <td className="px-8 py-6 font-medium">
                    {item.produto}
                  </td>

                  <td className="px-8 py-6 text-yellow-300 font-bold">
                    {item.quantidade}
                  </td>

                  <td className="px-8 py-6">
                    {item.local}
                  </td>

                  <td className="px-8 py-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm border ${
                        item.status === "Baixo"
                          ? "bg-red-500/10 text-red-300 border-red-500/20"
                          : "bg-green-500/10 text-green-300 border-green-500/20"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* ALERTS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

        <div className="bg-[#18181b] border border-red-500/10 rounded-3xl p-8">

          <p className="text-red-300 uppercase tracking-[0.3em] text-sm mb-3">
            Atenção
          </p>

          <h2 className="text-3xl font-black mb-4">
            Produtos com Baixo Estoque
          </h2>

          <div className="space-y-4">

            <div className="bg-black border border-red-500/10 rounded-2xl p-4">
              Coxim Motor Focus — 1 unidade
            </div>

            <div className="bg-black border border-red-500/10 rounded-2xl p-4">
              Silencioso Ecosport — 2 unidades
            </div>

          </div>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-8">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Informações
          </p>

          <h2 className="text-3xl font-black mb-4">
            Status do Estoque
          </h2>

          <div className="space-y-5">

            <div className="flex items-center justify-between">

              <span className="text-zinc-400">
                Produtos Cadastrados
              </span>

              <span className="text-yellow-300 font-bold">
                9.863
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-zinc-400">
                Produtos em Baixa
              </span>

              <span className="text-red-300 font-bold">
                124
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-zinc-400">
                Atualizações Hoje
              </span>

              <span className="text-green-300 font-bold">
                58
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}