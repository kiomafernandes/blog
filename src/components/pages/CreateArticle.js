import Input from "../form/Input"
import Textarea from "../form/Textarea"
import Select from "../form/Select"
import DashboardFooter from "../layout/DashboardFooter"
import DashboardNavbar from "../layout/DashboardNavbar"
import { useState } from "react"
import styles from "./CreateArticle.module.css"

function CreateArticle () {
    const [category, setCategory] = useState([])

    function options() {
        setCategory({
            'category' : {
                '1' : "Loren",
                '2' : "Ipsun",
                '3' : "Azoth"
            }
        })
    }
    

    return(
        // fazer a estilização do seção de creação de artigos
        <>
        <DashboardNavbar />
            <section className={styles.create}>
                <div className={styles.create_form}>
                    <Input
                        type='name'
                        text='Titulo'
                        name='title'
                        placeholder='Crie um titulo'

                    />

                    <Input 
                        type='name'
                        text='Autor'
                        name='author'
                        placeholder='Digite o nome do autor'
                    />

                    <Select 
                        text='Coleção'
                        name='colection'
                        handleOnChange={options}
                        options={category}
                        value={category.id}
                        
                    />

                    <Textarea 
                        name='text_post'
                        text='Texto do artigo'
                        placeholder='Insira o texto do seu artigo'
                    />
                </div>
            </section>
        <DashboardFooter />
        </>
        
    )
}

export default CreateArticle