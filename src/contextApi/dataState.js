import React, { useContext, useState } from "react";
import myContext from "./dataContext";
const DataState = (props) => {
  const [info, setInfo] = useState(null);

  const storeData = (data) => setInfo({ ...info, data });

  return (
    <myContext.Provider value={{ info, storeData }}>
      {props.children}
    </myContext.Provider>
  );
};

export default DataState;
