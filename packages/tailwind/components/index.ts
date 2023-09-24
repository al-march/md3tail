import { Buttons } from './buttons';
import { Forms } from './forms';
import { Tabs } from './tabs';

export const Components = () => {
  return {
    ...Buttons(),
    ...Forms(),
    ...Tabs(),
  }
}
