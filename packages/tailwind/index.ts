import plugin from 'tailwindcss/plugin';
import { Components } from './components';

export default plugin(function ({ addComponents }) {
  addComponents({
    ...Components,
    '.test': {
      color: 'red',
      border: '1px solid orange',
      padding: '10px',
    }
  });
});
