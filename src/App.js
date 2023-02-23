import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes} from "react-router-dom";
import Loading from "./components/Loading";
import LoginPage from "./pages/LoginPage";
import { asyncPreloadProcess } from "./states/isPreload/action";
import { logout } from './utils/api';
import DefaultNavigation from "./components/DefaultNavigation";
import AuthNavigation from "./components/AuthNavigation";
import { asyncUnsetAuthSociety } from "./states/authSociety/action";
import DashboardPage from "./pages/DashboardPage";
import PageNotFoundPage from "./pages/404NotFoundPage";
import RequestConsultationPage from "./pages/RequestConsultationPage";
import RegisterVaccinationPage from "./pages/RegisterVaccinationPage";
import SpotDetailPage from "./pages/SpotDetailPage";

function App() {
  
  const {
    authSociety = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const signOut = async () => {
    await logout();
    dispatch(asyncUnsetAuthSociety());
    window.location.replace('/');
  };

  if(isPreload){
    return null;
  }

  if(authSociety === null) {
    return (
      <>
      <Loading />
      <div>
        <header>
          <DefaultNavigation authSociety={authSociety} />
        </header>
      <main>
          <Routes>
            <Route path="*" element={<LoginPage />}/>
          </Routes>
      </main>
      </div>
      </>
    )
  }

  return (
    <>
    <Loading />
    <div>
      <header>
        <AuthNavigation authSociety={authSociety} signOut={signOut}/>
      </header>
        <main>
          <Routes>
            <Route path="/*" element={<PageNotFoundPage />}/>
            <Route path="/" element={<DashboardPage />}/>
            <Route path="/request-consultation" element={<RequestConsultationPage />}/>
            <Route path="/register-vaccination" element={<RegisterVaccinationPage />}/>
            <Route path="/spot-detail/:id" element={<SpotDetailPage />}/>
          </Routes>
        </main>
      </div>
    </>
  )

}

export default App;
