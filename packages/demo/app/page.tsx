import { Surface } from "./components/ui/surface/Surface";

const installNpm = `npm i @md3tail/theme`;
const installYarn = `yarn add @md3tail/theme`;
const installPnpm = `pnpm i @md3tail/theme`;
const installBun = `bun i @md3tail/theme`;

const usageCode = `
import type { Config } from 'tailwindcss';
import { md3Theme } from '@md3tail/theme';

const config: Config = { 
  content: [],
  plugins: [md3Theme()],
};
export default config;
`.trim();

export default function Home() {
  return (
    <div className="px-2 py-4">
      <h1 className="title-medium mb-4">Install</h1>

      <Surface className="my-2">
        <code>
          <pre>{installNpm}</pre>
        </code>
      </Surface>

      <Surface className="my-2">
        <code>
          <pre>{installPnpm}</pre>
        </code>
      </Surface>

      <Surface className="my-2">
        <code>
          <pre>{installYarn}</pre>
        </code>
      </Surface>

      <Surface className="my-2">
        <code>
          <pre>{installBun}</pre>
        </code>
      </Surface>

      <h2 className="title-medium mb-4">Usage</h2>
      <p>Just add plugin to pligin's list</p>

      <Surface className="my-2">
        <code>
          <pre>{usageCode}</pre>
        </code>
      </Surface>
    </div>
  );
}
