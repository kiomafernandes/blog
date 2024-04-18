import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


function Navbar() {
    return( 
        <nav className={styles.navbar}>
            <div className={styles.navbar_container} >
                <h1><Link>BLOG</Link></h1>
                <ul>
                    <li>
                        <Link to='/colection'>Coleção</Link>
                    </li>

                    <li>
                        <Link to='/vision'>Nossa Visão</Link>
                    </li>
                    
                    <li>
                        <Link to='publishers'>Editores</Link>
                    </li>

                    <li>
                        <Link to='contacts'>Contato</Link>
                    </li>

                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;