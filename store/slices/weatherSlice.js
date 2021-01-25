import { createSlice } from '@reduxjs/toolkit'

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: {
            name: null,
            current: null,
            min: null,
            max: null,
        }
    },
    reducers: {
        update: (state, action) => {
            state.city = action.payload
        },
        reset: (state) => {
            state.city = {
                name: null,
                current: null,
                min: null,
                max: null
            }
        }
    }
})

export const currentCity = (state) => state.weather
export const { update, reset } = weatherSlice.actions

export default weatherSlice.reducer