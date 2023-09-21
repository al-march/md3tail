import { ButtonStyles } from './button';
import { IconButtonStyles } from './icon-button';
import { FabStyles } from './fab'

export const Buttons = () => {
  return {
    ...ButtonStyles(),
    ...IconButtonStyles(),
    ...FabStyles(),
  }
}