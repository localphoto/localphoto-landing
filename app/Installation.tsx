import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

const dockerDownloads = [
  {
    os: "Windows",
    href: "https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe",
  },
  {
    os: "macOS (Apple Chip)",
    href: "https://desktop.docker.com/mac/main/arm64/Docker.dmg",
  },
  {
    os: "macOS (Intel Chip)",
    href: "https://desktop.docker.com/mac/main/amd64/Docker.dmg",
  },
  {
    os: "Linux",
    href: "https://docs.docker.com/desktop/install/linux-install/",
    newTab: true,
  },
];

const timeline = [
  {
    id: 1,
    heading: <div>Download and install Docker</div>,
    content: (
      <div>
        {dockerDownloads.map((download, index) => (
          <a
            key={index}
            href={download.href}
            rel="noopener noreferrer"
            target={download.newTab ? "_blank" : "_self"}
            className="mr-2 inline-flex items-center rounded border border-transparent bg-white px-2.5 py-1.5 text-xs font-medium text-pink-600 shadow-sm hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            {download.os}
          </a>
        ))}
      </div>
    ),
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    iconBackground: "bg-pink-600",
  },
  {
    id: 2,
    heading: "Download and extract the local.photo server",
    content: (
      <a
        href="/"
        className="mr-2 inline-flex items-center rounded border border-transparent bg-pink-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        localphoto.zip
      </a>
    ),
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    iconBackground: "bg-pink-600",
  },
  {
    id: 3,
    heading: "Start your server",
    content: (
      <span>
        For Windows, use{" "}
        <span className="font-mono font-bold text-pink-500">start.bat</span>.
        For macOS or Linux, use{" "}
        <span className="font-mono font-bold text-pink-500">start.sh</span>
        <br></br> If you&#8217;re comfortable with the command line, you can use
        the <span className="font-mono font-bold">docker compose up</span>{" "}
        command
      </span>
    ),
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: <span>1</span>,
    iconBackground: "bg-pink-600",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Installation() {
  return (
    <div className="rounded-3xl bg-pink-50 py-24 sm:py-32">
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
            Your local.photo server is containerized with Docker, making it
            portable and simple to install across platforms
          </p>
        </div>

        <div className="mx-auto flow-root max-w-4xl pt-10 ">
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
                          "flex h-8 w-8 flex-col items-center justify-center rounded-full ring-8 ring-pink-50"
                        )}
                      >
                        <span className="flex items-center font-bold text-white">
                          {event.id}
                        </span>
                      </span>
                    </div>
                    <div className="min-w-0 pt-1.5">
                      <div className="mb-4 text-sm font-medium text-black">
                        {event.heading}
                      </div>
                      <div className="text-sm text-gray-500">
                        {event.content}
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
