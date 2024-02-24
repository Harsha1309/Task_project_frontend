import React, { useEffect, useState } from "react";

import Arrow from "../assets/arrow.png";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import "./style.css";
import axios from "axios";



function Dashboard() {
  //   const [data,setData] = useState([])

  // useEffect(async () => {
  //   const response = await axios.get('http://localhost:3000/data/0/0');
  //   console.log(response);
  //   setData(response.data);
  // },[])
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('0');
  const [inputProduct,setInputProduct]=useState('0');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to your backend API
        const response = await axios.get(`https://task-project-backend.onrender.com/data/${inputValue}/${inputProduct}`);
        // Extract the data from the response
        const responseData = response.data;
        // console.log(responseData);
        // Update the state with the fetched data
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
   
    // Call the fetchData function when the component mounts
    fetchData();
  }, []);
  const handleButton = async () => {
    try {
      const response = await axios.get(
        `https://task-project-backend.onrender.com/data/${inputValue}/${inputProduct}`
      );
      const responseData = response.data;
      console.log(responseData)
      setData(responseData); // Assuming the response has a property 'items'
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // const handleButton2 = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:3000/data/0/${inputProduct}`
  //     );
  //     const responseData = response.data;
  //     console.log(responseData)
  //     setData(responseData); // Assuming the response has a property 'items'
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInputProduct = (event) => {
    setInputProduct(event.target.value);
  };
  return (
    <div className="Dashboard">
      <div className="btnSection">
        <div className="leftinput">
          <div className="searchbtn">
            <input
              type="text"
              placeholder="Enter text here"
              className="inputfield"
              value={inputValue}
              onChange={handleInputChange}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={handleButton}
            ></i>
          </div>
          <div class="searchbtn">
            <input
              type="text"
              placeholder="Enter text here"
              className="inputfield"
              value={inputProduct}
              onChange={handleInputProduct}
            />
            <i className="fa-solid fa-magnifying-glass" onClick={handleButton}></i>
          </div>
        </div>
        <div className="rightbtns">
          <div className="btn">
            New Product
            <img src={Image1} alt="" className="image" />
          </div>
          <div className="btn">
            Print List
            <img src={Image3} alt="" className="image" />
          </div>
          <div className="btn">
            Advanced mode
            <img src={Image2} alt="" className="image" />
          </div>
        </div>
      </div>
      <div className="listSection">
        <div className="tablehead">
          <div className="item1">
            Article No.
            <img src={Arrow} alt="" className="arrow" />
          </div>
          <div className="item2">
            Product/Service
            <img src={Arrow} alt="" className="arrow" />
          </div>
          <div className="item3">In Price</div>
          <div className="item4">Price</div>
          <div className="item5">Unit</div>
          <div className="item6">In Stock</div>
          <div className="item7">Description</div>
        </div>
        <div className="tableitems">
          {data !== null ? (
            data.map((item) => (
              <div className="item" key={item.Article}>
                <div className="item1 box">{item.Article}</div>
                <div className="item2 box">{item.Product}</div>
                <div className="item3 box">{item.InPrice}</div>
                <div className="item4 box">{item.Price}</div>
                <div className="item5 box">{item.Unit}</div>
                <div className="item6 box">{item.InStock}</div>
                <div className="item7 box">{item.Description}</div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
