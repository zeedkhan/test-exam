import React, { useEffect, useState } from "react";
import data from "./services/exam-data.json";

function Function1() {
  const [value, setValue] = useState([]);
  const [weight, setWeight] = useState([]);

  // get data from json by its value
  useEffect(() => {
    async function getData(x) {
      // set the is_ediable_price inside state
      const result = await x.filter((x) => x.is_editable_price === false);

      setValue(result);

      // set weight of each products prepare to sum of total weight
      setWeight(
        result.map((x) =>
          x.products.map((x) => x.weight).reduce((sum, val) => sum + val, 0)
        )
      );
    }
    // fetch data
    getData(data);
  }, []);

  // Function total weight
  const totalWeight = (weight) => {
    let total = 0;
    for (let i = 0; i < weight.length; i++) {
      total += weight[i];
    }
    return total, console.log(total);
  };

  totalWeight(weight);

  return (
    <div
      style={{
        height: "87vh",
        backgroundColor: "rgb(207,216,220)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {value.map((x) => (
        <div key={x.id} style={{ marginTop: "50px" }}>
          {x.products.map((x) => (
            <div style={{ marginTop: "25px" }}>
              <h2>Name: {x.name}</h2>
              <h2>Weight: {x.weight}</h2>
              <h2>Price: {x.price}</h2>
            </div>
          ))}
        </div>
      ))}

      <h2 style={{ color: "red", marginTop: "100px" }}>
        Incomplete but logic finished, waiting for answer email about this
        question. Please looking inside code
      </h2>
    </div>
  );
}

export default Function1;
