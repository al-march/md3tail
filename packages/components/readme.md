# Material Design 3 components

md3tail components is an open source plugin based on [tailwindcss](https://tailwindcss.com/) and [md3tail](https://www.npmjs.com/package/@md3tail/theme).

* It is a pre alpha, I strongly don't recommend using this anywhere until it gets a major version 1!

## Demo

Link to demo: [https://md3tail-demo.vercel.app](https://md3tail-demo.vercel.app/pages/colors)

## Usage
Add plugin to plugin's list with @md3tail/theme

```
import type { Config } from 'tailwindcss';
import { md3Theme } from '@md3tail/theme';
import { md3Components } from '@md3tail/components';

const config: Config = { 
  content: [],
  plugins: [md3Theme(), md3Components],
};
export default config;
```

## Sources

[Figma](https://www.figma.com/community/file/1035203688168086460)