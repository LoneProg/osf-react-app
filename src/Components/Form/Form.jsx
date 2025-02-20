import React from 'react'
import styles from './Form.module.css'

const Form = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" name='fullName' placeholder='Full Name' required />
                <input type="tel" name='phoneNumber' placeholder='Phone Number' required />
                <input type="email" name='email' placeholder='Email' />
                <textarea placeholder='Message' name='message' rows="4" />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Form