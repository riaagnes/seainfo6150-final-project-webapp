import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import './App.css';
import NavBar from "./NavBar/NavBar.jsx"




function App() {
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo6543505.mockable.io/mountains");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };
  
    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);
  

let nav = isEmpty(fetchedData) ? null : <NavBar mountains={Object.values(fetchedData)}/>;
  return isEmpty(fetchedData) ? null : (
    <>
      <header>
        
        {nav}
      </header>
      
    </>
  );
}

export default App;
