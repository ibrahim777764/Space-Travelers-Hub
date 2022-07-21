/* eslint-disable import/order */

import { joinMission, leaveMission } from '../redux/missions/missions';
import { useDispatch, useSelector } from 'react-redux';

import { Table } from 'react-bootstrap';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {missions.map((element) => (
            <tr key={element.id}>
              <td>{element.name}</td>
              <td>{element.description}</td>
              <td className="align-middle wdt">
                {
                  element.reserved ? (
                    <p className="fs bg-secondary text-center rounded fc mg-0 p-1">ACTIVE MEMBER</p>
                  ) : (
                    <p className="fs bg-secondary text-center rounded fc mg-0 p-1">NOT A MEMBER</p>
                  )
                }
              </td>

              <td className="align-middle fs wdt">
                {
                  element.reserved ? (
                    <button
                      type="button"
                      className="btn-outline-secondary rounded py-2"
                      onClick={() => {
                        handleLeaveMission(element.id);
                      }}
                    >
                      LEAVE MISSION
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn-outline-secondary rounded py-2"
                      onClick={() => {
                        handleJoinMission(element.id);
                      }}
                    >
                      JOIN MISSION
                    </button>
                  )
                }
              </td>
            </tr>
          ))}
        </tbody>

      </Table>

    </div>
  );
};

export default Missions;
