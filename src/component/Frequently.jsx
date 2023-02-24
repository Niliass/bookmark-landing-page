import React, { useEffect, useMemo } from "react";

const Frequently = ({ height }) => {
  const H = useMemo(() => height);
  useEffect(() => {
    const active = document.querySelector(".show");
    if (active) active.style.height = `${71 + H}px`;
  }, [H]);
  const handleAnswer = (e) => {
    const curBtn = e.currentTarget;
    const boxs = [...document.querySelectorAll(".frequently .box")];
    const idx = [...document.querySelectorAll(".question__btn")].indexOf(
      curBtn
    );
    const box = boxs[idx];
    const answer = curBtn.nextElementSibling;
    if (box.classList.contains("show")) {
      box.classList.remove("show");
      box.style.height = `71px`;
      return;
    }
    boxs.forEach((box) => {
      box.classList.remove("show");
      box.removeAttribute("style");
    });
    box.classList.add("show");
    box.style.height = `${71 + answer.clientHeight}px`;
  };
  return (
    <article className="frequently">
      <div className="container">
        <div className="article__info">
          <h2 className="article__title title">Frequently Asked Questions</h2>
          <p className="article__desc">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <div className="frequently__content">
          <div className="box">
            <button className="question__btn" onClick={handleAnswer}>
              <h3 className="question">What is Bookmark?</h3>
              <i className="fa-solid fa-chevron-down arrow"></i>
            </button>
            <p className="answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </p>
          </div>
          <div className="box">
            <button className="question__btn" onClick={handleAnswer}>
              <h3 className="question">How can I request a new browser?</h3>
              <i className="fa-solid fa-chevron-down arrow"></i>
            </button>
            <p className="answer">
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </p>
          </div>
          <div className="box">
            <button className="question__btn" onClick={handleAnswer}>
              <h3 className="question">Is there a mobile app?</h3>
              <i className="fa-solid fa-chevron-down arrow"></i>
            </button>
            <p className="answer">
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </p>
          </div>
          <div className="box">
            <button className="question__btn" onClick={handleAnswer}>
              <h3 className="question">What about other Chromium browsers?</h3>
              <i className="fa-solid fa-chevron-down arrow"></i>
            </button>
            <p className="answer">
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit.
            </p>
          </div>
        </div>
        <button className="frequently__btn">More Info</button>
      </div>
    </article>
  );
};

export default Frequently;
