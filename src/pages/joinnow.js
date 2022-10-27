import { useState , useContext} from "react";
import FirebaseContext from "../context/firebase";
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from "react-phone-number-input";
import styles from "../styles/joinnow.module.css";

export default function Joinnow() {
    const navigate = useNavigate();

    const {collection, addDoc, db, Timestamp, setDoc} = useContext(FirebaseContext);

    const [phoneValue, setPhoneValue] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [interest, setInterest] = useState("");
    const [errors, setErrors] = useState("");
    
    const isInvalid = firstname === "" || lastname === "" || email === "" || interest === "" || phoneValue === ""; 

    const handleJoinnow = async (event) => {
        event.preventDefault();
        const user = {
            firstname,
            lastname,
            email,
            interest,
            id: "",
            phoneValue,
            date: Timestamp.now()
        }
        console.log(isInvalid);
        try {
            if(!isInvalid) {
                const userRef = await addDoc(collection(db, "users"), user)
                await setDoc(userRef ,{id: userRef.id}, { merge: true });
                navigate("/");
                alert("Thank you. You will be added in the whatsapp group");
            }
        } catch (err) {
            // console.error(err);
            setEmail('');
            setErrors(err);
        }
        
    }

    return (
        <div className={styles.joinnowDiv}>
            <h1> Community form </h1> 
            {errors && <p className={styles.error}> {errors} </p>}
            <div className={styles.joinnow}>
                <form method="POST" onSubmit={handleJoinnow}>
                    <div className={styles.flex}>
                        <div>
                            <label> First name</label>
                            <input 
                                aria-label="First name"
                                type="text"
                                placeholder="First name"
                                onChange={({ target }) => setFirstname(target.value)} 
                                value={firstname}
                            />
                        </div>
                        <div>
                            <label> Last name</label>
                            <input 
                                aria-label="Last name"
                                type="text"
                                placeholder="Last name"
                                onChange={({ target }) => setLastname(target.value)} 
                                value={lastname}
                            />
                        </div>
                    </div>
                    <div className={styles.block}>
                        <label> Email address</label>
                        <input 
                            aria-label="Email"
                            type="email"
                            placeholder="Email address"
                            onChange={({ target }) => setEmail(target.value)} 
                            value={email}
                        />
                    </div>
                    <div className={styles.block}>
                        <label> Phone number </label>
                        <PhoneInput 
                            placeholder="Phone number"
                            value={phoneValue}
                            onChange={setPhoneValue}
                            className={styles.phoneInput}
                        />
                    </div>
                    <div className={styles.block}>
                        <label> Line of Interest </label>
                        <input 
                            area-label="Interest"
                            type="text"
                            placeholder="Interests"
                            onChange={({target}) => setInterest(target.value)}
                            value={interest}
                        /> 
                    </div>
                    <button 
                        style={{ opacity: `${isInvalid ? "0.5" : "1"}` }}
                        disabled={isInvalid}
                        className={styles.submitButton} 
                        type="submit"> Submit 
                    </button>
                </form>
            </div>
        </div>
    )
};

