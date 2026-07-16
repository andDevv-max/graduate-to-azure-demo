import { Routes, Route, Link } from 'react-router-dom'
import { supabaseConfigured } from './supabaseClient'
import './App.css'

function Home() {
  return (
    <section id="center">
      <h1>Graduate to Azure - Demo App (preview test)</h1>
      <p>This is a throwaway Vite + React + Supabase app used to walk through the guide.</p>
      <p>Supabase env vars configured: <code>{String(supabaseConfigured)}</code></p>
      <nav>
        <Link to="/dashboard">Go to Dashboard</Link>
      </nav>
    </section>
  )
}

function Dashboard() {
  return (
    <section id="center">
      <h1>Dashboard</h1>
      <p>This inner page is used to test the refresh/404 fix (staticwebapp.config.json).</p>
      <Link to="/">Back home</Link>
    </section>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
