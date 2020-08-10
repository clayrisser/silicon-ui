// import React from 'react';
// import { withKnobs, text, select } from '@storybook/addon-knobs';
// import Data from './Data';
// import { StyleSheet, View } from 'react-native';
// import Wrapper from '../../storybook/Wrapper';
// import storiesOf from '../../storybook/storiesOf';
// import themes from '../themes';
// import withThemesProvider from '../../storybook/withThemesProvider';

// storiesOf('Data', module)
//   .addDecorator(withKnobs)
//   .addDecorator(withThemesProvider(themes))
//   .addParameters({
//     // docs: { page: docs },
//     // jest: ['Data.spec.tsx']
//   })
//   .add('with knobs', () => (
//     <Wrapper>
//       <Data
//         backgroundColor={text('backgroundColor', 'secondary')}
//         // borderRadius={number('borderRadius', 0)}
//         // height={200}
//         // width={200}
//         autoContrast={select<'A' | 'AA' | 'AAA'>(
//           'autoContrast',
//           {
//             false: '' as 'A',
//             A: 'A',
//             AA: 'AA',
//             AAA: 'AAA'
//           },
//           'A'
//         )}
//       >
//         data
//       </Data>
//     </Wrapper>
//   ));
