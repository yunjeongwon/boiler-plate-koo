import axios from "axios";
import React from "react";
import { withRouter } from "react-router";

const RandingPage = (props) => {
  const onClickHandler = () => {
    axios.get("/api/users/logout").then((res) => {
      console.log(res.data);
      if (res.data.logoutSuccess) {
        props.history.push("/login");
      } else {
        alert("Logout Error");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      시작페이지
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
};

export default withRouter(RandingPage);
