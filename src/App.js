import './App.css';
import { Routes, Route, useRoutes, Router } from 'react-router-dom';
import homeRepository from '../src/repo-axios/homeRepository'
import NavMenu from './components/nav-menu/nav-menu.component';
import SearchMenu from './components/search-menu/search-menu.component';
import MenuCategories from './components/menu-categories-nav/menu-categories.component';
import RestaurantList from './components/restaurant-list/restaurant-list.component';
import MenuCategoriesList from './components/menu-categories-list/menu-categories-list';
import MealsByRestaurantList from './components/meals-by-restaurant-list/meals-by-restaurant-list';
import RestaurantAdd from './components/restaurant-add-edit/restaurant-add';
import RestaurantEdit from './components/restaurant-add-edit/restaurant-edit';
import Meal from './components/meal/meal.component';
import Cart from './components/cart/cart.component';
import Login from './components/login/login.component';
import Register from './components/login/register.component';
import Order from './components/orders/order.component';
import AdminOrders from './components/orders/admin-orders.component';
import React from 'react';

class App extends React.Component {

  constructor(){
    super();

    this.state={
      restaurants:[], 
      menuCategories:[],
      selectedRestaurant:{}
    }
  }

  getRestaurant = (id) => {
    homeRepository.fetchRestaurantById(id)
    .then(data => {
      this.setState({selectedRestaurant: data.data})
    })
  }

  loadMenuEntries = () => {
    homeRepository.fetchMenuCategories()
    .then(data => {
        this.setState({menuCategories: data.data})
    }, ()=>{console.log(this.state)})
  }

  loadRestaurants = () => {
    homeRepository.fetchRestaurants()
    .then(data => {
        this.setState({restaurants: data.data})
    }, ()=>{console.log(this.state)})
  }

  addRestaurant = (name,address,opens,closes,avgOrderComp,img) => {
    homeRepository.addRestaurant(name,address,opens,closes,avgOrderComp,img)
    .then(()=>{
      this.loadRestaurants();
    })
  }

  editRestaurant = (id,name,address,opens,closes,avgOrderComp,img) => {
    homeRepository.editRestaurant(id,name,address,opens,closes,avgOrderComp,img)
    .then(()=>{
      this.loadRestaurants();
    })
  }
  
  deleteRestaurant = (id) => {
    homeRepository.deleteRestaurant(id)
    .then(()=>{
      this.loadRestaurants();
    })
  }

  componentDidMount(){
      this.loadMenuEntries();
      this.loadRestaurants();
  }

  render(){
    return (
      
        <div className="App">
          <div className='left-wrapper'>
            <NavMenu/>
          </div>
          <div className='right-wrapper'>
            <SearchMenu/> 
              <Routes>
                <Route path='/' element={<><MenuCategories data={this.state.menuCategories}/><RestaurantList data={this.state.restaurants} onEdit={this.getRestaurant} onDelete={this.deleteRestaurant}/></>}/>
                <Route path='/menucategories/:id' element={<><MenuCategories data={this.state.menuCategories}/><MenuCategoriesList data={this.state.menuCategories}/></>}/>
                <Route path='/restaurant/:id' element={<><MenuCategories data={this.state.menuCategories}/><MealsByRestaurantList /></>} />
                <Route path='/restaurant/add' element={<RestaurantAdd onAddProduct={this.addRestaurant} />} />
                <Route path='/restaurant/edit/:id' element={<RestaurantEdit onEditRestaurant={this.editRestaurant} restaurant={this.state.selectedRestaurant} />} />
                <Route path='/meal/:id' element={<Meal/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path="/login" element={<Login onLogin={this.loadRestaurants}/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/orders" element={<Order/>}/>
                <Route path="/orderAdmin" element={<AdminOrders/>}/>
              </Routes>
            </div>
        </div>
    );
  }
}

export default App;