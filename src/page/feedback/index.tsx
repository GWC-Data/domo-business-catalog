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
        <form>
          <h3>Feedback</h3>
                
          <div className="form-wrapper">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
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
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-wrapper">
            <div className="">
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
          </div>
          <div className="form-wrapper">
            <label htmlFor="feedback">Position</label>
            <textarea
              className="form-control"
              id="feedback" 
              placeholder="Enter Your Feedback" 
              style={{height: "120px"}}
              required
            ></textarea>
          </div>
          <button type="submit" className="register-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;