# Material Design 3 React

<img src="https://raw.githubusercontent.com/al-march/md3tail/main/packages/react/preview.jpg" alt="md3tail react">

md3tail is an open source plugin based on [tailwindcss](https://tailwindcss.com/). It's built with [Material Design 3](https://m3.material.io/) and has the MIT license so you can use it included in a commercial project.

The md3tail/react library is a wrapper around [Lit](https://lit.dev/) web components that implement Material Design UI elements.

## Demo

Link to demo: [https://md3tail.vercel.app](https://md3tail.vercel.app/)

## Installation

Install the package:

`npm i @md3tail/react`

## Usage

```
import {
  TextButton,
  Radio,
  Row,
} from "@md3tail/react";

export default function Page() {
  return (
    <Row className="w-full" items="center">
      <TextButton>
        <Icon slot="icon">favorite</Icon>
        <span>Icon</span>
      </TextButton>
    </Row>
  );
}
```

## Sources

[Figma](https://www.figma.com/community/file/1035203688168086460)
[Material Design 3](https://m3.material.io/)
[Material Web](https://github.com/material-components/material-web/tree/main)
