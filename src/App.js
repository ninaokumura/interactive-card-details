import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="h-screen w-full sm:flex">
      <div className="bg-mobile min-h-[40%] bg-cover sm:bg-main sm:min-w-[30%] sm:min-h-screen text-white">
        Card image
      </div>
      <div className="bg-green-400 h-screen w-full">Form goes here</div>
    </div>
  );
}

export default App;
