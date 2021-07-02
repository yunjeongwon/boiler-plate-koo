import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../_actions/userAction";

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(authUser()).then((res) => {
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (!option) {
              props.history.push("/");
            }
          }
        }
      });
    }, []);
    return <SpecificComponent></SpecificComponent>;
  }
  return AuthenticationCheck;
}
