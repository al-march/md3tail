"use client";

import { Surface } from "@/app/components/ui/surface/Surface";
import {
  FilledButton,
  Icon,
  MdMenu,
  Menu,
  MenuItem,
  PrimaryTab,
  Row,
  SecondaryTab,
  SubMenu,
  Tabs,
} from "@md3tail/react";
import { IconLink, Label } from "./shared/typography";

export const Navigations = () => {
  return (
    <div className="flex flex-col w-full gap-6 py-2">
      <Surface className="flex flex-col gap-4">
        <Row className="gap-2" justify="around" wrap>
          <Row direction="column" className="flex-1 gap-2">
            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/tabs.md" />
              <Label>Tabs</Label>
            </Row>

            <Tabs>
              <PrimaryTab>Tab 1</PrimaryTab>
              <PrimaryTab>Tab 2</PrimaryTab>
              <PrimaryTab>Tab 3</PrimaryTab>
            </Tabs>

            <Tabs>
              <SecondaryTab>Tab 1</SecondaryTab>
              <SecondaryTab>Tab 2</SecondaryTab>
              <SecondaryTab>Tab 3</SecondaryTab>
            </Tabs>

            <Tabs>
              <PrimaryTab>
                <Icon slot="icon">favorite</Icon> Tab 1
              </PrimaryTab>
              <PrimaryTab>
                <Icon slot="icon">piano</Icon> Tab 2
              </PrimaryTab>
              <PrimaryTab>
                <Icon slot="icon">tune</Icon> Tab 3
              </PrimaryTab>
            </Tabs>

            <Tabs>
              <SecondaryTab>
                <Icon slot="icon">favorite</Icon> Tab 1
              </SecondaryTab>
              <SecondaryTab>
                <Icon slot="icon">piano</Icon> Tab 2
              </SecondaryTab>
              <SecondaryTab>
                <Icon slot="icon">tune</Icon> Tab 3
              </SecondaryTab>
            </Tabs>
          </Row>

          <Row direction="column" className="flex-1 gap-2">
            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/menu.md" />
              <Label>Menu</Label>
            </Row>
            <div className="relative">
              <FilledButton
                id="menu-trigger"
                onClick={() => {
                  const menu = document.querySelector("#menu-example");
                  if (menu instanceof MdMenu) {
                    menu.open = !menu.open;
                  }
                }}
              >
                <Icon slot="icon">menu</Icon>
                <span>Menu trigger</span>
              </FilledButton>

              <Menu hasOverflow id="menu-example" anchor="menu-trigger">
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
                <SubMenu>
                  <MenuItem slot="item">
                    <span>Submenu</span>
                    <Icon slot="end">arrow_right</Icon>
                  </MenuItem>
                  <Menu slot="menu">
                    <MenuItem>SubItem 1</MenuItem>
                    <MenuItem>SubItem 2</MenuItem>
                    <MenuItem>SubItem 3</MenuItem>
                  </Menu>
                </SubMenu>
                <MenuItem>Item 3</MenuItem>
                <MenuItem>Item 4</MenuItem>
              </Menu>
            </div>
          </Row>
        </Row>
      </Surface>
    </div>
  );
};
