import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPreloadProcess } from "./states/isPreload/action";
import {login} from './utils/api';

function App() {
  
  const {
    authSociety = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if(isPreload){
    return null;
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
