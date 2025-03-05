/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFingerprint } from "../utils/fingerprint";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";

const ProtectedRoute = () => {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  const auth = useSelector((state: RootState) => state.auth);
  const { data } = auth;

  useEffect(() => {
    if (isVerified !== null) return; // Prevent unnecessary re-runs

    const checkUser = async () => {
      const fingerprint = await getFingerprint();
      const user = data?.find((user: any) => user.fingerprint === fingerprint);

      setIsVerified(user?.fingerprint === fingerprint);
    };

    checkUser();
  }, [data, isVerified]); // Only run once when `isVerified` is null

  if (isVerified === null) return null; // Prevent flashing

  return isVerified ? <Outlet /> : <Navigate to="/register" replace />;
};

export default ProtectedRoute;
