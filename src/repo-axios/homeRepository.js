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
    }
}

export default homeRepository;