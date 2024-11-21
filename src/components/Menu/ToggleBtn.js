import styles from './ToggleBtn.module.css'
const ToggleBtn = ({setCollapsed, collapsed}) => {
    
    return ( 
        <div className={styles.toggle} id='menu'>
        <a href="#menu" onClick={() => {setCollapsed(prevState => !prevState)}}>
        <span className={collapsed? styles.collapsed1 :styles.hamburger} ></span>
        <span className={collapsed? styles.collapsed2 :styles.hamburger} ></span>
        </a>
      </div>
     );
}
 
export default ToggleBtn;