import React, { useEffect, useState } from "react";

const Features = ({ height }) => {
  const [pseudoStyle, setPseudoStyle] = useState({});
  const [feature, setFeature] = useState(0);
  const handleFeature = (e) => {
    const btns = [...document.querySelectorAll(".features__btn")];
    const curBtn = e.currentTarget;
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    curBtn.classList.add("active");
    setFeature(btns.indexOf(curBtn));
  };

  const handleInitHeight = (e) => {
    const img = e.currentTarget;
    setPseudoStyle({
      ["--top"]: `${img.clientHeight * 0.2}px`,
      ["--height"]: `${img.clientHeight}px`,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      const img = document.querySelector(".feature__img img");
      setPseudoStyle({
        ["--top"]: `${img.clientHeight * 0.2}px`,
        ["--height"]: `${img.clientHeight}px`,
      });
    });
  }, []);
  return (
    <article className="features">
      <div className="container">
        <div className="article__info">
          <h2 className="article__title">Features</h2>
          <p className="article__desc">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <nav className="features__nav">
          <button className="features__btn active" onClick={handleFeature}>
            Simple Bookmarking
          </button>
          <button className="features__btn" onClick={handleFeature}>
            Speedy Searching
          </button>
          <button className="features__btn" onClick={handleFeature}>
            Easy Sharing
          </button>
        </nav>
      </div>
      <div className="features__content" style={pseudoStyle}>
        <div className="slider">
          <div
            className="slider__container"
            style={{ transform: `translateX(-${feature * 33.34}%)` }}
          >
            <div className="feature">
              <div className="container">
                <div className="feature__img">
                  <img
                    src="images/illustration-features-tab-1.svg"
                    onLoad={handleInitHeight}
                  />
                </div>
                <div className="feature__info">
                  <h3 className="feature__title">Bookmark in one click</h3>
                  <p className="feature__desc">
                    Organize your bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favourite sites.
                  </p>
                  <button className="feature__btn">More Info</button>
                </div>
              </div>
            </div>
            <div className="feature">
              <div className="container">
                <div className="feature__img">
                  <img src="images/illustration-features-tab-2.svg" />
                </div>
                <div className="feature__info">
                  <h3 className="feature__title">Bookmark in one click</h3>
                  <p className="feature__desc">
                    Organize your bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favourite sites.
                  </p>
                  <button className="feature__btn">More Info</button>
                </div>
              </div>
            </div>
            <div className="feature">
              <div className="container">
                <div className="feature__img">
                  <img src="images/illustration-features-tab-3.svg" />
                </div>
                <div className="feature__info">
                  <h3 className="feature__title">Bookmark in one click</h3>
                  <p className="feature__desc">
                    Organize your bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favourite sites.
                  </p>
                  <button className="feature__btn">More Info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Features;
