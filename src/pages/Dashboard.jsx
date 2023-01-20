import React from 'react'
import Filter from '../components/Filter'
import Layouts from '../components/Layouts'
import Table from '../components/Table'

function Dashboard() {
  return (
    <Layouts>
        <Filter/>
        <Table/>
    </Layouts>
  )
}

export default Dashboard