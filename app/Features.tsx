import { Listbox } from "@headlessui/react";
import {
  SparklesIcon,
  HashIcon,
  RefreshCwIcon,
  DownloadCloudIcon,
} from "lucide-react";

import NeuralAlbumDemo from "./NeuralAlbumDemo";

const features = [
  {
    name: "Neural albums",
    description:
      "Match any or match all—the smart album conditions you know, upgraded with AI",
    icon: SparklesIcon,
    jsx: <NeuralAlbumDemo />,
  },
  {
    name: "Advanced tagging",
    description:
      "Enjoy fine-grained control over your tags, allowing you to create categories, subcategories, and nested tags",
    icon: HashIcon,
  },
  {
    name: "Access from anywhere",
    description:
      "Seamlessly sync your photo library across multiple devices, enabling easy access and continuity regardless of the device you use",
    icon: RefreshCwIcon,
  },
  {
    name: "Flexible import options",
    description:
      "Say goodbye to data lock-in—easily migrate your photos, albums, and metadata from Google Photos or Apple Photos",
    icon: DownloadCloudIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-pink-500">
            For power users
          </h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything your photo library needs
          </p>
          <p className="mt-6 hidden text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </dd>
                {/* <div className="mt-2">{feature.jsx}</div> */}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
