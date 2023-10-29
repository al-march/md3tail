"use client";
import { Surface } from "@/app/components/ui/surface/Surface";
import {
  AssistChip,
  ChipSet,
  CircularProgress,
  Dialog,
  Divider,
  FilterChip,
  Icon,
  InputChip,
  LinearProgress,
  List,
  ListItem,
  MdDialog,
  SuggestionChip,
  TextButton,
} from "@md3tail/react";
import { IconLink, Label } from "./shared/typography";
import { Row } from "@/app/components/layout/Row";

export const Others = () => {
  return (
    <div className="flex flex-col w-full gap-6 py-2">
      <Surface className="flex flex-col gap-4">
        <Row className="gap-4" justify="around" wrap>
          <Row direction="column" className="flex-1 gap-2 min-w-[200px]">
            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/list.md" />
              <Label>List</Label>
            </Row>
            <List className="max-w-[300px]">
              <ListItem>Fruits</ListItem>
              <Divider />
              <ListItem>Apple</ListItem>
              <ListItem>Banana</ListItem>
              <ListItem>
                <div slot="headline">Cucumber</div>
                <div slot="supporting-text">
                  Cucumbers are long green fruits that are just as long as this
                  multi-line description
                </div>
              </ListItem>

              <ListItem
                href="https://google.com/search?q=buy+kiwis&tbm=shop"
                target="_blank"
              >
                <div slot="headline">Shop for Kiwis</div>
                <div slot="supporting-text">
                  This will link you out in a new tab
                </div>
                <Icon slot="end">open_in_new</Icon>
              </ListItem>
            </List>
          </Row>
          <Row direction="column" className="flex-1 gap-2 min-w-[200px]">
            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/progress.md" />
              <Label>Progress</Label>
            </Row>

            <Row className="overflow-hidden w-full" wrap>
              <CircularProgress indeterminate></CircularProgress>
              <CircularProgress fourColor indeterminate></CircularProgress>
              <CircularProgress value={0.25}></CircularProgress>
              <CircularProgress value={0.5}></CircularProgress>
              <CircularProgress value={0.75}></CircularProgress>
              <CircularProgress value={1}></CircularProgress>
            </Row>

            <br />

            <Row className="gap-4" direction="column" justify="stretch">
              <LinearProgress className="w-full" indeterminate></LinearProgress>
              <LinearProgress
                fourColor
                className="w-full"
                indeterminate
              ></LinearProgress>
              <LinearProgress className="w-full" value={0.25}></LinearProgress>
              <LinearProgress className="w-full" value={0.5}></LinearProgress>
              <LinearProgress className="w-full" value={0.75}></LinearProgress>
              <LinearProgress className="w-full" value={1}></LinearProgress>
            </Row>

            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/chip.md" />
              <Label>Chips</Label>
            </Row>

            <ChipSet>
              <AssistChip label="Assist"></AssistChip>
              <FilterChip label="Filter"></FilterChip>
              <InputChip label="Input"></InputChip>
              <SuggestionChip label="Suggestion"></SuggestionChip>
            </ChipSet>

            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/dialog.md" />
              <Label>Dialog</Label>
            </Row>

            <TextButton
              onClick={() => {
                const dialog = document.querySelector("#dialog-example");
                if (dialog instanceof MdDialog) {
                  dialog.open = true;
                }
              }}
            >
              <Icon slot="icon">open_in_new</Icon>
              <span>Open Dialog</span>
            </TextButton>

            <Dialog id="dialog-example">
              <div slot="headline">Dialog title</div>
              <form slot="content" id="dialog-form-id" method="dialog">
                A simple dialog with free-form content.
              </form>
              <div slot="actions">
                <button form="dialog-form-id">
                  <TextButton>Submit</TextButton>
                </button>
                <button form="dialog-form-id">
                  <TextButton className="text-error">Cancel</TextButton>
                </button>
              </div>
            </Dialog>
          </Row>
        </Row>
      </Surface>
    </div>
  );
};
