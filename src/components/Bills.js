import { useEffect, useRef, useState } from "react";
import swal from "sweetalert";

const Bills = () => {
  const billRef = useRef();
  const [useBill, setBill] = useState(0);
  const [useChange, setChange] = useState({});
  const [useGrossTotal,setGrossTotal] = useState(0);

  useEffect(() => {
    setBill({
      ...useBill,
    });
  }, []);

  const getBill = (e) => {
    let bill = billRef.current.value;
    setBill({
      ...useBill,
      bill,
    });
  };

  const getChange = (e) => {
    e.preventDefault();
    const billes = [2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1];
    let currentAmount = useBill.bill;
    if(currentAmount == 0)
    {
        swal({
            title:"Error",
            text:"Insert a number greater than 0",
            icon:"warning"
        })
        billRef.current.value=""
    }
    let changeList = [];
    for (let i = 0; i < billes.length; i++) {
      let times = Math.floor(currentAmount / billes[i]);
      let change = currentAmount % billes[i];

      currentAmount = change;
    
        changeList.push(times + " X " + billes[i] + " = " + times * billes[i]);
      
    }

    const patter = "0";
    let filtered = changeList.filter((change) => {
      return change.indexOf(patter) !== 0;
    });
    setChange({
      ...useChange,
      filtered,
    });

    let grossTotal=0
    filtered.forEach((filter) => {
        grossTotal += Number(filter.split("=").pop())
    });
    setGrossTotal({
        ...useGrossTotal,
        grossTotal
    })
  };

  return (
    <div className="container">
      <h3>Bills repartition</h3>
      <h4>Get Bill change on smaller denominations</h4>
      <p>Insert a bill</p>
      <form>
        <label>Amount:</label>
        <input
          type="number"
          required
          ref={billRef}
          onChange={(e) => getBill(e)}
        />
        <input type="button" value="try" onClick={(e) => getChange(e)} />
      </form>
      <div>
        <h4>Result:</h4>
        {Object.keys(useChange).length > 0
          ? useChange.filtered.join(", ")
          : null}
      </div>
    </div>
  );
};
export default Bills;
