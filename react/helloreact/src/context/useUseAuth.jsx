import {AuthContext} from "./AuthContext";
import {useContext} from 'react'
function useUserAuth() {
    return useContext(AuthContext);
  }
  export default useUserAuth;