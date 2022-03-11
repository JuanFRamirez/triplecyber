import { useRef, useEffect, useState } from "react";
import swal from "sweetalert";
const Random = () => {
  const [useRandomNumber, setRandomNumber] = useState(0);
  const [useNumbersInRange, setNumbersInRange] = useState({});
  const refForNumber = useRef();

  useEffect(() => {}, []);

  const getNumber = () => {
    let numberValue = refForNumber.current.value;
    setRandomNumber({
      ...useRandomNumber,
      numberValue,
    });
  };

  const printRandomNumber = (e) => {
    e.preventDefault();

    let inputNumber = useRandomNumber.numberValue;
    if (inputNumber > 0 && inputNumber !== NaN) {
      let listOfNumbers = [];
      for (let i = listOfNumbers.length; i < inputNumber; i++) {
        let inRange = Math.floor(Math.random() * inputNumber + 1);
        if (!listOfNumbers.includes(inRange)) {
          listOfNumbers.push(inRange);
        } else {
          i--;
        }
      }
      setNumbersInRange({
        ...useNumbersInRange,
        listOfNumbers,
      });
    } else {
      swal({
        title: "Error",
        text: "the input number must be greater than 0",
        icon: "warning",
      });
    }
  };

  return (
    <div className="container">
      <h3>Random number</h3>
      <h4>
        Get a range of random numbers up to and between the n value to evaluate
      </h4>
      <p>Insert a number</p>
      <form onSubmit={(e)=>e.preventDefault()}>
        <label>Number:</label>
        <input
          type="number"
          required
          ref={refForNumber}
          onChange={(e) => getNumber(e)}
        />
        <input
          type="button"
          value="try"
          onClick={(e) => printRandomNumber(e)}
         />
      </form>
      <div>
        <h4>Result:</h4>
        {Object.keys(useNumbersInRange).length > 0
          ? useNumbersInRange.listOfNumbers.join(", ")
          : null}
      </div>
    </div>
  );
};

export default Random;
