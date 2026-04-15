import { plants } from "../data/plants";

export default function PlantSlider() {
  return (
    <section className="px-4 py-10 md:px-6">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Onze planten</h2>
        <p className="mt-1 text-sm text-neutral-600">
          Ontdek verzorgingstips en info per plant.
        </p>
      </div>

      <div className="flex gap-5 overflow-x-auto pb-3">
        {plants.map((plant) => (
          <article
            key={plant.slug}
            className="w-[300px] shrink-0 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
          >
            <img
              src={plant.images[0]}
              alt={plant.name}
              className="h-52 w-full object-cover"
            />

            <div className="space-y-4 p-5">
              <div>
                <h3 className="text-2xl font-semibold leading-tight">
                  {plant.name}
                </h3>
                {plant.subtitle ? (
                  <p className="mt-1 text-sm text-neutral-500">
                    {plant.subtitle}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2 text-sm leading-6 text-neutral-700">
                <p>
                  <span className="font-medium text-neutral-900">Water:</span>{" "}
                  {plant.care.water}
                </p>
                <p>
                  <span className="font-medium text-neutral-900">Licht:</span>{" "}
                  {plant.care.light}
                </p>
                <p>
                  <span className="font-medium text-neutral-900">
                    Moeilijkheid:
                  </span>{" "}
                  {plant.care.difficulty}
                </p>
                <p>
                  <span className="font-medium text-neutral-900">Tip:</span>{" "}
                  {plant.care.tip}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}