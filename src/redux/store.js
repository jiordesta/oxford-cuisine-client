import { configureStore } from "@reduxjs/toolkit";
import auth_slice from "./reducers/auth_slice";
import orders_slice from "./reducers/orders_slice";
import menu_slice from "./reducers/menu_slice";
import notif_slice from "./reducers/notif_slice";

export const store = configureStore({
    reducer: {
        auth: auth_slice,
        order: orders_slice,
        menu: menu_slice,
        notif: notif_slice
    }
})