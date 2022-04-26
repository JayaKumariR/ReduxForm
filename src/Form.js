import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };
  return (
    <div className="mx-auto px-5">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="py-3 text-center">Redux Form</h1>
        <div className="mb-3 col-md-3">
          <label for="exampleInputEmail1" className="form-label">
            Name:
          </label>
          <input
            type="name"
            className="form-control"
            id=""
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 col-md-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id=""
            placeholder="Enter your E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 col-md-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id=""
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
