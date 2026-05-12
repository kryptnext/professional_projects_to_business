export default function Notifications() {
  const notifications = [
    {
      titulo: "Estoque Baixo",
      descricao: "Coxim Motor Focus está com apenas 2 unidades.",
      tipo: "alerta",
      data: "12/05/2026 • 14:22",
    },
    {
      titulo: "Novo Pedido",
      descricao: "Pedido #1028 foi criado por João Silva.",
      tipo: "pedido",
      data: "12/05/2026 • 13:10",
    },
    {
      titulo: "Sangria Registrada",
      descricao: "Wesley registrou uma retirada de R$ 200,00.",
      tipo: "financeiro",
      data: "12/05/2026 • 12:30",
    },
    {
      titulo: "Fornecedor Atualizado",
      descricao: "Dados da empresa Bosch foram alterados.",
      tipo: "sistema",
      data: "11/05/2026 • 18:45",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Sistema
          </p>

          <h1 className="text-5xl font-black">
            Central de Notificações
          </h1>

        </div>

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10">
          Marcar Todas como Lidas
        </button>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Total
          </p>

          <h2 className="text-4xl font-black text-yellow-300">
            128
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Alertas
          </p>

          <h2 className="text-4xl font-black text-red-300">
            18
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Pedidos
          </p>

          <h2 className="text-4xl font-black text-blue-300">
            42
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Financeiro
          </p>

          <h2 className="text-4xl font-black text-green-300">
            12
          </h2>

        </div>

      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-4 mb-10">

        <button className="bg-yellow-400 text-black font-bold px-5 py-3 rounded-2xl">
          Todas
        </button>

        <button className="bg-[#18181b] hover:border-yellow-400 border border-yellow-500/10 px-5 py-3 rounded-2xl transition">
          Alertas
        </button>

        <button className="bg-[#18181b] hover:border-yellow-400 border border-yellow-500/10 px-5 py-3 rounded-2xl transition">
          Pedidos
        </button>

        <button className="bg-[#18181b] hover:border-yellow-400 border border-yellow-500/10 px-5 py-3 rounded-2xl transition">
          Financeiro
        </button>

        <button className="bg-[#18181b] hover:border-yellow-400 border border-yellow-500/10 px-5 py-3 rounded-2xl transition">
          Sistema
        </button>

      </div>

      {/* NOTIFICATIONS */}
      <div className="space-y-6">

        {notifications.map((item, index) => (
          <div
            key={index}
            className="bg-[#18181b] border border-yellow-500/10 rounded-[28px] p-7 hover:border-yellow-400/30 transition"
          >

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div className="flex items-start gap-5">

                {/* ICON */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${
                    item.tipo === "alerta"
                      ? "bg-red-500/10 text-red-300"
                      : item.tipo === "pedido"
                      ? "bg-blue-500/10 text-blue-300"
                      : item.tipo === "financeiro"
                      ? "bg-green-500/10 text-green-300"
                      : "bg-yellow-500/10 text-yellow-300"
                  }`}
                >
                  ●
                </div>

                {/* CONTENT */}
                <div>

                  <h2 className="text-2xl font-black mb-2">
                    {item.titulo}
                  </h2>

                  <p className="text-zinc-400 text-lg">
                    {item.descricao}
                  </p>

                </div>

              </div>

              {/* DATE */}
              <div className="flex items-center gap-4">

                <p className="text-zinc-500">
                  {item.data}
                </p>

                <button className="bg-black hover:bg-yellow-400 hover:text-black border border-yellow-500/10 px-5 py-3 rounded-2xl transition">
                  Ver
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}