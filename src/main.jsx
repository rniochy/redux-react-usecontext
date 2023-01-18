import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from '../component/layout'
import Quiz from '../component/quiz'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout >
        <Quiz />
    </Layout>
  </React.StrictMode>,
)
