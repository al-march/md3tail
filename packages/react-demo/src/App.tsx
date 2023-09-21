import { Button } from "./lib/buttons";

enum Themes {
  LIGHT = "light",
  DARK = "dark",
}

const PencilIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.06 3.58988L20.41 4.93988C21.2 5.71988 21.2 6.98988 20.41 7.76988L7.18 20.9999H3V16.8199L13.4 6.40988L16.23 3.58988C17.01 2.80988 18.28 2.80988 19.06 3.58988ZM5 18.9999L6.41 19.0599L16.23 9.22988L14.82 7.81988L5 17.6399V18.9999Z"
      fill="currentColor"
    />
  </svg>
);

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
      <header className="flex gap-4 items-center bg-surface elevation-3 p-2 sticky top-0">
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
