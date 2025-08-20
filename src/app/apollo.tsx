"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// https://spacex-production.up.railway.app/

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",

  cache: new InMemoryCache(),
});

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
