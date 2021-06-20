import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {withIcon, InjectedProps} from '../IconDecorator';

const IconHome = ({fill}: InjectedProps): JSX.Element => {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill={fill}>
      <Path d="M17.296 17.04a.961.961 0 01-.96.96H.96A.96.96 0 010 17.04V6.94a.96.96 0 01.37-.759L8.059.202a.96.96 0 011.18 0l7.687 5.98a.962.962 0 01.371.758v10.1zm-1.922-.962V7.41L8.648 2.178 1.922 7.409v8.67h13.452z" />
    </Svg>
  );
};

export default withIcon(IconHome);
