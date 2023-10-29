"use client";

import { FC, useEffect, useState } from "react";

export const HydrationStop: FC = () => {
  const [isHydrating, setIsHidrating] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setIsHidrating(false);
      }, 400);
    }
  }, []);

  if (!isHydrating) {
    return null;
  }

  return (
    <div
      id="globalLoader"
      className="bg-surface-dim transition-colors duration-300 fixed top-0 left-0 bottom-0 w-full z-50 flex items-center justify-center"
    >
      <span className="loader" />
    </div>
  );
};
