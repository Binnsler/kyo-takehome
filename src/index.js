// TODO: Put SCSS in a better place
require('./index.scss');

import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
import App from "./components/App";
import { loadState, saveState } from "./helpers/localStorage";

// On load, get state from storage and hydrate store
const hydratedState = loadState();
const store = createStore( todoApp, hydratedState );

// When state is updated, store it in localStorage
store.subscribe( () => {
    saveState( { "todos": store.getState().todos } );
} );

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById( "container" )
);
