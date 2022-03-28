import './App.css';
import { Routes, Route } from 'react-router-dom';
import homeRepository from '../src/repo-axios/homeRepository'
import NavMenu from './components/nav-menu/nav-menu.component';
import SearchMenu from './components/search-menu/search-menu.component';
import MenuCategories from './components/menu-categories-nav/menu-categories.component';
import RestaurantList from './components/restaurant-list/restaurant-list.component';
import MenuCategoriesList from './components/menu-categories-list/menu-categories-list';
import React from 'react';

class App extends React.Component {

  constructor(){
    super();

    this.state={
      restaurants:[], 
      menuCategories:[],
      mealsByRestaurant:[]
    }
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

  loadMealsByRestaurant = (restName) => {
    console.log(restName)
    homeRepository.fetchMealsByRestaurant(restName)
    .then(data => {
        this.setState({mealsByRestaurant:data.data})
    })
  }

  componentDidMount(){
      this.loadMenuEntries();
      this.loadRestaurants();
  }

  render(){
    return (
        <div className="App">
          <div className='nav-menu-left'>
            <NavMenu/>
          </div>
          <div className='right-wrapper'>
            <div className='search-menu-top'>
              <SearchMenu/>
            </div>
            <div className='menu-category-listing'>
              <MenuCategories data={this.state.menuCategories}/>
            </div>
            <div className='restaurant-listing'>
              <Routes>
                <Route path='/' element={<RestaurantList data={this.state.restaurants}/>}/>
                <Route path='/menucategories/:id' element={<MenuCategoriesList data={this.state.menuCategories}/>}/>
                <Route path='/restaurant/:id' element={<MenuCategoriesList data={this.state.mealsByRestaurant} onMount={this.loadMealsByRestaurant} />} />
              </Routes>
            </div>
          </div>
        </div>
    );
  }
}

export default App;