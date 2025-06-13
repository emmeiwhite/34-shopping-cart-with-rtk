import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            to="/"
            element={<HomePage />}
          />
          <Route
            to="/cart"
            element={<CartPage />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
