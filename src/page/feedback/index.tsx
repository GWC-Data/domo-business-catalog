import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { feedbackFormRequest, feedbackFormReset } from "../../redux/feedbackForm/action";
import { RootState } from "../../redux/rootReducer";
import { successToast } from "../../components/Toaster";

const Feedback = () => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const feedbackForm = useSelector((state: RootState) => state.feedbackForm);
  const { loading, data } = feedbackForm;

  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        data.forEach(item => successToast(item.message));
        dispatch(feedbackFormReset());
      } else {
        dispatch(feedbackFormReset());
        successToast(data?.message);
      }
    }
  },[data, dispatch]);


  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleStarHover = (hoverRating: number) => {
    setHover(hoverRating);
  };

  const handleStarLeave = () => {
    setHover(0);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    const data = {
      rating,
      comment,
      name,
      email,
    };

    dispatch(feedbackFormRequest(data));

    // Reset form fields
    setRating(0);
    setComment("");
    setName("");
    setEmail("");
  };

  return (
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
          <h3>Feedback</h3>
                
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
            <label htmlFor="feedback">Describe Your Feedback</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="form-control"
              id="feedback" 
              placeholder="Enter Your Feedback" 
              style={{height: "120px"}}
              required
            ></textarea>
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
  );
};

export default Feedback;