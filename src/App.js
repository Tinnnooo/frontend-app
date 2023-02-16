import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes} from "react-router-dom";
import Loading from "./components/Loading";
import LoginPage from "./pages/LoginPage";
import { asyncPreloadProcess } from "./states/isPreload/action";
import { login, logout } from './utils/api';
import DefaultNavigation from "./components/DefaultNavigation";
import AuthNavigation from "./components/AuthNavigation";
import { asyncUnsetAuthSociety } from "./states/authSociety/action";
import DashboardPage from "./pages/DashboardPage";

function App() {
  
  const {
    authSociety = null,
    isPreload = false,
    error = null,
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
            <Route path="*" element={<LoginPage error={error}/>}/>
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
        <DashboardPage/>
      </div>
    </>
  )

}

export default App;
