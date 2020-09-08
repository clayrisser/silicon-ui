// import React, { FC } from 'react';
// import { styled } from 'native-theme-ui';
// import {
//   ProgressBar as NativeBaseProgressBar,
//   Item as NativeBaseItem,
//   NativeBase
// } from 'native-base';
// import {
//   background,
//   border,
//   compose,
//   layout,
//   position,
//   shadow,
//   space,
//   typography
// } from 'styled-system';
// import useItem from '../hooks/useItem';
// import {
//   ProgressBarProps,
//   StyledProgressBarProps,
//   antiForwardProgressBarPropsKeys,
//   splitProps
// } from './progressBarProps';

// const StyledNativeBaseProgressBar = styled<
//   StyledProgressBarProps,
//   NativeBase.ProgressBar
// >(NativeBaseProgressBar, {
//   forwardPropsBlacklist: antiForwardProgressBarPropsKeys
// })(compose(background, border, layout, position, shadow, space, typography));

// const ProgressBar: FC<ProgressBarProps> = (props: ProgressBarProps) => {
//   const item = useItem();
//   const {
//     customProgressBarProps,
//     nativeProgressBarProps,
//     styledProgressBarProps,
//     nativeItemProps
//   } = splitProps(props);

//   const styledNativeBaseProgressBar = (
//     <StyledNativeBaseProgressBar
//       {...(customProgressBarProps as any)}
//       {...nativeProgressBarProps}
//       {...styledProgressBarProps}
//       progress={30}
//     />
//   );

//   if (item.hasItemParent) return styledNativeBaseProgressBar;
//   return (
//     <NativeBaseItem {...nativeItemProps}>
//       {styledNativeBaseProgressBar}
//     </NativeBaseItem>
//   );
// };

// ProgressBar.defaultProps = {
//   progress: 30
// };

// export default ProgressBar;
