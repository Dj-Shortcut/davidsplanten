import PlantSlider from "../src/components/PlantSlider";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 bg-green-50">

        <Image
         src="/branding/logofull.png"
         alt="Davids Planten"
         width={220}
         height={80}
         priority
         className="h-auto w-auto max-w-[220px]"
        />

        <h1 className="mt-5 mb-4 text-4xl font-bold md:text-5xl">
         Vetplanten & bloempotten in Ninove
       </h1>

        <p className="text-lg text-gray-600 max-w-xl mb-6">
          Kwalitatieve vetplanten en bloempotten, eenvoudig te bestellen en af te halen.
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

      {/* SLIDER TOEGEVOEGD (dit is het enige nieuwe stuk) */}
      <PlantSlider />

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 text-center">

        <h2 className="text-2xl font-semibold mb-10">
          Hoe werkt het?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">

          <div>
            <h3 className="font-semibold mb-2">
              1. Kies je plant
            </h3>
            <p className="text-gray-600">
              Bekijk ons aanbod van bloemen en succulents.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              2. Plaats je bestelling
            </h3>
            <p className="text-gray-600">
              Stuur een bericht via Facebook of WhatsApp.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              3. Haal af
            </h3>
            <p className="text-gray-600">
              Kom langs wanneer het jou past.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}