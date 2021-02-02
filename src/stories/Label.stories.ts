// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Label from './label.component';

export default {
  title: 'Example/Label',
  component: Label
} as Meta;

const Template: Story<Label> = (args: Label) => ({
  component: Label,
  props: args
});

export const LabelText = Template.bind({});
LabelText.args = {
  text: 'Label Text',
};
