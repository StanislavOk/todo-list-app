import React from "react";
import './add-item.css';


export default class AddItem extends React.Component {

    state = {
        text: ''
    };

    onTextChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.text);
        this.setState({
            text: ''
        })
    }

    onErase = () => {
        this.setState({
            text: ''
        });
    };

    render() {
        return (
            <div className='inputPanel'>
                <h3>Add New Task</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <textarea
                            onChange={this.onTextChange}
                            className="form-control"
                            id='inputTask'
                            rows="3"
                            value={this.state.text}
                        />
                    </div>
                    <button type="submit" disabled={!this.state.text} className="btn btn-success">Add</button>
                </form>
                <button onClick={this.onErase} className="btn btn-warning">Erase</button>
               
            </div>
        )
    }
}

