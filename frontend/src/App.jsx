import React from "react"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import NotFound from "./pages/NotFound/NotFound"
import Home from "./pages/Home/Home"
import ProtectedRoute from "./components/ProtectedRoute"

function Logout() {
  localStorage.clear()
  return < Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />

}
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        {/* <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
