import React from "react";

function Tabs() {
  const [toggleState, setToggleState] = React.useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="filter_main">
      <div className="tabs">
        <button
          className={toggleState === 1 ? "active_tabs" : ""}
          onClick={() => toggleTab(1)}
        >
          Today
        </button>
        <button
          className={toggleState === 2 ? "active_tabs" : ""}
          onClick={() => toggleTab(2)}
        >
          7 days
        </button>
        <button
          className={toggleState === 3 ? "active_tabs" : ""}
          onClick={() => toggleTab(3)}
        >
          30 days
        </button>
      </div>
      <div className="filter_child">
        <p>from date</p>
        <input type="date" className="custom-inpt" name="" id="" />
      </div>
      <div className="filter_child">
        <p>to date</p>
        <input type="date" className="custom-inpt" name="" id="" />
      </div>
      <div className="filter_child">
        <p>Alert Type</p>
        <select name="" id="">
          <option value="">-</option>
          <option value="xyz">xyz</option>
          <option value="xyzz">xyzz</option>
          <option value="xyzzz">xyzzz</option>
        </select>
      </div>

      <div className="filter_child">
        <p>Location</p>
        <select name="" id="">
          <option value="">Select</option>
          <option value="1">Pakistan</option>
          <option value="2">Bangladesh</option>
          <option value="3">India</option>
        </select>
      </div>
      <div className="filter_child">
        <p>Cam ID</p>
        <input type="text" name="" id="" placeholder="Enter Cam Id here.." />
      </div>
      <button className="apply_btn">Apply</button>
    </div>
  );
}

function Filter() {
  return (
    <div className="filter_bg">
      <Tabs />
    </div>
  );
}

export default Filter;
