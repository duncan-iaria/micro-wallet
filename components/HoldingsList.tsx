import React from 'react';

import { Text } from "../components/Themed";
import { useQuery, gql } from "@apollo/client";
import { Holding } from '../types';

const HOLDINGS = gql`
  query {
    allHoldings {
      id
      name
      category
      icon_url
      amount
      value_usd
      symbol
      denomination
      number
      pin
    }
  }
`;

export const HoldingsList = () => {
  const { loading, error, data } = useQuery(HOLDINGS);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return data.allHoldings?.map((h: Holding) => (
    <Text key={h.id}>
      {h.name}: {h.amount} {h.category}
    </Text>
  ));
};
