import {Dimensions} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 414;
const guidelineBaseHeight = 736;

const topInset = initialWindowMetrics?.insets.top || 0;
const bottomInset = initialWindowMetrics?.insets.bottom || 0;
const leftInset = initialWindowMetrics?.insets.left || 0;
const rightInset = initialWindowMetrics?.insets.right || 0;

export const hScale = (size: number) =>
  ((width - leftInset - rightInset) / guidelineBaseWidth) * size;
export const vScale = (size: number) =>
  ((height - topInset - bottomInset) / guidelineBaseHeight) * size;
