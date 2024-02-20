import React, { useEffect, useState } from "react";
import Arrow from "../assets/arrow.png";
import "./style.css";
import axios from "axios";

// const data = [
//     // {
//     //   "Article": 1,
//     //   "Product": "Widget A",
//     //   "InPrice": 10,
//     //   "Price": 20,
//     //   "Unit": "Each",
//     //   "InStock": 50,
//     //   "Description": "High-quality widget for various applications."
//     // },
//     {
//       "Article": 2,
//       "Product": "Gadget B",
//       "InPrice": 15,
//       "Price": 30,
//       "Unit": "Each",
//       "InStock": 40,
//       "Description": "Advanced gadget with multiple features."
//     },
//     {
//       "Article": 3,
//       "Product": "Tool C",
//       "InPrice": 20,
//       "Price": 40,
//       "Unit": "Each",
//       "InStock": 30,
//       "Description": "Durable tool for professional use."
//     },
//     {
//       "Article": 4,
//       "Product": "Accessory D",
//       "InPrice": 5,
//       "Price": 10,
//       "Unit": "Pair",
//       "InStock": 100,
//       "Description": "Essential accessory for your device."
//     },
//     {
//       "Article": 5,
//       "Product": "Component E",
//       "InPrice": 8,
//       "Price": 16,
//       "Unit": "Each",
//       "InStock": 75,
//       "Description": "Versatile component for various systems."
//     },
//     {
//       "Article": 6,
//       "Product": "Service F",
//       "InPrice": 50,
//       "Price": 100,
//       "Unit": "Hour",
//       "InStock": "0",
//       "Description": "Expert service for your needs."
//     },
//     {
//       "Article": 7,
//       "Product": "Product G",
//       "InPrice": 25,
//       "Price": 50,
//       "Unit": "Each",
//       "InStock": 20,
//       "Description": "Premium product with exceptional quality."
//     },
//     {
//       "Article": 8,
//       "Product": "Tool H",
//       "InPrice": 18,
//       "Price": 36,
//       "Unit": "Each",
//       "InStock": 35,
//       "Description": "Versatile tool suitable for various tasks."
//     },
//     {
//       "Article": 9,
//       "Product": "Accessory I",
//       "InPrice": 7,
//       "Price": 14,
//       "Unit": "Each",
//       "InStock": 80,
//       "Description": "Handy accessory for everyday use."
//     },
//     {
//       "Article": 10,
//       "Product": "Component J",
//       "InPrice": 12,
//       "Price": 24,
//       "Unit": "Each",
//       "InStock": 60,
//       "Description": "Essential component for electronic devices."
//     },
//     {
//       "Article": 11,
//       "Product": "Widget K",
//       "InPrice": 22,
//       "Price": 44,
//       "Unit": "Each",
//       "InStock": 25,
//       "Description": "Compact widget for various applications."
//     },
//     {
//       "Article": 12,
//       "Product": "Gadget L",
//       "InPrice": 35,
//       "Price": 70,
//       "Unit": "Each",
//       "InStock": 15,
//       "Description": "Innovative gadget with cutting-edge technology."
//     },
//     {
//       "Article": 13,
//       "Product": "Tool M",
//       "InPrice": 30,
//       "Price": 60,
//       "Unit": "Each",
//       "InStock": 20,
//       "Description": "Heavy-duty tool for demanding tasks."
//     },
//     {
//       "Article": 14,
//       "Product": "Accessory N",
//       "InPrice": 10,
//       "Price": 20,
//       "Unit": "Pair",
//       "InStock": 90,
//       "Description": "Stylish accessory to complement your outfit."
//     },
//     {
//       "Article": 15,
//       "Product": "Component O",
//       "InPrice": 15,
//       "Price": 30,
//       "Unit": "Each",
//       "InStock": 70,
//       "Description": "Essential component for mechanical systems."
//     },
//     {
//       "Article": 16,
//       "Product": "Service P",
//       "InPrice": 40,
//       "Price": 80,
//       "Unit": "Hour",
//       "InStock": '0',
//       "Description": "Professional service tailored to your requirements."
//     },
//     {
//       "Article": 17,
//       "Product": "Product Q",
//       "InPrice": 20,
//       "Price": 40,
//       "Unit": "Each",
//       "InStock": 30,
//       "Description": "Premium product crafted with precision."
//     },
//     {
//       "Article": 18,
//       "Product/Service": "Tool R",
//       "InPrice": 25,
//       "Price": 50,
//       "Unit": "Each",
//       "InStock": 40,
//       "Description": "Reliable tool for professional use."
//     },
//     {
//       "Article": 19,
//       "Product": "Accessory S",
//       "InPrice": 8,
//       "Price": 16,
//       "Unit": "Each",
//       "InStock": 85,
//       "Description": "Practical accessory for outdoor activities."
//     },
//     {
//       "Article": 20,
//       "Product": "Component T",
//       "InPrice": 14,
//       "Price": 28,
//       "Unit": "Each",
//       "InStock": 65,
//       "Description": "Versatile component for electronic circuits."
//     }
//   ]

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
        const response = await axios.get(`http://localhost:3000/data/${inputValue}/${inputProduct}`);
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
        `http://localhost:3000/data/${inputValue}/${inputProduct}`
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
            <img src={Arrow} alt="" className="arrow" />
          </div>
          <div className="btn">
            Print List
            <img src={Arrow} alt="" className="arrow" />
          </div>
          <div className="btn">
            Advanced mode
            <img src={Arrow} alt="" className="arrow" />
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
