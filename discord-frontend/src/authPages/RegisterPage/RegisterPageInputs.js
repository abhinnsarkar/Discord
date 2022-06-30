import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const RegisterPageInputs = (props) => {
  const { firstName, setFirstName, lastName, setLastName, mail, setMail, username, setUsername, password, setPassword } = props;

  return (
    <>
      <InputWithLabel
        value={firstName}
        setValue={setFirstName}
        label="First Name"
        type="text"
        placeholder="Enter your first name"
      />
      <InputWithLabel
        value={lastName}
        setValue={setLastName}
        label="Last Name"
        type="text"
        placeholder="Enter your last name"
      />
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail address"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter a username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default RegisterPageInputs;
