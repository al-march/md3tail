import { Metadata } from "next";
import { PageLayout } from "../PageLayout";
import { AnchorMenu } from "../AnchorMenu";

export const metadata: Metadata = {
  title: "MD3 ui | Elevation",
  description: "Elevation documentation for npm package @md3/ui",
};

export default function Page() {
  return (
    <PageLayout
      anchorMenu={
        <AnchorMenu>
          <AnchorMenu.Item href="" label="Light Scheme" />
          <AnchorMenu.Item href="" label="Dark Scheme" />
          <AnchorMenu.Item href="" label="Elevations" />
        </AnchorMenu>
      }
    >
      <p className="title-large mb-4">Elevation demo</p>
    </PageLayout>
  );
}
