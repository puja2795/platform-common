import { Outlet } from "react-router-dom";
import styles from "../Styles/MainLayout.module.css";
import { BsCart3 } from "react-icons/bs";

const MainLayout = () => {
  return (
    <div className={styles["main"]}>
      <div className={styles.header}>
        <BsCart3 size={18} />
        <div className={styles.count}>5</div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
