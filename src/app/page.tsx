"use client";

import { graphql } from "@/gql";
import { useQuery } from "@apollo/client";

const GET_ROCKETS = graphql(
  `
    query SomeEGRockets {
      rockets {
        description
      }
    }
  `
);

export default function Home() {
  const { data, loading, error } = useQuery(GET_ROCKETS);

  return <div>hi</div>;
}
