import React, { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [sortOption, setSortOption] = useState("newest");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rating || !comment) return;

    const newFeedback = {
      id: Date.now(),
      name,
      rating: parseInt(rating),
      comment,
      date: new Date(),
    };

    setFeedbackList([newFeedback, ...feedbackList]);
    setName("");
    setRating("");
    setComment("");
  };

  const sortedFeedback = [...feedbackList].sort((a, b) => {
    if (sortOption === "newest") return b.date - a.date;
    if (sortOption === "highest") return b.rating - a.rating;
    return 0;
  });

  return (
    <section className="contact section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Visitors Feedback</h2>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="row">
          <div className="contact-form padd-15">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <select
                      className="form-control"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <option value="">Rating (1–5)</option>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num} Star{num > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <button type="submit" className="btn">
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Sorting Options */}
        {feedbackList.length > 0 && (
          <div className="row padd-15">
            <div className="form-group">
              <label style={{ marginRight: "10px" }}>Sort by:</label>
              <select
                className="form-control"
                style={{ display: "inline-block", width: "auto" }}
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="highest">Highest Rating</option>
              </select>
            </div>
          </div>
        )}

        {/* Feedback Wall */}
        <div className="row ">
          <div className=" padd-15">
            <div className="feedback-wall">
              {sortedFeedback.length === 0 ? (
                <p>No feedback yet. Be the first to leave one!</p>
              ) : (
                sortedFeedback.map((fb) => (
                  <div key={fb.id} className="feedback-card fade-in">
                    <div className="feedback-header">
                      <h4>{fb.name}</h4>
                      <span className="rating">
                        {"⭐".repeat(fb.rating)}
                        {fb.rating === 5 && (
                          <span className="featured"> 🌟 Featured</span>
                        )}
                      </span>
                    </div>
                    <p>{fb.comment}</p>
                    <small>{fb.date.toLocaleString()}</small>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default Feedback;
