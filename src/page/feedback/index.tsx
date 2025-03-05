import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleStarHover = (hoverRating: number) => {
    setHover(hoverRating);
  };

  const handleStarLeave = () => {
    setHover(0);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="">
            <div className="card-body p-5">
              <div className="text-center mb-3">
                <img src="https://gwcdata.ai/assets/Logo-ZfpyJ_J5.svg" alt="Company Logo"
                  className="img-fluid mb-2" style={{maxWidth: "150px"}} />
              </div>
              <form className="">
                <div className="form-floating mb-3">
                  <label htmlFor="fullName" className="form-label mb-1">Full Name</label>
                  <input type="text" className="form-control" id="fullName" placeholder="Enter Full Name" required minLength={2} />
                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="email" className="form-label mb-1">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="example@company.com" required />
                </div>
                <div className="mb-4">
                  <label className="form-label mb-1">Rate Your Experience</label>
                  <div className="mb-2 d-flex align-items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div 
                        key={star}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleStarHover(star)}
                        onMouseLeave={handleStarLeave}
                        className="fs-3 me-1"
                        style={{ cursor: "pointer" }}
                      >
                        {star <= (hover || rating) ? (
                          <i className="fas fa-star text-warning"></i>
                        ) : (
                          <i className="far fa-star text-secondary"></i>
                        )}
                      </div>
                    ))}
                    <span className="ms-2 small">
                      {rating > 0 ? `${rating} of 5` : ""}
                    </span>
                  </div>
                  <input type="hidden" id="rating" name="rating" value="0" />
                </div>
                <div className="form-floating mb-4">
                  <label htmlFor="feedback" className="form-label mb-1">Your Feedback</label>
                  <textarea className="form-control" id="feedback" placeholder="Enter Your Feedback" style={{height: "120px"}}></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;