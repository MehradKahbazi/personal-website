import styles from './ToggleBtn.module.css'
const ToggleBtn = ({setCollapsed, collapsed}) => {
    
    return ( 
        <div className={styles.toggle} id='menu'>
        <a href="#menu" onClick={() => {setCollapsed(prevState => !prevState)}}>
        <span className={styles.hamburger} style={ collapsed ? {transform: "matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 6)"}: {}}></span>
        <span className={styles.hamburger} style={collapsed ? {transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, -4)"}: {}}></span>
        </a>
      </div>
     );
}
 
export default ToggleBtn;