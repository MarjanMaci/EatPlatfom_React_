import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

const RestaurantEdit = (props) => {
    let {id} = useParams()
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

        props.onEditRestaurant(id,name, address, opens, closes, avgOrderComp,img);
        navigate("/");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Product name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder={props.restaurant.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">address</label>
                        <input type="text"
                               className="form-control"
                               id="address"
                               name="address"
                               placeholder={props.restaurant.address}
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
                               placeholder={props.restaurant.opens}
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
                               placeholder={props.restaurant.closes}
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
                               placeholder={props.restaurant.avgOrderCompletion}
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
                               placeholder={props.restaurant.img}
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

export default RestaurantEdit;
