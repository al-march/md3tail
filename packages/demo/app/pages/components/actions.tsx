import { Surface } from "@/app/components/ui/surface/Surface";
import { IconLink, Label } from "./shared/typography";
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
  Row,
  TextButton,
} from "@md3tail/react";

export const Actions = () => {
  return (
    <div className="flex flex-col w-full gap-6 py-2">
      <Surface>
        <Row className="gap-4" items="start" justify="around" wrap>
          <Row direction="column" className="gap-4">
            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/button.md" />
              <Label>Buttons</Label>
            </Row>

            <Row className="gap-2" items="center">
              <ElevatedButton>Elevated</ElevatedButton>
              <ElevatedButton>
                <Icon slot="icon">favorite</Icon>
                Icon
              </ElevatedButton>
              <ElevatedButton disabled>Disabled</ElevatedButton>
            </Row>

            <Row className="gap-2" items="center">
              <FilledButton>Filled</FilledButton>
              <FilledButton>
                <Icon slot="icon">favorite</Icon>
                Icon
              </FilledButton>
              <FilledButton disabled>Disabled</FilledButton>
            </Row>

            <Row className="gap-2" items="center">
              <FilledTonalButton>Tonal</FilledTonalButton>
              <FilledTonalButton>
                <Icon slot="icon">favorite</Icon>
                Icon
              </FilledTonalButton>
              <FilledTonalButton disabled>Disabled</FilledTonalButton>
            </Row>

            <Row className="gap-2" items="center">
              <OutlinedButton>Outlined</OutlinedButton>
              <OutlinedButton>
                <Icon slot="icon">favorite</Icon>
                Icon
              </OutlinedButton>
              <OutlinedButton disabled>Disabled</OutlinedButton>
            </Row>

            <Row className="gap-2" items="center">
              <TextButton>Text</TextButton>
              <TextButton>
                <Icon slot="icon">favorite</Icon>
                Icon
              </TextButton>
              <TextButton disabled>Disabled</TextButton>
            </Row>
          </Row>

          <Row direction="column" className="gap-4">
            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/fab.md" />
              <Label>Fabs </Label>
            </Row>

            <Row items="center" className="gap-2">
              <Fab size="large">
                <Icon slot="icon">favorite</Icon>
              </Fab>
              <Fab>
                <Icon slot="icon">favorite</Icon>
              </Fab>
              <Fab label="Label">
                <Icon slot="icon">favorite</Icon>
              </Fab>
              <Fab size="small">
                <Icon slot="icon">favorite</Icon>
              </Fab>
            </Row>

            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md" />
              <Label>Icon buttons</Label>
            </Row>

            <Row className="gap-2">
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
              <IconButton disabled>
                <Icon>favorite</Icon>
              </IconButton>
            </Row>
            <Row className="gap-2">
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
              <IconButton toggle selected disabled>
                <Icon>favorite</Icon>
                <Icon slot="selected">heart_broken</Icon>
              </IconButton>
            </Row>
          </Row>
        </Row>
      </Surface>
    </div>
  );
};
