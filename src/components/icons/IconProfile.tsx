import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {withIcon, InjectedProps} from '../IconDecorator';

const IconProfile = ({fill}: InjectedProps): JSX.Element => {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill={fill}>
      <Path d="M7 8a4 4 0 100-8 4 4 0 000 8zm0-6a2 2 0 110 4 2 2 0 010-4zM7 10a7 7 0 00-7 7 1 1 0 102 0 5 5 0 1110 0 1 1 0 002 0 7 7 0 00-7-7z" />
    </Svg>
  );
};

export default withIcon(IconProfile);
