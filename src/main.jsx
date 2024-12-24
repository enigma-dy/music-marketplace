import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PrimeReactProvider>
    </Provider>
  </StrictMode>
);
