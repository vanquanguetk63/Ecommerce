import React, { ComponentProps, useMemo, ReactNode } from 'react';
import { StyleSheet, StyleProp, TextStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { vScale } from '~/libs/scale';

type TextProps = {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
  color?: string;
  bold?: boolean;
} & Omit<ComponentProps<typeof Text>, 'style'>;

const getColor = (color?: string): StyleProp<TextStyle> => {
  return {
    color: color ? color : '#000',
  };
};

const getFontWeight = (bold?: boolean): StyleProp<TextStyle> => {
  return {
    fontWeight: bold ? 'bold' : 'normal',
  };
};

export const H1 = ({
  style,
  color,
  bold,
  ...props
}: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.H1, getColor(color), getFontWeight(bold), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

export const H2 = ({
  style,
  color,
  bold,
  ...props
}: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.H2, getColor(color), getFontWeight(bold), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

export const H3 = ({
  style,
  color,
  bold,
  ...props
}: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.H3, getColor(color), getFontWeight(bold), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

export const H4 = ({
  style,
  color,
  bold,
  ...props
}: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.H4, getColor(color), getFontWeight(bold), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

export const P = ({ style, color, bold, ...props }: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.P, getColor(color), getFontWeight(bold), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

export const SmallText = ({
  style,
  color,
  bold,
  ...props
}: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.SmallText, getColor(color), getFontWeight(bold), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

export const TextLink = ({
  style,
  color,
  bold,
  ...props
}: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.TextLink, getColor(color), getFontWeight(bold), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

export const FormTitle = ({
  style,
  color,
  bold,
  ...props
}: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.FormTitle, getColor(color), getFontWeight(bold), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

const styles = StyleSheet.create({
  H1: {
    fontSize: vScale(26),
  },
  H2: {
    fontSize: vScale(24),
  },
  H3: {
    fontSize: vScale(20),
  },
  H4: {
    fontSize: vScale(18),
  },
  P: {
    fontSize: vScale(16),
  },
  SmallText: {
    fontSize: vScale(14),
  },
  TextLink: {
    fontSize: vScale(16),
    color: '#0A3040',
  },
  FormTitle: {
    fontSize: vScale(10),
  },
});
