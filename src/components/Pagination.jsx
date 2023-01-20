import React from "react";
import a_left from "../images/icons/arrow_left.svg";
import a_leftDouble from "../images/icons/double_left.svg";

function Pagination() {
  return (
    <div className="d-flex justify-content-end pagination_main">
      <div className="d-flex align-items-center me-3">
        <select name="" id="" className="select">
          <option value="10">10</option>
          <option value="10">20</option>
          <option value="10">50</option>
          <option value="1000">All</option>
        </select>
        <p className="ms-2">page</p>
      </div>
      <div className="d-flex gap-2 align-items-center">
        <button>
          <img src={a_left} alt="" />
        </button>
        <button>
          <img src={a_leftDouble} alt="" />
        </button>
        <div className="px-3">
          <span>1/12</span>
        </div>
        <button>
          <img src={a_left} style={{ transform: "rotate(180deg)" }} alt="" />
        </button>
        <button>
          <img src={a_leftDouble} style={{ transform: "rotate(180deg)" }} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
