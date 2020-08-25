import React, { FC } from 'react';
import Icon from 'react-fontawesome';
import Box from '../Box/Box';

const HtmlIcon = () => {
  return (
    <Box>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <Icon
        className="super-crazy-colors"
        name="car"
        size="2x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    </Box>
  );
};
export default HtmlIcon;
