import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {missions.map((element) => (
            <tr key={element.mission_id}>
              <td>{element.mission_name}</td>
              <td>{element.description}</td>
              <td className="align-middle wdt"><p className="fs bg-secondary text-center rounded fc mg-0">NOT A MEMBER</p> </td>
              <td className="align-middle fs wdt"><button className="btn-outline-secondary rounded py-2">JOIN MISSION</button></td>
            </tr>
          ))}
        </tbody>

      </Table>

    </div>
  );
};

export default Missions;
