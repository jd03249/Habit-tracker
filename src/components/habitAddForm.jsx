import React, { Component } from "react";

class HabitAddForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault(); //브라우저의 기본기능(submit시 리프레쉬) 막기
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.current.value = "";
        this.formRef.current.reset();
    };

    render() {
        return (
            <form
                ref={this.formRef}
                className="add-form"
                onSubmit={this.onSubmit}
            >
                <input
                    ref={this.inputRef}
                    type="text"
                    className="add-input"
                    placeholder="Habit"
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
