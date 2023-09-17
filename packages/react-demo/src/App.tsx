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
      <button className="btn btn-elevated" onClick={toggleTheme}>
        Toggle theme
      </button>
      <br />

      <div className="flex flex-col gap-4">
        <section className="flex gap-2">
          <p className="text-primary text-lg font-semibold">text primary</p>
          <p className="text-secondary text-lg font-semibold">text secondary</p>
          <p className="text-tertiary text-lg font-semibold">text tertiary</p>
        </section>
        <section className="flex gap-2">
          <div className="h-10 w-10 flex items-center justify-center elevation-1 bg-primary">
            <p className="text-on-primary">O</p>
          </div>
          <div className="h-10 w-10 flex items-center justify-center elevation-1 bg-secondary">
            <p className="text-on-secondary">O</p>
          </div>
          <div className="h-10 w-10 flex items-center justify-center elevation-1 bg-tertiary">
            <p className="text-on-tertiary">O</p>
          </div>
          <div className="h-10 w-10 flex items-center justify-center elevation-1 bg-surface">
            <p className="text-on-surface">O</p>
          </div>
          <div className="h-10 w-10 flex items-center justify-center elevation-1 bg-surface-container">
            <p className="text-on-surface">O</p>
          </div>
          <div className="h-10 w-10 flex items-center justify-center elevation-1 bg-surface-container-lowest">
            <p className="text-on-surface">O</p>
          </div>
          <div className="h-10 w-10 flex items-center justify-center elevation-1 bg-surface-container-low">
            <p className="text-on-surface">O</p>
          </div>
          <div className="h-10 w-10 flex items-center justify-center elevation-1 bg-surface-container-high">
            <p className="text-on-surface">O</p>
          </div>
          <div className="h-10 w-10 flex items-center justify-center elevation-1 bg-surface-container-highest">
            <p className="text-on-surface">O</p>
          </div>
        </section>

        <section className="flex gap-2">
          <div className="h-10 w-10 elevation-0"></div>
          <div className="h-10 w-10 elevation-1"></div>
          <div className="h-10 w-10 elevation-2"></div>
          <div className="h-10 w-10 elevation-3"></div>
          <div className="h-10 w-10 elevation-4"></div>
          <div className="h-10 w-10 elevation-5"></div>
          <div className="h-10 w-10 elevation-6"></div>
          <div className="h-10 w-10 elevation-7"></div>
          <div className="h-10 w-10 elevation-8"></div>
          <div className="h-10 w-10 elevation-9"></div>
          <div className="h-10 w-10 elevation-10"></div>
        </section>
      </div>
    </div>
  );
}

export default App;
