import { Metadata } from "next";
import { PageLayout } from "../PageLayout";
import { AnchorMenu } from "../AnchorMenu";

export const metadata: Metadata = {
  title: "MD3 ui | Typography",
  description: "Typography documentation for npm package @md3/ui",
};

export default function Page() {
  return (
    <PageLayout
      anchorMenu={
        <AnchorMenu>
          <AnchorMenu.Item href="" label="Title" />
          <AnchorMenu.Item href="" label="Label" />
          <AnchorMenu.Item href="" label="Body" />
        </AnchorMenu>
      }
    >
      <p className="title-large mb-4">Typography demo</p>
    </PageLayout>
  );
}
