import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MdArrowForward, MdReplay } from 'react-icons/all';

import { Button } from '.';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const LabelOnly = Template.bind({});
LabelOnly.args = {
  label: 'Button',
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  label: 'リトライ',
  startIcon: <MdReplay />,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  label: '利用開始',
  endIcon: <MdArrowForward />,
};
