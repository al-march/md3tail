import { Surface } from "@/app/components/ui/surface/Surface";
import { PageLayout } from "../PageLayout";
import {
  ElevatedButton,
  Fab,
  FilledButton,
  FilledIconButton,
  FilledTonalButton,
  FilledTonalIconButton,
  Icon,
  IconButton,
  OutlinedButton,
  OutlinedIconButton,
  TextButton,
} from "@md3tail/react";
import { Label, Title } from "./shared/typography";
import { Actions } from "./actions";

export default function Page() {
  return (
    <PageLayout>
      <Title>Actions</Title>
      <Actions />
    </PageLayout>
  );
}
