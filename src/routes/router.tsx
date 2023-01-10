import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '@/containers/HomePage'
import FinishPage from '@/containers/FinishPage'
import PaymentPage from '@/containers/PaymentPage'

import { HOME_PAGE_PATH, FINISH_PAGE_PATH, PAYMENT_PAGE_PATH } from '@/constants/routes'

const Router = () => {
  const getAllPage = () => (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PAGE_PATH} element={<HomePage />} />
        <Route path={FINISH_PAGE_PATH} element={<FinishPage />} />
        <Route path={PAYMENT_PAGE_PATH} element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  )

  return (
    <div className="App container" id="app">
      {getAllPage()}
    </div>
  )
}

export default Router
