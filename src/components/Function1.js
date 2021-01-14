import React, { useEffect, useState } from "react";
import data from "./services/exam-data.json";

function Function1() {
  const [value, setValue] = useState([]);
  const [weight, setWeight] = useState([]);

  // get data from json by its value
  useEffect(() => {
    async function getData(x) {
      const result = await x.filter((x) => x.is_editable_price === false);
      setValue(result);
      setWeight(
        result.map((x) =>
          x.products.map((x) => x.weight).reduce((sum, val) => sum + val, 0)
        )
      );
    }
    const totalWeight = (weight) => {
      let total = 0;
      for (let i = 0; i < weight.length; i++) {
        total += weight[i];
      }
      return total;
    };
    totalWeight(weight);
    getData(data);
  }, []);

  console.log(value);

  return (
    <div>
      <div>
        {value.map((x) => (
          <div key={x.id}>
            <>
              {x.products.map((x) => (
                <div>
                  <h2>Name: {x.name}</h2>
                  <h2>Weight: {x.weight}</h2>
                  <h2>Price: {x.price}</h2>
                </div>
              ))}
            </>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Function1;
