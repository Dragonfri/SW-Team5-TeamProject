import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import './FindId.css';
import styles from "./FindId.module.css";
import {Link} from "react-router-dom";

export function FindId(){
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Find Id</title>
                    <link href="https://fonts.googleapis.com/css?family=Material+Icons%7CMaterial+Icons+Outlined" rel="stylesheet" type="text/css" />
                </Helmet>
            </HelmetProvider>
            <div className={styles.title}>아이디 찾기</div>
            <div className={styles.form}>
                <form>
                    <label>
                        <p className={styles.findIdText}>name</p>
                        <input type="text" id="findIdName" className={styles.findId} name="name" value="" />
                    </label>
                    <br/><br/>
                    <input type="submit" id="findIdSubmit" value="done" />
                </form>
            </div>
            <div className={styles.emailForm}>
                <p id="findIdEmailText">your email is</p>
                <input type="email" id="findIdEmail" className={styles.findId} name="email" value="" />
            </div>
            <Link to="/login">
                <div className={styles.loginBottom}>
                    <span id="findIdLoginText">Log in</span>
                    <span className="material-icons-outlined">login</span>
                </div>
            </Link>
        </>
    );
}