import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fav: []
}

const favSlice = createSlice({
    initialState,
    name: 'favslice',
    reducers: {
        addTofav: (state, action) => {
            state.fav = [...state.fav, action.payload]
            // const itemIndex = state.fav.findIndex((item) => item.id === action.payload.id)
            // if (itemIndex >= 0) {
            //     state.fav[itemIndex].qnty += 1
            // } else {
            //     const temp = { ...action.payload, qnty: 1 }
            //     state.fav = [...state.fav, temp]
            // }
        },
        removefav: (state, action) => {
            const data = state.fav.filter((item) => item.id !== action.payload)
            state.fav = data
        },
        clearfav: (state, action) => {
            state.fav = []
        }


    }
})
export const { addTofav, clearfav } = favSlice.actions
export default favSlice.reducer