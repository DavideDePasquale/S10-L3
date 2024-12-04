import { Dropdown } from "react-bootstrap";
import { Grid } from "react-bootstrap-icons";
import { Grid3x3 } from "react-bootstrap-icons";
import PrimaPartePagCen from "./PrimaPartePagCen";
import SecondaPartePagCen from "./SecondaPartePagCen";
import TerzaPartePagCen from "./TerzaPartePagCen";

const CentralPage = ({ movie }) => {
  return (
    <div className="px-3 pt-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2>TV Shows</h2>
          <div className="btn-group" role="group">
            <div className="dropdown ms-4 mt-1">
              <Dropdown>
                <Dropdown.Toggle
                  variant="transparent border border-1 rounded-0 text-white"
                  style={{ color: "#adb5bd3b" }}
                  id="dropdown-basic"
                >
                  Genres
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Shrek</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Toy Story</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Scooby Doo</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <Grid />
          </div>
          <div className="paddingSpecial">
            <Grid3x3 />
          </div>
        </div>
      </div>
      <h4 className="pt-1 fw-normal">
        Il meglio di:
        <strong> Shrek</strong>{" "}
      </h4>
      <PrimaPartePagCen movie={movie} />
      <h4 className="pt-1 fw-normal">
        Il meglio di: <strong>Toy Story</strong>
      </h4>
      <SecondaPartePagCen movie={movie} />
      <h4 className="pt-1 fw-normal ">
        Il meglio di: <strong className="fw-bold">Scooby Doo</strong>
      </h4>
      <TerzaPartePagCen movie={movie} />
    </div>
  );
};
export default CentralPage;
