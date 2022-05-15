import axios from '../custom-axios/axios'

const homeRepository = {
    fetchRestaurants: ()=>{
        return axios.get("/home")
    },
    fetchMenuCategories: () => {
        return axios.get('/menu-categories')
    },
    fetchMealsByRestaurant: (restName) => {
        return axios.get(`/restaurant/${restName}`)
    },
    addRestaurant: (name,address,opens,closes,avgOrderComp,img) => {
        return axios.post('/restaurant/add', {
            "name" : name,
            "address" : address,
            "opens" : opens,
            "closes" : closes,
            "avgOrderComp" : avgOrderComp,
            "img" : img
        })
    },
    editRestaurant: (id,name,address,opens,closes,avgOrderComp,img) => {
        return axios.put(`/restaurant/edit/${id}`, {
            "name" : name,
            "address" : address,
            "opens" : opens,
            "closes" : closes,
            "avgOrderComp" : avgOrderComp,
            "img" : img
        })
    },
    deleteRestaurant: (id) => {
        return axios.delete(`/restaurant/delete/${id}`);
    },
    fetchMealById: (id) => {
        return axios.get(`/meal/${id}`)
    },
    fetchRestaurantById: (id) => {
        return axios.get(`/restaurant/get/${id}`)
    },
    login: (username, password) => {
        return axios.post("/login", {
            "username": username,
            "password": password
        });
    },
    register: ( username, password, repeatPassword, name, surname, address, email, phoneNumber) => {
        return axios.post("/login/register", {
            "username": username,
            "password": password,
            "repeatPassword": repeatPassword,
            "name": name,
            "surname": surname,
            "address": address,
            "email": email,
            "phoneNumber": phoneNumber
        });
    },
    getUserByUsername: (username) => {
        return axios.get(`/home/${username}`);
    },
    addCartItem: (username,mealId,ammount) => {
        console.log(username+","+mealId+","+ammount)
        return axios.post('/cart/add', {
            "username": username,
            "mealId": mealId,
            "ammount": ammount
        });
    },
    getCartItems: (cartId) => {
        return axios.get(`/cart/${cartId}`)
    },
    makeAnOrder: (discountCode, orderTotal, cartItems, userEmail) => {
        return axios.post('/cart/order', {
            "discountCode": discountCode,
            "orderTotal": orderTotal+"",
            "cartItems": cartItems,
            "emailUser": userEmail,
        })
    },
    findOrders: (userEmail) => {
        return axios.get(`/cart?userEmail=${userEmail}`)
    },
    allOrders: () => {
        return axios.get('/cart/allOrders');
    },
    changeStatus: (id) => {
        return axios.get(`/cart/change/${id}`)
    }

}

export default homeRepository;