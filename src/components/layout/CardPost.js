import { Link } from "react-router-dom"
import Salao from "../images/salao1.jpg"

import styles from "./CardPost.module.css"

function CardPost(){
    return(
        <section className={styles.card_post}>
            <div className={styles.card_post_img}>
                <img src={Salao}/>
            </div>
            <div className={styles.card_post_content}>
                <h1><Link to="/postview">Titulo do post</Link></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta ultrices porttitor. Maecenas laoreet dui mi, id dignissim nibh bibendum a. Sed eu risus tincidunt, accumsan dui eu, auctor tortor. Mauris in velit posuere turpis imperdiet vehicula. Donec ullamcorper varius gravida. Nam efficitur hendrerit sapien, eget ultricies tellus hendrerit non.</p>
                <Link to="/postview">Contnuar lendo...</Link>
            </div>
        </section>
    )
}

export default CardPost;