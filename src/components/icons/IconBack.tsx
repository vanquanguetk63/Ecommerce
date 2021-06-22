import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconBack = (): JSX.Element => {
  return (
    <Svg width={28} height={24} viewBox="0 0 28 24">
      <Path
        d="M25.712 10.287H5.382l6.223-7.474A1.716 1.716 0 008.965.62L.395 10.904c-.058.082-.11.168-.155.257 0 .086 0 .137-.12.223a1.714 1.714 0 00-.12.617c.002.211.042.42.12.617 0 .086 0 .137.12.223.045.09.097.175.154.257l8.57 10.285a1.715 1.715 0 001.32.617 1.714 1.714 0 001.32-2.811l-6.222-7.474h20.33a1.714 1.714 0 000-3.428z"
        fill="#0A1034"
      />
    </Svg>
  );
};

export default IconBack;
