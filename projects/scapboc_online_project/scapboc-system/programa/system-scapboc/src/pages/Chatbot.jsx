export default function Chatbot() {
  const messages = [
    {
      type: "bot",
      text: "Olá! Sou o assistente virtual da SCAPBOC. Como posso ajudar?",
    },
    {
      type: "user",
      text: "Tem coxim do Palio?",
    },
    {
      type: "bot",
      text: "Sim. Temos Coxim Câmbio Palio disponível por R$ 54,60.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white flex">

      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-80 bg-[#18181b] border-r border-yellow-500/10 flex-col">

        <div className="p-6 border-b border-yellow-500/10">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
            IA Automotiva
          </p>

          <h1 className="text-4xl font-black">
            Chatbot
          </h1>

        </div>

        <div className="flex-1 p-6 space-y-4">

          <div className="bg-black border border-yellow-500/10 rounded-3xl p-5">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <span className="font-semibold">
                Sistema Online
              </span>

            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Chatbot conectado ao estoque e preparado para integração com WhatsApp.
            </p>

          </div>

          <div className="bg-black border border-yellow-500/10 rounded-3xl p-5">

            <p className="text-yellow-400 text-sm mb-3">
              Funções
            </p>

            <div className="space-y-3 text-zinc-300 text-sm">

              <div>• Consulta de peças</div>
              <div>• Verificação de estoque</div>
              <div>• Consulta de preços</div>
              <div>• Integração WhatsApp</div>
              <div>• IA automatizada</div>

            </div>

          </div>

        </div>

      </aside>

      {/* CHAT */}
      <main className="flex-1 flex flex-col">

        {/* HEADER */}
        <header className="bg-[#18181b] border-b border-yellow-500/10 p-6 flex items-center justify-between">

          <div>

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-2">
              Atendimento Inteligente
            </p>

            <h2 className="text-3xl font-black">
              Assistente Virtual SCAPBOC
            </h2>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

            <span className="text-zinc-300">
              Online
            </span>

          </div>

        </header>

        {/* MESSAGES */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">

          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-[700px] px-6 py-5 rounded-3xl ${
                  message.type === "user"
                    ? "bg-yellow-400 text-black"
                    : "bg-[#18181b] border border-yellow-500/10 text-white"
                }`}
              >

                <p className="leading-relaxed">
                  {message.text}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* INPUT */}
        <div className="p-6 border-t border-yellow-500/10 bg-[#18181b]">

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Digite uma mensagem..."
              className="flex-1 bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-6 py-4 outline-none transition text-white placeholder:text-zinc-500"
            />

            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10">
              Enviar
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}