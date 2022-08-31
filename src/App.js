import { ReactComponent as Logo } from "../src/assets/images/card-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="h-screen w-full sm:flex">
      <div className="relative bg-mobile min-h-[35%] bg-cover sm:bg-main sm:min-w-[30%] sm:min-h-screen text-white">
        <div className="absolute right-4 top-9 sm:-right-36 sm:top-[50%] w-72 sm:w-[20rem]">
          <img
            className=""
            src={require("../src/assets/images/bg-card-back.png")}
            alt="card back"
          />
          <span className="absolute right-9 top-[4.3rem] text-xs sm:right-10 sm:top-[4.8rem]">
            123
          </span>
        </div>
        <div className="absolute top-[7.8rem] left-4 sm:left-60 sm:top-44 w-72 sm:w-[20rem]">
          <img
            src={require("../src/assets/images/bg-card-front.png")}
            alt="card front"
          />
          <div className="absolute top-3 left-4">
            <Logo />
          </div>

          <span className="absolute right-0 left-5 sm:text-center top-[5rem] text-sm sm:text-lg  sm:top-[6rem] sm:left-0 tracking-[0.2em] w-full">
            0000 0000 0000 0000 0000
          </span>
          <span className="absolute bottom-4 left-5 sm:bottom-4 sm:left-2 text-sm">
            Jane Appleseed
          </span>
        </div>
      </div>
      <div className="bg-white h-screen w-full">Form goes here</div>
    </div>
  );
}

export default App;
