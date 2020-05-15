// import React, { ReactNode } from 'react';
// // import { addDecorator } from '@storybook/react';
// // import { withKnobs, text } from '@storybook/addon-knobs';
// // import { action } from '@storybook/addon-actions';
// // import Button from '.';
// // import { Button } from 'react-native';
// // import docs from './Button.docs.mdx';
// import Button from './Button';

// // export type DecoratorFunction = Parameters<typeof addDecorator>[0];

// export interface StoryMetadata {
//   title: string;
//   // decorators?: DecoratorFunction[];
//   component: ReactNode;
//   parameters: object;
// }

// export default {
//   component: Button,
//   // decorators: [(storyFn) => storyFn()],
//   title: 'Atoms|Button',
//   parameters: {
//     // docs: { page: docs },
//     // jest: ['Button.test.tsx']
//   }
// } as StoryMetadata;

// export const KnobsButton = () => (
//   <Button title="Hi"></Button>
//   // <Button onClick={action('onClick')}>{text('children', 'Button')}</Button>
// );

// KnobsButton.story = {
//   decorators: [withKnobs]
// };

import React from 'react';
// import Button from './Button';
// import { Button } from 'react-native';
import Button from './Button';

import storiesOf from '../../storybook/storiesOf';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('Button', module).add('with text', () => <Button>Hello</Button>);
