import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from 'components/atoms/TextInput/TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Text Input',
  component: TextInput,
  argTypes: {
    backgroundColor: 'none',
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {
    size: 'small',
    backgroundColor: 'secondary',
    label: 'Primary',
  },
};

export const Secondary: Story = {
    args: {
      size: 'medium',
      backgroundColor: 'secondary',
      label: 'Secondary',
    },
  };

  export const Danger: Story = {
    args: {
      size: 'medium',
      backgroundColor: 'danger',
      label: 'Danger',
    },
  };