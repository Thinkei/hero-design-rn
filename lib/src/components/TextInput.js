// @flow
import { TextInput as RNTextInput, View, StyleSheet } from "react-native";
import React from "react";

import type { ThemeType } from "../config/theme";
import Text from "./Text";
import withTheme from "../config/withTheme";

const styles = {
  wrapper: (theme: ThemeType, props: Object) => ({
    marginBottom: props.noMargin ? 0 : theme.input.marginBottom
  }),
  input: (theme: ThemeType, props: Object) => ({
    width: "100%",
    paddingVertical: theme.input.paddingVertical,
    paddingHorizontal: theme.input.paddingHorizontal,
    borderColor: theme.colors.borderColor,
    borderWidth: props.noBorder ? 0 : StyleSheet.hairlineWidth,
    borderRadius: theme.input.borderRadius,
    fontSize: theme.input.textSize
  }),
  inputError: (theme: ThemeType) => ({
    borderColor: theme.colors.dangerColor,
    borderWidth: 2
  }),
  textError: (theme: ThemeType) => ({
    marginTop: 5,
    color: theme.colors.dangerColor
  })
};

const TextInput = ({
  theme,
  keyboard = "default",
  placeholder,
  value,
  onChange,
  error,
  noBorder = false,
  noMargin = false,
  inputStyle = {},
  ...others
}: {
  /**
   *
   * @ignore
   */
  theme: ThemeType,
  keyboard: string,
  placeholder?: string,
  value?: string,
  onChange?: Function,
  error?: string,
  noBorder: boolean,
  noMargin: boolean,
  inputStyle: Object
}) => (
  <View style={styles.wrapper(theme, { noMargin })}>
    <RNTextInput
      keyboardType={keyboard}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoCorrect={false}
      {...others}
      style={StyleSheet.flatten([
        styles.input(theme, { noBorder }),
        error ? styles.inputError(theme) : null,
        inputStyle
      ])}
    />
    {error ? <Text style={styles.textError(theme)}>{error}</Text> : null}
  </View>
);

export { TextInput };

export default withTheme(TextInput);
