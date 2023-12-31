import { PageLayout } from "../PageLayout";
import { Title } from "./shared/typography";
import { Actions } from "./actions";
import { Inputs } from "./inputs";
import { Navigations } from "./navigations";
import { Metadata } from "next";
import { Others } from "./others";
import { Row } from "@/app/components/layout/Row";

export const metadata: Metadata = {
  title: "md3tail | Components",
  description: "Material Design 3 components examples",
};

export default function Page() {
  return (
    <PageLayout>
      <Title>Actions</Title>
      <Actions />

      <Title>Form</Title>
      <Inputs />

      <Title>Navigation</Title>
      <Navigations />

      <Title>Others</Title>
      <Others />
    </PageLayout>
  );
}
