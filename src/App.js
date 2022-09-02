import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  return (
    <div className="h-screen w-full sm:flex">
      <Card />
      <div className="bg-white w-full h-full flex items-start mt-20 sm:mt-0 justify-center sm:items-center">
        <Form />
      </div>
    </div>
  );
}

export default App;
