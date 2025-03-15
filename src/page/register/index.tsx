/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFingerprint } from "../../utils/fingerprint";
import { successToast } from "../../components/Toaster";
import { useDispatch, useSelector } from "react-redux";
import { registerFormRequest, registerFormReset } from "../../redux/registerForm/action";
import { RootState } from "../../redux/store";
import "./register.css";

interface RegisterModalProps {
  onClose: () => void;
}

const Register = ({ onClose }: RegisterModalProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  
  const registerForm = useSelector((state: RootState) => state.registerForm);
  const { loading, data } = registerForm;

  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        data.forEach(item => successToast(item.message));
        dispatch(registerFormReset());
        onClose(); // Close modal
      } else {
        dispatch(registerFormReset());
        successToast(data?.message);
        onClose(); // Close modal
      }
    }
  },[data, dispatch, navigate, onClose]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
      
    const fingerprint = await getFingerprint();
    localStorage.setItem("fingerprint", fingerprint);    

    const data = {
      fingerprint,
      name,
      email,
      location,
      company,
      position,
    };

    dispatch(registerFormRequest(data));
    setName(""); // Clear input fields
    setEmail("");
    setLocation("");
    setCompany("");
    setPosition("");
  };

  return (
    <>
      <div className="wrapper" style={{ backgroundImage: "url('./assets/images/bg-registration-form-2.jpg')"}}>
        <div className="inner">
          <div className="text-center mb-3">
            <img
              src="./assets/images/gwc.svg"
              alt="Company Logo"
              className="img-fluid mr-3 col-md-6 col-12"
              style={{ maxWidth: "150px" }}
            />
            <img
              src="./assets/images/domopalooza.svg"
              alt="domopalooza"
              className="img-fluid col-md-6 col-12"
              style={{ maxWidth: "170px" }}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Registration Form</h3>
            
            <div className="form-wrapper">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
              
            <div className="form-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-wrapper">
              <label htmlFor="">Company</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="form-control"
                id="company"
                placeholder="Enter your company name"
                required
              />
            </div>
            <div className="form-wrapper">
              <label htmlFor="">Position</label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="form-control"
                id="position"
                placeholder="Enter your role"
                required
              />
            </div>
            <div className="form-wrapper">
              <label htmlFor="">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="form-control"
                id="location"
                placeholder="Enter your Location"
                required
              />
            </div>
            {
              loading ? (
                <button type="button" className="register-button" disabled>Loading...</button>
              ) : (
                <button type="submit" className="register-button">Register Now</button>
              )
            }
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
