import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Quiz from '../component/quiz'
import DataProvider from '../store/Globalstatus'
import Header from '../component/header'
import Footer from '../component/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <div>
          <Header/>
          <Quiz />
          <Footer/>
      </div>
    </DataProvider>
  </React.StrictMode>,
)
