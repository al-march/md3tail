import { PluginAPI } from "tailwindcss/types/config";
import { ChipStyles } from "./chip"

export const Chips = (api: PluginAPI) => {
  return {
    ...ChipStyles(api),
  }
}