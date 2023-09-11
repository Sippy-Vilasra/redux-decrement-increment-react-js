import { createStore } from "redux";
import rootReducer from "./rootReducer";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";



const persistConfig = {
    key: 'persist-store',
    storage
}
const persistReducered = persistReducer(persistConfig, rootReducer)

const store = createStore(persistReducered);
export const persistor = persistStore(store)
export default store;