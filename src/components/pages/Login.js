import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import styles from "./Login.module.css"
import { useEffect, useState } from "react";
import Message from "../layout/Message";

function Login() {
    // const [message, setMessage] = useState([])
    // const [dataLogin, setDataLogin] = useState([])
    // // const [emailTeste, setEmailTeste] = useState()
    // // const [senhaTeste, setSenhaTeste] = useState()

    const navigate = useNavigate()
    // const emailTeste = 'ze@baba.com'
    // const senhaTeste = '121212' 
    
    // function validar(dataLogin) {
    //     if (dataLogin.email === emailTeste) {
    //         if(dataLogin.senha === senhaTeste) {
    //         // setMessage('Os dados inseridos estão incorretos!')
    //         navigate('/dashboard')
    //         console.log('estou no if')
    //         }
    //     } 
    //     // else {
    //     //     console.log(dataLogin)
    //     //     console.log('entrei no else')
    //     // }
    // }


    function irDashboard ( ) {
        navigate('/dashboard')
    }

    // function irDashboard (dataLogin,e) {
        
    //     setMessage('')
         
    //     console.log(emailTeste)
    //     console.log(senhaTeste)
    //     if (dataLogin.email === emailTeste) {
    //         if(dataLogin.senha === senhaTeste) {
    //             setMessage('Os dados inseridos estão incorretos!')
    //             navigate('/dashboard')
    //             console.log('estou no if')
    //         }
    //     } else {
    //         // navigate('/dashboard')
    //         console.log(dataLogin)
    //         console.log('entrei no else')
    //     }
        

    // }

    // function handleChange (e) {
    //     setDataLogin({...dataLogin, [e.target.name]: e.target.value})
        // testeLogin()
        // setEmailTeste('ze@ramalho.com')
        // setSenhaTeste('123456')
    // }

    // function testeLogin() {
    //     setEmailTeste('ze@teste.com')
    //     setSenhaTeste('123456')
    // }

    // console.log(dataLogin.email).JSON.stringfy()
    // console.log(dataLogin.senha).JSON.stringfy()
    // console.log(JSON.stringify(dataLogin.email))
    


    return(
        <>
            <section className={styles.login}>
                {/* {message && <Message msg={message} /> } */}
                <div className={styles.login_section}>
                    <h1>Login</h1>
                    <form onClick={irDashboard} className={styles.login_section_form}>
                        <Input
                            type="email"
                            text="E-mail" 
                            name="email_login"
                            placeholder="Insira seu e-mail"
                            // handleOnChange={handleChange}
                            // value={dataLogin.email}
                        />

                        <Input 
                            type="password"
                            text="Senha"
                            name="password_login"
                            placeholder="Digite sua senha"
                            // handleOnChange={handleChange}
                            // value={dataLogin.senha}
                        />

                        <div className={styles.login_section_btn}>
                            <Link to="/"> Voltar</Link>

                            <SubmitButton text="Entrar"/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login