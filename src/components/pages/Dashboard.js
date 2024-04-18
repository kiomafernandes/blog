import { Link } from "react-router-dom"
import DashboardFooter from "../layout/DashboardFooter"
import DashboardNavbar from "../layout/DashboardNavbar"
import styles from "./Dashboard.module.css"
import { FaNewspaper } from "react-icons/fa6"


function Dashboard() {
    return(
        <>
            <DashboardNavbar />
                <section className={styles.dashboard}>
                    <div className={styles.dashboard_container}>
                        <FaNewspaper/>
                        <h1>Bem-vindo(a) a área de edição</h1>
                        <p>Crie seus artigos <Link to='/createarticle'>aqui</Link>!</p>
                    </div>
                </section>
            <DashboardFooter />
        </>
       
    )
}

export default Dashboard