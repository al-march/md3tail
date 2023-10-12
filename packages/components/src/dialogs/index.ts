import { PluginAPI } from "tailwindcss/types/config";
import { DialogStyles } from "./dialog"

export const Dialogs = (api: PluginAPI) => {
  return {
    ...DialogStyles(api),
  }
}