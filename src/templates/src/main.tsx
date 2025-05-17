import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/index.page'

const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <HomePage />
    </React.StrictMode>
  )
}