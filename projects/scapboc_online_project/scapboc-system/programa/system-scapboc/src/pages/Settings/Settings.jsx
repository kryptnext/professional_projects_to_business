export default function Settings() {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 lg:p-10">

      {/* HEADER */}
      <div className="mb-10">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
          Configurações
        </p>

        <h1 className="text-5xl font-black">
          Painel do Sistema
        </h1>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* PROFILE */}
        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-8">

          <h2 className="text-3xl font-black mb-8">
            Perfil
          </h2>

          <div className="space-y-6">

            <div>
              <label className="block text-zinc-400 mb-3">
                Nome
              </label>

              <input
                type="text"
                placeholder="Administrador"
                className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-zinc-400 mb-3">
                E-mail
              </label>

              <input
                type="email"
                placeholder="admin@scapboc.com"
                className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
              />
            </div>

            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition">
              Salvar Alterações
            </button>

          </div>

        </div>

        {/* SYSTEM */}
        <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-8">

          <h2 className="text-3xl font-black mb-8">
            Sistema
          </h2>

          <div className="space-y-6">

            <div className="flex items-center justify-between bg-black border border-yellow-500/10 rounded-2xl p-5">

              <div>
                <h3 className="font-bold mb-1">
                  Modo Escuro
                </h3>

                <p className="text-zinc-400 text-sm">
                  Tema dark automotivo.
                </p>
              </div>

              <div className="w-14 h-8 bg-yellow-400 rounded-full flex items-center px-1">

                <div className="w-6 h-6 bg-black rounded-full ml-auto"></div>

              </div>

            </div>

            <div className="flex items-center justify-between bg-black border border-yellow-500/10 rounded-2xl p-5">

              <div>
                <h3 className="font-bold mb-1">
                  Chatbot IA
                </h3>

                <p className="text-zinc-400 text-sm">
                  Assistente automatizado.
                </p>
              </div>

              <div className="w-14 h-8 bg-yellow-400 rounded-full flex items-center px-1">

                <div className="w-6 h-6 bg-black rounded-full ml-auto"></div>

              </div>

            </div>

            <div className="flex items-center justify-between bg-black border border-yellow-500/10 rounded-2xl p-5">

              <div>
                <h3 className="font-bold mb-1">
                  Notificações
                </h3>

                <p className="text-zinc-400 text-sm">
                  Alertas do estoque.
                </p>
              </div>

              <div className="w-14 h-8 bg-zinc-700 rounded-full flex items-center px-1">

                <div className="w-6 h-6 bg-white rounded-full"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SECURITY */}
      <div className="bg-[#18181b] border border-yellow-500/10 rounded-3xl p-8 mt-6">

        <h2 className="text-3xl font-black mb-8">
          Segurança
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <div>

            <label className="block text-zinc-400 mb-3">
              Nova Senha
            </label>

            <input
              type="password"
              placeholder="Digite a nova senha"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">
              Confirmar Senha
            </label>

            <input
              type="password"
              placeholder="Confirme a senha"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition"
            />

          </div>

        </div>

        <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-4 rounded-2xl transition">
          Atualizar Senha
        </button>

      </div>

    </div>
  );
}