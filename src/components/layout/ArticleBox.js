import { useNavigate } from "react-router-dom"
import styles from "./ArticleBox.module.css"

function ArticleBox() {
    const navigate = useNavigate()
    
    function edit() {
        navigate('/createarticle')
    }

    function exclud() {
        alert('Excluido')
        
    }

    return(
        <div className={styles.articlebox}>
            <h1>Titulo</h1>
            <p>Autor</p>
            <button onClick={edit} className={styles.gren}>Editar</button>
            <button onClick={exclud} className={styles.red}>Excluir</button>
        </div>
    )
}

export default ArticleBox