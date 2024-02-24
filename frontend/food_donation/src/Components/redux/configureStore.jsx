import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/UserSlice"
export default configureStore({
    reducer :{
        user:userSlice,
    }
})