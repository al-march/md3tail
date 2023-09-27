import clsx from "clsx";
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  MouseEvent,
} from "react";

type NavigationBarCtx = {
  state: {
    active: number;
    buttons: HTMLButtonElement[];
  };
  initButton: (btn: HTMLButtonElement) => number;
  setActive: (v: number) => void;
};

const defaultContext: NavigationBarCtx = {
  state: {
    active: 0,
    buttons: [],
  },
  initButton: () => 0,
  setActive: () => {},
};

const NavigationBarCtx = createContext<NavigationBarCtx>(defaultContext);

export interface NavigationBarProps extends HTMLAttributes<HTMLDivElement> {
  active?: number;
  onValueChange?: (value: number) => void;
}

export const NavigationBar = ({
  className,
  children,
  active = 0,
  onValueChange = () => {},
  ...others
}: NavigationBarProps) => {
  const classes = clsx("md-navigation-bar", className);
  const [state, setState] = useState<NavigationBarCtx["state"]>({
    active,
    buttons: [],
  });

  function initButton(btn: HTMLButtonElement) {
    const buttons = state.buttons;
    const length = buttons.push(btn);
    setState((state) => ({ ...state, buttons }));
    return length - 1;
  }

  function setActive(active: number) {
    setState((state) => ({ ...state, active }));
    onValueChange(active);
  }

  return (
    <NavigationBarCtx.Provider
      value={{
        state,
        initButton,
        setActive,
      }}
    >
      <div className={classes} {...others}>
        {children}
      </div>
    </NavigationBarCtx.Provider>
  );
};

export interface NavigationBarButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: ReactNode;
}

const NavigationBarButton = ({
  className,
  children,
  label,
  icon,
  onClick = () => {},
  ...others
}: NavigationBarButtonProps) => {
  const context = useContext(NavigationBarCtx);

  const [value, setValue] = useState<number>();
  const button = useRef<HTMLButtonElement>(null);
  const active = useMemo(
    () => value === context.state.active,
    [context, value]
  );

  useEffect(() => {
    const ref = button.current;
    if (ref) {
      setValue((value) => {
        if (typeof value === "number") {
          return value;
        } else {
          return context.initButton(ref);
        }
      });
    }
  }, [button]);

  function setActive(event: MouseEvent<HTMLButtonElement>) {
    if (typeof value === "number") {
      context.setActive(value);
      onClick(event);
    }
  }

  const classes = clsx(
    "md-navigation-bar-button",
    {
      "md-navigation-bar-button-active": active,
    },
    className
  );

  return (
    <button
      onClick={setActive}
      ref={button}
      className={classes}
      value={value}
      {...others}
    >
      <span className="md-navigation-bar-button-icon">{icon}</span>
      <label className="md-navigation-bar-button-label">{label}</label>
    </button>
  );
};

NavigationBar.Button = NavigationBarButton;
