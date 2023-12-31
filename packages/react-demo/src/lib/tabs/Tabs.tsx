import clsx from "clsx";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type TabsProps = {
  active?: number;
  children?: ReactNode;
  className?: string;
  type?: "primary" | "secondary";

  onValueChange?: (activeTab: number) => void;
};

type TabsState = {
  state: {
    active: number;
    tabs: HTMLElement[];
  };
  setActive: (value: number) => void;
  initTab: (ref: HTMLElement) => number;
};

const TabsContext = createContext<TabsState>({
  state: {
    active: 1,
    tabs: [],
  },
  setActive: () => {},
  initTab: () => 0,
});

export function Tabs({
  children,
  active = 0,
  type = "primary",
  onValueChange = () => {},
  className,
}: TabsProps) {
  const classes = clsx(
    "tabs",
    {
      "tabs-primary": type === "primary",
      "tabs-secondary": type === "secondary",
    },
    className
  );
  const [state, setState] = useState<TabsState["state"]>({
    active,
    tabs: [],
  });

  function setActive(tab: number) {
    setState((state) => ({ ...state, active: tab }));
    onValueChange(tab);
  }

  function initTab(tabRef: HTMLElement) {
    const tabs = state.tabs;
    const length = tabs.push(tabRef);
    setState((state) => ({ ...state, tabs }));
    return length - 1;
  }

  return (
    <TabsContext.Provider
      value={{
        state,
        setActive,
        initTab,
      }}
    >
      <div className={classes}>
        {children}

        <TabIndicator />
      </div>
    </TabsContext.Provider>
  );
}

export type TabProps = {
  className?: string;
  children?: ReactNode;
  icon?: string;
};

export function Tab({ className, icon, children }: TabProps) {
  const button = useRef<HTMLButtonElement>(null);
  const [value, setValue] = useState<number>();
  const tabs = useContext(TabsContext);
  const active = useMemo(() => value === tabs.state.active, [tabs, value]);

  useEffect(() => {
    const tabRef = button.current;
    if (tabRef) {
      setValue((value) => {
        if (typeof value === "number") {
          return value;
        } else {
          return tabs.initTab(tabRef);
        }
      });
    }
  }, [button]);

  function setActive() {
    if (typeof value === "number") {
      tabs.setActive(value);
    }
  }

  const classes = clsx(
    "tabs-item",
    {
      "tabs-item-selected": active,
    },
    className
  );

  return (
    <button ref={button} type="button" onClick={setActive} className={classes}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {children}
    </button>
  );
}

function TabIndicator() {
  const tabs = useContext(TabsContext);
  const [activeTab, setActiveTab] = useState(getActiveTab());
  const [tabWidth, setTabWidth] = useState(getActiveTab()?.scrollWidth);
  const [offset, setOffset] = useState(getActiveTab()?.offsetLeft);

  /**
   * Get the right width and offset of current tab
   */
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const size = entry.borderBoxSize[0].inlineSize;
        const tab = entry.target;
        if (tab === activeTab && tab instanceof HTMLElement) {
          setTabWidth(size);
          setOffset(tab.offsetLeft);
        }
      }
    });

    if (activeTab) {
      resizeObserver.observe(activeTab);
    }
    return () => resizeObserver.disconnect();
  }, [activeTab]);

  useLayoutEffect(() => {
    setActiveTab(getActiveTab());
  }, [tabs]);

  function getActiveTab() {
    return tabs.state.tabs[tabs.state.active];
  }

  if (!activeTab) {
    return null;
  } else {
    return (
      <div
        className="tabs-indicator"
        style={{
          width: tabWidth + "px",
          left: offset + "px",
        }}
      />
    );
  }
}
