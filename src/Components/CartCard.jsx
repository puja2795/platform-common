import styles from "../Styles/CartCard.module.css";

const CartCard = ({ data }) => {
  return (
    <div className={styles.ccard}>
      <img src={data.image} className={styles.image} />
      <div style={{ textAlign: "left" }}>
        <div className={styles.params}>
          <span className={styles.label}>Name:</span> {data.Name}
        </div>
        <div className={styles.params}>
          <span className={styles.label}> Price: </span>
          {data.price}
        </div>
        <div className={styles.params}>
          <span className={styles.label}> Quantity: </span>
          {data.count}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
