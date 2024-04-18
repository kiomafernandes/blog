import { useEffect, useState } from "react"
import styles from "./Message.module.css"

function Message( {msg} ) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg) {
            setVisible(false)
            return
        }

        setVisible(true)
        const time = setTimeout(() => {
            setVisible(false)
        }, 3000)
    }, [msg])
    return(
        <>
            {visible && (
                <div className={styles.message}>{msg}</div>
            )}
        </>
    )
}

export default Message