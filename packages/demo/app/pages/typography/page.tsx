import { Metadata } from "next";
import { PageLayout } from "../PageLayout";
import { AnchorMenu } from "../AnchorMenu";
import { Surface } from "@/app/components/ui/surface/Surface";

export const metadata: Metadata = {
  title: "MD3 ui | Typography",
  description: "Typography documentation for npm package @md3/ui",
};

export default function Page() {
  return (
    <PageLayout
      anchorMenu={
        <AnchorMenu>
          <AnchorMenu.Item href="#display" label="Display" />
          <AnchorMenu.Item href="#headline" label="Headline" />
          <AnchorMenu.Item href="#body" label="Body" />
          <AnchorMenu.Item href="#label" label="Label" />
          <AnchorMenu.Item href="#title" label="Title" />
        </AnchorMenu>
      }
    >
      <p className="title-large mb-4">Typography demo</p>

      <div className="flex flex-col gap-6 w-full">
        <Surface id="display">
          <p className="title-large">Display</p>

          <div className="flex flex-col gap-4 py-4">
            <p className="display-large">display-large</p>
            <p className="display-medium">display-medium</p>
            <p className="display-small">display-small</p>
          </div>
        </Surface>

        <Surface id="headline">
          <p className="title-large">Headline</p>

          <div className="flex flex-col gap-4 py-4">
            <p className="headline-large">headline-large</p>
            <p className="headline-medium">headline-medium</p>
            <p className="headline-small">headline-small</p>
          </div>
        </Surface>

        <Surface id="body">
          <p className="title-large">Body</p>

          <div className="flex flex-col gap-4 py-4">
            <p className="body-large">body-large</p>
            <p className="body-medium">body-medium</p>
            <p className="body-small">body-small</p>
          </div>
        </Surface>

        <Surface id="label">
          <p className="title-large">Label</p>

          <div className="flex flex-col gap-4 py-4">
            <p className="label-large">label-large</p>
            <p className="label-medium">label-medium</p>
            <p className="label-small">label-small</p>
          </div>
        </Surface>

        <Surface id="title">
          <p className="title-large">Title</p>

          <div className="flex flex-col gap-4 py-4">
            <p className="title-large">title-large</p>
            <p className="title-medium">title-medium</p>
            <p className="title-small">title-small</p>
          </div>
        </Surface>
      </div>
    </PageLayout>
  );
}
