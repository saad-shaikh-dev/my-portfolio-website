import React from 'react'
import Layout from '../components/Layout'

const the404Page = () => {
  return (
    <Layout>
      <div className="four-o-four">
        <strong>404 error</strong>
        <p>Sorry, this page does not exist.</p>
      </div>
    </Layout>
  )
}

export default the404Page