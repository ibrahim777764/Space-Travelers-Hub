import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const joinedMissions = useSelector((s) => s.missionsReducer.filter((m) => m.reserved));
  const joinedRockets = useSelector((s) => s.rocketsReducer.rockets.filter((r) => r.reserved));

  return (
    <div className="container d-flex gap-2 justify-content-around align-items-center vh">
      {joinedMissions.length ? (
        <div>
          <h2 className="my-4">My Missions</h2>
          <ul className="d-flex list-style gap-3 flex-column m-0 p-0">
            {joinedMissions.map((item) => (
              <li className="py-3 px-5 border text-center rounded" key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ) : (

        <div className="border border-2 rounded">
          <h4 className="p-3">No missions reserved</h4>
        </div>
      )}
      {joinedRockets.length ? (
        <div>
          <h2 className="my-4">My Rockets</h2>
          <ul className="d-flex list-style gap-3 flex-column m-0 p-0">
            {joinedRockets.map((item) => (
              <li className="py-3 px-5 border text-center rounded" key={item.id}>{item.rocket_name}</li>
            ))}
          </ul>
        </div>
      ) : (

        <div className="border border-2 rounded">
          <h4 className="p-3">No rockets reserved</h4>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
