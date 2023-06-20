import LPListbox from "./LPListbox";

const object = [
  { id: 1, name: "Photo", unavailable: false },
  { id: 2, name: "Album", unavailable: false },
  { id: 3, name: "Date Captured", unavailable: false },
  { id: 4, name: "Date Added", unavailable: false },
  { id: 5, name: "Caption", unavailable: true },
  { id: 6, name: "Filename", unavailable: false },
];

const operation = [
  { id: 1, name: "is similar to", unavailable: false },
  { id: 2, name: "is not similar to", unavailable: false },
  { id: 3, name: "includes", unavailable: false },
  { id: 4, name: "does not include", unavailable: false },
  { id: 5, name: "is", unavailable: false },
  { id: 6, name: "is not", unavailable: true },
  { id: 7, name: "starts with", unavailable: false },
  { id: 8, name: "ends with", unavailable: false },
  { id: 9, name: "is empty", unavailable: false },
  { id: 10, name: "is not empty", unavailable: false },
];

export default function NeuralAlbumDemo() {
  return (
    <div>
      <span className="flex">
        <LPListbox className="mr-2 w-40" selections={object} />
        <LPListbox className="w-40" selections={operation} />
      </span>
    </div>
  );
}
