// Componentes
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

// styles
import styles from "./NewsLatter.module.css"

function NewsLatter({ btnText }){
    return(
        <form className={styles.form}>
            <Input
                type="email"
                text="E-mail"
                name="newslatter_email"
                placeholder="Insira seu email"
            
            />

            <SubmitButton  text={btnText} />
        </form>
    )
}

export default NewsLatter