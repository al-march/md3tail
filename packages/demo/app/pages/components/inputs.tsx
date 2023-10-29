import { Surface } from "@/app/components/ui/surface/Surface";
import {
  Checkbox,
  FilledSelect,
  FilledTextField,
  OutlinedSelect,
  OutlinedTextField,
  Radio,
  Row,
  SelectOption,
  Slider,
  Switch,
} from "@md3tail/react";
import { IconLink, Label } from "./shared/typography";

const options = [
  {
    value: "apple",
    label: "Apple",
  },
  {
    value: "pear",
    label: "Pear",
  },
  {
    value: "banana",
    label: "Banana",
  },
  {
    value: "strawberry",
    label: "Strawberry",
  },
  {
    value: "watermelon",
    label: "Watermelon",
  },
  {
    value: "rowan",
    label: "Rowan",
  },
];

export const Inputs = () => {
  return (
    <div className="flex flex-col w-full gap-6 py-2">
      <Surface className="flex flex-col gap-4">
        <Row className="gap-4" justify="around" wrap>
          <Row direction="column" className="flex-1 gap-2 min-w-[200px]">
            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/select.md" />
              <Label>Select</Label>
            </Row>

            <Row className="gap-4" wrap>
              <FilledSelect
                supportingText="Support text"
                label="Filled select"
                placeholder="placeholder"
              >
                <SelectOption />

                {options.map((option) => (
                  <SelectOption key={option.value} value={option.value}>
                    <div slot="headline">{option.label}</div>
                  </SelectOption>
                ))}
              </FilledSelect>

              <OutlinedSelect
                supportingText="Support text"
                label="Outlined select"
                placeholder="placeholder"
              >
                <SelectOption />

                {options.map((option) => (
                  <SelectOption key={option.value} value={option.value}>
                    <div slot="headline">{option.label}</div>
                  </SelectOption>
                ))}
              </OutlinedSelect>
            </Row>

            <Row className="gap-4" wrap>
              <FilledSelect
                error
                label="Filled select"
                placeholder="placeholder"
                errorText="error text"
              >
                <SelectOption />

                {options.map((option) => (
                  <SelectOption key={option.value} value={option.value}>
                    <div slot="headline">{option.label}</div>
                  </SelectOption>
                ))}
              </FilledSelect>

              <OutlinedSelect
                error
                label="Outlined select"
                placeholder="placeholder"
                errorText="error text"
              >
                <SelectOption />

                {options.map((option) => (
                  <SelectOption key={option.value} value={option.value}>
                    <div slot="headline">{option.label}</div>
                  </SelectOption>
                ))}
              </OutlinedSelect>
            </Row>
          </Row>

          <Row direction="column" className="flex-1 gap-2 min-w-[200px]">
            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/text-field.md" />
              <Label>Text field</Label>
            </Row>

            <Row className="gap-4" wrap>
              <FilledTextField
                supportingText="support text"
                placeholder="placeholder"
                label="Label"
                maxLength={12}
              />
              <OutlinedTextField
                supportingText="support text"
                placeholder="placeholder"
                label="Label"
                maxLength={12}
              />
            </Row>

            <Row className="gap-4" wrap>
              <FilledTextField
                error
                supportingText="error text"
                placeholder="placeholder"
                label="Label"
              />
              <OutlinedTextField
                error
                supportingText="error text"
                placeholder="placeholder"
                label="Label"
              />
            </Row>
          </Row>
        </Row>

        <Row className="gap-4" justify="around" wrap>
          <Row direction="column" wrap className="gap-2 flex-1">
            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/slider.md" />
              <Label>Slider</Label>
            </Row>

            <Slider value={0} />
            <Slider labeled />
            <Slider ticks />
            <Slider range valueStart={25} valueEnd={75} />
            <Slider ticks step={5} labeled />
          </Row>

          <Row direction="column" wrap className="gap-2 flex-1">
            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/switch.md" />
              <Label>Switch</Label>
            </Row>

            <Row className="gap-2">
              <Switch />
              <Switch selected />
              <Switch disabled />
            </Row>

            <Row className="gap-2">
              <Switch icons />
              <Switch icons selected />
              <Switch icons disabled />
            </Row>

            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/radio.md" />
              <Label>Radio</Label>
            </Row>

            <Row className="gap-6">
              <Radio name="radio" />
              <Radio name="radio" checked />
              <Radio name="radio" />
            </Row>

            <Row items="center">
              <IconLink href="https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md" />
              <Label>Checkbox</Label>
            </Row>

            <Row className="gap-6">
              <Checkbox />
              <Checkbox checked />
              <Checkbox indeterminate />
            </Row>
          </Row>
        </Row>
      </Surface>
    </div>
  );
};
