import React, { useRef, useEffect, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@silicon-ui/atoms';
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
    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(tableRef.current?.offsetWidth || 0);
    }, [tableRef]);

    useEffect(() => {
      function handleResize() {
        setWidth(tableRef.current?.offsetWidth || 0);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <Wrapper>
        <Box>
          <Table position="absolute" width={width}>
            <Row width="100%">
              <Cell
                width="100%"
                borderTopWidth={1}
                borderLeftWidth={1}
                borderRightWidth={1}
                height={200}
              />
            </Row>
            <Row width="100%">
              <Cell width="100%" border={1} height={200} />
            </Row>
          </Table>
          <Table width="100%" resizable ref={tableRef}>
            <Row width="100%">
              <Cell
                backgroundColor="white"
                borderLeftWidth={1}
                borderTopWidth={1}
                height={200}
                width="20%"
              >
                One
              </Cell>
              <Cell
                backgroundColor="white"
                borderTopWidth={1}
                borderLeftWidth={1}
                width="20%"
                height={200}
                style={{ whiteSpace: 'normal' }}
              >
                Two three four five
              </Cell>
              <Cell
                borderTopWidth={1}
                borderLeftWidth={1}
                backgroundColor="white"
                height={200}
              >
                Three
              </Cell>
            </Row>
            <Row width="100%">
              <Cell
                backgroundColor="white"
                borderTopWidth={1}
                borderLeftWidth={1}
                borderBottomWidth={1}
                width="20%"
                height={200}
              >
                Four
              </Cell>
              <Cell
                backgroundColor="white"
                borderTopWidth={1}
                borderLeftWidth={1}
                borderBottomWidth={1}
                width="20%"
                height={200}
              >
                Five
              </Cell>
              <Cell
                backgroundColor="white"
                borderTopWidth={1}
                borderLeftWidth={1}
                borderBottomWidth={1}
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
