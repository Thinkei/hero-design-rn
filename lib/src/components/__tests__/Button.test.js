import React from "react";

import ThemeProvider from "../../config/ThemeProvider";
import Button from "../Button";
import { getTheme } from "../../config/theme";
import renderer from "react-test-renderer";

const theme = getTheme();

describe("Button", () => {
  describe("When button at the bottom", () => {
    it("renders correctly", () => {
      const component = renderer.create(
        <ThemeProvider theme={theme}>
          <Button theme={theme} bottom>
            Bottom Button
          </Button>
        </ThemeProvider>
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("Button is loading", () => {
    it("renders correctly", () => {
      const component = renderer.create(
        <ThemeProvider theme={theme}>
          <Button theme={theme} loading>
            Loading Button
          </Button>
        </ThemeProvider>
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("Button is disabled", () => {
    it("renders correctly", () => {
      const component = renderer.create(
        <ThemeProvider theme={theme}>
          <Button theme={theme} disabled>
            Disabled Button
          </Button>
        </ThemeProvider>
      );

      expect(component).toMatchSnapshot();
    });
  });
});
