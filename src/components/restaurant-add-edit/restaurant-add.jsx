import React from "react";
import { useNavigate } from 'react-router-dom';
import './restaurant-add-edit.styles.scss';

const RestaurantAdd = (props) => {

    let navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        address: "",
        opens: "",
        closes: "",
        avgOrderComp: 1,
        img: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const address = formData.address;
        const opens = formData.opens;
        const closes = formData.closes;
        const avgOrderComp = formData.avgOrderComp;
        const img = formData.img;

        props.onAddProduct(name, address, opens, closes, avgOrderComp,img);
        navigate("/");
    }

    return(
        <div className="local-bootstrap row mt-10">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Product name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter product name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">address</label>
                        <input type="text"
                               className="form-control"
                               id="address"
                               name="address"
                               placeholder="address"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="opens">opens</label>
                        <input type="text"
                               className="form-control"
                               id="opens"
                               name="opens"
                               placeholder="opens"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="closes">closes</label>
                        <input type="text"
                               className="form-control"
                               id="closes"
                               name="closes"
                               placeholder="closes"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="avgOrderComp">avgOrderComp</label>
                        <input type="text"
                               className="form-control"
                               id="avgOrderComp"
                               name="avgOrderComp"
                               placeholder="avgOrderComp"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="img">Image</label>
                        <input type="text"
                               className="form-control"
                               id="img"
                               name="img"
                               placeholder="img"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RestaurantAdd;
