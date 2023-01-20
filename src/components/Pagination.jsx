import React from 'react'

function Pagination() {
  return (
    <div className='d-flex'>
        <div className="d-flex">
            <select name="" id="">
                <option value="10">10</option>
                <option value="10">20</option>
                <option value="10">50</option>
                <option value="1000">All</option>
            </select>
            <p>page</p>
        </div>
        <div className="d-flex">
            <button></button>
        </div>
    </div>
  )
}

export default Pagination