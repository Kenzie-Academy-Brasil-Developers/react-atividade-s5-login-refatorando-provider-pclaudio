import { CssBaseline, ThemeProvider } from "@mui/material";
import Routes from "./routes";
import theme from "./theme";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes />
    </ThemeProvider>
  );
};

export default App;
