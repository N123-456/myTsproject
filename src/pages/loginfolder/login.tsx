import { Center, PasswordInput, TextInput } from "@mantine/core";
import React, { useContext, useState } from "react";
import { Button } from "@mantine/core";
import myContext from "../../contextApi/dataContext";
import { usersData } from "../userData/Userdata";
import { useNavigate } from "react-router-dom";
interface loginCredentials {
  email: string;
  password: string;
}
const LoginPage = () => {
  const navigate = useNavigate();
  const { storeData } = useContext(myContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const user = usersData?.find(
      (e: { email: string; password: string }) =>
        e.email === email && e.password === password
    );

    if (user) {
      
      storeData({ email, password });
      navigate("/notification");
    } else {
      alert("user does not exist");
    }
  };
  return (
    <div className="flex align-center justify-center">
      <div className="flex flex-col w-[100%]">
        <Center className="flex flex-col">
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
          <div className="mb-3">
            <p>Forgot Password?</p>
          </div>
          <div className="w-20 mb-2">
            <Button
              onClick={handleSubmit}
              variant="filled"
              size="lg"
              radius="md"
            >
              Login
            </Button>
          </div>
        </Center>
      </div>
    </div>
  );
};

export default LoginPage;
