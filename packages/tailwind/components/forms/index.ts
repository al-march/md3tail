import { InputStyles } from './input';
import { SwitcherStyles } from './switcher';

export const Forms = () => {
  return {
    ...InputStyles(),
    ...SwitcherStyles(),
  }
}