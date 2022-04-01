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
    }
}

export default homeRepository;