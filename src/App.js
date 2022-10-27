import React, {useContext, useState, useEffect, Suspense, lazy, Fragment } from "react";
import { Route, Routes} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FirebaseContext from "./context/firebase";
import UserContext from "./context/UserContext";
import {useNavigate, useLocation} from "react-router-dom";
import Loading from "./components/Loading/Loading";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Joinnow = lazy(() => import("./pages/joinnow"));
const Community = lazy(() => import("./pages/community"));
const Events = lazy(() => import("./pages/events"));
const Clubs = lazy(() => import("./pages/clubs"));
const TermsAndConditions = lazy(() => import("./pages/terms-and-conditions"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy"));

function App() {
  const location = useLocation();

  const [user, setUser] = useState(null);
  const {auth, onAuthStateChanged } = useContext(FirebaseContext);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user);
        navigate("/");
      } else {
        setUser(null);
        navigate("/");
      }
    });
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location]);

  const RenderApp = () => {
    return (
        <div style={{ position: "relative", overflowX: "hidden"}}>
          <Header />
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />}/> 
            <Route path={ROUTES.JOINNOW} element={<Joinnow />} />
            <Route path={ROUTES.COMMUNITY} element={<Community />} />
            <Route path={ROUTES.EVENTS} element={<Events />} />
            <Route path={ROUTES.CLUBS} element={<Clubs />} />
            <Route path={ROUTES.TERMSANDCONDITIONS} element={<TermsAndConditions />} />
            <Route path={ROUTES.PRIVACYPOLICY} element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </div>
    )
  };

  return (
    <Suspense fallback={<Loading />}>
      <UserContext.Provider value={{user}}>
        <RenderApp />
      </UserContext.Provider>
    </Suspense>
  );
}

export default App;
