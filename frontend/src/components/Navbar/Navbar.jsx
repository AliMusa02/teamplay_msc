import { MdNotificationsActive, MdOutlineNotificationsActive } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import progPic from "../../assets/pr_photo.webp"
import { IoHome } from "react-icons/io5";
import { MdOutlineFeed } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";




const Navbar = () => {
    return (
        <>
            <div className={style.navbar}>
                <div className={style.navbar_left_part}>
                    <Link to="/" className={style.navbar_left_h1}>TeamPlay</Link>
                </div>

                <div className={style.navbar_middle_part}>
                    <h2>WELCOME, Ali !</h2>
                    {/* <div className={style.navbar_middle_search_div}>

                        <div className={style.navbar_middle_search_input_div}>
                            <input
                                placeholder="Search for teams and users"
                                type="text"
                                className={style.navbar_middle_search_input}
                            />
                            <BsSearch className={style.search_icon} />
                        </div>
                        <div className={style.navbar_middle_search_input_div_bottom}>
                            <div className={style.navbar_middle_search_input_bottom_results}>
                                <div className={style.navbar_middle_search_input_bottom_results_text}>
                                    <p className={style.results_text}>No search yet</p>
                                    <FaRegWindowClose className={style.close_button} />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className={style.navbar_right_part}>
                    <div className={style.navbar_modal_icon}><BiMenuAltRight /></div>

                    <div className={style.navbar_right_part_icons}>
                        {/* HOME */}
                        <Link to="">
                            <div title="Home" className={style.navbar_message_icon}><IoHome style={{ color: "white" }} /> </div>
                        </Link>
                        {/* FEED */}
                        <Link to="/messenger">
                            <div title="Feed" className={style.navbar_message_icon}><MdOutlineFeed style={{ color: "white" }} /> </div>
                        </Link>
                        {/* MATCHES */}
                        <Link to="/messenger">
                            <div title="Matches" className={style.navbar_message_icon}><RiTeamFill style={{ color: "white" }} /> </div>
                        </Link>
                        {/* MESSENGER */}
                        <Link to="/messenger">
                            <div title="Messenger" className={style.navbar_message_icon}><FaFacebookMessenger style={{ color: "white" }} /> </div>
                        </Link>
                        {/* NOTIFICATION */}
                        <div title="Notification" className={style.navbar_message_icon}><MdNotificationsActive style={{ color: "white" }} /></div>
                        {/* PROFILE PHOTO */}
                        <div title="Account" className={style.navbar_profile_photo}>
                            <img
                                className={style.navbar_profile_photo_img}
                                src={progPic}
                                alt="Profile"
                            />
                            <div className={style.navbar_profile_photo_icon}><BsChevronDown className={style.arrow} /></div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Navbar;