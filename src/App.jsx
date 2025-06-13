import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/cart"
            element={<CartPage />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
