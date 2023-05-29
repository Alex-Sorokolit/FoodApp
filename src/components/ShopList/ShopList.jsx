import React, { useState, useEffect } from "react";
import ShopCart from "../ShopCart/ShopCart";
import { getAllShops } from "../../services/Api";

const ShopList = () => {
  const [shops, setShops] = useState([]);
  const [isLoaging, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getShops() {
      try {
        setIsLoading(true);
        const shops = await getAllShops();
        setShops(shops);
      } catch {
        setError("Щось пішло не так, перезавантажте сторінку");
      } finally {
        setIsLoading(false);
      }
    }

    getShops();
  }, []);

  return (
    <ul>
      {shops.map((shop) => (
        <li key={shop.id}>
          <ShopCart shop={shop} />
        </li>
      ))}
    </ul>
  );
};

export default ShopList;
