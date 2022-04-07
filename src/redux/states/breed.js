import { createSlice } from "@reduxjs/toolkit"

export const BreedsEmptyState = []

export const BreedsSlice = createSlice({
    name: 'breeds',
    initialState: BreedsEmptyState,
    reducers: {
        createListBreeds: (state, action) => action.payload,
        modifyListBreeds: (state, action) => ({...state , ...action.payload}),
        resetListBreeds: BreedsEmptyState
    }   
})

export const { createListBreeds, modifyListBreeds, resetListBreeds } = BreedsSlice.actions

export default createSlice.reducer