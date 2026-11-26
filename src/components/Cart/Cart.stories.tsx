import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { guitars } from '../../test/fixtures';
import { Cart } from './Cart';

const meta = {
  component: Cart,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const WithItems: Story = {
  parameters: {
    cart: [
      { ...guitars[0], quantity: 2 },
      { ...guitars[1], quantity: 1 },
    ],
  },
};
