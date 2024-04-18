import ArticleBox from "../layout/ArticleBox"
import DashboardFooter from "../layout/DashboardFooter"
import DashboardNavbar from "../layout/DashboardNavbar"
import styles from "./Articles.module.css"

function Article() {
    return(
       <>
            <DashboardNavbar />
                <section className={styles.articles}>
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />
                </section>
            <DashboardFooter />
       </>
    )
}

export default Article