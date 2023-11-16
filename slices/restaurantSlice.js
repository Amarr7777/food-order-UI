import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurant: null,
}

export const restaurantSlice = createSlice({
    name: 'restaurent',
    initialState,
    reducers: {
        setRestaurent: (state, action) => {
            state.restaurant = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setRestaurent } = restaurantSlice.actions;

export const selectRestaurant = state => state.restaurant.restaurant;

export default restaurantSlice.reducer