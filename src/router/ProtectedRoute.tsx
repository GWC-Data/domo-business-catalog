import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Register from "../page/register";

const ProtectedRoute = () => {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState(false);

  const checkFingerprint = () => {
    const fingerprint = localStorage.getItem("fingerprint");
    if (fingerprint) {
      setIsVerified(true);
      setShowModal(false);
    } else {
      setIsVerified(false);
      setShowModal(true);
    }
  };

  useEffect(() => {
    checkFingerprint(); // Initial check on mount

    // Listen for storage changes (detect localStorage delete)
    const handleStorageChange = () => {
      checkFingerprint();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (isVerified === null) return null; // Prevent flickering before the check completes

  if (isVerified) {
    return <Outlet />; // ✅ Render protected content
  }

  return (
    <>
      {showModal && (
        <Register
          onClose={() => {
            setShowModal(false);
            checkFingerprint(); // 🔄 Recheck fingerprint after closing modal
          }}
        />
      )}
    </>
  );
};

export default ProtectedRoute;
