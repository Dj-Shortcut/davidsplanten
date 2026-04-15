import { plants } from "@/data/plants";

export default function PlantSlider() {
  return (
    <section className="w-full py-8">
      <div className="mb-6 px-4">
        <h2 className="text-2xl font-semibold">Onze planten</h2>
        <p className="text-sm text-neutral-600">
          Ontdek verzorgingstips en info per plant.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-4">
        {plants.map((plant) => (
          <article
            key={plant.slug}
            className="min-w-[280px] max-w-[280px] shrink-0 overflow-hidden rounded-2xl border bg-white shadow-sm"
          >
            <img
              src={plant.images[0]}
              alt={plant.name}
              className="h-48 w-full object-cover"
            />

            <div className="space-y-3 p-4">
              <div>
                <h3 className="text-lg font-semibold">{plant.name}</h3>
                {plant.subtitle ? (
                  <p className="text-sm text-neutral-500">{plant.subtitle}</p>
                ) : null}
              </div>

              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Water:</span> {plant.care.water}
                </p>
                <p>
                  <span className="font-medium">Licht:</span> {plant.care.light}
                </p>
                <p>
                  <span className="font-medium">Moeilijkheid:</span>{" "}
                  {plant.care.difficulty}
                </p>
                <p>
                  <span className="font-medium">Tip:</span> {plant.care.tip}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}