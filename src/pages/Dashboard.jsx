import React from 'react'
import Filter from '../components/Filter'
import Layouts from '../components/Layouts'
import Pagination from '../components/Pagination'
import Table from '../components/Table'

function Dashboard() {
  return (
    <Layouts>
        <Filter/>
        <Table/>
        <Pagination/>
    </Layouts>
  )
}

export default Dashboard