import { Link } from "react-router-dom";
import styles from "./Footer.module.css"
import { FaFacebook, FaInstagram, } from "react-icons/fa";

import NewsLatter from "./NewsLatter";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_newslatter}>
                <h3>Bem-vindo ao</h3>
                <h1>BLOG</h1>
                <p>Assine nosso newslatter com o nosso melhor conteúdo</p>
                <NewsLatter btnText="Cadastrar"/>
            </div>

            <div className={styles.footer_links}>
                <h1>
                    <Link to="/">BLOG</Link>
                </h1>

                <ul className={styles.links}>
                    <li>
                        <Link>Nossa politica</Link>
                    </li>

                    <li>
                        <Link>Fale com a galera</Link>
                    </li>

                    <li>
                        <Link to='/login'>Acesso editorial</Link>
                    </li>
                </ul>

                <ul className={styles.social}>
                    <li>
                        <Link><FaFacebook /></Link>
                    </li>

                    <li>
                        <Link><FaInstagram/></Link>
                    </li>

                    <li>
                        <Link><FaXTwitter/></Link>
                    </li>
                </ul>
            </div>
            
            <div className={styles.copy}>
                <p>
                    &copy; 2024 <Link to="/">BLOG</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer;