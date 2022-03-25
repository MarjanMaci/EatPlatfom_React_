import './App.css';
import NavMenu from './components/nav-menu/nav-menu.component';
import SearchMenu from './components/search-menu/search-menu.component';
import MenuCategories from './components/menu-categories/menu-categories.component';
import RestaurantList from './components/restaurant-list/restaurant-list.component';

function App() {
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
          <MenuCategories/>
        </div>
        <div className='restaurant-listing'>
          <RestaurantList/>
        </div>
      </div>
    </div>
  );
}

export default App;
