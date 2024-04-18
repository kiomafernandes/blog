import CardPost from "../layout/CardPost";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import styles from "./Home.module.css";

function Home(){
    return(
        <>
            <Navbar />
            <section className={styles.home}>
                <div className={styles.home_section}>
                    <h1>Principais categorias</h1>
                    <div className={styles.home_section_post}>
                        <CardPost />
                        <CardPost />
                        <CardPost />
                    </div>
                    
                </div>
                <div className={styles.home_allpost}>
                    <h1>Todos os nossos conteúdos</h1>
                <div className={styles.allpost_content}>
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;