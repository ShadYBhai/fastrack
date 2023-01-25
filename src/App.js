import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import css from "./components/background.module.css";
import back from "./images/BlackBackground.png";
import Home from "./screen/Home";

function App() {
  return (
    <>
      <div className={css.bg}>
        {/* <img src={back} className="back" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
