// @flow
import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";

import type { ThemeType } from "../config/theme";
import Text from "./Text";
import withTheme from "../config/withTheme";

const styles = {
  wrapper: (theme: ThemeType) => ({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primaryColor
  }),
  button: {
    paddingVertical: 24
  },
  buttonText: (theme: ThemeType) => ({
    color: "white",
    fontSize: theme.button.textSize
  })
};

const Button = ({
  children,
  onPress,
  bottom,
  color,
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
  /**
   *
   * @ignore
   */
  theme: ThemeType
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={StyleSheet.flatten([
      styles.wrapper(theme),
      { backgroundColor: color || theme.colors.primaryColor }
    ])}
  >
    <SafeAreaView
      forceInset={{ bottom: bottom ? "always" : "never" }}
      style={styles.button}
    >
      <Text style={styles.buttonText(theme)}>{children}</Text>
    </SafeAreaView>
  </TouchableOpacity>
);

export { Button };

export default withTheme(Button);
