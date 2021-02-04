import cuid from 'cuid';

export default function manageRestaurants(state = {restaurants: []}, action) {
  switch(action.type) {

    case 'ADD_RESTAURANT':
      const newRestaurant = {
        id: cuid(),
        text: action.name
      }
      return { ...state, restaurants: [...state.restaurants, newRestaurant]}

    case 'DELETE_RESTAURANT':
      return { ...state, restaurants: [...state.restaurants.filter(
        restaurant => restaurant.id !== action.id)] }

    default: return state
  }
}
