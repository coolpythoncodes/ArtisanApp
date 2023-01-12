import {StyleSheet, Text, TextStyle, TouchableOpacity} from 'react-native';
import React from 'react';

type CustomButtonProps = {
  title: string;
  style?: any;
  titleStyle?: TextStyle;
  onPress: () => void;
};

const CustomButton = ({
  title,
  style,
  onPress,
  titleStyle,
}: CustomButtonProps) => {
  const buttonStyles = [styles.button];
  const titleStyles = [styles.title];

  if (style) {
    buttonStyles.push(style);
  }

  if (titleStyles) {
    titleStyles.push(titleStyle);
  }

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={titleStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    height: 48,
    flexDirection: 'row',
    backgroundColor: '#243B64',
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 19,
    color: 'white',
  },
});
