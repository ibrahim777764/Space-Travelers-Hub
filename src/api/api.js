export const GET_ROCKETS = 'rockets/rocketsAdded';
const ROCKETS_API = 'https://api.spacexdata.com/v3/rockets';

const apiGetElements = async (action) => {
  let response;
  let rockets;
  switch (action.type) {
    case GET_ROCKETS:
      response = await fetch(ROCKETS_API);
      rockets = await response.json();
      return rockets;
    default:
      return 'Unrecognized action';
  }
};

export default apiGetElements;
