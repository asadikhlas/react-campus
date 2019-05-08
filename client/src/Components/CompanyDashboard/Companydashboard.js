import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CompanyDashboard extends Component {
  render() {
    return (
      <div>
        hello from companydashboard
        <Link to = '/postjob'>GOTO POST JOBS</Link>
      </div>
    )
  }
}

export default  CompanyDashboard;
