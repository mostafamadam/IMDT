import { createStore } from "redux";

let initState = {
    LoggedIn: "",
    index: "",
    ItemType: ""
}

function reducer(prevState = initState, action) {
    if (action.type === "MovieDetails") {
        prevState.index = action.index;
        prevState.ItemType = action.itemType;
    } else if (action.type === "Login") {
        prevState.LoggedIn = action.LoggedIn;
    }
    return prevState
}

let store = createStore(reducer);

export default store