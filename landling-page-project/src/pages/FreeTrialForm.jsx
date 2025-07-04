const FreeTrialForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-olive">Kostenlos Testen</h1>
      <form className="w-full max-w-md bg-white shadow-md rounded p-6 space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input className="w-full border border-gray-300 p-2 rounded" type="text" required />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">E-Mail</label>
          <input className="w-full border border-gray-300 p-2 rounded" type="email" required />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Firma</label>
          <input className="w-full border border-gray-300 p-2 rounded" type="text" />
        </div>
        <button className="bg-olive text-white px-4 py-2 rounded hover:bg-olive-dark transition-all" type="submit">
          Formular absenden
        </button>
      </form>
    </div>
  );
};

export default FreeTrialForm;
