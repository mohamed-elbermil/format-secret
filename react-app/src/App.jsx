import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import FormationsPage from './pages/FormationsPage'
import AProposPage from './pages/AProposPage'
import AcademiePage from './pages/AcademiePage'
import CguPage from './pages/CguPage'
import CgvPage from './pages/CgvPage'
import FormationNtcPage from './pages/FormationNtcPage'
import TitresProPage from './pages/TitresProPage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/formations" element={<FormationsPage />} />
          <Route path="/formation-ntc/:slug" element={<FormationNtcPage />} />
          <Route path="/titres-professionnels" element={<TitresProPage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/academie" element={<AcademiePage />} />
          <Route path="/cgu" element={<CguPage />} />
          <Route path="/cgv" element={<CgvPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
