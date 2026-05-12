export default function Products() {
  const products = [
    {
      codigo: "005659",
      nome: "Coxim Motor Focus",
      categoria: "Motor",
      estoque: 1,
      valor: "R$ 255,00",
    },
    {
      codigo: "062063",
      nome: "Coxim Câmbio Palio",
      categoria: "Transmissão",
      estoque: 8,
      valor: "R$ 54,60",
    },
    {
      codigo: "090139",
      nome: "Sapata de Freio Siena",
      categoria: "Freios",
      estoque: 14,
      valor: "R$ 103,39",
    },
    {
      codigo: "10150",
      nome: "Silencioso Ecosport",
      categoria: "Escape",
      estoque: 2,
      valor: "R$ 156,06",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Produtos
          </p>

          <h1 className="text-5xl font-black">
            Controle de Produtos
          </h1>
        </div>

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10">
          + Novo Produto
        </button>

      </div>

      {/* SEARCH */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-4 flex gap-4 mb-10">

        <input
          type="text"
          placeholder="Pesquisar produto..."
          className="bg-transparent outline-none flex-1 text-white placeholder:text-zinc-500"
        />

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-2xl transition">
          Buscar
        </button>

      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-6 hover:border-yellow-400/30 transition"
          >

            <div className="flex items-center justify-between mb-6">

              <span className="text-zinc-500 text-sm">
                #{product.codigo}
              </span>

              <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>

            </div>

            <h2 className="text-2xl font-black mb-4 leading-snug">
              {product.nome}
            </h2>

            <div className="space-y-3 mb-6">

              <div className="flex justify-between text-zinc-400 text-sm">
                <span>Categoria</span>
                <span className="text-white">
                  {product.categoria}
                </span>
              </div>

              <div className="flex justify-between text-zinc-400 text-sm">
                <span>Estoque</span>
                <span className="text-white">
                  {product.estoque}
                </span>
              </div>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-2xl font-black text-yellow-300">
                {product.valor}
              </span>

              <button className="border border-yellow-500/20 hover:border-yellow-400 px-4 py-2 rounded-xl transition text-sm">
                Editar
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}