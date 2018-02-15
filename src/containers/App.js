import React from 'react';
import uuid from 'uuid';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import style from '../css/App.css';

//const Title = (props) => <h1>{props.title}</h1>;

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'clean room'
                },
                {
                    id: 2,
                    text: 'wash the dishes'
                },
                {
                    id: 3,
                    text: 'feed my cat'
                }
            ]
        };
        this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    
    displayAlert() {
        alert('clicked')
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="To do app" counter={this.state.data.length} />
                <TodoList items={this.state.data} handlerDelete={this.removeTodo} />
            </div>
        );
    }


}

export default App;