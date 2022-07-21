import missionsReducer from '../redux/missions/missions';

describe('Testing display, join and leave missions', () => {
  test('Display missions', () => {
    const GET_DATA = 'SPACE_TRAVELERS_HUB/MISSIONS/GET_DATA';
    const payload = [
      {
        id: '1', name: 'Thaicom', description: 'Operated from Thailand', reserved: false,
      },
      {
        id: '2', name: 'Telstar', description: 'Canadian satellite', reserved: false,
      },
    ];
    const action = { type: GET_DATA, payload };

    const result = missionsReducer([], action);
    expect(result).toEqual(payload);
  });

  test('Join mission', () => {
    const JOIN_MISSION = 'SPACE_TRAVELERS/MISSIONS/JOIN_MISSION';
    const action = { type: JOIN_MISSION, id: '2' };
    const state = [
      {
        id: '1', name: 'Thaicom', description: 'Operated from Thailand', reserved: false,
      },
      {
        id: '2', name: 'Telstar', description: 'Canadian satellite', reserved: false,
      },
    ];

    const result = missionsReducer(state, action);

    const newState = [
      {
        id: '1', name: 'Thaicom', description: 'Operated from Thailand', reserved: false,
      },
      {
        id: '2', name: 'Telstar', description: 'Canadian satellite', reserved: true,
      },
    ];
    expect(result).toEqual(newState);
  });

  test('Leave mission', () => {
    const LEAVE_MISSION = 'SPACE_TRAVELERS/MISSIONS/LEAVE_MISSION';
    const action = { type: LEAVE_MISSION, id: '2' };
    const state = [
      {
        id: '1', name: 'Thaicom', description: 'Operated from Thailand', reserved: false,
      },
      {
        id: '2', name: 'Telstar', description: 'Canadian satellite', reserved: true,
      },
    ];

    const result = missionsReducer(state, action);

    const newState = [
      {
        id: '1', name: 'Thaicom', description: 'Operated from Thailand', reserved: false,
      },
      {
        id: '2', name: 'Telstar', description: 'Canadian satellite', reserved: false,
      },
    ];
    expect(result).toEqual(newState);
  });
});
