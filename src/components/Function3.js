import { CallMerge } from "@material-ui/icons";
import React from "react";

function Function3() {
  const x = [];
  const x1 = [1];
  const x2 = [1, 2, 3];
  const x3 = [1, 1];
  const x4 = [1, 2, 3, 4, 5, 6];
  const x5 = [1, 5, 3, 2, 5, 10];
  const x6 = [100, 5, 3, 2, 99];
  const x7 = [35, 5, 3, 2, 5, 100];
  const x8 = [1, 5, 101, 2, 5, 10];
  const x9 = [10, 10, 9];

  const temp_arr = x6.slice(0);

  const secondLargest = (arr) =>
    Array.from([...new Set(arr)]).sort((a, b) => a - b);

  console.log(secondLargest(x6));

  console.log(temp_arr);
  // const findArray = (arr) => {
  //   for (let i = 0; i < arr.length; i++);
  // };

  const findMaxArr = (arr) => {
    if (arr.length === 1) {
      return null;
    } else if (arr.length === []) {
      return arr[0];
    } else {
      return Math.max(...arr);
    }
  };
  console.log(findMaxArr(x6));

  const findSecondMax = (arr) => {
    if (arr === []) {
      return null;
    } else if (arr.length === 1) {
      return arr.length[0];
    } else {
      return;
    }
  };

  return (
    <div>
      <h3>This is Function 3</h3>
    </div>
  );
}

export default Function3;
