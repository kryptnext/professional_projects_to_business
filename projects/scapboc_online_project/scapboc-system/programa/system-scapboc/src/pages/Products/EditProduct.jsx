export default function EditProduct() {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Produtos
          </p>

          <h1 className="text-5xl font-black">
            Editar Produto
          </h1>

        </div>

        <button className="border border-yellow-500/20 hover:border-yellow-400 px-6 py-4 rounded-2xl transition">
          Voltar
        </button>

      </div>

      {/* FORM */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] p-8">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* PRODUCT NAME */}
          <div>

            <label className="block text-zinc-400 mb-3">
              Nome do Produto
            </label>

            <input
              type="text"
              defaultValue="Coxim Motor Focus"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          {/* CATEGORY */}
          <div>

            <label className="block text-zinc-400 mb-3">
              Categoria
            </label>

            <input
              type="text"
              defaultValue="Motor"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          {/* PURCHASE PRICE */}
        <div>

        <label className="block text-zinc-400 mb-3">
            Preço de Compra
        </label>

        <input
            type="text"
            defaultValue="R$ 120,00"
            className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
        />

        </div>

          {/* PRICE */}
          <div>

            <label className="block text-zinc-400 mb-3">
              Preço
            </label>

            <input
              type="text"
              defaultValue="R$ 255,00"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          {/* QUANTITY */}
          <div>

            <label className="block text-zinc-400 mb-3">
              Quantidade
            </label>

            <input
              type="number"
              defaultValue="1"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          {/* CODE */}
          <div>

            <label className="block text-zinc-400 mb-3">
              Código
            </label>

            <input
              type="text"
              defaultValue="005659"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          {/* LOCATION */}
          <div>

            <label className="block text-zinc-400 mb-3">
              Local no Estoque
            </label>

            <input
              type="text"
              defaultValue="A1"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

        </div>

        {/* DESCRIPTION */}
        <div className="mt-6">

          <label className="block text-zinc-400 mb-3">
            Descrição
          </label>

          <textarea
            rows="6"
            defaultValue="Produto original com alta durabilidade."
            className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition resize-none"
          ></textarea>

        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-4 mt-8">

          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10">
            Salvar Alterações
          </button>

          <button className="border border-yellow-500/20 hover:border-yellow-400 px-8 py-4 rounded-2xl transition">
            Duplicar Produto
          </button>

          <button className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-300 px-8 py-4 rounded-2xl transition">
            Excluir Produto
          </button>

        </div>

      </div>

      {/* INFO CARDS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-400 mb-3">
            Última Atualização
          </p>

          <h2 className="text-2xl font-black text-yellow-300">
            Hoje
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-400 mb-3">
            Movimentações
          </p>

          <h2 className="text-2xl font-black text-yellow-300">
            28 registros
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-400 mb-3">
            Status
          </p>

          <h2 className="text-2xl font-black text-green-300">
            Ativo
          </h2>

        </div>

      </div>

    </div>
  );
}