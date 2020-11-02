import React from 'react';
import './content-wrapper.css';
import AppHeader from "../Header/app-header";
import SearchPanel from "../Search-Panel/search-panel";
import TodoList from "../List/todo-list";
import AddItem from '../AddItemPanel/add-item-panel';

export default class App extends React.Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem("Drink Cofee"),
            this.createTodoItem("Make Awesome App"),
            this.createTodoItem("Make Homework")
        ],
        term: '',
        filter: '',
    };

    createTodoItem(text) {
        return {
            text,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    search(items, term) {
        if (term === 0) {
            return items;
        }
        return items.filter((elem) => {
            return elem.text.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })

    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const i = todoData.findIndex((el) => el.id === id);
            const before = todoData.slice(0, i);
            const after = todoData.slice(i + 1);
            const newArr = [...before, ...after];
            return {
                todoData: newArr
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArr
            }
        });
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            const i = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[i];
            const newItem = { ...oldItem, important: !oldItem.important };
            const newArray = [
                ...todoData.slice(0, i),
                newItem,
                ...todoData.slice(i + 1)
            ]
            return {
                todoData: newArray
            };
        })
    }

    onDone = (id) =>{
        this.setState(({todoData}) => {
            const i = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[i];
            const newItem = {...oldItem, done: !oldItem.done};
            const newArr = [
                ...todoData.slice(0, i),
                newItem,
                ...todoData.slice(i+1)
            ]
            return {
                todoData: newArr
            };
        })
    }

    onSearchChange = (term) => {
        this.setState({ term });
    }

    onFilterChange = (filter) => {
        this.setState({ filter });
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const i = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[i];
            const newItem = { ...oldItem, done: !oldItem.done };
            const newArray = [
                ...todoData.slice(0, i),
                newItem,
                ...todoData.slice(i + 1)
            ]
            return {
                todoData: newArray
            };
        });
    }

    render() {

        const { todoData, term, filter } = this.state;

        const visibleItems = this.filter(
            this.search(todoData, term), filter);

        const doneCount = todoData.filter((el) => el.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className='content-wrapper'>
                <AppHeader doneCount={doneCount} todoCount={todoCount} />
                <SearchPanel
                    onSearchChange={this.onSearchChange}
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                />
                <TodoList
                    onDeleted={this.deleteItem}
                    todos={visibleItems}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                    onDone={this.onDone}
                />
                <AddItem addItem={this.addItem} />
            </div>
        );
    }
};

