import { configureStore } from "@reduxjs/toolkit";
import messages from "./reducers/messagesReducer";
import auth from "./reducers/authReducer";
import assets from "./reducers/assetsReducer";
import users from "./reducers/usersReducer";
import app from "./reducers/appReducer";

const store = configureStore({
    reducer: {
        users,
        messages,
        auth,
        assets,
        app
    }
})

export default store;