import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/userAction";
import { withRouter } from "react-router";

const RegisterPage = (props) => {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ComFirmPassword, setComFirmPassword] = useState("");
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onComFirmPasswordHandler = (e) => {
    setComFirmPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Password !== ComFirmPassword) return alert("비번 2개 같게해라");
    dispatch(
      registerUser({
        name: Name,
        email: Email,
        password: Password,
      })
    ).then((res) => {
      if (res.payload.success) {
        props.history.push("/login");
      } else {
        alert("Register Error");
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
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={onSubmitHandler}
      >
        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler}></input>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler}></input>
        <label>Password</label>
        <input
          type="password"
          value={Password}
          onChange={onPasswordHandler}
        ></input>
        <label>ComFirmPassword</label>
        <input
          type="password"
          value={ComFirmPassword}
          onChange={onComFirmPasswordHandler}
        ></input>
        <button>Register</button>
      </form>
    </div>
  );
};

export default withRouter(RegisterPage);
