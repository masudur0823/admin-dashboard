import React from "react";

function Table() {
  const data = [
    {
      id: "1",
      alert: "xyz",
      cam_id: "D1",
      location: "Pakistan",
      date: "2020-05-02 07:10:15",
      img: require("../images/table_img.png"),
    },
    {
      id: "2",
      alert: "xyz",
      cam_id: "D1",
      location: "Pakistan",
      date: "2020-05-02 07:10:15",
      img: require("../images/table_img.png"),
    },
  ];

  return (
    <div className="mt-4">
      <table>
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
          <tr>
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
            <td><img src={info?.img} className="table_img" alt="" /></td>
            <td>
              <span className="delete d-flex align-items-center">delete</span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
