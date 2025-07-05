import { useNavigate } from "react-router-dom"
import api from "../api"
import { useState } from "react"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"
import "../styles/Login.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"

function Login() {

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
            if (error.response) {
                console.log("Backend error response:", error.response.data);
                alert(JSON.stringify(error.response.data)); // Show detailed message
            }
        } finally {
            setLoading(false)
        }
    }


    return <div className="bg_photo">
        <form action="" onSubmit={handleSubmit} className="form-container">
            <h1>Login</h1>
            <div className="input-wrapper">
                <MdOutlineEmail className="input-icon" />
                <input className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Enter your email" />
            </div>
            <div className="input-wrapper">
                <RiLockPasswordLine className="input-icon" />
                <input className="form-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="Password"
                    placeholder="Enter your password" />
            </div>

            <button className="form-button">Login</button>
            <p>You don't have an account? <a href="/register">Register</a></p>
        </form>
    </div>

}

export default Login