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
    <div className="App">
      <div className="flex gap-4">
        <button className="btn btn-elevated" onClick={toggleTheme}>
          Toggle theme
        </button>
      </div>

      <h2 className="text-2xl pb-4">Buttons</h2>

      <section className="flex gap-2">
        <button className="btn btn-text">Default</button>
        <button className="btn btn-text btn-with-icon">
          <span className="material-symbols-outlined">settings</span>
          Icon
        </button>

        <button className="btn btn-text" disabled>
          Disabled
        </button>
      </section>

      <br />

      <section className="flex gap-2">
        <button className="btn btn-filled">Filled</button>
        <button className="btn btn-filled btn-with-icon">
          <span className="material-symbols-outlined">settings</span>
          Icon
        </button>

        <button className="btn btn-filled" disabled>
          Disabled
        </button>
      </section>

      <br />

      <section className="flex gap-2">
        <button className="btn btn-outlined">Outlined</button>
        <button className="btn btn-outlined btn-with-icon">
          <span className="material-symbols-outlined">settings</span>
          Icon
        </button>

        <button className="btn btn-outlined" disabled>
          Disabled
        </button>
      </section>

      <br />

      <section className="flex gap-2">
        <button className="btn btn-tonal">Tonal</button>
        <button className="btn btn-tonal btn-with-icon">
          <span className="material-symbols-outlined">settings</span>
          Icon
        </button>

        <button className="btn btn-tonal" disabled>
          Disabled
        </button>
      </section>

      <br />

      <section className="flex gap-2">
        <button className="btn btn-elevated">Elevated</button>
        <button className="btn btn-elevated btn-with-icon">
          <span className="material-symbols-outlined">settings</span>
          Icon
        </button>

        <button className="btn btn-elevated" disabled>
          Disabled
        </button>
      </section>

      <br />

      <div className="flex flex-col gap-4">
        <section className="flex gap-2">
          <p className="text-primary text-lg font-semibold">text primary</p>
          <p className="text-secondary text-lg font-semibold">text secondary</p>
          <p className="text-tertiary text-lg font-semibold">text tertiary</p>
        </section>

        <section className="flex gap-2">
          <ColorfullBox bgClass="bg-primary" textClass="text-on-primary" />
          <ColorfullBox bgClass="bg-secondary" textClass="text-on-secondary" />
          <ColorfullBox bgClass="bg-tertiary" textClass="text-on-tertiary" />
          <ColorfullBox bgClass="bg-error" textClass="text-on-error" />
        </section>
        <section className="flex gap-2">
          <ColorfullBox bgClass="bg-on-primary" textClass="text-primary" />
          <ColorfullBox bgClass="bg-on-secondary" textClass="text-secondary" />
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
