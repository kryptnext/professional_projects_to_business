export default function Login() {
  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center p-6">

      {/* BACKGROUND EFFECT */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-3xl rounded-full"></div>

      {/* LOGIN CARD */}
      <div className="relative w-full max-w-md bg-[#18181b] border border-yellow-500/10 rounded-[32px] p-10 shadow-2xl shadow-black">

        {/* LOGO */}
        <div className="mb-10 text-center">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Sistema Administrativo
          </p>

          <h1 className="text-5xl font-black text-white mb-4">
            SCAP<span className="text-yellow-400">BOC</span>
          </h1>

          <p className="text-zinc-400 leading-relaxed">
            Acesse o painel administrativo da empresa.
          </p>

        </div>

        {/* FORM */}
        <form className="space-y-6">

          {/* EMAIL */}
          <div>

            <label className="block text-sm text-zinc-400 mb-3">
              E-mail
            </label>

            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition text-white placeholder:text-zinc-500"
            />

          </div>

          {/* PASSWORD */}
          <div>

            <label className="block text-sm text-zinc-400 mb-3">
              Senha
            </label>

            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full bg-black border border-yellow-500/10 focus:border-yellow-400 rounded-2xl px-5 py-4 outline-none transition text-white placeholder:text-zinc-500"
            />

          </div>

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-3 text-zinc-400">

              <input type="checkbox" />

              Lembrar acesso

            </label>

            <button
              type="button"
              className="text-yellow-400 hover:text-yellow-300 transition"
            >
              Esqueci a senha
            </button>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black py-4 rounded-2xl transition shadow-lg shadow-yellow-500/10"
          >
            Entrar no Sistema
          </button>

        </form>

        {/* FOOTER */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">

          <p className="text-zinc-500 text-sm">
            © 2026 SCAPBOC Auto Peças
          </p>

        </div>

      </div>

    </div>
  );
}