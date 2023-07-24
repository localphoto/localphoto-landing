import { BrainCircuitIcon } from "lucide-react";

export default function Features() {
  return (
    <div className="bg-transparent py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-pink-500 text-white">
            <BrainCircuitIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Your AI assistant,<br></br>by the numbers.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Based on the open-source ResNet-152 model, your AI assistant can
            classify every one of your photos into 5 of 1000 classes. With 78%
            accuracy for first predictions and 94% accuracy with five
            predictions, let AI handle the bulk of organizing so you can find
            your photos with ease
          </p>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <dl className="flex justify-between xl:px-20">
            <div className="px-8 pt-8">
              <dd className="text-2xl font-bold text-pink-500 sm:text-3xl sm:tracking-tight">
                78%
              </dd>
              <dt className="text-base font-medium text-gray-500 dark:text-gray-300">
                Top-1 Accuracy
              </dt>
            </div>
            <div className="px-8 pt-8">
              <dd className="text-2xl font-bold text-pink-500 sm:text-3xl sm:tracking-tight">
                94%
              </dd>
              <dt className="text-base font-medium text-gray-500 dark:text-gray-300">
                Top-5 Accuracy
              </dt>
            </div>
            <div className="px-8 pt-8">
              <dd className="text-2xl font-bold text-pink-500 sm:text-3xl sm:tracking-tight">
                1000
              </dd>
              <dt className="text-base font-medium text-gray-500 dark:text-gray-300">
                Classes
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
