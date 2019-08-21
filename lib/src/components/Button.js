// @flow
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";

import Text from "./Text";
import type { ThemeType } from "../config/theme";
import withTheme from "../config/withTheme";

const styles = {
  wrapper: (theme: ThemeType, props: { fullWidth: boolean }) => ({
    width: props.fullWidth ? "100%" : undefined,
    minWidth: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primaryColor
  }),
  button: (theme: ThemeType, props: { bottom: boolean }) => ({
    paddingVertical: theme.button.paddingVertical + (props.bottom ? 10 : 0)
  }),
  buttonText: (theme: ThemeType) => ({
    padding: 0,
    height: 36,
    lineHeight: 36,
    color: "white",
    fontSize: theme.button.textSize
  })
};

const Button = ({
  children,
  onPress,
  bottom,
  color,
  loading,
  disabled = false,
  fullWidth = false,
  theme
}: {
  /** Button text */
  children: string,
  /** On press handler. Argument is `event` */
  onPress: Function,
  /** Extra space at the bottom for iPhoneX */
  bottom: boolean,
  /** Background color of button */
  color: string,
  /** Loading state, change the button text to loading indicator. Button is disabled when loading */
  loading: boolean,
  /** When disabled, button cannot be clicked and have gray color */
  disabled: boolean,
  /** Display button with width is 100% of its parent*/
  fullWidth: boolean,
  /**
   *
   * @ignore
   */
  theme: ThemeType
}) => (
  <TouchableOpacity
    disabled={disabled || loading}
    onPress={onPress}
    style={StyleSheet.flatten([
      styles.wrapper(theme, { fullWidth: fullWidth || bottom }),
      {
        backgroundColor: disabled
          ? theme.button.disabledColor
          : color
          ? color
          : theme.colors.primaryColor
      },
      { borderRadius: bottom ? 0 : theme.button.borderRadius }
    ])}
  >
    <SafeAreaView
      forceInset={{ bottom: bottom ? "always" : "never" }}
      style={styles.button(theme, { bottom, disabled })}
    >
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text style={styles.buttonText(theme)}>{children}</Text>
      )}
    </SafeAreaView>
  </TouchableOpacity>
);

export { Button };

export default withTheme(Button);
