import { signInWithGoogle } from "../../lib/firebase";
import styles from "./ReactModal.module.css";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '30px 50px 50px 50px',
        borderRadius: '10px',
        trasition: "1.8s ease-in"
    }
}

export default function ReactModal({ openModal , setOpenModal}) {
    const signInUser = async () => {
        const user = await signInWithGoogle();
        console.log(user);
        if(user !== null) {
            setOpenModal(false);
        }
    }
    
    return (
        <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)} style={customStyles}>
            <div onClick={() => setOpenModal(false)} className={styles.closeIcon}> <IoMdClose size={"1.4em"} color="rgb(112,112,112)" /> </div> 
            <h2> Sign up to continue </h2>
            <button className={styles.googleButton} onClick={signInUser}> 
                <div className={styles.googleIconDiv}> <FcGoogle size={"1.5em"}/> </div>
                <p> Continue with Google </p>
            </button> 
            <p className={styles.contactPara}> Can't sign in <Link to="/contact-us"> Contact us </Link> </p> 
        </Modal>
    )
}