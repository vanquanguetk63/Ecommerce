import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconSell = (): JSX.Element => {
  return (
    <Svg width={20} height={18} viewBox="0 0 20 18">
      <Path
        d="M7 8a4 4 0 100-8 4 4 0 000 8zm0-6a2 2 0 110 4 2 2 0 010-4z"
        fill="#0001FC"
      />
      <Path
        d="M15 10a3 3 0 100-6 3 3 0 000 6zm0-4a1 1 0 110 2 1 1 0 010-2z"
        fill="#0001FC"
        fillOpacity={0.5}
      />
      <Path
        d="M8.358 10.143a7 7 0 013.582 1.907l1.2 1.6A6.9 6.9 0 0114 17a1 1 0 01-2 0 5 5 0 00-10 0 1 1 0 01-2 0 7 7 0 018.358-6.857z"
        fill="#0001FC"
      />
      <Path
        d="M15 10.99a5 5 0 00-3.06 1.05A7 7 0 000 16.99a1 1 0 102 0 5 5 0 0110 0 1 1 0 102 0 6.9 6.9 0 00-.86-3.35A3 3 0 0118 15.99a1 1 0 102 0 5 5 0 00-5-5z"
        fill="#0001FC"
        fillOpacity={0.5}
      />
    </Svg>
  );
};

export default IconSell;
