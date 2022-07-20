const initialState = [];

const GET_DATA = 'SPACE_TRAVELERS_HUB/MISSIONS/GET_DATA';

const url = 'https://api.spacexdata.com/v3/missions';

export const addMissions = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getMissions = async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  data.map((element) => ({
    id: element.mission_id,
    name: element.mission_name,
    description: element.description,
  }));
  dispatch(addMissions(data));
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.payload];

    default:
      return state;
  }
};

export default missionsReducer;
