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
        main: "#222222"
      },
      secondary: {
        main: "#2292bf"
      }
    },
    typography: {
      useNextVariants: true,
      fontFamily: ["comic sans ms", "comic sans"].join(","),
      body1: { fontSize: 16, textAlign: "left", color: "white" },
      body2: {
        fontSize: 12,
        textAlign: "left",
        color: "white",
        fontStyle: "italic"
      }
    },
    ...options
  });
}
