export default function CTA() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-t from-pink-400 px-6 py-24 text-center sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight text-black dark:text-white">
            Get your local.photo
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black dark:text-white">
            We are currently in closed beta. For now, check out the live demo of
            LocalPhoto Web
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://try.local.photo"
              className="rounded-full bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-black dark:text-white"
            >
              Try the demo →
            </a>
          </div>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="827591b1-ce8c-4110-b064-7cb85a0b1217"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#c026d3" />
                <stop offset={1} stopColor="#f472b6" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg> */}
        </div>
      </div>
    </div>
  );
}
