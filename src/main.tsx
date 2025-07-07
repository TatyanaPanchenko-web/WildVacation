import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import firebaseConfig from "../firebaseConfig";
import {initializeApp} from "firebase/app";
import App from "./App/App";
import "./styles/index.scss";

initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    // <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    // </StrictMode>
  );
}

