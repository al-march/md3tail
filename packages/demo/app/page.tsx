import clsx from "clsx";
import { HTMLAttributes } from "react";

const Surface = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const classes = clsx(
    "flex flex-col gap-4 rounded-[16px] border border-outline-variant bg-surface p-4 my-4 overflow-hidden overflow-x-auto",
    className
  );
  return <section className={classes} {...props} />;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-stretch p-24">
      <Surface className="w-full">
        <h2 className="title-large">Surfaces</h2>
        <div className="flex gap-2">
          <div className="h-40 w-40 rounded bg-surface"></div>
          <div className="h-40 w-40 rounded bg-surface-container"></div>
          <div className="h-40 w-40 rounded bg-surface-container-lowest"></div>
          <div className="h-40 w-40 rounded bg-surface-container-low"></div>
          <div className="h-40 w-40 rounded bg-surface-container-high"></div>
          <div className="h-40 w-40 rounded bg-surface-container-highest"></div>
        </div>

        <h2 className="title-large">Elevations</h2>
        <div className="flex gap-4">
          <div className="h-40 w-40 bg-surface rounded elevation-0"></div>
          <div className="h-40 w-40 bg-surface rounded elevation-1"></div>
          <div className="h-40 w-40 bg-surface rounded elevation-2"></div>
          <div className="h-40 w-40 bg-surface rounded elevation-3"></div>
          <div className="h-40 w-40 bg-surface rounded elevation-4"></div>
          <div className="h-40 w-40 bg-surface rounded elevation-5"></div>
        </div>
      </Surface>

      <Surface className="w-full">
        <h2 className="title-large">States</h2>
        <div className="flex gap-2">
          <div className="h-40 w-40 rounded bg-primary"></div>
          <div className="h-40 w-40 rounded bg-primary-hover"></div>
          <div className="h-40 w-40 rounded bg-primary-focus"></div>
          <div className="h-40 w-40 rounded bg-primary-drag"></div>
        </div>

        <div className="flex gap-2">
          <div className="h-40 w-40 rounded bg-secondary"></div>
          <div className="h-40 w-40 rounded bg-secondary-hover"></div>
          <div className="h-40 w-40 rounded bg-secondary-focus"></div>
          <div className="h-40 w-40 rounded bg-secondary-drag"></div>
        </div>

        <div className="flex gap-2">
          <div className="h-40 w-40 rounded bg-error"></div>
          <div className="h-40 w-40 rounded bg-error-hover"></div>
          <div className="h-40 w-40 rounded bg-error-focus"></div>
          <div className="h-40 w-40 rounded bg-error-drag"></div>
        </div>

        <div className="flex gap-2">
          <div className="h-40 w-40 rounded bg-surface"></div>
          <div className="h-40 w-40 rounded bg-surface-hover"></div>
          <div className="h-40 w-40 rounded bg-surface-focus"></div>
          <div className="h-40 w-40 rounded bg-surface-drag"></div>
        </div>
      </Surface>

      <Surface className="w-full gap-1">
        <h2 className="title-medium">Primary palette</h2>
        <div className="flex gap-2">
          <div className="h-20 w-20 rounded bg-primary0"></div>
          <div className="h-20 w-20 rounded bg-primary10"></div>
          <div className="h-20 w-20 rounded bg-primary20"></div>
          <div className="h-20 w-20 rounded bg-primary30"></div>
          <div className="h-20 w-20 rounded bg-primary40"></div>
          <div className="h-20 w-20 rounded bg-primary50"></div>
          <div className="h-20 w-20 rounded bg-primary60"></div>
          <div className="h-20 w-20 rounded bg-primary70"></div>
          <div className="h-20 w-20 rounded bg-primary80"></div>
          <div className="h-20 w-20 rounded bg-primary90"></div>
          <div className="h-20 w-20 rounded bg-primary95"></div>
          <div className="h-20 w-20 rounded bg-primary99"></div>
          <div className="h-20 w-20 rounded bg-primary100"></div>
        </div>

        <h2 className="title-medium">Secondary palette</h2>
        <div className="flex gap-2">
          <div className="h-20 w-20 rounded bg-secondary0"></div>
          <div className="h-20 w-20 rounded bg-secondary10"></div>
          <div className="h-20 w-20 rounded bg-secondary20"></div>
          <div className="h-20 w-20 rounded bg-secondary30"></div>
          <div className="h-20 w-20 rounded bg-secondary40"></div>
          <div className="h-20 w-20 rounded bg-secondary50"></div>
          <div className="h-20 w-20 rounded bg-secondary60"></div>
          <div className="h-20 w-20 rounded bg-secondary70"></div>
          <div className="h-20 w-20 rounded bg-secondary80"></div>
          <div className="h-20 w-20 rounded bg-secondary90"></div>
          <div className="h-20 w-20 rounded bg-secondary95"></div>
          <div className="h-20 w-20 rounded bg-secondary99"></div>
          <div className="h-20 w-20 rounded bg-secondary100"></div>
        </div>

        <h2 className="title-medium">Tertiary palette</h2>
        <div className="flex gap-2">
          <div className="h-20 w-20 rounded bg-tertiary0"></div>
          <div className="h-20 w-20 rounded bg-tertiary10"></div>
          <div className="h-20 w-20 rounded bg-tertiary20"></div>
          <div className="h-20 w-20 rounded bg-tertiary30"></div>
          <div className="h-20 w-20 rounded bg-tertiary40"></div>
          <div className="h-20 w-20 rounded bg-tertiary50"></div>
          <div className="h-20 w-20 rounded bg-tertiary60"></div>
          <div className="h-20 w-20 rounded bg-tertiary70"></div>
          <div className="h-20 w-20 rounded bg-tertiary80"></div>
          <div className="h-20 w-20 rounded bg-tertiary90"></div>
          <div className="h-20 w-20 rounded bg-tertiary95"></div>
          <div className="h-20 w-20 rounded bg-tertiary99"></div>
          <div className="h-20 w-20 rounded bg-tertiary100"></div>
        </div>

        <h2 className="title-medium">Error palette</h2>
        <div className="flex gap-2">
          <div className="h-20 w-20 rounded bg-error0"></div>
          <div className="h-20 w-20 rounded bg-error10"></div>
          <div className="h-20 w-20 rounded bg-error20"></div>
          <div className="h-20 w-20 rounded bg-error30"></div>
          <div className="h-20 w-20 rounded bg-error40"></div>
          <div className="h-20 w-20 rounded bg-error50"></div>
          <div className="h-20 w-20 rounded bg-error60"></div>
          <div className="h-20 w-20 rounded bg-error70"></div>
          <div className="h-20 w-20 rounded bg-error80"></div>
          <div className="h-20 w-20 rounded bg-error90"></div>
          <div className="h-20 w-20 rounded bg-error95"></div>
          <div className="h-20 w-20 rounded bg-error99"></div>
          <div className="h-20 w-20 rounded bg-error100"></div>
        </div>

        <h2 className="title-medium">Neutral palette</h2>
        <div className="flex gap-2">
          <div className="h-20 w-20 rounded bg-neutral0"></div>
          <div className="h-20 w-20 rounded bg-neutral10"></div>
          <div className="h-20 w-20 rounded bg-neutral20"></div>
          <div className="h-20 w-20 rounded bg-neutral30"></div>
          <div className="h-20 w-20 rounded bg-neutral40"></div>
          <div className="h-20 w-20 rounded bg-neutral50"></div>
          <div className="h-20 w-20 rounded bg-neutral60"></div>
          <div className="h-20 w-20 rounded bg-neutral70"></div>
          <div className="h-20 w-20 rounded bg-neutral80"></div>
          <div className="h-20 w-20 rounded bg-neutral90"></div>
          <div className="h-20 w-20 rounded bg-neutral95"></div>
          <div className="h-20 w-20 rounded bg-neutral99"></div>
          <div className="h-20 w-20 rounded bg-neutral100"></div>
        </div>
      </Surface>
    </main>
  );
}
