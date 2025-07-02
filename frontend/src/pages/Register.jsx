import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api"


function Register() {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [about, setAbout] = useState("")
    const [is_captain, setIsCaptain] = useState(false);
    const [password, setPassword] = useState("")
    const [passwordConf, setPasswordConf] = useState("")


    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleCaptainChange = (event) => {
        setIsCaptain(event.target.checked);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passwordConf) {
            alert("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            const req = await api.post("/api/user/register/", { email, password, user_name: username, first_name: firstname, about, is_captian: is_captain })
            if (req.status === 201 || req.status === 200) {
                alert("User created")
                navigate("/login")
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

    return <>
        <form onSubmit={handleSubmit} className="form-container">
            <h1>Register</h1>
            <input className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email" />
            <input className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username" />
            <input className="form-input"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                placeholder="Firstname" />
            <input className="form-input"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                type="text"
                placeholder="About" />

            <label>
                Is Captain
                <input
                    type="checkbox"
                    checked={is_captain}
                    onChange={handleCaptainChange}
                />
            </label>
            <input className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="Password"
                placeholder="Password" />
            <input className="form-input"
                value={passwordConf}
                onChange={(e) => setPasswordConf(e.target.value)}
                type="Password"
                placeholder="Password Confirmation" />

            <button className="form-button">Register</button>
        </form>

    </ >

}

export default Register