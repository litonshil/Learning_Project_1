import React, { Component } from "react";

let Person = (props) => {
    return (
        <div>
            <h1>{`name= ${props.name} and age = ${props.age}`}</h1>
            <h3>{props.children}</h3>
        </div>
    );
};

// class Person extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>{`name= ${this.props.name} and age = ${this.props.age}`}</h1>
//                 <h3>{this.props.children}</h3>
//             </div>
//         );
//     }
// }

export default Person;
