import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="container d-flex gap-2 justify-content-around align-items-center vh">
      {reservedMissions.length ? (
        <div>
          <h2 className="my-4">My Missions</h2>
          <ul className="d-flex list-style gap-3 flex-column m-0 p-0">
            {reservedMissions.map((item) => (
              <li className="py-3 px-5 border text-center rounded" key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ) : (

        <div className="border border-2 rounded">
          <h4 className="p-3">No missions reserved</h4>
        </div>
      )}
      <div>
        <h2>My Rockets</h2>
      </div>
    </div>
  );
};

export default Profile;
