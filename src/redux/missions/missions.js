const initialState = [];

const GET_DATA = 'SPACE_TRAVELERS_HUB/MISSIONS/GET_DATA';
const JOIN_MISSION = 'SPACE_TRAVELERS/MISSIONS/JOIN_MISSION';
const LEAVE_MISSION = 'SPACE_TRAVELERS/MISSIONS/LEAVE_MISSION';

const url = 'https://api.spacexdata.com/v3/missions';

export const addMissions = (payload) => ({
  type: GET_DATA,
  payload,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

export const getMissions = async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const fetchData = data.map((element) => ({
    id: element.mission_id,
    name: element.mission_name,
    description: element.description,
    reserved: false,
  }));
  dispatch(addMissions(fetchData));
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.payload];

    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return [...newState];
    }

    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return [...newState];
    }

    default:
      return state;
  }
};

export default missionsReducer;
