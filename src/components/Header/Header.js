import {Fragment,  useState , useContext} from "react";
import { Link , useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import UserContext from "../../context/UserContext";
import styles from "./Header.module.css";
import * as ROUTES from "../../constants/routes";
import Falcons from "../../images/falcons-logo.svg";
import { RiUser3Fill } from "react-icons/ri";
import Sidebar from "../Sidebar/Sidebar";
import ReactModal from "../ReactModal/ReactModal";

export default function Header() {
    const location = useLocation();
    const { user } = useContext(UserContext);
    const [openModal, setOpenModal] = useState(false);
    const [userInfo, setUserInfo] = useState(false);

    const handleUserClick = () => setUserInfo(!userInfo);
    return (   
        <Fragment> 
            <header className={styles.header}>
                <div className={styles.falcons}>
                    <img src={Falcons} alt="falcons-logo" style={{ filter: `${location.pathname !== '/' ? "brightness(0)" : "brightness(0) invert(1)" }`}} />
                    <Link to={ROUTES.DASHBOARD} style={{ color: `${location.pathname !== '/' ? "#4a4d57" : "#eee" }`}}> Falcons </Link>
                </div>
                <div className={styles.routes}>
                    {location.pathname !== "/" 
                    ?<ul>
                        <li className={location.pathname === '/community' ? styles.linkStyle :styles.links}><Link to={ROUTES.COMMUNITY} >Community </Link></li>
                        <li className={location.pathname === '/events' ? styles.linkStyle :styles.links}><Link to={ROUTES.EVENTS} >Events </Link></li>
                        <li className={location.pathname === '/clubs' ? styles.linkStyle :styles.links}><Link to={ROUTES.CLUBS}> Clubs </Link></li>
                    </ul>
                    :<ul>
                        <li className={location.pathname === '/community' ? styles.linkStyle :styles.links}> <ScrollLink to="community" spy={true} smooth={true}> Community </ScrollLink></li>
                        <li className={location.pathname === '/events' ? styles.linkStyle :styles.links}> <ScrollLink to="events" spy={true} smooth={true}> Events </ScrollLink></li>
                        <li className={location.pathname === '/clubs' ? styles.linkStyle :styles.links}> <ScrollLink to="clubs" spy={true} smooth={true}> Clubs </ScrollLink></li>
                    </ul>}
                </div>
                {user ?
                <div className={styles.user}>
                    <Link to={ROUTES.JOINNOW}> Join us </Link>
                    <RiUser3Fill size={"1.5em"} color={"rgb(75, 75, 75)"}  className={styles.userIcon} onClick={handleUserClick} />
                    { userInfo ? <div className={styles.userInfo}>
                        <h3> Welcome </h3>
                        <p> {user?.email} </p>
                        <hr width="100%" />
                        <p className={styles.signout}> Signout </p>  
                    </div> : null}
                </div>
                :<div className={styles.signup}>
                    <button onClick={() => setOpenModal(true)}> Sign up </button>
                    <ReactModal 
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                    />
                    <Link to={ROUTES.JOINNOW}> Join us </Link> 
                </div>}
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
            </header>
        </Fragment>
    )
};

