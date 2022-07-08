import { createSlice, current } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState:{cards:{}},
    reducers: {
        addCard: (state, action) => {
            // console.log('addCard called')
            state.cards[action.payload.id] = action.payload
            // console.log(current(state).cards)
        }
    }
})

export default cardsSlice.reducer
export const {addCard} = cardsSlice.actions
export const selectCards = (state) => state.cards.cards