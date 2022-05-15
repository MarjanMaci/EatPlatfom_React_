import React from 'react';
import { useNavigate } from "react-router-dom";
import EShopService from "../../repo-axios/homeRepository";
import './login.styles.scss'

const Register = (props) => {

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
        EShopService.register(formData.username, formData.password, formData.repeatPassword, formData.name, formData.surname,formData.address,formData.email,formData.phoneNumber).then(resp => {
            navigator("/login");
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
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               className="form-control"
                               name="password"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="username">
                        <label htmlFor="repeatPassword">Repeat Password</label>
                        <input type="password"
                               className="form-control"
                               name="repeatPassword"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="username">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               className="form-control"
                               name="name"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="username">
                        <label htmlFor="surname">Surname</label>
                        <input type="text"
                               className="form-control"
                               name="surname"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="username">
                        <label htmlFor="address">Address</label>
                        <input type="text"
                               className="form-control"
                               name="address"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="username">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                               className="form-control"
                               name="email"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="username">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text"
                               className="form-control"
                               name="phoneNumber"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <button id="foot" type="submit"><button class="button-os" type="submit">Register</button></button>
                </form>
            </div>
        </div>
    )
}

export default Register;