import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import {
  background,
  border,
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import { LinkProps, DetailedHTMLLinkProps, splitProps } from './linkProps';

const HTMLAnchor: StyledComponent<
  DetailedHTMLLinkProps,
  LinkProps,
  object
> = styled.a(
  compose(
    background,
    border,
    color,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const Link: FC<LinkProps> = (props: LinkProps) => {
  const { customLinkProps, styledLinkProps, styledTextProps } = splitProps(
    props
  );

  return (
    <div>
      <HTMLAnchor
        {...styledLinkProps}
        {...styledTextProps}
        {...(customLinkProps as any)}
      >
        {customLinkProps.children}
      </HTMLAnchor>
    </div>
  );
};

Link.defaultProps = {
  paddingLeft: 0,
  paddingTop: 0,
  fontSize: 2,
  color: ''
};

export default Link;
