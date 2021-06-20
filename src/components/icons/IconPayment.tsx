import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {withIcon, InjectedProps} from '../IconDecorator';

const IconPayment = ({fill}: InjectedProps): JSX.Element => {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill={fill}>
      <Path d="M19.08 4a2 2 0 00-1.7-1H4.58L4 .74A1 1 0 003 0H1a1 1 0 000 2h1.24L5 12.26A1 1 0 006 13h9a1.001 1.001 0 00.89-.55l3.28-6.56A2 2 0 0019.08 4zm-4.7 7H6.76L5.13 5h12.25l-3 6zM5.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Svg>
  );
};

export default withIcon(IconPayment);
