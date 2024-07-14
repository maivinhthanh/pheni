import { VirtualScroll, VirtualScrollProps } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { memo } from 'react';

const Item = memo(({ index }: { index: number }) => (
  <div
    style={{
      height: 30 + (index % 10),
      lineHeight: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 10px',
    }}
    className="row"
    key={index}
  >
    <p>row index {index}</p>
    <p>abc</p>
  </div>
));

const baseArgs: VirtualScrollProps = {
  Item: Item,
  itemCount: 1000,
  height: 300,
  getChildHeight: (index) => 30 + (index % 10),
};

export default {
  component: VirtualScroll,
  args: baseArgs,
  argTypes: {},
} satisfies Meta<typeof VirtualScroll>;

type Story = StoryObj<typeof VirtualScroll>;

export const Default: Story = {};
