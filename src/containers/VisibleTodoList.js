import { connect } from "react-redux";
import { deleteTodo } from "../actions";
import TodoList from "../components/TodoList";

const mapStateToProps = ( state ) => {
    return {
        "todos": state.todos
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        "onTodoClick": ( id ) => {
            dispatch( deleteTodo( id ) );
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)( TodoList );

export default VisibleTodoList;
