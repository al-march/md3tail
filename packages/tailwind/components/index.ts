import { Buttons } from './buttons';
import { Forms } from './forms';

export const Components = () => {
  return {
    ...Buttons(),
    ...Forms(),
  }
}
