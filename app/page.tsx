import Navigation from "@/components/Navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ApertureIcon } from "lucide-react";
import Features from "./Features";
import GlobeFeature from "./GlobeFeature";
import LogoButton from "@/components/LogoButton";
import { ThemeButton } from "@/components/ThemeButton";
import Image from "next/image";
import ThemedImage from "@/components/ThemedImage";
import Stats from "./Stats";
import CTA from "./CTA";
import Footer from "./Footer";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Home() {
  return (
    <div className="isolate bg-white dark:bg-gray-900">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#9b2541ea-d39d-499b-bd42-aeea3e93f5ff)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="9b2541ea-d39d-499b-bd42-aeea3e93f5ff"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f472b6" />
              <stop offset={1} stopColor="#c026d3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="z-50 w-full px-4 pt-6 lg:fixed 2xl:px-20">
        <nav className="flex items-center justify-between" aria-label="Global">
          <LogoButton />
          <ThemeButton />
        </nav>
      </div>
      <main>
        <div className="relative py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Take back control of{" "}
                <span className="text-pink-600 dark:text-pink-500">your</span>{" "}
                photos
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                The{" "}
                <span className="mx-0.5 font-mono text-pink-600 dark:text-pink-500">
                  localhost
                </span>{" "}
                for your photo library. Effortless organization powered by
                on-device AI. The convenience you&#8217;re used to—without
                compromising your privacy
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://try.local.photo"
                  className="rounded-full bg-black px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-black"
                >
                  Try the demo &rarr;
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-white/5 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <ThemedImage
                  lightSrc="/main_screenshot.png"
                  darkSrc="/main_screenshot_dark.png"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f472b6" />
                  <stop offset={1} stopColor="#c026d3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <Features />
        <GlobeFeature />
        <Stats />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
