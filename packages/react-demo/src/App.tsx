import { useEffect, useRef, useState } from "react";
import { Button } from "./lib/buttons";
import { Dialog } from "./lib/dialog";
import { Checkbox } from "./lib/form/checkbox";
import { Radio } from "./lib/form/radio";
import { Switcher } from "./lib/form/switcher";
import { TextField } from "./lib/form/text-input";
import { Tab, Tabs } from "./lib/tabs/Tabs";
import { List } from "./lib/list";

enum Themes {
  LIGHT = "light",
  DARK = "dark",
}

function App() {
  const toggleTheme = () => {
    const theme = document.documentElement.dataset.theme;
    if (theme) {
      const toggled = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
      document.documentElement.dataset.theme = toggled;
    }
  };

  return (
    <div>
      <header className="flex gap-4 items-center bg-surface elevation-3 p-2 sticky top-0 z-10">
        <Button className="h-[40px]" icon="light_mode" onClick={toggleTheme} />
      </header>

      <main className="p-4">
        <section className="flex flex-col gap-2 rounded-[16px] border border-outline-variant bg-surface p-4 my-4">
          <div className="flex gap-8 items-start">
            <div className="flex flex-col gap-2">
              <h2 className="body-large">Buttons</h2>
              <section className="flex gap-2">
                <Button>Button</Button>
                <Button icon="settings">Icon</Button>
                <Button disabled>Icon</Button>
                <Button icon="settings" disabled>
                  Icon
                </Button>
              </section>

              <section className="flex gap-2">
                <Button mdType="filled">Button</Button>
                <Button mdType="filled" icon="settings">
                  Icon
                </Button>
                <Button mdType="filled" disabled>
                  Icon
                </Button>
                <Button mdType="filled" icon="settings" disabled>
                  Icon
                </Button>
              </section>

              <section className="flex gap-2">
                <Button mdType="outlined">Button</Button>
                <Button mdType="outlined" icon="settings">
                  Icon
                </Button>
                <Button mdType="outlined" disabled>
                  Icon
                </Button>
                <Button mdType="outlined" icon="settings" disabled>
                  Icon
                </Button>
              </section>

              <section className="flex gap-2">
                <Button mdType="tonal">Button</Button>
                <Button mdType="tonal" icon="settings">
                  Icon
                </Button>
                <Button mdType="tonal" disabled>
                  Icon
                </Button>
                <Button mdType="tonal" icon="settings" disabled>
                  Icon
                </Button>
              </section>

              <section className="flex gap-2">
                <Button mdType="elevated">Button</Button>
                <Button mdType="elevated" icon="settings">
                  Icon
                </Button>
                <Button mdType="elevated" disabled>
                  Icon
                </Button>
                <Button mdType="elevated" icon="settings" disabled>
                  Icon
                </Button>
              </section>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="body-large">Icon buttons</h2>
              <section className="flex gap-2">
                <button className="icon-btn">
                  <span className="material-symbols-outlined">settings</span>
                </button>

                <button className="icon-btn" disabled>
                  <span className="material-symbols-outlined">settings</span>
                </button>
              </section>

              <section className="flex gap-2">
                <button className="icon-btn icon-btn-filled">
                  <span className="material-symbols-outlined">settings</span>
                </button>

                <button className="icon-btn icon-btn-filled" disabled>
                  <span className="material-symbols-outlined">settings</span>
                </button>
              </section>

              <section className="flex gap-2">
                <button className="icon-btn icon-btn-outlined">
                  <span className="material-symbols-outlined">settings</span>
                </button>

                <button className="icon-btn icon-btn-outlined" disabled>
                  <span className="material-symbols-outlined">settings</span>
                </button>
              </section>

              <section className="flex gap-2">
                <button className="icon-btn icon-btn-tonal">
                  <span className="material-symbols-outlined">settings</span>
                </button>

                <button className="icon-btn icon-btn-tonal" disabled>
                  <span className="material-symbols-outlined">settings</span>
                </button>
              </section>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="body-large">Fabs</h2>
              <section className="flex gap-2">
                <button className="fab fab-small">
                  <span className="material-symbols-outlined">edit</span>
                </button>

                <button className="fab fab-small fab-primary">
                  <span className="material-symbols-outlined">edit</span>
                </button>

                <button className="fab fab-small fab-secondary">
                  <span className="material-symbols-outlined">edit</span>
                </button>

                <button className="fab fab-small fab-tertiary">
                  <span className="material-symbols-outlined">edit</span>
                </button>

                <button className="fab fab-small fab-primary" disabled>
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </section>

              <section className="flex gap-2">
                <button className="fab">
                  <span className="material-symbols-outlined">edit</span>
                </button>

                <button className="fab fab-primary">
                  <span className="material-symbols-outlined">edit</span>
                </button>

                <button className="fab fab-secondary">
                  <span className="material-symbols-outlined">edit</span>
                </button>

                <button className="fab fab-tertiary">
                  <span className="material-symbols-outlined">edit</span>
                </button>

                <button className="fab fab-primary" disabled>
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </section>

              <section className="flex gap-2">
                <button className="fab fab-large">
                  <span className="material-symbols-outlined">edit</span>
                </button>

                <button className="fab fab-large fab-primary">
                  <span className="material-symbols-outlined">edit</span>
                </button>

                <button className="fab fab-large fab-secondary">
                  <span className="material-symbols-outlined">edit</span>
                </button>

                <button className="fab fab-large fab-tertiary">
                  <span className="material-symbols-outlined">edit</span>
                </button>

                <button className="fab fab-large fab-primary" disabled>
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </section>

              <section className="flex gap-2">
                <button className="fab fab-extended">
                  <span className="material-symbols-outlined">edit</span>
                  Label
                </button>

                <button className="fab fab-extended fab-primary">
                  <span className="material-symbols-outlined">edit</span>
                  Label
                </button>

                <button className="fab fab-extended fab-secondary">
                  <span className="material-symbols-outlined">edit</span>
                  Label
                </button>

                <button className="fab fab-extended fab-tertiary">
                  <span className="material-symbols-outlined">edit</span>
                  Label
                </button>

                <button className="fab fab-extended fab-primary" disabled>
                  <span className="material-symbols-outlined">edit</span>
                  Label
                </button>
              </section>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2 rounded-[16px] border border-outline-variant bg-surface p-4 my-4">
          <div className="flex gap-2">
            <TextField
              label="Label"
              supportText="Supporting text"
              placeholder="placeholder"
            />
            <TextField
              label="Label"
              supportText="Supporting text"
              error
              placeholder="placeholder"
            />
            <TextField
              label="Label"
              defaultValue="123"
              placeholder="placeholder"
            />
            <TextField label="Label" disabled placeholder="placeholder" />
          </div>

          <div className="flex gap-2">
            <TextField
              label="Label"
              appearance="outline"
              supportText="Supporting text"
              placeholder="placeholder"
            />
            <TextField
              label="Label"
              appearance="outline"
              supportText="Supporting text"
              error
              placeholder="placeholder"
            />
            <TextField
              label="Label"
              appearance="outline"
              defaultValue="123"
              placeholder="placeholder"
            />
            <TextField
              label="Label"
              appearance="outline"
              disabled
              placeholder="placeholder"
            />
          </div>

          <div className="flex gap-2">
            <TextField
              label="Label"
              leading={
                <span className="material-symbols-outlined">search</span>
              }
              trailing={
                <span className="material-symbols-outlined">cancel</span>
              }
              appearance="outline"
              supportText="Supporting text"
              placeholder="placeholder"
            />
            <TextField
              label="Label"
              leading={
                <span className="material-symbols-outlined">search</span>
              }
              trailing={
                <span className="material-symbols-outlined">cancel</span>
              }
              appearance="outline"
              supportText="Supporting text"
              error
              placeholder="placeholder"
            />
            <TextField
              label="Label"
              leading={
                <span className="material-symbols-outlined">search</span>
              }
              trailing={
                <span className="material-symbols-outlined">cancel</span>
              }
              appearance="outline"
              defaultValue="123"
              placeholder="placeholder"
            />
            <TextField
              label="Label"
              leading={
                <span className="material-symbols-outlined">search</span>
              }
              trailing={
                <span className="material-symbols-outlined">cancel</span>
              }
              appearance="outline"
              disabled
              placeholder="placeholder"
            />
          </div>
        </section>

        <section className="flex gap-4 rounded-[16px] border border-outline-variant bg-surface p-4 my-4">
          <div className="flex flex-col gap-4">
            <Tabs type="primary" active={0}>
              <Tab icon="favorite">Sales</Tab>
              <Tab icon="payments">Payments</Tab>
              <Tab icon="person">Profile</Tab>
            </Tabs>

            <Tabs type="secondary" active={1}>
              <Tab icon="favorite">Sales</Tab>
              <Tab icon="payments">Payments</Tab>
              <Tab icon="person">Profile</Tab>
            </Tabs>

            <Tabs type="primary" active={2}>
              <Tab icon="favorite" />
              <Tab icon="payments" />
              <Tab icon="person" />
            </Tabs>

            <Tabs type="secondary" active={2}>
              <Tab icon="favorite" />
              <Tab icon="payments" />
              <Tab icon="person" />
            </Tabs>
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-[16px] border border-outline-variant bg-surface p-4 my-4">
          <div className="flex gap-4">
            <Switcher />
            <Switcher checked />
            <Switcher disabled />
            <Switcher disabled checked />
          </div>

          <div className="flex gap-4">
            <Switcher withIcon />
            <Switcher withIcon checked />
            <Switcher withIcon disabled />
            <Switcher withIcon disabled checked />
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-[16px] border border-outline-variant bg-surface p-4 my-4">
          <div className="flex gap-4">
            <Radio name="unchecked" />
            <Radio name="unchecked" />
            <Radio name="unchecked" />
            <Radio name="unchecked" disabled />
          </div>

          <div className="flex gap-4">
            <Radio name="checked" />
            <Radio name="checked" />
            <Radio name="checked" />
            <Radio name="checked" defaultChecked disabled />
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-[16px] border border-outline-variant bg-surface p-4 my-4">
          <div className="flex gap-4">
            <Checkbox error />
            <Checkbox error indeterminate />
            <Checkbox error disabled />
          </div>

          <div className="flex gap-4">
            <Checkbox />
            <Checkbox indeterminate />
            <Checkbox disabled />
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-[16px] border border-outline-variant bg-surface p-4 my-4">
          <div>
            <DialogButton />
          </div>
        </section>

        <div className="flex flex-col gap-4">
          <section className="flex gap-2">
            <p className="text-primary text-lg font-semibold">text primary</p>
            <p className="text-secondary text-lg font-semibold">
              text secondary
            </p>
            <p className="text-tertiary text-lg font-semibold">text tertiary</p>
          </section>

          <section className="flex gap-2">
            <ColorfullBox bgClass="bg-primary" textClass="text-on-primary" />
            <ColorfullBox
              bgClass="bg-secondary"
              textClass="text-on-secondary"
            />
            <ColorfullBox bgClass="bg-tertiary" textClass="text-on-tertiary" />
            <ColorfullBox bgClass="bg-error" textClass="text-on-error" />
          </section>
          <section className="flex gap-2">
            <ColorfullBox bgClass="bg-on-primary" textClass="text-primary" />
            <ColorfullBox
              bgClass="bg-on-secondary"
              textClass="text-secondary"
            />
            <ColorfullBox bgClass="bg-on-tertiary" textClass="text-tertiary" />
            <ColorfullBox bgClass="bg-on-error" textClass="text-error" />
          </section>
          <section className="flex gap-2">
            <ColorfullBox
              bgClass="bg-primary-container"
              textClass="text-on-primary-container"
            />
            <ColorfullBox
              bgClass="bg-secondary-container"
              textClass="text-on-secondary-container"
            />
            <ColorfullBox
              bgClass="bg-tertiary-container"
              textClass="text-on-tertiary-container"
            />
            <ColorfullBox
              bgClass="bg-error-container"
              textClass="text-on-error-container"
            />
          </section>
          <section className="flex gap-2">
            <ColorfullBox
              bgClass="bg-surface-container-lowest"
              textClass="text-on-surface"
            />
            <ColorfullBox
              bgClass="bg-surface-container-low"
              textClass="text-on-surface"
            />
            <ColorfullBox
              bgClass="bg-surface-container-high"
              textClass="text-on-surface"
            />
            <ColorfullBox
              bgClass="bg-surface-container-highest"
              textClass="text-on-surface"
            />
          </section>

          <section className="flex gap-4">
            <div className="h-40 w-40 rounded-[16px] flex items-center justify-center elevation-1">
              elevation-1
            </div>
            <div className="h-40 w-40 rounded-[16px] flex items-center justify-center elevation-2">
              elevation-2
            </div>
            <div className="h-40 w-40 rounded-[16px] flex items-center justify-center elevation-3">
              elevation-3
            </div>
            <div className="h-40 w-40 rounded-[16px] flex items-center justify-center elevation-4">
              elevation-4
            </div>
            <div className="h-40 w-40 rounded-[16px] flex items-center justify-center elevation-5">
              elevation-5
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

type ColorfullBoxProps = {
  bgClass: string;
  textClass: string;
};

const ColorfullBox = (props: ColorfullBoxProps) => {
  return (
    <div
      className={
        "h-10 w-[270px] flex items-center justify-center " + props.bgClass
      }
    >
      <span className={props.textClass}>{props.bgClass}</span>
    </div>
  );
};

const DialogButton = () => {
  const ref = useRef<HTMLDialogElement>(null);

  function open() {
    ref.current?.showModal();
  }

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target;
      if (target === ref.current) {
        ref.current?.close();
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Button onClick={open}>Open Dialog</Button>

      <Dialog dialogRef={ref}>
        <div className="dialog-content elevation-2">
          <h4 className="dialog-title pb-4">Basic dialog title</h4>
          <p>
            A dialog is a type of modal window that appears in front of app
            content to provide critical information, or prompt for a decision to
            be made.
          </p>

          <br />

          <List>
            <List.Item
              className="px-0"
              leading={
                <div className="flex items-center justify-center h-[40px] w-[40px] bg-primary-container rounded-full title-medium">
                  A
                </div>
              }
              trailing={
                <div className="flex gap-3 items-center">
                  <small>100+</small>
                  <Checkbox />
                </div>
              }
            >
              <p className="body-large">List item</p>
            </List.Item>

            <List.Item className="p-0">
              <hr className="bg-outline-variant h-[2px]" />
            </List.Item>

            <List.Item
              className="px-0"
              leading={
                <div className="flex items-center justify-center h-[40px] w-[40px] bg-primary-container rounded-full title-medium">
                  A
                </div>
              }
              trailing={
                <div className="flex gap-3 items-center">
                  <small>100+</small>
                  <Checkbox />
                </div>
              }
            >
              <p className="body-large">List item</p>
            </List.Item>

            <List.Item className="p-0">
              <hr className="bg-outline-variant h-[2px]" />
            </List.Item>

            <List.Item
              className="px-0"
              leading={
                <div className="flex items-center justify-center h-[40px] w-[40px] bg-primary-container rounded-full title-medium">
                  A
                </div>
              }
              trailing={
                <div className="flex gap-3 items-center">
                  <small>100+</small>
                  <Checkbox />
                </div>
              }
            >
              <p className="body-large">List item</p>
            </List.Item>
          </List>

          <br />

          <div className="dialog-actions dialog-actions-end">
            <Button onClick={() => ref.current?.close()}>Action 1</Button>
            <Button onClick={() => ref.current?.close()}>Action 2</Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};
