import { Metadata } from "next";
import { PageLayout } from "../PageLayout";
import { Surface } from "@/app/components/ui/surface/Surface";

export const metadata: Metadata = {
  title: "md3tail | Elevation",
  description: "Elevation Demo for npm package @md3tail",
};

export default function Page() {
  return (
    <PageLayout>
      <p className="title-large mb-4">Elevation demo</p>

      <div className="flex flex-col w-full gap-6 py-6">
        <Surface>
          <div className="flex p-2 justify-evenly gap-4">
            <div className="h-[180px] flex items-center justify-center rounded w-full elevation-1">
              <span className="label-large">1</span>
            </div>
            <div className="h-[180px] flex items-center justify-center rounded w-full elevation-2">
              <span className="label-large">2</span>
            </div>
            <div className="h-[180px] flex items-center justify-center rounded w-full elevation-3">
              <span className="label-large">3</span>
            </div>
            <div className="h-[180px] flex items-center justify-center rounded w-full elevation-4">
              <span className="label-large">4</span>
            </div>
            <div className="h-[180px] flex items-center justify-center rounded w-full elevation-5">
              <span className="label-large">5</span>
            </div>
          </div>
        </Surface>
      </div>
    </PageLayout>
  );
}
