import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import styles from "./Navbar.module.css";

function DashboardNavbar() {

    const navigate = useNavigate()

    const exit = () => {
        navigate('/')
    }

    return(
        <header className={styles.navbar_dash}>
            <nav className={styles.navbar_container}>
                <h3>Bem-vindo <span>Fulano Sicrano</span></h3>
               <div className={styles.navbar_container_button}>
                    <ul>
                        {/* <li><Link>Conta</Link></li> */}
                        <li><Link to='/dashboard'>Home</Link></li>
                    </ul>
                    <button onClick={exit}>Sair</button>
               </div>
            </nav>

            <div className={styles.navbar_button_sessions}>
                <ul>
                    <li><Link to='/createarticle'>Criar artigo</Link></li>
                    <li><Link to='/articles'>Artigos</Link></li>
                    <li><Link>Alterar senha</Link></li>
                    <li><Link>Usuario</Link></li>
                    <li><Link>Relatar problema</Link></li>
                </ul>
            </div>

        </header>
    )
}

export default DashboardNavbar