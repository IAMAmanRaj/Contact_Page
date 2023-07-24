import styles from "./Navigation.module.css";
import logo from "./logo.png";
const Navigation = () => {
  return (
    <nav className={`container ${styles.navigation}`}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
