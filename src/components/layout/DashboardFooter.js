import { Link } from "react-router-dom";
import styles from "./Footer.module.css"


function DashboardFooter() {
    return(
        <footer className={styles.footer}>
            
            <div className={styles.copy}>
                <p>
                    &copy; 2024 <Link to="/dashboard">BLOG</Link>
                </p>
            </div>
        </footer>
    )
}

export default DashboardFooter;