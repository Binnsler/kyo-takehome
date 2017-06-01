import { ADD_TODO, DELETE_TODO } from "../actions";

const todos = ( state = [], action ) => {
    switch( action.type ){
        case ADD_TODO:
            return [
                ...state,
                {
                    "id": action.id,
                    "text": action.text
                }
            ];

        case DELETE_TODO:
            return state.filter( t =>
                t.id !== action.id
            );

        default:
            return state;
    }
}

export default todos;
