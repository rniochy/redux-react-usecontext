import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Quiz from '../component/quiz'
import DataProvider, { DataContext } from '../store/Globalstatus'
import Header from '../component/header'
import Footer from '../component/footer';





ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <DataProvider>
      <div>
           {/* Moved Header component to  */}
          <Quiz />
          <Footer/>
      </div>
    </DataProvider>
  </React.StrictMode>,
)
