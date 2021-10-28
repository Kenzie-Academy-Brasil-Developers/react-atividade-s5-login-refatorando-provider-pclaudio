import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
