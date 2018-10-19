import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
    constructor (props) {
        super(props);


this.state = {
    items: []
};

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

addItem(e) {
    if (this._imputElement.value !== "") {
        var newItem = {
            text: this._imputElement.value,
            key: Date.now()
        };

        this.setState((prevState) => {
            return {
                items:prevState.items.concat(newItem)
            }; 
        });
    }

    this._imputElement.value="";

    e.preventDefault();
}

deleteItem(key) {
    var filteredItems= this.state.items.filter (function (item){
    return (item.key !== key)
});





    this.setState({
        items:filteredItems
    });
}

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._imputElement = a} 
                               placeholder ="Enter Item">
                        </input>
                        <button type="submit"> 
                           Add Item 
                        </button>
                    </form>
                </div>
                <TodoItems entries = {this.state.items}
                           delete={this.deleteItem}/>
            </div>
        );
    }
}

export default TodoList;