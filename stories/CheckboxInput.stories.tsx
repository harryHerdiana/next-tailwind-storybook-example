import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxInput } from 'components/atoms/CheckboxInput/CheckboxInput';


const meta: Meta<typeof CheckboxInput> = {
  title: 'Checkbox Input',
  component: CheckboxInput,
  argTypes: {
    backgroundColor: 'none',
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxInput>;

export const Primary: Story = {
  args: {
    size: 'medium',
    backgroundColor: 'primary',
    label: 'Checkbox',
  },
};

export const Secondary: Story = {
    args: {
      size: 'medium',
      backgroundColor: 'secondary',
      label: 'Test',
    },
  };

  export const Danger: Story = {
    args: {
      size: 'medium',
      backgroundColor: 'danger',
      label: 'Test',
    },
  };