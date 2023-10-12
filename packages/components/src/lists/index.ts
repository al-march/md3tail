import { PluginAPI } from "tailwindcss/types/config";
import { ListStyles } from "./list"

export const Lists = (api: PluginAPI) => {
  return {
    ...ListStyles()
  }
}