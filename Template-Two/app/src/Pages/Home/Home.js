import React, { useState, useEffect } from "react";

// Styles
import "./Home.css";

function Home () {

    const [infos, setInfos] = useState();

    // Function to collect data
    const getApiData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      ).then((response) => response.json());
  
      setInfos(response);
    };
  
    useEffect(() => {
      getApiData();
    }, []);
  
    return (
      <div className="cards">
        {infos &&
          infos.map((item, key) => (
            <div className="cards__item" key={key}>
                <div className="cards__item__id">{item.id}</div>
                <div className="cards__item__title">{item.title}</div>
            </div>
          ))}
      </div>
    );
}

export default Home;