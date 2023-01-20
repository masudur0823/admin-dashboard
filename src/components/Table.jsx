import React from "react";
import Modals from "./Modals";

const data = [
  {
    id: "1",
    alert: "xyz",
    cam_id: "D1",
    location: "Pakistan",
    date: "2020-05-02 07:10:15",
    img: require("../images/big_img.png"),
  },
  {
    id: "2",
    alert: "xyz",
    cam_id: "D2",
    location: "Pakistan",
    date: "2020-05-02 07:10:15",
    img: require("../images/big_img.png"),
  },
  {
    id: "3",
    alert: "xyz",
    cam_id: "D3",
    location: "Pakistan",
    date: "2020-05-02 07:10:15",
    img: require("../images/big_img.png"),
  },
];

function Table() {
  const [modalShow, setModalShow] = React.useState(false);
  const [rowData, setRowData] = React.useState(false);
  const handleView = (info) => {
    setModalShow(true);
    setRowData(info);
    console.log(info)
  };

  return (
    <div className="mt-4">
      <table className="table">
        <tr>
          <th>
            <label class="check_container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </th>
          <th>Alert Type</th>
          <th>Cam ID</th>
          <th>Location</th>
          <th>Date</th>
          <th>Image</th>
          <th>Action</th>
        </tr>

        {data.map((info) => (
          <tr key={info?.id}>
            <td>
              <label class="check_container">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </td>
            <td>{info?.alert}</td>
            <td>{info?.cam_id}</td>
            <td>{info?.location}</td>
            <td>{info?.date}</td>
            <td>
              <img src={info?.img} className="table_img" alt="" />
            </td>
            <td>
              <div>
                <span
                  className="delete d-flex align-items-center"
                  onClick={() => handleView(info)}
                >
                  delete
                </span>
                <Modals rowdata={rowData} show={modalShow} onHide={() => setModalShow(false)} />
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
