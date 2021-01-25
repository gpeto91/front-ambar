import { configureStore } from '@reduxjs/toolkit'

import weatherSlice from "./slices/weatherSlice"
import minmaxSlice from "./slices/minmaxSlice"

export default configureStore({
    reducer: {
        weather: weatherSlice,
        minmax: minmaxSlice
    },
    devTools: true
})