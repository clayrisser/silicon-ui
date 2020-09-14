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
import { LinkProps, DetailedHTMLProps, splitProps } from './linkProps';

const HTMLAnchor: StyledComponent<
  DetailedHTMLProps,
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

Link.defaultProps = {};

export default Link;
