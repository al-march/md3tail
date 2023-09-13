import { CSSRuleObject } from "tailwindcss/types/config";

export const ButtonStyles: CSSRuleObject = {
  ".btn": {
    padding: ".5rem 1rem",
    borderRadius: ".25rem",
    fontWeight: "600",
    fontSize: "14px",

    "&-blue": {
      backgroundColor: "#3490dc",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#2779bd",
      },
    },
    "&-red": {
      backgroundColor: "#e3342f",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#cc1f1a",
      },
    },
  },
}