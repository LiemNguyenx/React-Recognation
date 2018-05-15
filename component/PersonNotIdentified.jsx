import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

class PersonNotIdentified extends React.Component {
    constructor() {
        super()
        var style = {
            border: '1px black solid',
            borderRadius: '4px',
            height: '1000px',
            backgroundColor: 'yellow !important'
        }
    }
    render() {
        return (
            <div style={this.style}>
                PersonNotIdentified
            </div>
        )
    }
}

export default PersonNotIdentified;