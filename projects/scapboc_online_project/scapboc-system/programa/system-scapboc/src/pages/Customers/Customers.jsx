export default function Customers() {
  const customers = [
    {
      nome: "João Silva",
      telefone: "(31) 99999-1111",
      cidade: "Montes Claros",
      status: "Ativo",
    },
    {
      nome: "Carlos Mendes",
      telefone: "(31) 99999-2222",
      cidade: "Brasília de Minas",
      status: "Ativo",
    },
    {
      nome: "Marcos Oliveira",
      telefone: "(31) 99999-3333",
      cidade: "São João da Ponte",
      status: "Pendente",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Clientes
          </p>

          <h1 className="text-5xl font-black">
            Gestão de Clientes
          </h1>

        </div>

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10">
          + Novo Cliente
        </button>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Clientes Ativos
          </p>

          <h2 className="text-4xl font-black text-yellow-300">
            1.240
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Compras no Mês
          </p>

          <h2 className="text-4xl font-black text-green-300">
            R$ 42.800
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Pendências
          </p>

          <h2 className="text-4xl font-black text-red-300">
            18
          </h2>

        </div>

      </div>

      {/* FORM */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] p-8 mb-10">

        <h2 className="text-3xl font-black mb-8">
          Cadastro de Cliente
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <div>

            <label className="block text-zinc-400 mb-3">
              Nome Completo
            </label>

            <input
              type="text"
              placeholder="Digite o nome"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Telefone
            </label>

            <input
              type="text"
              placeholder="(00) 00000-0000"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Cidade
            </label>

            <input
              type="text"
              placeholder="Cidade do cliente"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              E-mail
            </label>

            <input
              type="email"
              placeholder="cliente@email.com"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

        </div>

        <div className="mt-6">

          <label className="block text-zinc-400 mb-3">
            Observações
          </label>

          <textarea
            rows="4"
            placeholder="Informações adicionais..."
            className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition resize-none"
          ></textarea>

        </div>

        <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition">
          Salvar Cliente
        </button>

      </div>

      {/* TABLE */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Clientes
          </p>

          <h2 className="text-3xl font-black">
            Lista de Clientes
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-black text-zinc-400">

              <tr>

                <th className="text-left px-8 py-5">
                  Nome
                </th>

                <th className="text-left px-8 py-5">
                  Telefone
                </th>

                <th className="text-left px-8 py-5">
                  Cidade
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

              {customers.map((customer, index) => (
                <tr
                  key={index}
                  className="border-t border-white/5 hover:bg-black/40 transition"
                >

                  <td className="px-8 py-6 font-medium">
                    {customer.nome}
                  </td>

                  <td className="px-8 py-6 text-zinc-400">
                    {customer.telefone}
                  </td>

                  <td className="px-8 py-6">
                    {customer.cidade}
                  </td>

                  <td className="px-8 py-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm border ${
                        customer.status === "Ativo"
                          ? "bg-green-500/10 text-green-300 border-green-500/20"
                          : "bg-red-500/10 text-red-300 border-red-500/20"
                      }`}
                    >
                      {customer.status}
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