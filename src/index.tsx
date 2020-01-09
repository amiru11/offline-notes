import * as React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./client";
import App from "./App";
import GlobalStyle from "./styles/globalStyle";

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,

  document.getElementById("root")
);
