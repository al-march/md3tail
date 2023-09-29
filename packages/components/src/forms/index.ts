import { InputStyles } from './input';
import { SwitcherStyles } from './switcher';
import { RadioStyles } from './radio';
import { CheckboxStyles } from './checkbox';

export const Forms = () => {
  return {
    ...InputStyles(),
    ...SwitcherStyles(),
    ...RadioStyles(),
    ...CheckboxStyles(),
  }
}