import LeftSidebar from "../../components/LeftSideBar/LeftSideBar"
import Navbar from "../../components/Navbar/Navbar"
import MiddleSideBar from "../../components/MiddleSideBar/MiddleSideBar"
import RightSideBar from "../../components/RightSideBar/RightSideBar"
import style from "./home.module.css"

function Home() {

    return <div>
        <Navbar />
        <div className={style.homepage_container}>
            <MiddleSideBar />
            <RightSideBar />
        </div>
    </div>

}

export default Home