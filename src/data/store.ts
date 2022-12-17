import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import flightSlice from "./reducers/flightSlice"

const store = configureStore({
    reducer: {
        flight: flightSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store