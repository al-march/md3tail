import { Buttons } from './buttons';
import { Forms } from './forms';
import { Tabs } from './tabs';
import { Dialogs } from './dialogs';
import { Lists } from './lists';
import { Navigations } from './navigations';
import { Menu } from './menu';

export const Components = () => {
  return {
    ...Buttons(),
    ...Forms(),
    ...Tabs(),
    ...Dialogs(),
    ...Lists(),
    ...Navigations(),
    ...Menu(),
  }
}
