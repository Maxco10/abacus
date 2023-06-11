import React from 'react';
import { BlurView } from 'expo-blur';
import { Platform, View } from 'react-native';
import * as Device from 'expo-device';
import { useThemeColors } from '../../lib/common';

const CurrentBlur = (Platform.OS === 'ios' && Device.isDevice) ? BlurView : View;

const ThemeBlurView = ({
  intensity = 50,
  style,
  children,
}) => {
  const { colorScheme, colors } = useThemeColors();

  return (
    <CurrentBlur
      intensity={intensity}
      tint={colorScheme}
      style={{
        backgroundColor: Platform.select({ ios: 'transparent', android: colors.tileBackgroundColor }),
        ...style,
      }}
    >
      {children}
    </CurrentBlur>
  );
};

export default ThemeBlurView;