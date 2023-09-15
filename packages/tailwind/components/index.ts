import { PluginAPI } from "tailwindcss/types/config";
import { ButtonStyles } from "./button";

export const AddComponents = (theme: PluginAPI['theme']) => ({ ...ButtonStyles({ theme } as PluginAPI) });
