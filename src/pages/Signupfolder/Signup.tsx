import { Center, PasswordInput, TextInput } from "@mantine/core";
import React, { useState, useContext } from "react";
import { Button } from "@mantine/core";
import myContext from "../../contextApi/dataContext";
import { usersData } from "../userData/Userdata";
import { useNavigate } from "react-router-dom";
interface signUpCredentials {
  name: string;
  email: string;
  password: string;
}

const SignupPage = () => {
  const navigate=useNavigate();
  const handlSubmit = () => {
    const findUser = usersData.find((user) => user.email === email);

    if (findUser) {
      console.log("user already exist");
    } else {
      storeData({ name, email, password });
    }
  };
  const { info, storeData } = useContext(myContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex align-center justify-center">
      <div className="flex flex-col w-[100%]">
        <Center className="flex flex-col">
          <div className="w-[25%] py-4 text-xl focus:border-black-200 ">
            <TextInput
              label="Name"
              placeholder="Enter your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="w-[25%] py-4 text-xl focus:border-black-200 ">
            <TextInput
              label="Email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="w-[25%] py-4 text-xl focus:border-black-200">
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="mb-4 py-4">
            <p>Create an Account</p>
          </div>
          <div className="w-[25%]">
            <Button
              onClick={() => navigate("/")} 
              variant="filled"
              size="md"
              radius="md"
            >
              Register
            </Button>
          </div>
        </Center>
      </div>
    </div>
  );
};

export default SignupPage;
