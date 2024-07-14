import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '.';

const baseArgs: ButtonProps = {
  children: 'Click Me',
  onClick: action('onClick'),
  variant: 'outlined',
  color: 'primary',
  size: 'small',
  block: false,
};

export default {
  component: Button,
  args: baseArgs,
  argTypes: {},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const LongText: Story = {
  args: { children: 'Really Looooong Text', block: true },
};

export const LargeButton: Story = {
  args: { children: 'Large Button', size: 'large' },
};

export const ErrorButton: Story = {
  args: { children: 'Error Button', color: 'error' },
};

export const TextButton: Story = {
  args: { children: 'Text Button', variant: 'text' },
};

export const ContainedButton: Story = {
  args: { children: 'Contained Button', variant: 'contained' },
};
