import { useEffect, useState } from "react";
import styles from "../Styles/Card.module.css";
import axios from "axios";

const Card = ({ data }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);

    axios
      .post("http://localhost:8080/cart", { ...data, count: 1 })
      .then((res) => {
        console.log(res);
        console.log(count);
      });
  };

  const handleDecreaseCount = () => {
    setCount((prev) => prev - 1);
    axios
      .patch(`http://localhost:8080/cart/${data.id}`, {
        ...data,
        count,
      })
      .then((res) => {
        console.log("count updated");
        console.log(count);
      });
  };

  const handleIncreaseCount = () => {
    setCount((prev) => prev + 1);
    axios
      .patch(`http://localhost:8080/cart/${data.id}`, {
        ...data,
        count,
      })
      .then((res) => {
        console.log("count updated");
      });
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className={styles.card}>
      <img src={data.image} className={styles.image} />
      <div className={styles.params}>
        <span className={styles.label}>Name:</span> {data.Name}
      </div>
      <div className={styles.params}>
        <span className={styles.label}> Price: </span>
        {data.price}
      </div>
      <div className={styles.params}>
        <span className={styles.label}> Weight: </span>
        {data.weight}
      </div>
      {count == 0 ? (
        <button className={styles.btn} onClick={handleClick}>
          Add to Cart
        </button>
      ) : (
        <div className={styles.adder}>
          <button className={styles.btn2} onClick={handleDecreaseCount}>
            -
          </button>
          <div className={styles.count}>{count}</div>
          <button className={styles.btn2} onClick={handleIncreaseCount}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
