// @flow

import normalizeText from "../helpers/normalizeText";

const theme: ThemeType = {
  text: {
    fontFamily: "Arial",
    fontWeight: "400",
    defaultColor: "#000000",
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    dangerColor: "red",
    warningColor: "yellow",
    successColor: "green",
    h1Style: {
      fontSize: normalizeText(25)
    },
    h2Style: {
      fontSize: normalizeText(20)
    },
    h3Style: {
      fontSize: normalizeText(18)
    },
    h4Style: {
      fontSize: normalizeText(15)
    },
    h5Style: {
      fontSize: normalizeText(12)
    },
    h6Style: {
      fontSize: normalizeText(10)
    },
    boldStyle: {
      fontWeight: "500"
    },
    bolderStyle: {
      fontWeight: "600"
    },
    lightStyle: {
      fontWeight: "300"
    },
    lighterStyle: {
      fontWeight: "200"
    }
  },
  colors: {
    primaryColor: "#003580",
    dangerColor: "#ff4136",
    borderColor: "#aaaaaa"
  },
  button: {
    textSize: normalizeText(16),
    paddingVertical: 15
  },
  input: {
    textSize: normalizeText(16),
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 4
  }
};

export type ThemeType = {
  text: {
    fontFamily: string,
    fontWeight: string,
    defaultColor: string,
    primaryColor: string,
    secondaryColor: string,
    dangerColor: string,
    warningColor: string,
    successColor: string,
    h1Style: {
      fontSize: number
    },
    h2Style: {
      fontSize: number
    },
    h3Style: {
      fontSize: number
    },
    h4Style: {
      fontSize: number
    },
    h5Style: {
      fontSize: number
    },
    h6Style: {
      fontSize: number
    },
    boldStyle: {
      fontWeight: string
    },
    bolderStyle: {
      fontWeight: string
    },
    lightStyle: {
      fontWeight: string
    },
    lighterStyle: {
      fontWeight: string
    }
  },
  colors: {
    primaryColor: string,
    dangerColor: string,
    borderColor: string
  },
  button: {
    textSize: number,
    paddingVertical: number
  },
  input: {
    textSize: number,
    paddingVertical: number,
    paddingHorizontal: number,
    marginBottom: number,
    borderRadius: number
  }
};

let defaultTheme: ThemeType = theme;

const injectTheme = (theme: ThemeType): void => {
  defaultTheme = theme;
};
const getTheme = (): ThemeType => defaultTheme;

export { injectTheme, getTheme };
