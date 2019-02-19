import createMuiTheme, {
  ThemeOptions,
  Theme
} from "@material-ui/core/styles/createMuiTheme";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

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

declare module "@material-ui/core/styles/createTypography" {
  interface Typography {
    monoFonts: CSSProperties["fontFamily"];
    sansSerifFonts: CSSProperties["fontFamily"];
  }
  interface TypographyOptions {
    monoFonts?: CSSProperties["fontFamily"];
    sansSerifFonts?: CSSProperties["fontFamily"];
  }
}

export default function createTheme(options?: ThemeOptions) {
  let monoFonts: string = [
    "Source Code Pro",
    "source-code-pro",
    "Menlo",
    "Monaco",
    "Consolas",
    "Courier New",
    "monospace"
  ].join(",");
  let sansSerifFonts: string = [
    "Open Sans",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif"
  ].join(",");
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
      monoFonts: monoFonts,
      sansSerifFonts: sansSerifFonts,
      fontFamily: sansSerifFonts,
      caption: { fontFamily: sansSerifFonts, textAlign: "center" },
      h1: { fontFamily: monoFonts, textAlign: "left" },
      h2: { fontFamily: monoFonts, textAlign: "left" },
      h3: { fontFamily: monoFonts, textAlign: "left" },
      h4: { fontFamily: monoFonts, textAlign: "left" },
      h5: { fontFamily: monoFonts, textAlign: "left" },
      h6: { fontFamily: monoFonts, textAlign: "left" },
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
