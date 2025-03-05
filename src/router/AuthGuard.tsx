/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { userCheckRequest } from "../redux/registerUser/action";
import { getFingerprint } from "../utils/fingerprint";
import RegisterModal from "./RegisterModal";

const AuthGuard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const { data } = auth;
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!isChecked) {
      dispatch(userCheckRequest());
      setIsChecked(true);
    }
  }, [dispatch, isChecked]);

  useEffect(() => {
    const checkUser = async () => {
      const fingerprint = await getFingerprint();
      const user = data?.find((user: any) => user.fingerprint === fingerprint);
      if (user) {
        setIsVerified(true);
        setShowRegisterModal(false);
        const destinationUrl = window.location.href.split("#")[1];
        navigate(destinationUrl);
      } else {
        sessionStorage.setItem("destination", window.location.pathname);
        setShowRegisterModal(true);
      }
    };
  
    if (data && data.length > 0) {
      checkUser();
    } else {
      setShowRegisterModal(true);
    }
  }, [data, navigate]);
  

  if (showRegisterModal) {
    return <RegisterModal/>;
  }

  if (isVerified === null) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return <Outlet />;
};

export default AuthGuard;
