import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class Hello extends Component {
    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
const ele = (
    <h1>
        hello, {formatName(user)}
    </h1>
);

ReactDOM.render(ele, document.getElementById('root'));