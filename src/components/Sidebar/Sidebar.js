import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Sidebar.module.css";
import Modal from "react-modal";
import { signout } from "../../lib/firebase";
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import {FiMenu} from "react-icons/fi";
import * as ROUTES from "../../constants/routes";
import { BsPeopleFill , BsFillCalendarEventFill} from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { GoSignOut } from "react-icons/go";
import ReactModal from "../ReactModal/ReactModal";



export default function Sidebar () {
    const { user } = useContext(UserContext);  
    const [sidebar, setSidebar] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const signoutUser = () => {
        signout();
    }

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.menuBars}>
                    <FiMenu onClick={showSidebar}/>
                </div>
            </div>
            <nav className={sidebar ? `${styles.navMenu} ${styles.navMenuActive}` : styles.navMenu}> 
                <ul className={styles.navMenuItems} onClick={showSidebar}>
                    <li className={styles.navbarToggle}>
                        <div className={styles.menuBars}> 
                            <AiOutlineClose color="#eee" onClick={showSidebar}/>
                        </div>
                    </li>
                    <li className={styles.navText}><Link to={ROUTES.COMMUNITY} > <BsPeopleFill size={"1.3em"} color="#eee"/> <span className={styles.span}> Community </span> </Link></li>
                    <li className={styles.navText}><Link to={ROUTES.EVENTS} ><BsFillCalendarEventFill color="#eee" /><span className={styles.span}> Events </span>  </Link></li>
                    <li className={styles.navText}><Link to={ROUTES.CLUBS}><IoIosPeople size={"1.4em"} color="#eee"/> <span className={styles.span}> Clubs </span> </Link></li>
                </ul>
                <div className={styles.user}>
                    <Link to={ROUTES.JOINNOW}> Join us </Link>
                    {user ? <div className={styles.userInfo}>
                        <p> {user?.displayName} </p>
                        <GoSignOut color="#eee" size={"1.5em"} className={styles.signout} onClick={signoutUser}/>
                    </div> 
                    : <div className={styles.signup}>
                        <div onClick={() => setOpenModal(true)}> Sign up </div>
                        <ReactModal 
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                        />
                    </div>}
                </div>
            </nav>
        </>
    )
}