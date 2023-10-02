import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import './FindPassword.css';
import styles from "./FindPassword.module.css";
import {Link} from "react-router-dom";

export function FindPassword(){
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Find Password</title>
                    <link href="https://fonts.googleapis.com/css?family=Material+Icons%7CMaterial+Icons+Outlined" rel="stylesheet" type="text/css" />
                </Helmet>
            </HelmetProvider>
            <div className={styles.title}>비밀번호 찾기</div>
            <div className={styles.form}>
                <form>
                    <label>
                        <p className={styles.findPasswordText}>name</p>
                        <input type="text" id="findPasswordName" className={styles.findPassword} name="name" value="" />
                    </label>
                    <label>
                        <p className={styles.findPasswordText}>email</p>
                        <input type="email" id="findPasswordEmail" className={styles.findPassword} name="email" value="" />
                    </label>
                    <br/><br/>
                    <input type="submit" id="findPasswordSubmit" value="done" />
                </form>
            </div>
            <div className={styles.passwordForm}>
                <p id="findPasswordText">your password is</p>
                <input type="password" id="findPassword" className={styles.findPassword} name="password" value="" />
            </div>
            <Link to="/login">
                <div className={styles.loginBottom}>
                    <span id="findPasswordLoginText">Log in</span>
                    <span className="material-icons-outlined">login</span>
                </div>
            </Link>
        </>
    );
}