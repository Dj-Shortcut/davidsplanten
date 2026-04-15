export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-green-50">
        <img
          src="/logo.jpg"
          alt="Davids Planten"
          className="w-24 h-24 object-contain mb-6"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bloemen & Succulents in Ninove
        </h1>

        <p className="text-lg text-gray-600 max-w-xl mb-6">
          Lokaal gekweekt, eenvoudig te bestellen en af te halen wanneer het jou past.
        </p>

        <div className="flex gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
            Bekijk aanbod
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
            Contacteer
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-10">Hoe werkt het?</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold mb-2">1. Kies je plant</h3>
            <p className="text-gray-600">
              Bekijk ons aanbod van bloemen en succulents.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">2. Plaats je bestelling</h3>
            <p className="text-gray-600">
              Stuur eenvoudig een bericht of bestel online.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">3. Haal af</h3>
            <p className="text-gray-600">
              Kom je bestelling ophalen op een moment dat past.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-10">Aanbod</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Succulent mix",
            "Seizoensboeket",
            "Mini plantjes",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="h-40 bg-green-100 rounded-xl mb-4" />
              <h3 className="font-semibold">{item}</h3>
              <p className="text-gray-500 text-sm mt-2">
                Beschikbaar voor afhaling
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* B2B */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ook voor winkels en grotere bestellingen
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Interesse in grotere volumes of samenwerking? Neem gerust contact op.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
          Contacteer ons
        </button>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Klaar om te bestellen?
        </h2>
        <p className="mb-6">
          Stuur ons een bericht en we helpen je meteen verder.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
          Bericht via Facebook
        </button>
      </section>

    </main>
  );
}