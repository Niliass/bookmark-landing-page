import React from "react";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__img">
          <img src="images/illustration-hero.svg" alt="" />
        </div>
        <div className="intro__info">
          <h1 className="intro__title">
            A Simple Bookmark <br />
            Manager
          </h1>
          <p className="intro__desc">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="intro__btns">
            <button className="chrome__btn">Get it on Chrome</button>
            <button className="fire__btn">Get it on Firefox</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
