import { Divider, Icon, TextButton } from "@md3tail/react";
import { Surface } from "./components/ui/surface/Surface";
import { Title } from "./pages/components/shared/typography";
import Link from "next/link";

const installTheme = `npm i @md3tail/theme`;

const usageThemeCode = `
import type { Config } from 'tailwindcss';
import { md3Theme } from '@md3tail/theme';

const config: Config = { 
  content: [],
  plugins: [md3Theme()],
};
export default config;
`.trim();

const installReact = `npm i @md3tail/react`;

const usageReact = `
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
`.trim();

export default function Home() {
  return (
    <div className="px-2 py-4">
      <Title>Tailwind plugin</Title>
      <br />
      <Divider></Divider>
      <br />
      <h2 className="title-medium mb-4">Install</h2>

      <Surface className="my-2">
        <code>
          <pre>{installTheme}</pre>
        </code>
      </Surface>

      <h2 className="title-medium mb-4">Usage</h2>
      <p>Just add plugin to pligin's list</p>

      <Surface className="my-2">
        <code>
          <pre className="overflow-y-auto">{usageThemeCode}</pre>
        </code>
      </Surface>

      <br />

      <Title>React components</Title>
      <br />
      <Divider></Divider>
      <br />
      <h2 className="title-medium mb-4">Install</h2>

      <Surface className="my-2">
        <code>
          <pre>{installReact}</pre>
        </code>
      </Surface>

      <h2 className="title-medium mb-4">Usage</h2>

      <p>
        <Link
          className="text-primary label-medium"
          href="https://www.npmjs.com/package/@md3tail/react"
          target="_blank"
        >
          @md3tail/react
        </Link>{" "}
        is a wrapper around Material Desingn 3 components
      </p>

      <Surface className="my-2">
        <code>
          <pre className="overflow-y-auto">{usageReact}</pre>
        </code>
      </Surface>

      <Link href="pages/components">
        <TextButton>
          <Icon slot="icon">gallery_thumbnail</Icon> Preview
        </TextButton>
      </Link>
    </div>
  );
}
