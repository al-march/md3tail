import { InputStyles } from './input';
import { SwitcherStyles } from './switcher';
import { RadioStyles } from './radio';

export const Forms = () => {
  return {
    ...InputStyles(),
    ...SwitcherStyles(),
    ...RadioStyles(),
  }
}