export default function Orders() {
  const orders = [
    {
      pedido: "#1024",
      cliente: "João Silva",
      valor: "R$ 580,00",
      status: "Pago",
      data: "12/05/2026",
    },
    {
      pedido: "#1025",
      cliente: "Carlos Mendes",
      valor: "R$ 320,00",
      status: "Pendente",
      data: "12/05/2026",
    },
    {
      pedido: "#1026",
      cliente: "Marcos Oliveira",
      valor: "R$ 1.250,00",
      status: "Enviado",
      data: "11/05/2026",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Pedidos
          </p>

          <h1 className="text-5xl font-black">
            Gestão de Pedidos
          </h1>

        </div>

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10">
          + Novo Pedido
        </button>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Pedidos Hoje
          </p>

          <h2 className="text-4xl font-black text-yellow-300">
            48
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Faturamento
          </p>

          <h2 className="text-4xl font-black text-green-300">
            R$ 8.420
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Pendentes
          </p>

          <h2 className="text-4xl font-black text-red-300">
            6
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Enviados
          </p>

          <h2 className="text-4xl font-black text-blue-300">
            22
          </h2>

        </div>

      </div>

      {/* FORM */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] p-8 mb-10">

        <h2 className="text-3xl font-black mb-8">
          Criar Pedido
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <div>

            <label className="block text-zinc-400 mb-3">
              Cliente
            </label>

            <input
              type="text"
              placeholder="Nome do cliente"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Produto
            </label>

            <input
              type="text"
              placeholder="Nome do produto"
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

          <div>

            <label className="block text-zinc-400 mb-3">
              Valor Total
            </label>

            <input
              type="text"
              placeholder="R$ 0,00"
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
            placeholder="Detalhes do pedido..."
            className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition resize-none"
          ></textarea>

        </div>

        <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition">
          Criar Pedido
        </button>

      </div>

      {/* TABLE */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Pedidos
          </p>

          <h2 className="text-3xl font-black">
            Últimos Pedidos
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-black text-zinc-400">

              <tr>

                <th className="text-left px-8 py-5">
                  Pedido
                </th>

                <th className="text-left px-8 py-5">
                  Cliente
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

                <th className="text-left px-8 py-5">
                  Ações
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-t border-white/5 hover:bg-black/40 transition"
                >

                  <td className="px-8 py-6 font-bold text-yellow-300">
                    {order.pedido}
                  </td>

                  <td className="px-8 py-6 font-medium">
                    {order.cliente}
                  </td>

                  <td className="px-8 py-6 text-green-300 font-bold">
                    {order.valor}
                  </td>

                  <td className="px-8 py-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm border ${
                        order.status === "Pago"
                          ? "bg-green-500/10 text-green-300 border-green-500/20"
                          : order.status === "Pendente"
                          ? "bg-red-500/10 text-red-300 border-red-500/20"
                          : "bg-blue-500/10 text-blue-300 border-blue-500/20"
                      }`}
                    >
                      {order.status}
                    </span>

                  </td>

                  <td className="px-8 py-6 text-zinc-400">
                    {order.data}
                  </td>

                  <td className="px-8 py-6">

                    <div className="flex gap-3">

                      <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-xl font-bold transition text-sm">
                        Ver
                      </button>

                      <button className="bg-black border border-yellow-500/20 hover:border-yellow-400 px-4 py-2 rounded-xl transition text-sm">
                        Editar
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