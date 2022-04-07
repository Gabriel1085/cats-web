import { configureStore } from "@reduxjs/toolkit";
import { BreedsSlice } from "./states/breed";

export default configureStore({
    reducer:{
        breeds: BreedsSlice.reducer
    }
})