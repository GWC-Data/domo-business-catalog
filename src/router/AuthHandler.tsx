/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getFingerprint } from "../utils/fingerprint";
import { useDispatch, useSelector } from "react-redux";
import { userCheckRequest } from "../redux/registerUser/action";
import { RootState } from "../redux/rootReducer";

const AuthHandler = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const auth = useSelector((state: RootState) => state.auth);
  const { data } = auth;

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!isChecked) {
      dispatch(userCheckRequest());
      setIsChecked(true);
    }
  }, [dispatch, isChecked]);

  useEffect(() => {
    const currentURL = location.pathname + location.search + location.hash;

    if (location) {
      sessionStorage.setItem("destination", currentURL);
    }

  //   // const savedURL = sessionStorage.getItem("destination");
  //   // if (savedURL && savedURL !== currentURL) {
  //   //   sessionStorage.removeItem("destination"); // Remove after first use
  //   //   navigate(savedURL, { replace: true }); // Use replace to prevent infinite loop
  //   // }
  },[location]);

  useEffect(() => {
    const checkUser = async () => {
      const fingerprint = await getFingerprint();
      const user = data?.find((user: any) => user.fingerprint === fingerprint);

      
      if (user) {
        // console.log(user);
        // localStorage.setItem("fingerprint", user.fingerprint);
        navigate(sessionStorage.getItem("destination") || "/");
      } else {
        navigate("/register");
      }
    };

    if ((data?.length ?? 0) > 0) {
      checkUser();
    }
  }, [data, navigate]);

  return null;
};

export default AuthHandler;
