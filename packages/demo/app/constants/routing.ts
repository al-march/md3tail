type RouteParams = {
  label: string;
  path: string;
  icon: string;
};

export const ROUTES: RouteParams[] = [
  {
    label: "Home",
    path: "/",
    icon: "home",
  },
  {
    label: "Colors",
    path: "/pages/colors",
    icon: "format_paint",
  },
  {
    label: "Typography",
    path: "/pages/typography",
    icon: "custom_typography",
  },
  {
    label: "Elevation",
    path: "/pages/elevation",
    icon: "invert_colors",
  },
];