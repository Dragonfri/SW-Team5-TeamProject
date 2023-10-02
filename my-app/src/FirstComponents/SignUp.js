import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import './SignUp.css';
import styles from "./SignUp.module.css";

export function SignUp(){
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Sign Up</title>
                </Helmet>
            </HelmetProvider>
            <div className={styles.title}>회원가입</div>
            <div className={styles.form}>
                <form>
                    <label>
                        <p className={styles.signUpText}>name</p>
                        <input type="text" id="signupName" className={styles.signUp} name="name" value="" />
                    </label>
                    <label>
                        <p className={styles.signUpText}>email</p>
                        <input type="email" id="signupEmail" className={styles.signUp} name="email" value="" />
                    </label>
                    <label>
                        <p className={styles.signUpText}>password</p>
                        <input type="password" id="signupPassword" className={styles.signUp} name="password" value="" />
                    </label>
                    <label>
                        <p className={styles.signUpText}>password check</p>
                        <input type="password" id="signupPasswordCheck" className={styles.signUp} name="passwordcheck" value="" />
                    </label>
                    <label>
                        <p className={styles.signUpText}>nickname</p>
                        <input type="text" id="signupNickName" className={styles.signUp} name="nickname" value="" />
                    </label>
                    <br/><br/>
                    <input type="submit" id="signupSubmit" value="join" />
                </form>
            </div>
        </>
    );
}