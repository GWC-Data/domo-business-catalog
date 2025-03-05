import { getFingerprint } from "../utils/fingerprint";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { successToast } from "../components/Toaster";
import { registerFormRequest, registerFormReset } from "../redux/registerForm/action";

const RegisterModal = () => {

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
        data.forEach((item) => successToast(item.message));
      } else {
        successToast(data?.message);
      }
  
      dispatch(registerFormReset());
  
      window.location.reload();
    }
  }, [data, dispatch, navigate]);
  

  const handleSubmit = async (e: any) => {
    e.preventDefault();
      
    const fingerprint = await getFingerprint();

    const data = {
      fingerprint,
      name,
      email,
      location,
      company,
      position,
    };

    dispatch(registerFormRequest(data));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      {
        loading ? <div>loading</div> : (
          <div className="container">
            <div className="row justify-content-center mt-2 mb-3">
              <div className="col-md-5">
                <div className="">
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <img
                        src="https://gwcdata.ai/assets/Logo-ZfpyJ_J5.svg"
                        alt="Company Logo"
                        className="img-fluid mb-2"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <h4 className="text-center mb-3">Register</h4>
                      <div className="mb-2">
                        <label htmlFor="name" className="form-label mb-1">
                              Full Name
                        </label>
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
                      <div className="mb-2">
                        <label htmlFor="email" className="form-label mb-1">
                              Email Address
                        </label>
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
                      <div className="mb-2">
                        <label htmlFor="company" className="form-label mb-1">
                              Company Name
                        </label>
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
                      <div className="mb-2">
                        <label htmlFor="position" className="form-label mb-1">
                              Position
                        </label>
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

                      <div className="mb-4">
                        <label htmlFor="location" className="form-label mb-1">
                              Location
                        </label>
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
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                              Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) 
      } 
    </div>
  );
};

export default RegisterModal;
