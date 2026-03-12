export default function PageNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-display">
        Pagina non trovata
      </h1>
      <p className="text-sm text-[#555555] max-w-md">
        La pagina che stai cercando non esiste o è stata spostata. Usa il menu
        in alto per continuare la navigazione.
      </p>
    </div>
  );
}

