import { useEffect, useState } from "react";
import Header from "./component/Header";
import Intro from "./component/Intro";
import Features from "./component/Features";
import Extensions from "./component/Extensions";
import Frequently from "./component/Frequently";
import Join from "./component/Join";
import Footer from "./component/Footer";

function App() {
  const [imgHeight, setImgHeight] = useState({});
  const [answerHeight, setAnswerHeight] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const img = document.querySelector(".feature__img img");
      const answer = document.querySelector(".show .answer");
      setImgHeight({
        ["--top"]: `${img.clientHeight * 0.2}px`,
        ["--height"]: `${img.clientHeight}px`,
      });
      if (answer) setAnswerHeight(answer.clientHeight);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Intro />
      <Features height={imgHeight} />
      <Extensions />
      <Frequently height={answerHeight} />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
