import React from 'react';
import { useNavigate } from "react-router-dom";
import EShopService from "../../repo-axios/homeRepository";
import './login.styles.scss'


const Login = (props) => {

    const navigator = useNavigate();
    const [formData, updateFormData] = React.useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        EShopService.login(formData.username, formData.password).then(resp => {
            localStorage.setItem("JWT", resp.data);
            props.onLogin();
        })
        EShopService.getUserByUsername(formData.username).then(resp=>{
            console.log(resp.data)
            localStorage.setItem("user", JSON.stringify(resp.data));
            navigator("/");
        })
    }

    return (
        <div className="login-group">
            <div className='form-wrap'>
                <form onSubmit={onFormSubmit}>
                    <div className="username">
                        <label htmlFor="name">Username</label>
                        <input type="text"
                               className="form-control"
                               name="username"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="price">Password</label>
                        <input type="password"
                               className="form-control"
                               name="password"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <button id="foot" type="submit"><button class="button-os" type="submit">Login</button></button>
                </form>
            </div>
        </div>
    )
}

export default Login;
