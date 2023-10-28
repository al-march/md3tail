import { Surface } from "@/app/components/ui/surface/Surface";
import { PageLayout } from "../PageLayout";
import {
  BrandedFab,
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
import { ReactNode } from "react";

const Title = (props: { children: ReactNode; href: string }) => (
  <div className="w-full flex items-center gap-2">
    <IconButton href={props.href} target="_blank">
      <Icon>link</Icon>
    </IconButton>
    <p className="title-medium">{props.children}</p>
  </div>
);

const Label = (props: { children: ReactNode }) => (
  <p className="text-center label-medium py-4">{props.children}</p>
);

export default function Page() {
  return (
    <PageLayout>
      <p className="title-large mb-4">Components demo</p>

      <div className="flex flex-col w-full gap-6 py-2">
        <Title href="https://github.com/material-components/material-web/blob/main/docs/components/button.md">
          Buttons
        </Title>
        <Surface>
          <Label>Default Buttons</Label>
          <div className="flex gap-2 flex-wrap justify-center">
            <ElevatedButton>Elevated</ElevatedButton>
            <FilledButton>Filled</FilledButton>
            <FilledTonalButton>Filled Tonal</FilledTonalButton>
            <OutlinedButton>Outlined</OutlinedButton>
            <TextButton>Text</TextButton>
          </div>
          <Label>Buttons with icons</Label>
          <div className="flex gap-2 flex-wrap justify-center">
            <ElevatedButton>
              <Icon slot="icon">favorite</Icon>
              Elevated
            </ElevatedButton>
            <FilledButton>
              <Icon slot="icon">favorite</Icon>
              Filled
            </FilledButton>
            <FilledTonalButton>
              <Icon slot="icon">favorite</Icon>
              Filled Tonal
            </FilledTonalButton>
            <OutlinedButton>
              <Icon slot="icon">favorite</Icon>
              Outlined
            </OutlinedButton>
            <TextButton>
              <Icon slot="icon">favorite</Icon>
              Text
            </TextButton>
          </div>
          <Label>Disabled Buttons</Label>
          <div className="flex gap-2 flex-wrap justify-center">
            <ElevatedButton disabled>Elevated</ElevatedButton>
            <FilledButton disabled>Filled</FilledButton>
            <FilledTonalButton disabled>Filled Tonal</FilledTonalButton>
            <OutlinedButton disabled>Outlined</OutlinedButton>
            <TextButton disabled>Text</TextButton>
          </div>
        </Surface>
      </div>

      <div className="flex flex-col w-full gap-6 py-2">
        <Title href="https://github.com/material-components/material-web/blob/main/docs/components/icon.md">
          Icons
        </Title>
        <Surface>
          <Label>Icon Buttons</Label>
          <div className="flex gap-2 flex-wrap justify-center">
            <IconButton>
              <Icon>favorite</Icon>
            </IconButton>
            <FilledIconButton>
              <Icon>favorite</Icon>
            </FilledIconButton>
            <FilledTonalIconButton>
              <Icon>favorite</Icon>
            </FilledTonalIconButton>
            <OutlinedIconButton>
              <Icon>favorite</Icon>
            </OutlinedIconButton>
          </div>
          <Label>Disabled Icon Buttons</Label>
          <div className="flex gap-2 flex-wrap justify-center">
            <IconButton disabled>
              <Icon>favorite</Icon>
            </IconButton>
            <FilledIconButton disabled>
              <Icon>favorite</Icon>
            </FilledIconButton>
            <FilledTonalIconButton disabled>
              <Icon>favorite</Icon>
            </FilledTonalIconButton>
            <OutlinedIconButton disabled>
              <Icon>favorite</Icon>
            </OutlinedIconButton>
          </div>
          <Label>Toggle</Label>
          <div className="flex gap-2 flex-wrap justify-center">
            <IconButton toggle>
              <Icon>favorite</Icon>
              <Icon slot="selected">heart_broken</Icon>
            </IconButton>
            <FilledIconButton toggle>
              <Icon>favorite</Icon>
              <Icon slot="selected">heart_broken</Icon>
            </FilledIconButton>
            <FilledTonalIconButton toggle>
              <Icon>favorite</Icon>
              <Icon slot="selected">heart_broken</Icon>
            </FilledTonalIconButton>
            <OutlinedIconButton toggle>
              <Icon>favorite</Icon>
              <Icon slot="selected">heart_broken</Icon>
            </OutlinedIconButton>
          </div>
          <Label>Toggle (selected)</Label>
          <div className="flex gap-2 flex-wrap justify-center">
            <IconButton toggle selected>
              <Icon>favorite</Icon>
              <Icon slot="selected">heart_broken</Icon>
            </IconButton>
            <FilledIconButton toggle selected>
              <Icon>favorite</Icon>
              <Icon slot="selected">heart_broken</Icon>
            </FilledIconButton>
            <FilledTonalIconButton toggle selected>
              <Icon>favorite</Icon>
              <Icon slot="selected">heart_broken</Icon>
            </FilledTonalIconButton>
            <OutlinedIconButton toggle selected>
              <Icon>favorite</Icon>
              <Icon slot="selected">heart_broken</Icon>
            </OutlinedIconButton>
          </div>
        </Surface>
      </div>

      <div className="flex flex-col w-full gap-6 py-2">
        <Title href="https://github.com/material-components/material-web/blob/main/docs/components/fab.md">
          Fabs
        </Title>
        <Surface>
          <Label>Sizes</Label>
          <div className="flex gap-2 flex-wrap justify-center items-center">
            <Fab size="small">
              <Icon slot="icon">favorite</Icon>
            </Fab>
            <Fab size="medium">
              <Icon slot="icon">favorite</Icon>
            </Fab>
            <Fab size="large">
              <Icon slot="icon">favorite</Icon>
            </Fab>
          </div>
          <Label>Sizes lowered</Label>
          <div className="flex gap-2 flex-wrap justify-center items-center">
            <Fab lowered size="small">
              <Icon slot="icon">favorite</Icon>
            </Fab>
            <Fab lowered size="medium">
              <Icon slot="icon">favorite</Icon>
            </Fab>
            <Fab lowered size="large">
              <Icon slot="icon">favorite</Icon>
            </Fab>
          </div>
          <Label>Variants</Label>
          <div className="flex gap-2 flex-wrap justify-center items-center">
            <Fab>
              <Icon slot="icon">favorite</Icon>
            </Fab>
            <Fab variant="primary">
              <Icon slot="icon">favorite</Icon>
            </Fab>
            <Fab variant="secondary">
              <Icon slot="icon">favorite</Icon>
            </Fab>
            <Fab variant="tertiary">
              <Icon slot="icon">favorite</Icon>
            </Fab>
          </div>
          <Label>Extended</Label>
          <div className="flex gap-2 flex-wrap justify-center items-center">
            <Fab label="Label">
              <Icon slot="icon">favorite</Icon>
            </Fab>
            <Fab label="Label" variant="primary">
              <Icon slot="icon">favorite</Icon>
            </Fab>
            <Fab label="Label" variant="secondary">
              <Icon slot="icon">favorite</Icon>
            </Fab>
            <Fab label="Label" variant="tertiary">
              <Icon slot="icon">favorite</Icon>
            </Fab>
          </div>
        </Surface>
      </div>
    </PageLayout>
  );
}
