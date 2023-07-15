import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    url: {},
    genres: {}
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        getApiConfig: (state, action) => {
            state.url = action.payload
        },
        getApiGenres: (state, action) => {
            state.genres = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { getApiConfig, getApiGenres } = homeSlice.actions

export default homeSlice.reducer