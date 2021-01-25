import { createSlice } from '@reduxjs/toolkit'

const minmaxSlice = createSlice({
    name: 'minmax',
    initialState: {
        min: {
            name: null,
            temp: null
        },
        max: {
            name: null,
            temp: null
        }
    },
    reducers: {
        updateMin: (state, action) => {
            state.min = action.payload
        },
        updateMax: (state, action) => {
            state.max = action.payload
        }
    }
})

export const minmax  = state => state.minmax
export const { updateMin, updateMax } = minmaxSlice.actions

export default minmaxSlice.reducer
