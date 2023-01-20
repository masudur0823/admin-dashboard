import React from "react";

function Table() {
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
        <tr>
          <td>
          <label class="check_container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </td>
          <td>xyz</td>
          <td>D1</td>
          <td>Pakistan</td>
          <td>2020-05-02 07:10:15</td>
          <td>img</td>
          <td>
            <span>delete</span>
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
