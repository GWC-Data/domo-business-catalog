/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
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
  const [error, setError] = useState("");

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

  // Regex to match company emails (must have a domain name with at least one dot)
  const companyEmailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  // List of blocked public domains
  const blockedDomains = [
    "gmail.com", "yahoo.com", "outlook.com", "hotmail.com", 
    "orkut.com", "aol.com", "icloud.com", "zoho.com", 
    "protonmail.com", "gmx.com", "yandex.com"
  ];

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Extract domain from email
    const domain = inputEmail.split("@")[1];

    // Check if the domain is blocked or does not match the regex
    if (!companyEmailRegex.test(inputEmail) || (domain && blockedDomains.includes(domain))) {
      setError("Please enter a valid company email.");
    } else {
      setError(""); // Clear error if valid
    }
  };


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (error) {
      alert("Fix the error before submitting.");
      return;
    }
      
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
      <div className="container-wrapper" style={{ backgroundImage: "url('./assets/images/bg-registration-form-2.jpg')"}}>
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
              <label htmlFor="name">Full Name <span className="text-danger">*</span></label>
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
              <label htmlFor="email">Company Email <span className="text-danger">*</span></label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="form-control"
                id="email"
                placeholder="Enter your company email"
                required
              />
              {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
            </div>
            <div className="form-wrapper">
              <label htmlFor="">Company <span className="text-danger">*</span></label>
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
              <label htmlFor="">Designation <span className="text-danger">*</span></label>
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
              <label htmlFor="">Location <span className="text-danger">*</span></label>
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
