import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

const timeline = [
  {
    id: 1,
    content: "Download and install Docker",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    iconBackground: "bg-pink-600",
  },
  {
    id: 2,
    content: "Download and extract local.photo Server",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    iconBackground: "bg-pink-600",
  },
  {
    id: 3,
    content: "Open a terminal window and type docker compose up",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: <span>1</span>,
    iconBackground: "bg-pink-600",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Installation() {
  return (
    <div className="rounded-3xl bg-pink-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2
            id="getting-started"
            className="text-base font-semibold leading-7 text-pink-600"
          >
            Getting started
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            It&#8217;s as easy as 1, 2, 3
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your local.photo server is containerized with Docker, making for a
            smooth install
          </p>
        </div>

        <div className="mx-auto flow-root max-w-4xl pt-10 lg:text-center">
          <ul role="list" className="-mb-8">
            {timeline.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-8">
                  {eventIdx !== timeline.length - 1 ? (
                    <span
                      className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={classNames(
                          event.iconBackground,
                          "flex h-8 w-8 flex-col items-center justify-center rounded-full ring-8 ring-pink-100"
                        )}
                      >
                        <span className="flex items-center font-bold text-white">
                          {event.id}
                        </span>
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">{event.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
