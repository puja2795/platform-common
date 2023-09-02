import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "../Styles/MainLayout.module.css";
import { BsCart3 } from "react-icons/bs";
import { useEffect } from "react";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.split("/")[1]) navigate("/catalogue");
  }, []);

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
