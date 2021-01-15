import React from "react";

// ให้แปลงรูปแบบวันที่ จาก 2020-08-10T14:54:52+07:00 เป็น format ดังต่อไปนี้
// 10/08/2020 14:54
// 10 สิงหาคม 2563 // รูปแบบปฏิทินไทย
// 31 // จำนวนวันในเดือนนี้
// 3 // ไตรมาตรของเดือนนี้
// 1597046092 // Unix timestamp

// Given Date
let date = new Date("2020-08-10T14:54:52+07:00");

// Create variable to store month
const getMonth = date.getMonth() + 1;

// get quater by delcared how many months in a quater, there are 3 months in a quaters
const quarter = (month) => {
  if (month <= 3) {
    return "Quater 1";
  } else if (month <= 6) {
    return "Quater 2";
  } else if (month <= 9) {
    return "Quater 3";
  } else if (month <= 12) {
    return "Quater 4";
  } else {
    return alert("Invalid data");
  }
};

const unixTime = (iso) => {
  const unix = Math.floor(Date.parse(iso) / 1000);
  return unix;
};

function Function2() {
  return (
    <div
      style={{
        height: "87vh",
        justifyContent: "center",
        backgroundColor: "rgb(207,216,220)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "50px" }}>Test Convert Form</h1>
      <div style={{ marginBottom: "50px" }}>
        <h2>
          First:
          {date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear() +
            " " +
            date.getHours() +
            ":" +
            date.getMinutes()}
        </h2>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h2>
          Second:
          {date.getDate() +
            " " +
            date.toLocaleString("default", { month: "long" }) +
            " " +
            // Convert to thai year by plus 543
            (date.getFullYear() + 543)}
        </h2>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h2>
          Third:
          {quarter(getMonth)}
        </h2>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h2>
          Fourth:
          {unixTime(date)}
        </h2>
      </div>
    </div>
  );
}

export default Function2;
