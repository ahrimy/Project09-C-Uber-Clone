import { sendDriverCall } from '../queries/callRequest';

import { ApolloClient } from '@apollo/client';

interface Position {
  lat: number
  lng: number
}

interface riderPublishInfo {
  riderId: string
  riderEmail: string
  riderName: string
  riderPos: Position
  pickUpPos: Position
  pickUpAddress: string
  destinationPos: Position
  destinationAddress: string
  tripStatus: string
}

export const callRequest = async (client: ApolloClient<Object>, history:any, riderPublishInfo: riderPublishInfo) => {
  try {
    const { data: { driverCall } } = await client.mutate({
      mutation: sendDriverCall,
      variables: { riderPublishInfo: riderPublishInfo },
      fetchPolicy: 'no-cache',
    });
    //TODO: sessionStorage 대신 redux로 관리
    if (driverCall.tripId) {
      sessionStorage.setItem('tripId', driverCall.tripId);
      history.push('/rider/waiting');
    }
  } catch (error) {
    window.alert('호출에 실패했습니다');
    console.log(error);
  }
};
