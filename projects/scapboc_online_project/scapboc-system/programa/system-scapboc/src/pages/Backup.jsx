export default function Backup() {
  const backups = [
    {
      nome: "backup_12_05_2026.zip",
      tamanho: "248 MB",
      status: "Concluído",
      data: "12/05/2026 • 18:42",
    },
    {
      nome: "backup_11_05_2026.zip",
      tamanho: "241 MB",
      status: "Concluído",
      data: "11/05/2026 • 23:00",
    },
    {
      nome: "backup_10_05_2026.zip",
      tamanho: "236 MB",
      status: "Falhou",
      data: "10/05/2026 • 23:00",
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
            Central de Backup
          </h1>

        </div>

        <div className="flex gap-4 flex-wrap">

          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10">
            Criar Backup
          </button>

          <button className="bg-[#18181b] hover:border-yellow-400 border border-yellow-500/10 px-6 py-4 rounded-2xl transition">
            Restaurar Sistema
          </button>

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Último Backup
          </p>

          <h2 className="text-2xl font-black text-yellow-300">
            Hoje
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Arquivos
          </p>

          <h2 className="text-4xl font-black text-blue-300">
            18
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Espaço Utilizado
          </p>

          <h2 className="text-4xl font-black text-green-300">
            4.8 GB
          </h2>

        </div>

        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-7">

          <p className="text-zinc-400 mb-3">
            Falhas
          </p>

          <h2 className="text-4xl font-black text-red-300">
            1
          </h2>

        </div>

      </div>

      {/* SETTINGS */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] p-8 mb-10">

        <h2 className="text-3xl font-black mb-8">
          Configurações de Backup
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <div>

            <label className="block text-zinc-400 mb-3">
              Frequência
            </label>

            <select
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            >
              <option>Diariamente</option>
              <option>Semanalmente</option>
              <option>Mensalmente</option>
            </select>

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Horário
            </label>

            <input
              type="time"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Armazenamento
            </label>

            <select
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            >
              <option>Servidor Local</option>
              <option>Google Drive</option>
              <option>Dropbox</option>
              <option>OneDrive</option>
            </select>

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Notificação
            </label>

            <select
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            >
              <option>Ativado</option>
              <option>Desativado</option>
            </select>

          </div>

        </div>

        <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition">
          Salvar Configurações
        </button>

      </div>

      {/* TABLE */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-[32px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            Histórico
          </p>

          <h2 className="text-3xl font-black">
            Backups Recentes
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-black text-zinc-400">

              <tr>

                <th className="text-left px-8 py-5">
                  Arquivo
                </th>

                <th className="text-left px-8 py-5">
                  Tamanho
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

              {backups.map((backup, index) => (
                <tr
                  key={index}
                  className="border-t border-white/5 hover:bg-black/40 transition"
                >

                  <td className="px-8 py-6 font-medium">
                    {backup.nome}
                  </td>

                  <td className="px-8 py-6 text-zinc-400">
                    {backup.tamanho}
                  </td>

                  <td className="px-8 py-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm border ${
                        backup.status === "Concluído"
                          ? "bg-green-500/10 text-green-300 border-green-500/20"
                          : "bg-red-500/10 text-red-300 border-red-500/20"
                      }`}
                    >
                      {backup.status}
                    </span>

                  </td>

                  <td className="px-8 py-6 text-zinc-400">
                    {backup.data}
                  </td>

                  <td className="px-8 py-6">

                    <div className="flex gap-3 flex-wrap">

                      <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-xl font-bold transition text-sm">
                        Download
                      </button>

                      <button className="bg-black border border-yellow-500/20 hover:border-yellow-400 px-4 py-2 rounded-xl transition text-sm">
                        Restaurar
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