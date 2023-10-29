"use client";

import { Icon, Ripple } from "@md3tail/react";
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
  const classes = clsx(
    "inline-flex w-full items-center justify-between justify-evenly p-1 gap-1",
    className
  );
  const [state, setState] = useState<NavigationBarCtx["state"]>({
    active,
    buttons: [],
  });

  function initButton(btn: HTMLButtonElement) {
    const buttons = state.buttons;
    const length = buttons.push(btn);
    setTimeout(() => {
      setState((state) => ({ ...state, buttons }));
    });
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
  }, []);

  function setActive(event: MouseEvent<HTMLButtonElement>) {
    if (typeof value === "number") {
      context.setActive(value);
      onClick(event);
    }
  }

  return (
    <button
      onClick={setActive}
      className={clsx(
        "flex flex-col p-2 items-center relative flex-1 w-full rounded",
        className
      )}
      ref={button}
      value={value}
      {...others}
    >
      <div
        className={clsx(
          "px-6 rounded-2xl transition-colors duration-200 relative",
          {
            "bg-primary": active,
            "text-on-primary": active,
          }
        )}
      >
        <Icon>{icon}</Icon>
        <Ripple />
      </div>
      <label className="label-medium">{label}</label>
    </button>
  );
};

NavigationBar.Button = NavigationBarButton;
