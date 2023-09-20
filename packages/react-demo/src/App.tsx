import { Button } from "./lib/buttons";

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
      <header className="flex gap-4 items-center elevation-3 p-2">
        <Button className="h-[40px]" icon="light_mode" onClick={toggleTheme} />
      </header>

      <main className="p-4">
        <section className="flex flex-col gap-2 rounded-[16px] border border-outline-variant bg-surface p-4 my-4">
          <h2 className="headline-large">Buttons</h2>

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
