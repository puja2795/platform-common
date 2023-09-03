import React, { useEffect, useState } from "react";
import styles from "../Styles/Catalouge.module.css";
import axios from "axios";
import Card from "../Components/Card";

const Catalouge = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("https://abrupt-skinny-kicker.glitch.me/products")
      .then((res) => setProducts(res.data));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={styles["catelog-container"]}>
      {products?.map((el) => {
        return <Card key={el.id} data={el} />;
      })}
    </div>
  );
};

export default Catalouge;
