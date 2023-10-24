# Material Design 3 plugin tailwindcss

<img src="https://raw.githubusercontent.com/al-march/md3tail/main/packages/theme/preview.jpg" alt="md3tail theme">

md3tail theme is an open source plugin based on [tailwindcss](https://tailwindcss.com/). It's built with [Material Design 3](https://m3.material.io/) and has the MIT license so you can use it included in a commercial project.

The plugin generates schema tokens by primary color, creates CSS classes for colors, surfaces, states, elevations and others staff according Material Design 3

## Demo

Link to demo: [https://md3tail-demo.vercel.app](https://md3tail-demo.vercel.app/pages/colors)

## Installation

Install the package:

`npm i @md3tail/theme`

## Usage

Add plugin to plugin's list

```
import type { Config } from 'tailwindcss';
import { md3Theme } from '@md3tail/theme';

const config: Config = {
  content: [],
  plugins: [md3Theme()],
};
export default config;
```

## Sources

[Figma](https://www.figma.com/community/file/1035203688168086460)
