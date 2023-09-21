import { ButtonStyles } from './button';
import { IconButtonStyles } from './icon-button';

export const Buttons = () => {
  return {
    ...ButtonStyles(),
    ...IconButtonStyles(),
  }
}