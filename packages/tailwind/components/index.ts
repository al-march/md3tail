import { Buttons } from './buttons';
import { Forms } from './forms';
import { Tabs } from './tabs';
import { Dialogs } from './dialogs';

export const Components = () => {
  return {
    ...Buttons(),
    ...Forms(),
    ...Tabs(),
    ...Dialogs(),
  }
}
