export default function Categories() {
  const categories = [
    {
      nome: "Motor",
      produtos: 320,
      descricao: "Peças relacionadas ao motor e desempenho.",
    },
    {
      nome: "Freios",
      produtos: 180,
      descricao: "Sistemas de frenagem e segurança.",
    },
    {
      nome: "Suspensão",
      produtos: 240,
      descricao: "Amortecedores, molas e componentes.",
    },
    {
      nome: "Escape",
      produtos: 95,
      descricao: "Silenciosos, escapamentos e acessórios.",
    },
    {
      nome: "Transmissão",
      produtos: 140,
      descricao: "Câmbio, embreagem e componentes.",
    },
    {
      nome: "Elétrica",
      produtos: 210,
      descricao: "Baterias, sensores e sistema elétrico.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Categorias
          </p>

          <h1 className="text-5xl font-black">
            Organização do Estoque
          </h1>
        </div>

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10">
          + Nova Categoria
        </button>

      </div>

      {/* SEARCH */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-4 flex gap-4 mb-10">

        <input
          type="text"
          placeholder="Pesquisar categoria..."
          className="bg-transparent outline-none flex-1 text-white placeholder:text-zinc-500"
        />

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-2xl transition">
          Buscar
        </button>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7 hover:border-yellow-400/30 transition"
          >

            <div className="flex items-center justify-between mb-6">

              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center">

                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>

              </div>

              <span className="text-zinc-500 text-sm">
                {category.produtos} produtos
              </span>

            </div>

            <h2 className="text-3xl font-black mb-4">
              {category.nome}
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-8">
              {category.descricao}
            </p>

            <div className="flex gap-4">

              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-5 py-3 rounded-2xl transition text-sm">
                Visualizar
              </button>

              <button className="border border-yellow-500/20 hover:border-yellow-400 px-5 py-3 rounded-2xl transition text-sm">
                Editar
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}