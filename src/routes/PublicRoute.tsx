import { useContext } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import myContext from "../contextApi/dataContext";

const PublicRoute = ({ children }: any) => {
  const user = useContext(myContext).info;
  if (!user) {
    return children ;
  } else {
    return <Navigate to="/notification" />;
  }
};

export default PublicRoute;
