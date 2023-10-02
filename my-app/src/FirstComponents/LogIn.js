import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import './LogIn.css';
import styles from "./LogIn.module.css";
import naverIcon from './naver.png';
import googleIcon from './google.png';
import {Link} from "react-router-dom";

export function LogIn(){
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Log In</title>
                </Helmet>
            </HelmetProvider>
            <div className={styles.title}>Spot.light</div>
            <div className={styles.form}>
                <form>
                    <label>
                        <p className={styles.loginText}>email</p>
                        <input type="email" id="loginEmail" className={styles.login} name="email" value="" />
                    </label>
                    <label>
                        <p className={styles.loginText}>password</p>
                        <input type="password" id="loginPassword" className={styles.login} name="password" value="" />
                    </label>
                    <br/><br/>
                    <input type="submit" id="loginSubmit" value="login" />
                </form>
            </div>
            <div className={styles.way}>
                <div><Link to="/findid">아이디 찾기</Link></div>
                <div><Link to="/findpassword">비밀번호 찾기</Link></div>
                <div><Link to="/signup">회원가입</Link></div>
            </div>
            <div className={styles.lineContainer}>
                <div id="line1"></div>
                <div id="or">or</div>
                <div id="line2"></div>
            </div>
            <div className={styles.linkedLogin}>
                <div><img id="google" src={googleIcon} alt="구글 아이콘" /></div>
                <div><img id="naver" src={naverIcon} alt="네이버 아이콘" /></div>
            </div>
        </>
    );
}