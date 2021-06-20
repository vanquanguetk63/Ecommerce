import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconMenu = (): JSX.Element => {
  return (
    <Svg width={18} height={12} viewBox="0 0 18 12">
      <Path
        d="M1 2a1 1 0 100-2 1 1 0 000 2zM1 7a1 1 0 100-2 1 1 0 000 2zM1 12a1 1 0 100-2 1 1 0 000 2z"
        fill="#0001FC"
        fillOpacity={0.5}
      />
      <Path
        d="M17.06 5H4.94a.94.94 0 00-.94.94v.12c0 .52.42.94.94.94h12.12c.52 0 .94-.42.94-.94v-.12a.94.94 0 00-.94-.94zM17.06 10H4.94a.94.94 0 00-.94.94v.12c0 .52.42.94.94.94h12.12c.52 0 .94-.42.94-.94v-.12a.94.94 0 00-.94-.94zM17.06 0H4.94A.94.94 0 004 .94v.12c0 .52.42.94.94.94h12.12c.52 0 .94-.42.94-.94V.94a.94.94 0 00-.94-.94z"
        fill="#0001FC"
      />
    </Svg>
  );
};

export default IconMenu;
