import CategoryCard from "../categoryCard";
import ProfileCard from "../profileCard";
import styles from "./index.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ProfileCard />
      <CategoryCard />
    </div>
  );
};

export default Sidebar;
