import React, { useState } from "react";

const Join = () => {
  const [mail, setMail] = useState("");
  const [validate, setValidate] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    setValidate(!regx.test(mail));
  };
  return (
    <article className="join">
      <div className="container">
        <div className="join__info">
          <p className="join__info--joined">35,000+ already joined</p>
          <p className="join__info--remind">
            Stay up-to-date with what we’re doing
          </p>
        </div>
        <form action="" className="join__form" onSubmit={handleSubmit}>
          <div className={`input__holder ${validate ? "invalid" : ""}`}>
            <input
              type="text"
              name="mail"
              value={mail}
              placeholder="Enter your email address"
              onChange={(e) => setMail(e.currentTarget.value)}
            />
            <i className="fa-solid fa-circle-exclamation exclamation"></i>
          </div>
          <button type="submit" className="join__btn btn__shape__one">
            Contact Us
          </button>
        </form>
      </div>
    </article>
  );
};

export default Join;
