import { getStorybookUI, configure } from '@storybook/react-native';
import '../storybook/rnAddons';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved,import/extensions
import { loadStories } from '../storybook/storyLoader';

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null
});

export default StorybookUIRoot;
