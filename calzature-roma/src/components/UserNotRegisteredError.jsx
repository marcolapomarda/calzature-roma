export default function UserNotRegisteredError() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-display">
        Utente non registrato
      </h1>
      <p className="text-sm text-[#555555] max-w-md">
        Questa versione del sito non prevede ancora un&apos;area riservata.
        Per qualsiasi informazione o richiesta contattaci direttamente in
        negozio o tramite la pagina Contatti.
      </p>
    </div>
  );
}

