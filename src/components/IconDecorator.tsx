import React, {ComponentType} from 'react';
import {hScale, vScale} from '../libs/scale';

export type InjectedProps = {
  width: number;
  height: number;
  fill: string;
};

type IconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
};

export const withIcon =
  (IconComponent: ComponentType<InjectedProps>) =>
  ({color, width, height}: IconProps): JSX.Element => {
    const iconFill = color || '#0A3040';
    const iconWidth = width || hScale(24);
    const iconHeight = height || vScale(24);

    return (
      <IconComponent fill={iconFill} width={iconWidth} height={iconHeight} />
    );
  };
