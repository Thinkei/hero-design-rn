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
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  toggle = () => {
    this.setState({ loading: !this.state.loading });
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          loading={this.state.loading}
          onPress={this.toggle}
          color="green"
        >
          Button
        </Button>
        <View style={styles.pusher}>
          <TextInput
            placeholder="Enter your email"
            noBorder
            inputStyle={{ backgroundColor: "#eee" }}
          />
          <Button
            loading={this.state.loading}
            onPress={this.toggle}
            color="green"
          >
            Button
          </Button>
          <Button
            loading={this.state.loading}
            onPress={this.toggle}
            color="pink"
            disabled
          >
            Disabled Button
          </Button>
          <Button color="red">Button</Button>
        </View>
        <Button loading bottom>
          Button
        </Button>
      </View>
    );
  }
}

export default ButtonScreen;
