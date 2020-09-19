import React, { useRef } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@silicon-ui/atoms/lib';
import Cell from '../Cell';
import Row from '../Row';
import Table from './Table';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    // docs: { page: docs },
    // jest: ['TableHead.spec.tsx']
  })
  .add('chrome debugger', () => {
    const tableRef = useRef<any>();

    return (
      <Wrapper>
        <Box maxWidth="100%" overflowX="hidden" overflowY="visible">
          <Table width="100%" resizable ref={tableRef}>
            <Row width="100%">
              <Cell
                backgroundColor="white"
                borderLeftWidth={1}
                debug
                borderTopWidth={1}
                height={200}
                width="30%"
              >
                One
              </Cell>
              <Cell
                backgroundColor="white"
                borderTopWidth={1}
                debug
                borderLeftWidth={1}
                width="30%"
                height={200}
                style={{ whiteSpace: 'normal' }}
              >
                Two three four five
              </Cell>
              <Cell
                backgroundColor="white"
                borderLeftWidth={1}
                debug
                borderRightWidth={1}
                borderTopWidth={1}
                height={200}
              >
                Three
              </Cell>
            </Row>
            <Row width="100%">
              <Cell
                backgroundColor="white"
                borderTopWidth={1}
                debug
                borderLeftWidth={1}
                borderBottomWidth={1}
                width="30%"
                height={200}
              >
                Four
              </Cell>
              <Cell
                backgroundColor="white"
                borderTopWidth={1}
                borderLeftWidth={1}
                borderBottomWidth={1}
                debug
                width="30%"
                height={200}
              >
                Five
              </Cell>
              <Cell
                backgroundColor="white"
                borderBottomWidth={1}
                borderLeftWidth={1}
                borderRightWidth={1}
                debug
                borderTopWidth={1}
                height={200}
              >
                Six
              </Cell>
            </Row>
          </Table>
        </Box>
      </Wrapper>
    );
  });
