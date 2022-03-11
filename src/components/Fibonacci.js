import { useRef, useEffect, useState } from "react";
import swal from "sweetalert";
const Fibonnaci = () => {
  const refForNumber = useRef();

  const [useNumberState, setNumberState] = useState({});
  const [useSequence, setSequence] = useState(0);
  useEffect(() => {
    setNumberState({
      ...useNumberState,
    });
  }, []);

  const getNumber = (e) => {
    let numberValue = refForNumber.current.value;
    setNumberState({
      ...useNumberState,
      numberValue,
    });
  };

  const printFibonnaci = (e) => {
    e.preventDefault();
    let maxSequence = useNumberState.numberValue;

    if (maxSequence !==NaN && maxSequence > 0) {
      let firstSeq = 0;
      let secondSeq = 1;
      let nextSeq;
      let sequence = [];
      for (let i = 0; i < maxSequence; i++) {
        nextSeq = firstSeq + secondSeq;
        sequence.push(firstSeq);
        firstSeq = secondSeq;
        secondSeq = nextSeq;
      }
      setSequence({
        ...useSequence,
        sequence,
      });
    } else {
      swal({
        title: "Error",
        text: "Number must be greater than 0",
        icon: "warning",
      });
    }
  };
  return (
    <div className="container">
      <h3>Fibonacci sequence</h3>
      <h4>Get a sequence of number in the Fibonacci sequence up to the n value inserted</h4>
      <p>Insert a number</p>
      <form onSubmit={(e)=>e.preventDefault()}>
        <label>Number:</label>
        <input
          type="number"
          required
          ref={refForNumber}
          onChange={(e) => getNumber(e)}
        />
        <input type="button" value="try" onClick={(e) => printFibonnaci(e)} />
      </form>
      <div>
        <h4>Result:</h4>
        {Object.keys(useSequence).length > 0
          ? useSequence.sequence.join(", ")
          : null}
      </div>
    </div>
  );
};

export default Fibonnaci;
