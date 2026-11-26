import type { Preview } from '@storybook/react-vite';
import { CartProvider } from '../src/context';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { CART_STORAGE_KEY } from '../src/hooks';
import { sb } from 'storybook/test';

import '../src/index.css';

// Stories use the fake catalogue in src/api/guitars/__mocks__, not Supabase.
sb.mock(import('../src/api/guitars/guitars.ts'));

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story, { parameters }) => {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(parameters.cart ?? [])
      );

      if (parameters.router === false) return <Story />;

      const router = createMemoryRouter([
        {
          path: '*',
          element: (
            <CartProvider>
              <Story />
            </CartProvider>
          ),
        },
      ]);
      return <RouterProvider router={router} />;
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
