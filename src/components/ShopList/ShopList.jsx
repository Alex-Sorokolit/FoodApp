import React, { useState, useEffect } from "react";
import ShopCart from "../ShopCart/ShopCart";

const ShopList = () => {
  const [shops, setShops] = useState([]);

  // useEffect
  // setShops
  return (
    <ul>
      {shops.map((shop) => (
        <li>
          <ShopCart shop={shop} />
        </li>
      ))}
    </ul>
  );
};

export default ShopList;
