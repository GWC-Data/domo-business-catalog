const Register = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-3">
        <div className="col-md-5">
          <div className="">
            <div className="card-body">
              <div className="text-center mb-3">
                <img src="https://gwcdata.ai/assets/Logo-ZfpyJ_J5.svg" alt="Company Logo"
                  className="img-fluid mb-2" style={{"maxWidth": "150px"}}  />
              </div>

              <form>
                <div className="mb-2">
                  <label htmlFor="name" className="form-label mb-1">Full Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your full name"
                    required />
                </div>

                <div className="mb-2">
                  <label htmlFor="email" className="form-label mb-1">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email"
                    required />
                </div>

                <div className="mb-2">
                  <label htmlFor="company" className="form-label mb-1">Company Name</label>
                  <input type="text" className="form-control" id="company"
                    placeholder="Enter your company name" required />
                </div>

                <div className="mb-2">
                  <label htmlFor="role" className="form-label mb-1">Role</label>
                  <input type="text" className="form-control" id="role" placeholder="Enter your role"
                    required />
                </div>

                <div className="mb-4">
                  <label htmlFor="location" className="form-label mb-1">Location</label>
                  <input type="text" className="form-control" id="location" placeholder="Enter your Location"
                    required />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;