import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "Mugisha Kevine",
    email: "hgover@gmail.com",
    project: "Monthly checkUP",
    status: "pending",
    weeks: (
      <button
        className="btn"
        color="info"
        style={{ background: "blue", color: "white" }}
      >
        Info
      </button>
    ),
    budget: (
      <button
        className="btn"
        color="success"
        style={{ background: "greenyellow", color: "white" }}
      >
        Done
      </button>
    ),
  },
  {
    avatar: user2,
    name: "Prisca Uwamahoro",
    email: "hgover@gmail.com",
    project: "Monthly CheckUp",
    status: "done",
    weeks: (
      <button
        className="btn"
        color="info"
        style={{ background: "blue", color: "white" }}
      >
        Info
      </button>
    ),
    budget: (
      <button
        className="btn"
        color="success"
        style={{ background: "greenyellow", color: "white" }}
      >
        Done
      </button>
    ),
  },
  {
    avatar: user3,
    name: "Nsenga Queen",
    email: "hgover@gmail.com",
    project: "Anemia",
    status: "holt",
    weeks: (
      <button
        className="btn"
        color="info"
        style={{ background: "blue", color: "white" }}
      >
        Info
      </button>
    ),
    budget: (
      <button
        className="btn"
        color="success"
        style={{ background: "greenyellow", color: "white" }}
      >
        Done
      </button>
    ),
  },
  {
    avatar: user4,
    name: "Jean Paul Ngoga",
    email: "hgover@gmail.com",
    project: "Tuberclosis",
    status: "pending",
    weeks: (
      <button
        className="btn"
        color="info"
        style={{ background: "blue", color: "white" }}
      >
        Info
      </button>
    ),
    budget: (
      <button
        className="btn"
        color="success"
        style={{ background: "greenyellow", color: "white" }}
      >
        Done
      </button>
    ),
  },
  {
    avatar: user5,
    name: "Jean Paul Ngoga",
    email: "hgover@gmail.com",
    project: "Extreme Cough",
    status: "done",
    weeks: (
      <button
        className="btn"
        color="info"
        style={{ background: "blue", color: "white" }}
      >
        Info
      </button>
    ),
    budget: (
      <button
        className="btn"
        color="success"
        style={{ background: "greenyellow", color: "white" }}
      >
        Done
      </button>
    ),
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Up coming Appointments</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            List of patients for today
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Patients</th>
                <th>Medical Condition</th>

                <th>Status</th>
                <th>Patient Info</th>
                <th>Check</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.project}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.budget}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
