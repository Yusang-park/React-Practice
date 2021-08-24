import React, { useState } from "react";
import axios from "axios";

function RestAPI() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>hello, this is counter!</h1>
      <button
        onClick={() => {
          axios
            .post("http://127.0.0.1:8000/review/", {
              id: 11,
              title: "teㅇ",
              content: "tㅇt4",
              updated_at: "2021-08-24T23:39:13.638239+09:00",
            })
            .then(function (response) {
              // response
            })
            .catch(function (error) {
              // 오류발생시 실행
            })
            .then(function () {
              // 항상 실행
            });
        }}
      >
        POST
      </button>
      <button
        onClick={() => {
          axios.get("http://127.0.0.1:8000/review/").then(function (response) {
            setText(response.data);
          });
        }}
      >
        Get
      </button>
      {text}
    </div>
  );
}

export default RestAPI;

// 화살표 함수
// const ~~ = () =>
// this가 내부를 가르키며

// function은
// 클래스를 가르킨다
