import { useNavigate } from "react-router-dom"
import api from "../api"
import { useState } from "react"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"
import "../styles/Login.css"

function Login(method) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post("/api/token/get/", { email, password })
            if (res) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate("/")
            } else {
                navigate('/login')
            }

        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }


    return <>
        <form action="" onSubmit={handleSubmit} className="form-container">
            <h1>Login</h1>
            <input className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email" />
            <input className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="Password"
                placeholder="Password" />

            <button className="form-button">Login</button>
        </form>
    </>

}

export default Login