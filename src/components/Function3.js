import React from "react";

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

// Find 2nd biggest number in array
const findSecondMaxArr = (arr) => {
  // If array has an index return the first index of array
  if (arr.length === 1) {
    return arr[0];
    // If array is [] them return null
  } else if (arr.length === 0) {
    return null || "null";
    // else use secondMax function
  } else {
    return secondMax(arr);
  }
};
const secondMax = function (arr) {
  const k = arr;

  // 1. get the normal array and sort it
  const array = arr.sort((a, b) => a - b).reverse();

  // 2. get the max
  const max = Math.max(...array);

  // 3 get 2nd biggest number
  const spe = array.filter((num) => num < max).splice(0, 1);

  return spe; // get the 2nd max
};

console.log(findMaxArr(x3));

export default function Function3() {
  return (
    <div
      style={{
        height: "87vh",
        backgroundColor: "rgb(207,216,220)",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: "40px", marginTop: "120px" }}>
          Array Test Function3{" "}
        </h1>
        <h2 style={{ marginBottom: "40px" }}>{findMaxArr(x)}</h2>
      </div>
    </div>
  );
}
