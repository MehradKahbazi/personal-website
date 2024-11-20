import styles from "./MenuData.module.css";

const MenuData = ({collaspsed}) => {

    const data = [ 'Home', 'Our Story', 'Services', 'Contact']
  return (
    <div className={collaspsed ? styles.collapsed : styles.menu} >
        <div className={styles.data}>
      <ul className={styles.list}>
        <li>Navigation</li>
        <li className={collaspsed? styles.activeitem : styles.item}>
          <a href="#" className={styles.link}>Home</a>
        </li>
        <li className={collaspsed? styles.activeitem : styles.item}>
          <a href="#" className={styles.link}>Our Story</a>
        </li>
        <li className={collaspsed? styles.activeitem : styles.item}>
          <a href="#" className={styles.link}>Services</a>
        </li>
        <li className={collaspsed? styles.activeitem : styles.item}>
          <a href="#" className={styles.link}>Contact</a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default MenuData;
