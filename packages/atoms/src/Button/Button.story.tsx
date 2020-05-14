import React, { ReactNode } from 'react';
import { addDecorator } from '@storybook/react';
import { config, withDesign } from 'storybook-addon-designs';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '.';
import buttonPrimarySvg from './Button.primary.svg';
import docs from './Button.docs.mdx';

export type DecoratorFunction = Parameters<typeof addDecorator>[0];

export interface StoryMetadata {
  title: string;
  decorators?: DecoratorFunction[];
  component: ReactNode;
  parameters: object;
}

export default {
  component: Button,
  decorators: [(storyFn) => storyFn(), withDesign],
  title: 'Atoms|Button',
  parameters: {
    docs: { page: docs },
    design: config({
      type: 'image',
      url: buttonPrimarySvg,
    }),
    jest: ['Button.test.tsx'],
  },
} as StoryMetadata;

export const KnobsButton = () => (
  <Button onClick={action('onClick')} secondary={boolean('secondary', false)}>
    {text('children', 'Button')}
  </Button>
);

KnobsButton.story = {
  decorators: [withKnobs],
};
