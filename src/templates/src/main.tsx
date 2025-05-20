import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/index.page'
import PostPage from '../../templates/pages/post/index.page'
import NewPostPage from '../../templates/pages/post/new.page'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/posts/new" element={<NewPostPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)