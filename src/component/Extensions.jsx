import React from "react";

const Extensions = () => {
  return (
    <article className="extensions">
      <div className="container">
        <div className="article__info">
          <h2 className="article__title title">Download the extension</h2>
          <p className="article__desc">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div className="extensions__content">
          <div className="extension">
            <div className="extension__holder">
              <img src="images/logo-chrome.svg" alt="chrome logo" />
              <h3 className="add__extension">Add to Chrome</h3>
              <p className="version">Minimum version 62</p>
            </div>
            <img src="images/bg-dots.svg" />
            <button className="extension__btn">Add & Install Extension</button>
          </div>
          <div className="extension">
            <div className="extension__holder">
              <img src="images/logo-firefox.svg" alt="firefox logo" />
              <h3 className="add__extension">Add to Firefox</h3>
              <p className="version">Minimum version 55</p>
            </div>
            <img src="images/bg-dots.svg" />
            <button className="extension__btn">Add & Install Extension</button>
          </div>
          <div className="extension">
            <div className="extension__holder">
              <img src="images/logo-opera.svg" alt="opera logo" />
              <h3 className="add__extension">Add to Opera</h3>
              <p className="version">Minimum version 46</p>
            </div>
            <img src="images/bg-dots.svg" />
            <button className="extension__btn">Add & Install Extension</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Extensions;
