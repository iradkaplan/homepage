import createMuiTheme, {
  ThemeOptions,
  Theme
} from "@material-ui/core/styles/createMuiTheme";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    appDrawer: {
      width: React.CSSProperties["width"];
      breakpoint: Breakpoint;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    appDrawer?: {
      width?: React.CSSProperties["width"];
      breakpoint?: Breakpoint;
    };
  }
}

export default function createTheme(options?: ThemeOptions) {
  return createMuiTheme({
    appDrawer: {
      width: 225,
      breakpoint: "lg"
    },
    palette: {
      type: "light",
      primary: {
        light: "#494949",
        main: "#222222",
        dark: "#000000",
        contrastText: "#dddddd"
      },
      secondary: {
        light: "#64c2f2",
        main: "#2292bf",
        dark: "#00648f",
        contrastText: "#eeeeee"
      }
    },
    typography: {
      useNextVariants: true,
      fontFamily: "Open Sans",
      h1: { fontFamily: "Source Code Pro" },
      h2: { fontFamily: "Source Code Pro" },
      h3: { fontFamily: "Source Code Pro" },
      h4: { fontFamily: "Source Code Pro" },
      h5: { fontFamily: "Source Code Pro" },
      h6: { fontFamily: "Source Code Pro" },
      body1: { fontSize: 16, textAlign: "left" /*, color: "white" */ },
      body2: {
        fontSize: 12,
        textAlign: "left",
        // color: "white",
        fontStyle: "italic"
      }
    },
    ...options
  });
}
