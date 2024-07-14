import { Typography, TypographyProps } from '.';
import { Meta, StoryObj } from '@storybook/react';

const baseArgs: TypographyProps = {
  children: 'Text',
  variant: 'body',
};

export default {
  component: Typography,
  args: baseArgs,
  argTypes: {},
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {};

export const Header: Story = {
  args: { children: 'This is Header', variant: 'header' },
};

export const ErrorDescription: Story = {
  args: { children: 'This is Error Description', variant: 'description', color: 'error' },
};
