import { createSlice } from '@reduxjs/toolkit'

// define initial state
const initialState = {
    value: 5,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        // first increment function
        increment: (state) => {
            state.value += 1
        },
        // first decrement function
        decrement: (state) => {
            state.value -= 1
        },
        // third incrementByAmount function
        // action used when we will pass a vlaue when this function call in a component
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer