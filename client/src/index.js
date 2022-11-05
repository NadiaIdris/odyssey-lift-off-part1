import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages";
import GlobalStyles from "./styles";

// Configure and instantiate ApolloClient instance.
const client = new ApolloClient({
  // The location of our GraphQL server
  // uri: "http://localhost:8000",
  uri: 'https://odyssey-lift-off-server.herokuapp.com/',
  // In-memory cache, which enables us to store and reuse query results so it doesn't have to make as many network requests.
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
