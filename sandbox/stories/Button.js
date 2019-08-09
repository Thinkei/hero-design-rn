import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "hero-design-rn";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  pusher: {
    flex: 1,
    width: "100%",
    padding: 20
  }
});

class ButtonScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pusher}>
          <TextInput
            placeholder="Enter your email"
            noBorder
            inputStyle={{ backgroundColor: "#eee" }}
          />
          <Button color="red">Button</Button>
        </View>
        <Button bottom>Button</Button>
      </View>
    );
  }
}

export default ButtonScreen;
