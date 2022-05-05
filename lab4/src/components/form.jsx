import React from 'react';
import '../index.css';
class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getData}>
                <button>Вивести дані з API в консоль</button>
            </form>
        );
    }
}

export default Form;