import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
      <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
);
