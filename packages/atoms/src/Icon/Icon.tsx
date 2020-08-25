/* import React, { FC } from 'react';
 * import styled, { StyledComponent } from '@emotion/styled';
 * import {
 *   color,
 *   compose,
 *   layout,
 *   position,
 *   shadow,
 *   space,
 *   typography
 * } from 'styled-system';
 * import {
 *   DetailedHTMLDivProps,
 *   StyledIconProps,
 *   IconProps,
 *   splitProps
 * } from './IconProps';
 *
 * const HTMLDiv: StyledComponent<
 *   DetailedHTMLDivProps,
 *   StyledIconProps,
 *   object
 * > = styled.div(compose(color, layout, position, shadow, space, typography));
 *
 * const Icon: FC<IconProps> = (props: IconProps) => {
 *   const {
 *     customIconProps,
 *     styledIconProps,
 *     styledViewProps,
 *     touchableOpacityProps
 *   } = splitProps(props);
 *
 *   function handleClick(e: any) {
 *     if (props.onPress) props.onPress(e);
 *   }
 *
 *   function handleMouseDown(e: any) {
 *     if (props.onPressIn) props.onPressIn(e);
 *   }
 *
 *   function handleMouseUp(e: any) {
 *     if (props.onPressOut) props.onPressOut(e);
 *   }
 *
 *   return (
 *     <HTMLDiv
 *       {...customIconProps}
 *       {...touchableOpacityProps}
 *       {...(styledIconProps as any)}
 *       {...(styledViewProps as any)}
 *       onClick={handleClick}
 *       onMouseDown={handleMouseDown}
 *       onMouseUp={handleMouseUp}
 *     />
 *   );
 * };
 *
 * Icon.defaultProps = {
 *   name: 'rocket'
 * };
 *
 * export default Icon; */
