import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6500",
      light: "#FF8A08",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "#FFC100",
      dark: "#ff8a65",
    },
    background: {
      default: "#FFFFFF",
      paper: "#edf2f4",
    },
    text: {
      primary: "#023047",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    fontSize: 14,
  },
});
