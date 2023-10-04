import { Buttons } from './buttons';
import { Forms } from './forms';
import { Tabs } from './tabs';
import { Dialogs } from './dialogs';
import { Lists } from './lists';
import { Navigations } from './navigations';
import { Menu } from './menu';
import { Chips } from './chips';

export const Components = () => {
  return {
    ...Buttons(),
    ...Chips(),
    ...Forms(),
    ...Tabs(),
    ...Dialogs(),
    ...Lists(),
    ...Navigations(),
    ...Menu(),
  }
}
