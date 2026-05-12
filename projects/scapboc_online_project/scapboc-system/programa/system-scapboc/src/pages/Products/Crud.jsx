export default function Crud() {
  const products = [
    {
      id: 1,
      nome: "Coxim Motor Focus",
      categoria: "Motor",
      preco: "R$ 255,00",
    },
    {
      id: 2,
      nome: "Sapata de Freio Siena",
      categoria: "Freios",
      preco: "R$ 103,39",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            CRUD
          </p>

          <h1 className="text-5xl font-black">
            Gerenciamento de Produtos
          </h1>

        </div>

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10">
          + Novo Produto
        </button>

      </div>

      {/* FORM */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-8 mb-10">

        <h2 className="text-3xl font-black mb-8">
          Cadastro de Produto
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <div>

            <label className="block text-zinc-400 mb-3">
              Nome do Produto
            </label>

            <input
              type="text"
              placeholder="Digite o nome"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Categoria
            </label>

            <input
              type="text"
              placeholder="Digite a categoria"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Preço
            </label>

            <input
              type="text"
              placeholder="R$ 0,00"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Quantidade
            </label>

            <input
              type="number"
              placeholder="0"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

        </div>

        <div className="flex gap-4 mt-8">

          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition">
            Salvar Produto
          </button>

          <button className="border border-yellow-500/20 hover:border-yellow-400 px-6 py-4 rounded-2xl transition">
            Limpar
          </button>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Produtos
          </p>

          <h2 className="text-3xl font-black">
            Lista de Produtos
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-black text-zinc-400">

              <tr>

                <th className="text-left px-8 py-5">
                  ID
                </th>

                <th className="text-left px-8 py-5">
                  Produto
                </th>

                <th className="text-left px-8 py-5">
                  Categoria
                </th>

                <th className="text-left px-8 py-5">
                  Preço
                </th>

                <th className="text-left px-8 py-5">
                  Ações
                </th>

              </tr>

            </thead>

            <tbody>

              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-white/5 hover:bg-black/40 transition"
                >

                  <td className="px-8 py-6 text-zinc-400">
                    #{product.id}
                  </td>

                  <td className="px-8 py-6 font-medium">
                    {product.nome}
                  </td>

                  <td className="px-8 py-6">
                    {product.categoria}
                  </td>

                  <td className="px-8 py-6 text-yellow-300 font-bold">
                    {product.preco}
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