import clsx from "clsx";
import { Metadata } from "next";
import { PageLayout } from "../PageLayout";
import { AnchorMenu } from "../AnchorMenu";

export const metadata: Metadata = {
  title: "MD3 ui | Colors",
  description: "Colors documentation for npm package @md3/ui",
};

export default function Page() {
  return (
    <PageLayout
      anchorMenu={
        <AnchorMenu>
          <AnchorMenu.Item href="" label="Light Scheme" />
          <AnchorMenu.Item href="" label="Dark Scheme" />
          <AnchorMenu.Item href="" label="Tonal palettes" />
        </AnchorMenu>
      }
    >
      <p className="title-large mb-4">Light Scheme</p>

      <div
        data-theme="light"
        className="w-full flex flex-col gap-2 rounded-[16px] overflow-hidden bg-inherit"
      >
        <div className="grid grid-cols-4 justify-around">
          <div className="w-full h-[110px] p-1 sm:p-4 bg-primary">
            <span className="text-on-primary label-medium">primary</span>
          </div>
          <div className="w-full h-[110px] p-1 sm:p-4 bg-on-primary">
            <span className="text-primary label-medium">on primary</span>
          </div>
          <div className="w-full h-[110px] p-1 sm:p-4 bg-primary-container">
            <span className="text-on-primary-container label-medium">
              primary container
            </span>
          </div>
          <div className="w-full h-[110px] p-1 sm:p-4 bg-on-primary-container">
            <span className="text-on-primary label-medium">
              on primary container
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 justify-around">
          <div className="w-full h-[80px] p-1 sm:p-4 bg-secondary">
            <span className="text-on-secondary label-medium">secondary</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-secondary">
            <span className="text-secondary label-medium">on secondary</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-secondary-container">
            <span className="text-on-secondary-container label-medium">
              secondary container
            </span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-secondary-container">
            <span className="text-secondary-container label-medium">
              on Secondary container
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 justify-around">
          <div className="w-full h-[80px] p-1 sm:p-4 bg-tertiary">
            <span className="text-on-tertiary label-medium">tertiary</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-tertiary">
            <span className="text-tertiary label-medium">On tertiary</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-tertiary-container">
            <span className="text-on-tertiary-container label-medium">
              tertiary container
            </span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-tertiary-container">
            <span className="text-tertiary-container label-medium">
              On tertiary container
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 justify-around">
          <div className="w-full h-[80px] p-1 sm:p-4 bg-error">
            <span className="text-on-error label-medium">error</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-error">
            <span className="text-error label-medium">On error</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-error-container">
            <span className="text-on-error-container label-medium">
              error container
            </span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-error-container">
            <span className="text-error-container label-medium">
              On error container
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 justify-around">
          <div className="w-full h-[80px] p-1 sm:p-4 bg-background">
            <span className="text-on-background label-medium">background</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-background">
            <span className="text-background label-medium">On background</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-surface">
            <span className="text-on-surface label-medium">surface</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-surface">
            <span className="text-surface label-medium">on surface</span>
          </div>
        </div>

        <div className="grid grid-cols-4 justify-around">
          <div className="w-full h-[80px] p-1 sm:p-4 bg-outline col-start-1 col-end-3">
            <span className="text-surface label-medium">outline</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-surface-variant">
            <span className="text-on-surface-variant label-medium">
              surface variant
            </span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-surface-variant">
            <span className="text-surface-variant label-medium">
              on surface variant
            </span>
          </div>
        </div>
      </div>

      <p className="title-large">Dark Scheme</p>

      <div
        data-theme="dark"
        className="w-full flex flex-col gap-2 rounded-[16px] overflow-hidden bg-inherit"
      >
        <div className="grid grid-cols-4 justify-around">
          <div className="w-full h-[110px] p-1 sm:p-4 bg-primary">
            <span className="text-on-primary label-medium">primary</span>
          </div>
          <div className="w-full h-[110px] p-1 sm:p-4 bg-on-primary">
            <span className="text-primary label-medium">on primary</span>
          </div>
          <div className="w-full h-[110px] p-1 sm:p-4 bg-primary-container">
            <span className="text-on-primary-container label-medium">
              primary container
            </span>
          </div>
          <div className="w-full h-[110px] p-1 sm:p-4 bg-on-primary-container">
            <span className="text-on-primary label-medium">
              on primary container
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 justify-around">
          <div className="w-full h-[80px] p-1 sm:p-4 bg-secondary">
            <span className="text-on-secondary label-medium">secondary</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-secondary">
            <span className="text-secondary label-medium">on secondary</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-secondary-container">
            <span className="text-on-secondary-container label-medium">
              secondary container
            </span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-secondary-container">
            <span className="text-secondary-container label-medium">
              on Secondary container
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 justify-around">
          <div className="w-full h-[80px] p-1 sm:p-4 bg-tertiary">
            <span className="text-on-tertiary label-medium">tertiary</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-tertiary">
            <span className="text-tertiary label-medium">On tertiary</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-tertiary-container">
            <span className="text-on-tertiary-container label-medium">
              tertiary container
            </span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-tertiary-container">
            <span className="text-tertiary-container label-medium">
              On tertiary container
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 justify-around">
          <div className="w-full h-[80px] p-1 sm:p-4 bg-error">
            <span className="text-on-error label-medium">error</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-error">
            <span className="text-error label-medium">On error</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-error-container">
            <span className="text-on-error-container label-medium">
              error container
            </span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-error-container">
            <span className="text-error-container label-medium">
              On error container
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 justify-around">
          <div className="w-full h-[80px] p-1 sm:p-4 bg-background">
            <span className="text-on-background label-medium">background</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-background">
            <span className="text-background label-medium">On background</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-surface">
            <span className="text-on-surface label-medium">surface</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-surface">
            <span className="text-surface label-medium">on surface</span>
          </div>
        </div>

        <div className="grid grid-cols-4 justify-around">
          <div className="w-full h-[80px] p-1 sm:p-4 bg-outline col-start-1 col-end-3">
            <span className="text-surface label-medium">outline</span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-surface-variant">
            <span className="text-on-surface-variant label-medium">
              surface variant
            </span>
          </div>
          <div className="w-full h-[80px] p-1 sm:p-4 bg-on-surface-variant">
            <span className="text-surface-variant label-medium">
              on surface variant
            </span>
          </div>
        </div>
      </div>

      <p className="title-large">Tonal Palettes</p>

      <p className="title-small">Primary</p>
      <div className="flex w-full flex-row-reverse rounded justify-around overflow-hidden">
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100].map((tone) => (
          <div
            className={clsx(
              "flex items-center justify-center",
              `h-20 w-full bg-primary${tone}`
            )}
          >
            <span
              className={clsx({
                "text-white": tone <= 50,
                "text-black": tone > 50,
              })}
            >
              {tone}
            </span>
          </div>
        ))}
      </div>

      <p className="title-small">Secondary</p>
      <div className="flex w-full flex-row-reverse rounded justify-around overflow-hidden">
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100].map((tone) => (
          <div
            className={clsx(
              "flex items-center justify-center",
              `h-20 w-full bg-secondary${tone}`
            )}
          >
            <span
              className={clsx({
                "text-white": tone <= 50,
                "text-black": tone > 50,
              })}
            >
              {tone}
            </span>
          </div>
        ))}
      </div>

      <p className="title-small">Tertiary</p>
      <div className="flex w-full flex-row-reverse rounded justify-around overflow-hidden">
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100].map((tone) => (
          <div
            className={clsx(
              "flex items-center justify-center",
              `h-20 w-full bg-tertiary${tone}`
            )}
          >
            <span
              className={clsx({
                "text-white": tone <= 50,
                "text-black": tone > 50,
              })}
            >
              {tone}
            </span>
          </div>
        ))}
      </div>

      <p className="title-small">Error</p>
      <div className="flex w-full flex-row-reverse rounded justify-around overflow-hidden">
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100].map((tone) => (
          <div
            className={clsx(
              "flex items-center justify-center",
              `h-20 w-full bg-error${tone}`
            )}
          >
            <span
              className={clsx({
                "text-white": tone <= 50,
                "text-black": tone > 50,
              })}
            >
              {tone}
            </span>
          </div>
        ))}
      </div>

      <p className="title-small">Neutral</p>
      <div className="flex w-full flex-row-reverse rounded justify-around overflow-hidden">
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100].map((tone) => (
          <div
            className={clsx(
              "flex items-center justify-center",
              `h-20 w-full bg-neutral${tone}`
            )}
          >
            <span
              className={clsx({
                "text-white": tone <= 50,
                "text-black": tone > 50,
              })}
            >
              {tone}
            </span>
          </div>
        ))}
      </div>

      <p className="title-small">Neutral variant</p>
      <div className="flex w-full flex-row-reverse rounded justify-around overflow-hidden">
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100].map((tone) => (
          <div
            className={clsx(
              "flex items-center justify-center",
              `h-20 w-full bg-neutral-variant${tone}`
            )}
          >
            <span
              className={clsx({
                "text-white": tone <= 50,
                "text-black": tone > 50,
              })}
            >
              {tone}
            </span>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

/** classes for tailwind palettes */
const classes = [
  "bg-primary0",
  "bg-primary10",
  "bg-primary20",
  "bg-primary30",
  "bg-primary40",
  "bg-primary50",
  "bg-primary60",
  "bg-primary70",
  "bg-primary80",
  "bg-primary90",
  "bg-primary95",
  "bg-primary99",
  "bg-primary100",

  "bg-secondary0",
  "bg-secondary10",
  "bg-secondary20",
  "bg-secondary30",
  "bg-secondary40",
  "bg-secondary50",
  "bg-secondary60",
  "bg-secondary70",
  "bg-secondary80",
  "bg-secondary90",
  "bg-secondary95",
  "bg-secondary99",
  "bg-secondary100",

  "bg-tertiary0",
  "bg-tertiary10",
  "bg-tertiary20",
  "bg-tertiary30",
  "bg-tertiary40",
  "bg-tertiary50",
  "bg-tertiary60",
  "bg-tertiary70",
  "bg-tertiary80",
  "bg-tertiary90",
  "bg-tertiary95",
  "bg-tertiary99",
  "bg-tertiary100",

  "bg-error0",
  "bg-error10",
  "bg-error20",
  "bg-error30",
  "bg-error40",
  "bg-error50",
  "bg-error60",
  "bg-error70",
  "bg-error80",
  "bg-error90",
  "bg-error95",
  "bg-error99",
  "bg-error100",

  "bg-neutral0",
  "bg-neutral10",
  "bg-neutral20",
  "bg-neutral30",
  "bg-neutral40",
  "bg-neutral50",
  "bg-neutral60",
  "bg-neutral70",
  "bg-neutral80",
  "bg-neutral90",
  "bg-neutral95",
  "bg-neutral99",
  "bg-neutral100",

  "bg-neutral-variant0",
  "bg-neutral-variant10",
  "bg-neutral-variant20",
  "bg-neutral-variant30",
  "bg-neutral-variant40",
  "bg-neutral-variant50",
  "bg-neutral-variant60",
  "bg-neutral-variant70",
  "bg-neutral-variant80",
  "bg-neutral-variant90",
  "bg-neutral-variant95",
  "bg-neutral-variant99",
  "bg-neutral-variant100",
];
