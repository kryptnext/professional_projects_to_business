export default function Suppliers() {
  const suppliers = [
    {
      empresa: "Cofap",
      contato: "(31) 99999-0001",
      categoria: "Suspensão",
      status: "Ativo",
    },
    {
      empresa: "Bosch",
      contato: "(31) 99999-0002",
      categoria: "Elétrica",
      status: "Ativo",
    },
    {
      empresa: "Valeo",
      contato: "(31) 99999-0003",
      categoria: "Transmissão",
      status: "Pendente",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Fornecedores
          </p>

          <h1 className="text-5xl font-black">
            Gestão de Fornecedores
          </h1>

        </div>

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10">
          + Novo Fornecedor
        </button>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Fornecedores Ativos
          </p>

          <h2 className="text-4xl font-black text-yellow-300">
            28
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Compras no Mês
          </p>

          <h2 className="text-4xl font-black text-green-300">
            R$ 24.800
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Pendências
          </p>

          <h2 className="text-4xl font-black text-red-300">
            3
          </h2>

        </div>

      </div>

      {/* FORM */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] p-8 mb-10">

        <h2 className="text-3xl font-black mb-8">
          Cadastro de Fornecedor
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <div>

            <label className="block text-zinc-400 mb-3">
              Nome da Empresa
            </label>

            <input
              type="text"
              placeholder="Digite o nome da empresa"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Contato
            </label>

            <input
              type="text"
              placeholder="Telefone ou WhatsApp"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Categoria
            </label>

            <input
              type="text"
              placeholder="Ex: Suspensão"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              E-mail
            </label>

            <input
              type="email"
              placeholder="empresa@email.com"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

        </div>

        <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition">
          Salvar Fornecedor
        </button>

      </div>

      {/* TABLE */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Empresas
          </p>

          <h2 className="text-3xl font-black">
            Lista de Fornecedores
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-black text-zinc-400">

              <tr>

                <th className="text-left px-8 py-5">
                  Empresa
                </th>

                <th className="text-left px-8 py-5">
                  Contato
                </th>

                <th className="text-left px-8 py-5">
                  Categoria
                </th>

                <th className="text-left px-8 py-5">
                  Status
                </th>

                <th className="text-left px-8 py-5">
                  Ações
                </th>

              </tr>

            </thead>

            <tbody>

              {suppliers.map((supplier, index) => (
                <tr
                  key={index}
                  className="border-t border-white/5 hover:bg-black/40 transition"
                >

                  <td className="px-8 py-6 font-medium">
                    {supplier.empresa}
                  </td>

                  <td className="px-8 py-6 text-zinc-400">
                    {supplier.contato}
                  </td>

                  <td className="px-8 py-6">
                    {supplier.categoria}
                  </td>

                  <td className="px-8 py-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm border ${
                        supplier.status === "Ativo"
                          ? "bg-green-500/10 text-green-300 border-green-500/20"
                          : "bg-red-500/10 text-red-300 border-red-500/20"
                      }`}
                    >
                      {supplier.status}
                    </span>

                  </td>

                  <td className="px-8 py-6">

                    <div className="flex gap-3">

                      <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-xl font-bold transition text-sm">
                        Editar
                      </button>

                      <button className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-300 px-4 py-2 rounded-xl transition text-sm">
                        Excluir
                      </button>

                    </div>

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