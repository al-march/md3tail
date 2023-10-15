import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD3 ui | Elevation",
  description: "Elevation documentation for npm package @md3/ui",
};

export default function Page() {
  return (
    <div className="flex items-start gap-2 h-full">
      <aside className="py-4 p-2 sticky top-[80px]">
        <ul className="list">
          <li className="list-item">
            <button className="btn btn-text text-on-surface p-2 leading-4">
              Light Scheme
            </button> 
          </li>
          <li className="list-item">
            <button className="btn btn-text text-on-surface p-2 leading-4">
              Dark Scheme
            </button>
          </li>
          <li className="list-item">
            <button className="btn btn-text text-on-surface p-2 leading-4">
              Elevations Scheme
            </button>
          </li>
        </ul>
      </aside>
      Elevation demo
    </div>
  );
}
