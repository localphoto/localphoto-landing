import PlacesMap from "@/components/PlacesMap";
import "mapbox-gl/dist/mapbox-gl.css";
import { GlobeIcon, LockIcon, MapIcon, RulerIcon } from "lucide-react";

const features = [
  {
    name: "Automatic geotagging.",
    description:
      "Places can read EXIF location data, mapping your photos as you import them",
    icon: GlobeIcon,
  },

  {
    name: "Precision...",
    description:
      "For personal use, see exactly where your photos were taken, down to the GPS coordinate",
    icon: RulerIcon,
  },
  {
    name: "...and privacy",
    description:
      "When it’s time to export or share, generalize photo locations to city, state, country and beyond—or strip all location data entirely",
    icon: LockIcon,
  },
  {
    name: "Map styles.",
    description:
      "Light or dark. Color or grayscale. Streets, satellite, terrain. Customize Places to your liking",
    icon: MapIcon,
  },
];

export default function GlobeFeature() {
  return (
    <div className="overflow-hidden bg-white py-24 dark:bg-black sm:py-32">
      <div className="mx-auto max-w-7xl md:pl-6 lg:pl-8">
        <div className="flex">
          <div className="w-full xl:w-1/3">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-pink-600 dark:text-pink-500">
                Places
              </h2>
              <p className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Your photos,<br></br>around the globe
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 ">
                Places makes it easy to retrace your steps and tell the story
                behind your photos
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300  lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-pink-600 dark:text-pink-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="hidden aspect-square flex-grow xl:flex xl:w-2/3">
            <PlacesMap mapboxAccessToken={process.env?.MAPBOX_ACCESS_TOKEN!} />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="relative isolate overflow-hidden bg-pink-600 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <div className="flex h-96 w-96 flex-grow">
                  <PlacesMap
                    mapboxAccessToken={process.env?.MAPBOX_ACCESS_TOKEN!}
                  />
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div> */
}
