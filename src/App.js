import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";

function App() {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [expireYear, setExpireYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="h-screen w-full sm:flex">
      <Card
        cardholderName={cardholderName || "Jane Appleseed"}
        cardNumber={cardNumber || "0000000000000000"}
        expireDate={expireDate || "00"}
        expireYear={expireYear || "00"}
        cvc={cvc || "000"}
      />
      <div className="bg-white w-full h-full flex items-start mt-20 sm:mt-0 justify-center sm:items-center">
        {!isSubmitted ? (
          <Form
            cardholderName={cardholderName}
            onCardholderNameChange={evt => setCardholderName(evt.target.value)}
            cardNumber={cardNumber}
            onCardNumberChange={evt => setCardNumber(evt.target.value)}
            expireDate={expireDate}
            onExpireDateChange={evt => setExpireDate(evt.target.value)}
            expireYear={expireYear}
            onExpireYearChange={evt => setExpireYear(evt.target.value)}
            cvc={cvc}
            onCvcChange={evt => setCvc(evt.target.value)}
            onSubmit={() => setIsSubmitted(true)}
          />
        ) : (
          <Confirmation />
        )}
      </div>
    </div>
  );
}

export default App;
