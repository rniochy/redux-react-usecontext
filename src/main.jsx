import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from '../component/layout'
import Quiz from '../component/quiz'
import DataProvider from '../store/Globalstatus'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <Layout >
          <Quiz />
      </Layout>
    </DataProvider>
  </React.StrictMode>,
)
