import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import { notifyRiderStateQuery } from '../queries/rider';

interface RiderStateInterface {
  tripId: string;
  latitude: number;
  longitude: number;
}

const notifyRiderState = async (
  client: ApolloClient<NormalizedCacheObject>,
  riderState: RiderStateInterface,
) => {
  try {
    const { data } = await client.mutate({
      mutation: notifyRiderStateQuery,
      variables: riderState,
      fetchPolicy: 'no-cache',
    });
  } catch (err) {
    throw err;
  }
};

export { notifyRiderState };
