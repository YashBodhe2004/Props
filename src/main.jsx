import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppClass from './AppClass.jsx'
import './index.css'
import ImageData from './components/DataComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App images={ImageData}/>
    <AppClass images={ImageData}/>

  </React.StrictMode>,
)
