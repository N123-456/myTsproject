import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import myContext from "../contextApi/dataContext";

const ProtectedRoute = ({ children }: any) => {
  const user = useContext(myContext).info;
  console.log("user:",user)
  if (user) {
    return <Navigate to="/" />;
    
  } else {
    return children;
  }
};

export default ProtectedRoute;
