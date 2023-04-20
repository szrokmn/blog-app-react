import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "@mui/material";
import store, { persistor } from "./app/store";
import { createTheme } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer/>
      </ThemeProvider>
    </>
  );
}

export default App;
