import { PageLayout } from "../PageLayout";
import { Title } from "./shared/typography";
import { Actions } from "./actions";
import { Inputs } from "./inputs";

export default function Page() {
  return (
    <PageLayout>
      <Title>Actions</Title>
      <Actions />

      <Title>Form</Title>
      <Inputs />
    </PageLayout>
  );
}
