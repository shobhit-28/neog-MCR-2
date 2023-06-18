import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ActivityReducerHandler } from './activityReducerContext/activityReducerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ActivityReducerHandler>
        <App />
      </ActivityReducerHandler>
    </BrowserRouter>
  </React.StrictMode>,
)
