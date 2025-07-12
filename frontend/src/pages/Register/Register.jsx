import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../api"
import "../../styles/Login.css"
import { FaRegUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";



function Register() {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [about, setAbout] = useState("")
    const [is_captain, setIsCaptain] = useState(false);
    const [password, setPassword] = useState("")
    const [passwordConf, setPasswordConf] = useState("")
    const [profilePic, setProfilePic] = useState(null);



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
        <div className="bg_photo">
            <form onSubmit={handleSubmit} className="form-container">
                <h1 className="header-register" >Register</h1>
                {/* <p>Join the community and start playing!</p> */}
                <div className="input-wrapper">
                    <MdOutlineEmail className="input-icon" />
                    <input className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Enter your email" />
                </div>

                <div className="input-wrapper">
                    <FaRegUser className="input-icon" />
                    <input className="form-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Enter your username" />
                </div>

                <div className="input-wrapper">
                    <FaRegUser className="input-icon" />
                    <input className="form-input"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        type="text"
                        placeholder="Enter your firstname" />
                </div>
                <div className="input-wrapper">
                    <FaRegMessage className="input-icon" />
                    <input className="form-input"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        type="text"
                        placeholder="About" />
                </div>


                <div className="input-wrapper">
                    <RiLockPasswordLine className="input-icon" />
                    <input className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="Password"
                        placeholder="Enter your password" />
                </div>
                <div className="input-wrapper">
                    <RiLockPasswordLine className="input-icon" />
                    <input className="form-input"
                        value={passwordConf}
                        onChange={(e) => setPasswordConf(e.target.value)}
                        type="Password"
                        placeholder="Password Confirmation" />
                </div>


                {/* <label className="file-upload-label"> Choose a profile picture:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setProfilePic(e.target.files[0])}
                        className="form-input-pic"
                    />
                </label> */}
                <div className="file-upload-wrapper">
                    <label htmlFor="profilePic" className="custom-file-label">
                        📁 Upload Profile Picture
                        {profilePic && <span className="file-name"> – {profilePic.name}</span>}
                    </label>
                    <input
                        type="file"
                        id="profilePic"
                        accept="image/*"
                        onChange={(e) => setProfilePic(e.target.files[0])}
                        className="file-input-hidden"
                    />
                </div>




                <div className="tickbox-cont">
                    <p>Captain:</p>
                    <input
                        type="checkbox"
                        checked={is_captain}
                        onChange={handleCaptainChange}
                        className="checkbox"
                    />
                </div>
                <button className="form-button">Register</button>
                <p>If you have an account <a href="/login">Login</a></p>
            </form >
        </div >
    </>


}

export default Register