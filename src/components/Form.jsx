import React from "react";
import Validate from "./Validation"
import styles from "./Form.module.css"
import { getByDisplayValue } from "@testing-library/react";
import IMG1 from "./img/pj.png";

export default function Formu (props) {

    const { login } = props

    const [userData, setUserData] = React.useState({ username: '', password: '' });

    const [errors, setErrors] = React.useState({username: '', password: ''}) 

    const handleInputChange = (e) => {
        setUserData({...userData, [e.target.name] : e.target.value})

        setErrors(
            Validate({
               ...userData,
               [e.target.name]: e.target.value,
            })
         );
    }

    function handleSubmit(e) {
      e.preventDefault();
      login(userData);

    }
      
  
    
    return (
<div>
<img className={styles.imgStyle} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png' />
    <form onSubmit={handleSubmit}>
      <div className={styles.divStyle}>
        <div className={styles.inputStyle}>
          <label className={styles.fontColorMail} >Username:</label>
          <input name="username" onChange={handleInputChange} value={userData.username} type='text'  className={errors.username}/>
          {errors.username && <p className={styles.fontColorAlerts} >{errors.username}</p>}
        </div>
        <div className={styles.inputStyle}>
          <label className={styles.fontColorPassword} >Password:</label>
          <input name="password" onChange={handleInputChange} value={userData.password} type='password'  className={errors.password}/>
          {errors.password && <p className={styles.fontColorAlerts} >{errors.password}</p>}
        </div>
          <button className={styles.loginStyle} onClick={handleSubmit} >LOGIN</button>
      </div>
    </form>
  <img src={IMG1} className={styles.imgPJ} alt="pj" />
</div>
)}