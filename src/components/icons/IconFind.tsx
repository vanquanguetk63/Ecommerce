import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {withIcon, InjectedProps} from '../IconDecorator';

const IconFind = ({fill}: InjectedProps): JSX.Element => {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill={fill}>
      <Path d="M17.704 16.285l-3.399-3.39a7.917 7.917 0 001.69-4.898 7.997 7.997 0 10-7.998 7.998 7.917 7.917 0 004.899-1.69l3.389 3.4a.999.999 0 001.42 0 .999.999 0 000-1.42zM2 7.997a5.998 5.998 0 1111.996 0A5.998 5.998 0 012 7.997z" />
    </Svg>
  );
};

export default withIcon(IconFind);
