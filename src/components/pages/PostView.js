import { Link } from "react-router-dom"
import styles from "./PostView.module.css"
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"

function PostView() {
    return(
        <>
            <Navbar />
            <section className={styles.postView}>
                <div className={styles.postView_btn}>
                    <Link to="/">Voltar</Link>
                </div>
                <div className={styles.postView_title}>
                    <h1>Titulo da postagem</h1> 
                    <p>Postado por: <span>Kioma Fernandes</span> em: 08/04/2024 </p>
                </div>
                <div className={styles.postView_content}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta ultrices porttitor. Maecenas laoreet dui mi, id dignissim nibh bibendum a. Sed eu risus tincidunt, accumsan dui eu, auctor tortor. Mauris in velit posuere turpis imperdiet vehicula. Donec ullamcorper varius gravida. Nam efficitur hendrerit sapien, eget ultricies tellus hendrerit non. Nullam lacus leo, bibendum nec quam non, porta condimentum tellus. Cras quis ligula vel neque venenatis tincidunt. Nulla condimentum eu turpis sed aliquet. Sed justo felis, venenatis non nunc varius, maximus tempor augue. Vestibulum pulvinar id quam vitae pulvinar. Proin ac diam et magna ultricies porta sit amet gravida mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum rhoncus.
                    </p>
                    <p>
                    Duis sem nulla, egestas id euismod eu, molestie a magna. Ut ut rhoncus dui, ac lacinia purus. Nunc id velit nulla. Aenean volutpat posuere rhoncus. Phasellus in commodo augue. Curabitur interdum arcu risus, vitae malesuada ante rhoncus ut. Nam lacinia sem orci, eget lobortis eros ullamcorper ac. Ut bibendum eros mi, ultricies elementum urna lobortis id. Praesent non egestas magna, at varius ante. Nullam tristique sapien non felis fringilla suscipit.
                    </p>
                    <p>
                    Donec leo tortor, scelerisque sed metus at, imperdiet tristique magna. Vivamus eu consequat magna, sit amet sodales leo. Sed ultrices velit eget turpis tincidunt facilisis. Morbi id leo ex. Curabitur sit amet placerat sapien. Phasellus porta et nunc quis sodales. Nam fermentum sapien aliquam, congue metus a, pharetra ante. Ut et erat quis erat aliquam sodales eu a mi. Fusce et urna euismod, hendrerit tortor ut, consequat erat. Cras vitae nulla venenatis, finibus nunc sit amet, faucibus enim. Vestibulum dignissim ac eros ac faucibus. Duis rhoncus nisl nec gravida laoreet. In id ultrices leo.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default PostView